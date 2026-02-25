import type {PluginOption} from 'vite'
import {copy, mkdirp, remove} from 'fs-extra'
import {rename} from 'node:fs/promises'
import {makeWebDir, type WebProjectConfig} from "../common/common";
import {exec} from "node:child_process";
import {join, resolve} from "node:path";
import {error, info, success} from "../common/console";

export type VitePluginSmartbiOptions = {
    /**
     * 输出目录
     */
    output?: string
    /**
     * html重命名
     */
    indexRename?: string
    /**
     * vision到html中间的路径
     */
    appendPath?: string,
} & WebProjectConfig


export const VitePluginSmartbi = (config: VitePluginSmartbiOptions): PluginOption => {
    const {output = 'web', appendPath, indexRename} = config;
    console.log(appendPath)
    return {
        name: "vite-plugin-smartbi",
        apply: "build",
        enforce: "post",
        writeBundle(options, _bundle) {
            success('开始打包')
            console.log(_bundle)
            const cwd = process.cwd();
            // const {writeFile} = this.fs
            // 创建ext目录
            const outputPath = join(cwd, output)
            const visionDir = resolve(outputPath, 'vision' + (appendPath ? ('/' + appendPath) : ''))
            const outputDir = options.dir as string
            info('ext输出路径：' + outputPath)
            remove(outputPath)
                .then(() => {
                    info('清除：ext目录')
                    return makeWebDir(outputPath, config)
                })
                .then(() => {
                    info('创建：ext目录')
                    return mkdirp(visionDir)
                })
                .then(() => {
                    info("创建：vision目录")
                    return copy(outputDir, visionDir)
                })
                .then(() => {
                    info("复制：vision目录文件")
                    info(visionDir)
                    if (indexRename) {
                        return rename(visionDir + '/index.html', visionDir + '/' + indexRename)
                    } else {
                        return Promise.resolve()
                    }
                }).then(() => {
                exec('ant', {cwd: cwd}, (err: any, stdout: any, stderr: any) => {
                    if (err) {

                        error(stderr)
                        error("构建失败：请检查是否有java和ant环境，搜索Apache Ant部署环境")
                        this.error(stderr)
                    } else {
                        success(stdout)
                        success("ext构建完成")
                    }
                })
            })
        },
    }
}

import type {PluginOption} from 'vite'
const {resolve} = require('path')
import chalk from 'chalk';
// import {resolve,} from "node:path";
import {remove, copy, mkdirp,} from 'fs-extra'
const {exec} =  require("node:child_process")
import {buildWebProject, type WebProjectConfig} from "../common/common";

const info = chalk.hex('#00dd66'); // Orange color
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
    /**
     * 插件版本
     */
    version?: string
}&WebProjectConfig


export default function VitePluginSmartbi(config: VitePluginSmartbiOptions): PluginOption {
    const {output = 'smartbi-ext', appendPath} = config;

    return {
        name: "vite-plugin-smartbi",
        apply: "build",
        enforce: "post",
        writeBundle(options, _bundle) {
            this.info("开始打包")
            console.log(info("开始打包"))
            const {writeFile} = this.fs
            const outputDir = options.dir as string
            const extDir = resolve(resolve(outputDir, '..'), output)
            const sourceDir = resolve(extDir, 'source')
            const metaInfDir = resolve(sourceDir, 'META-INF')
            const webInfDir = resolve(sourceDir, 'WEB-INF')
            let visionDir = resolve(sourceDir, 'vision')
            if (appendPath) {
                visionDir = resolve(visionDir, appendPath)
            }

            const {applicationContext, extension, portlet, web, build} = buildWebProject(config)
            console.log(build)
            remove(extDir)
                .then(() => mkdirp(sourceDir))
                .then(() => mkdirp(metaInfDir))
                .then(() => mkdirp(webInfDir))
                .then(() => mkdirp(visionDir))
                .then(() => writeFile(webInfDir + "/web.xml", web))
                .then(() => writeFile(metaInfDir + "/applicationContext.xml", applicationContext))
                .then(() => writeFile(metaInfDir + "/extension.xml", extension))
                .then(() => writeFile(metaInfDir + "/portlet.xml", portlet))
                .then(() => writeFile(extDir + "/build.xml", build))
                .then(() => {
                    console.log(info("ext基础文件复制成功"))
                    copy(outputDir, visionDir).then(() => {
                        console.log(info("ext资源文件复制成功"))
                        exec('ant', {cwd: extDir}, (err:any, stdout:any, stderr:any) => {
                            remove(extDir + "/build.xml").then(() => {
                                if (err) {
                                    console.log(info(err))
                                    console.log(info("打包失败"))
                                    console.log(info("请检查是否有ant环境，搜索Apache Ant部署环境"))
                                    this.error(stderr)
                                } else {
                                    console.log(info(stdout))
                                    console.log(info("ext构建完成"))
                                }
                            })
                        })

                    })
                })

        },
    }
}

import type {HmrContext, PluginOption} from 'vite'

import nodePath, {join} from 'node:path';
import {makeWebDir, type WebProjectConfig} from "../common/common";
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import vue from 'rollup-plugin-vue'
import commonjs from '@rollup/plugin-commonjs'
import {pathExists} from 'fs-extra';
import {readdirSync} from "node:fs"
import {rollup} from "rollup";
import {error, info, success} from "../common/console";
import {exec} from "node:child_process";

export type VitePluginSmartbiXOptions = {
    /**
     * 扩展根目录
     */
    libRoot?: string
    /**
     * 输出路径
     */
    output?: string,
} & WebProjectConfig

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []) {
    let files = readdirSync(dirPath, {withFileTypes: true});

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(file => {
        if (file.isDirectory()) {
            arrayOfFiles = getAllFiles(join(dirPath, file.name), arrayOfFiles);
        } else {
            arrayOfFiles.push(join(dirPath, file.name));
        }
    });

    return arrayOfFiles;
}

export const vitePluginSmartbiX = (config: VitePluginSmartbiXOptions): PluginOption => {
    info("vitePluginSmartbiX")
    console.log('vitePluginSmartbiX')
    const {
        libRoot = 'src/addExtenders',
        output = 'web'
    } = config
    const libRootPath = nodePath.join(process.cwd(), libRoot);
    const outputPath = nodePath.join(process.cwd(), output);

    const run = (ids?: string[]) => {
        makeWebDir(outputPath, config).then(() => {
            console.log('创建完成')
            return pathExists(libRootPath)
        }).then(value => {
            if (value) {
                const list = getAllFiles(libRootPath)
                const jsFile = list.filter(file => file.endsWith('.js'))
                jsFile.forEach(id => {
                    const fname = id.replace(libRootPath + '/', '')
                    const tname = fname.replace('.js', '')
                    const arr = tname.split('/')
                    const last = arr[arr.length - 1] === 'index' ? arr[arr.length - 2] : arr[arr.length - 1]
                    const name = `addExtenders/${last}`

                    rollup({
                        input: id,
                        external: ['vue'],  // 将vue设为外部依赖，防止打包进来
                        plugins: [
                            resolve({
                                browser: true,
                                extensions: ['.vue', '.js']
                            }),
                            commonjs(),
                            vue({
                                isProduction: true
                            } as any),
                            terser()
                        ]
                    }).then(bundle => {
                        bundle.write({
                            dir: nodePath.join(output, 'vision/dist'),
                            format: 'system',
                            name: name,  // 在write时明确指定name
                            sourcemap: true,
                            globals: {
                                'vue': 'Vue',
                                'axios': 'axios'
                            },
                            entryFileNames: name + '.js'  // 确保输出到正确的路径和文件名
                        }).finally(() => {
                            bundle.close()
                        })

                    })

                    return null; // 返回null表示不对原始代码做转换
                })
            } else {
                error("请检查libRoot目录是否存在：" + libRoot)
            }
            success("编译完成")
        })
    }
    return {
        name: 'vite-plugin-smartbi-x',
        enforce: "post",
        buildStart(options) {
            info('buildStart')
            run()
        },
        writeBundle(options, _bundle) {
            success('开始打包')
            const cwd = process.cwd();
            info('ext输出路径：' + outputPath)
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
        },
        handleHotUpdate(ctx: HmrContext) {
            if (ctx.file.startsWith(libRootPath)) {
                info('handleHotUpdate')
                run()
            }
        },

    }
}

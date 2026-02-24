import type {PluginOption} from 'vite'

import nodePath, {join} from 'node:path';
import {makeWebDir, type WebProjectConfig} from "../common/common";
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import vue from 'rollup-plugin-vue'
import commonjs from '@rollup/plugin-commonjs'
import {pathExists} from 'fs-extra';
import {readdirSync} from "node:fs"
import {rollup} from "rollup";
import chalk from "chalk";
// import {readdirSync} from "node:fs";

// const info = chalk.hex('#00dd66'); // Orange color
const info = (text: string) => {
    console.log(text)
}
// const warning = (text: string) => {
//     console.log(text)
// }
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

    const run = (ids?: string[]) => {
        const {
            libRoot = 'src/addExtenders',
            output = 'web'
        } = config
        const libRootPath = nodePath.join(process.cwd(), libRoot);
        const outputPath = nodePath.join(process.cwd(), output);
        makeWebDir(outputPath, config).then(() => {
            console.log('创建完成')
            pathExists(libRootPath).then(value => {
                console.log(value)
                console.log(chalk)
                console.log(chalk.green('ssss'))
                if (value) {

                    const list = getAllFiles(libRootPath)
                    const jsFile = list.filter(file => file.endsWith('.js'))
                    console.log(chalk.green(jsFile))

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
                                dir: output,
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
                }
            })
        })
    }
// console.log(libRootExists)
// pathExists(cwd).then(value => {
//     console.log(value)
//     warning(value.toString())
//     const list = getAllFiles(cwd)
//     const jsFile = list.filter(file => file.endsWith('.js'))
//     jsFile.forEach(id => {
//         const fname = id.replace(cwd + '/', '')
//         const tname = fname.replace('.js', '')
//         const arr = tname.split('/')
//         const last = arr[arr.length - 1] === 'index' ? arr[arr.length - 2] : arr[arr.length - 1]
//         const name = `addExtenders/${last}`
//
//         rollup({
//             input: id,
//             external: ['vue'],  // 将vue设为外部依赖，防止打包进来
//             plugins: [
//                 resolve({
//                     browser: true,
//                     extensions: ['.vue', '.js']
//                 }),
//                 commonjs(),
//                 vue({
//                     isProduction: true
//                 } as any),
//                 terser()
//             ]
//         }).then(bundle => {
//             bundle.write({
//                 dir: output,
//                 format: 'system',
//                 name: name,  // 在write时明确指定name
//                 sourcemap: true,
//                 globals: {
//                     'vue': 'Vue',
//                     'axios': 'axios'
//                 },
//                 entryFileNames: name + '.js'  // 确保输出到正确的路径和文件名
//             }).finally(() => {
//                 bundle.close()
//             })
//
//         })
//
//         return null; // 返回null表示不对原始代码做转换
//     })
// })

    return {
        name: 'vite-plugin-smartbi-x',
        buildStart() {
            console.log('buildStart')
            // this.addWatchFile('src/lib')
            run()
        },
        handleHotUpdate() {
            console.log('handleHotUpdate')
            // todo 暂时移除，后续考虑排除 源文件和构建文件
            // run()
        },
        // transform(_code, id) {
        //     if (id.endsWith('index.js')) {
        //         console.log('transform', id)
        //
        //         // 使用一个更精确的配置，确保name属性被正确传递给SystemJS格式
        //         rollup({
        //             input: id,
        //             external: ['vue'],  // 将vue设为外部依赖，防止打包进来
        //             plugins: [
        //                 resolve({
        //                     browser: true,
        //                     extensions: ['.vue', '.js']
        //                 }),
        //                 commonjs(),
        //                 vue({
        //                     isProduction: true
        //                 } as any),
        //                 terser()
        //             ]
        //         }).then(bundle => {
        //             bundle.write({
        //                 dir: 'smartbixxxx',
        //                 format: 'system',
        //                 name: 'addExtenders/HelloView',  // 在write时明确指定name
        //                 sourcemap: true,
        //                 globals: {
        //                     'vue': 'Vue',
        //                     'axios': 'axios'
        //                 },
        //                 entryFileNames: 'addExtenders/HelloView.js'  // 确保输出到正确的路径和文件名
        //             });
        //             bundle.close();
        //         })
        //
        //         return null; // 返回null表示不对原始代码做转换
        //     }
        // }
    }
}

// import type {Plugin} from 'vite'
import type {PluginOption} from 'vite'
// import { dirname ,resolve} from 'node:path'
// import { mkdir} from 'node:fs'
// import {fileURLToPath} from 'node:url'
// import {resolve,} from "path";
import {resolve,} from "node:path";
// import {mkdir} from "node:fs";
// import {dirname,resolve} from "node:path";
// import {mkdir, rmdir,} from "fs/promises";
import {mkdir, rmdir, readdir} from "node:fs/promises";

export type VitePluginSmartbiOptions = {
    /**
     * 插件名称
     */
    name: string
    /**
     * 插件名称
     */
    alias?: string
    /**
     * 插件描述
     */
    desc?: string
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
    pathToHtml?: string
};

const configExtension = ({name, alias, desc}: Pick<VitePluginSmartbiOptions, 'name' | 'alias' | 'desc'>) => {
    console.error(name, alias, desc)
}
export default function VitePluginSmartbi(config: VitePluginSmartbiOptions): PluginOption {
    const {name, alias, desc, output = 'smartbi-ext'} = config;
    console.error(name, alias, desc)
    return {
        name: "vite-plugin-smartbi",
        apply: "build",
        enforce: "post",
        writeBundle(options, _bundle) {
            console.error('writeBundle')
            console.log(options)
            // const __dirname = dirname(fileURLToPath(import.meta.url))
            // mkdir(__dirname+'/vs').then(value => {
            //     console.error(value)
            // })
            console.log(resolve())
            const outputDir = options.dir as string
            const extDir = resolve(resolve(outputDir, '..'), output)
            configExtension(config)
            console.log("处理文件")
            readdir(resolve(outputDir)).then(value => {
                console.error("top")
                console.error(value)
            })

            console.log(extDir)
            rmdir(extDir)
                .then(() => mkdir(extDir))
                .then(value => {
                    console.error(value)
                })
            console.log(outputDir)
            console.log(extDir)

            console.log(__dirname)
            console.log(resolve())
            console.log(options.file)
            // console.log(JSON.stringify(options))
            // console.log(bundle)
        },
        // outputOptions(outputOptions) {
        //     console.log("outputOptions")
        //     console.log(outputOptions)
        //     console.log(this)
        // }
    }
}

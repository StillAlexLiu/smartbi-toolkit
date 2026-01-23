// import type {Plugin} from 'vite'
import type {PluginOption} from 'vite'

import chalk from 'chalk';
import {resolve,} from "node:path";
import {remove, copy, mkdirp,} from 'fs-extra'
import {exec} from "node:child_process";

const info = chalk.hex('#00dd66'); // Orange color
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
     * 优先级
     */
    priority?: number
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
};

const configExtension = ({name, alias, desc, priority, version,}: VitePluginSmartbiOptions) => {
    const web = `<web-app/>`
    const portlet = `<?xml version="1.0" encoding="UTF-8"?>
        <portlet-app>
        </portlet-app>
    `
    const extension = `<?xml version="1.0" encoding="UTF-8"?>
        <!DOCTYPE extension SYSTEM "extension.dtd">
        <extension name="${name}" alias="${alias || name}" desc="${desc || name}" :priority="${priority || 100}" version="${version || '1.0'}">
            <enable-jsp-processor />
        </extension>
    `
    const applicationContext = `<?xml version="1.0" encoding="UTF-8"?>
        <!DOCTYPE beans PUBLIC "-//SPRING//DTD BEAN 2.0//EN" "http://www.springframework.org/dtd/spring-beans-2.0.dtd">
        <beans>
            <bean id="framework" class="smartbi.framework.Framework" factory-method="getInstance">
                <property name="modules">
                    <map>
                    </map>
                </property>
            </bean>
            <bean id="rmi" class="smartbi.framework.rmi.RMIModule" factory-method="getInstance">
                <property name="modules">
                    <map>
                    </map>
                </property>
            </bean>
        </beans>
    `
    const build = `<?xml version="1.0" encoding="UTF-8"?>
        <project name="${name}" default="dist">
            <target name="dist" >
                <tstamp>
                    <format property="today" pattern="yyyy-MM-dd HH:mm:ss"/>
                </tstamp>
                <echo file="\${basedir}/source/META-INF/version.txt" message="\${today}"/>
        
                <jar destfile="\${basedir}/${name}.ext" duplicate="preserve">
                    <fileset dir="\${basedir}/source"/>
                </jar>
            </target>
        </project>
`
    return {
        web, applicationContext, extension, portlet,
        build
    }
}
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

            const {applicationContext, extension, portlet, web, build} = configExtension(config)
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
                        exec('ant', {cwd: extDir}, (err, stdout, stderr) => {
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

// import {ensureFile} from 'fs-extra'
// import {writeFile} from 'fs'
// import nodePath from 'path'
const {ensureFile} = require("fs-extra");
const {writeFile} = require("fs");
const nodePath = require("path");

export type WebProjectConfig = {
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
     * 插件版本
     */
    version?: string
};

export const buildWebProject = ({name, alias, desc, priority, version,}: WebProjectConfig) => {
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


export const makeWebDir = (rootPath: string, config: WebProjectConfig) => {
    return new Promise(resolve => {
        const {
            web, applicationContext, extension, portlet,
        } = buildWebProject(config)
        const paths: Record<string, string> = {
            "WEB-INF/web.xml": web,
            "META-INF/applicationContext.xml": applicationContext,
            "META-INF/extension.xml": extension,
            "META-INF/portlet.xml": portlet
        }
        Promise.all(Object.keys(paths).map((_path: string) => {
            const filePath = nodePath.resolve(rootPath, _path);
            return ensureFile(filePath).then(() => {
                return writeFile(filePath, paths[_path], () => {

                });
            })
        })).then((r) => {
            console.log(r)
            resolve(r)
        })
    })

}

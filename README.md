# 非官方smartbi开发工具包

* 可用于第三方系统上使用smartbi接口服务，封装了常用接口
* 扩展包构建工具封装 （todo）

### 在smartbi-toolkit中封装了通用的请求方法

* smartbi方法,RMI方法调用封装
```javascript
smartbi('服务名', '方法名', ['参数1', '参数2', '...']).then(res => {
})
```
* 登录方法
```javascript
login('用户名', '密码').then(res => {})
```

* setSmartbiEnv 为开发环境设置smartbi变量，注意账号密码安全问题，不要直接把账号密码写入,在开发环境设置后可实现自动登录，生产环境需要自行实现登录，或者运行在smartbi下，无需登录

```javascript
setSmartbiEnv({
    dev: {
        username: 'admin',
        password: 'manager',
    }, // smartbi开发环境下的账号密码，注意打包时不要填写，避免信息暴露
    mode:'dev', // dev/ prod 开发和生产模式 。默认dev模式，该参数可忽略，只影响到smartbi的判断
    path:'/smartbi',// smartbi服务路径，默认为/smartbi，如果部署在tomcat的ROOT目录下，该参数改为 "/"
    noop:30000 //心跳循环时间，默认30秒
})
```
* 开始心跳
```javascript
startHeartbeat()
```
* 停止心跳
```javascript
stopHeartbeat()
```

* 心跳方法，不使用startHeartbeat()和stopHeartbeat()方法，手动实现心跳
```javascript
noop()
```

### ext扩展包构建工具，通过vite实现
该工具为vite插件，可以一键生成ext扩展包，但需要有java和Apache Ant环境

```javascript
import vitePluginSmartbi from 'smartbi-toolkit/VitePluginSmartbi'

export default defineConfig({
    plugins: [
        vitePluginSmartbi({
            name:'ext-test',
        })
    ],
})
```
#### 参数说明
```typescript
export type VitePluginSmartbiOptions = {
    /**
     * 插件名称
     */
    name: string
    /**
     * 插件别名
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
```


### 在smartbi-toolkit/xxxxService中，实现你官方文档定义的接口

* 代码大部分由AI通过官方文档生成，基本和官方保持一致，部分ts类型等可能存在错误
* 如遇到接口不可用，可以尝试使用smartbi()方法调用，如果依旧不可以，请查看官方文档，官方文档内也有相当大的一部分方法不可以
* 大部分接口均由AI通过官方文档生成JsDoc
* 官方文档https://wiki.smartbi.com.cn/api/javaapi/index.html




### todo 开发中功能，后续实现
1. 其他服务接口
   * Smartbi-SDK.jar中包含的，但官方文档没有的接口
   * 其他可通过rmi调用的接口
2. TS类型优化
   * TS类型没有完善，部分通过AI生成，后续需要从SDK中提取完整的类型信息
3. 封装参数
   * 目前参数封装为数组，后续需要封装为对象

   

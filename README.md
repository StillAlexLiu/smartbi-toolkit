# 非官方smartbi开发工具包

* 可用于第三方系统上使用smartbi接口服务，封装了常用接口
* 扩展包构建工具封装 （todo）

### 在smartbi-toolkit中封装了通用的请求方法

* smartbi方法,具体可以

```javascript
smartbi('服务名', '方法名', ['参数1', '参数2', '...']).then(res => {
})
```

* setSmartbiEnv 为开发环境设置smartbi变量，注意账号密码安全问题，不要直接把账号密码写入,在开发环境设置后可实现自动登录，生产环境需要自行实现登录，或者运行在smartbi下，无需登录

```javascript
setSmartbiEnv({
    dev: {
        username: 'admin',
        password: 'manager',
    }
})
```

### 在smartbi-toolkit/xxxxService中，实现你官方文档定义的接口

* 该部分文档代码由AI生成，不保证正确性，如果遇到错误或者不可用，
* 具体方法参考文档https://wiki.smartbi.com.cn/api/javaapi/index.html或者jsdoc

### 在smartbi-toolkit/CatalogService内，通过官方文档实现了“资源目录服务”接口
* 参考文档https://wiki.smartbi.com.cn/api/javaapi/index.html?smartbi/sdk/service/catalog/CatalogService.html


### todo 开发中功能，后续实现
1. 其他服务接口
   * 未实现的接口，大部分来自官方api稳定，由于smartbi版本或者文档版本造成的使用过程中的偏差，部分接口来自Smartbi-SDK.jar提取
2. 扩展包构建工具
   * 提供基于vite插件的扩展包构建工具，可将前端单页面应用直接打包成ext扩展包功能

   

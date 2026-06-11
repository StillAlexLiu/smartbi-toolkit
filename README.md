# smartbi-toolkit

> 非官方 Smartbi 开发工具包，封装了 RMI 调用、通用 HTTP 请求、ext 扩展包一键打包等功能

## 安装

```bash
npm i smartbi-toolkit
```

## 核心 API

### smartbi() - RMI 方法调用

封装了 Smartbi RMI 接口调用，自动处理登录态和序列化。

```typescript
import { smartbi } from 'smartbi-toolkit'

smartbi<T>('服务名', '方法名', ['参数1', '参数2']).then(res => {
    // res 类型为 T
})
```

**参数说明**

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| className | `string` | - | Smartbi 服务类名 |
| methodName | `string` | - | 方法名 |
| params | `Array<string \| number \| boolean \| null \| undefined>` | - | 参数数组 |
| requireLogin | `boolean` | `mode === 'dev'` | 是否需要登录，开发环境默认需要 |

### smartbiGet() / smartbiPost() - 通用 HTTP 请求

基于 axios 封装的 GET/POST 请求方法，自动处理登录态，请求地址自动拼接 `${smartbiPath}/vision/` 前缀，响应直接透传 axios 原始结果。

```typescript
import { smartbiGet, smartbiPost } from 'smartbi-toolkit'

// GET 请求 → 实际请求: ${smartbiPath}/vision/getCustomData
smartbiGet<T>('getCustomData', config?, requireLogin?).then(res => {})

// POST 请求 → 实际请求: ${smartbiPath}/vision/saveConfig
smartbiPost<T>('saveConfig', data?, config?, requireLogin?).then(res => {})
```

参数格式与 axios 的 `get` / `post` 一致。

### login() - 登录

```typescript
import { login } from 'smartbi-toolkit'

// 使用 setSmartbiEnv 中配置的账号
login().then(res => {})

// 或传入账号密码
login({ username: 'admin', password: 'manager' }).then(res => {})
```

## 环境配置

### setSmartbiEnv()

开发环境下设置 Smartbi 服务参数，设置后可实现自动登录。

> **注意：** 请勿将账号密码直接硬编码，建议从环境变量或 `.env` 文件中获取。

```typescript
import { setSmartbiEnv } from 'smartbi-toolkit'

setSmartbiEnv({
    dev: {
        username: process.env.SMARTBI_USER || '',
        password: process.env.SMARTBI_PASS || '',
    },
    mode: 'dev',       // 'dev' | 'prod'，默认 'prod'
    path: '/smartbi',  // Smartbi 服务路径，部署在 ROOT 下改为 ''
    noop: 30000,       // 心跳间隔（ms），默认 30 秒
})
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| dev | `{ username, password }` | - | Smartbi 账号信息 |
| mode | `'dev' \| 'prod'` | `'prod'` | 运行模式，影响 `requireLogin` 默认值 |
| path | `string` | `'/smartbi'` | Smartbi 服务基础路径 |
| noop | `number` | `30000` | 心跳循环间隔（毫秒） |

## 状态管理

| 方法 | 说明 |
|------|------|
| `getStatus()` | 获取当前登录状态：`'pending'`（登录中）/ `'online'`（已登录）/ `'offline'`（未登录） |
| `setStatus(status)` | 手动设置登录状态 |
| `ensureLogin(requireLogin)` | 返回一个 Promise，确保处于已登录状态后才 resolve |
| `on(callback)` | 注册登录完成回调 |
| `emit()` | 触发所有已注册的登录完成回调并清空 |

```typescript
import { getStatus, ensureLogin } from 'smartbi-toolkit'

const status = getStatus() // 'offline' | 'pending' | 'online'

ensureLogin(true).then(() => {
    // 已确保登录完成，可安全调用接口
})
```

## 心跳

| 方法 | 说明 |
|------|------|
| `startHeatBeat()` | 启动心跳循环（登录后自动保持会话） |
| `stopHeatBeat()` | 停止心跳循环 |
| `noop()` | 单次心跳请求，可手动调用 |

```typescript
import { startHeatBeat, stopHeatBeat, noop } from 'smartbi-toolkit'

startHeatBeat()  // 启动，间隔由 setSmartbiEnv 的 noop 参数控制
stopHeatBeat()   // 停止
noop()           // 单次心跳
```

## 预封装 Service 模块

在 `smartbi-toolkit/service/xxxService` 中预封装了官方文档定义的常用接口：

| 模块 | 导入路径 |
|------|--------|
| 分析报表 | `smartbi-toolkit/service/AnalysisReportService` |
| 业务主题 | `smartbi-toolkit/service/BusinessThemeService` |
| 业务视图 | `smartbi-toolkit/service/BusinessViewService` |
| 目录服务 | `smartbi-toolkit/service/CatalogService` |
| 客户端组合报表 | `smartbi-toolkit/service/ClientCombinedReportService` |
| 客户端洞察 | `smartbi-toolkit/service/ClientInsightService` |
| 客户端报表 | `smartbi-toolkit/service/ClientReportService` |
| 组合报表 | `smartbi-toolkit/service/CombinedReportService` |
| 数据源服务 | `smartbi-toolkit/service/DataSourceService` |
| 图形报表 | `smartbi-toolkit/service/GraphicReportService` |
| 洞察报表 | `smartbi-toolkit/service/InsightReport` |
| 元数据服务 | `smartbi-toolkit/service/MetadataService` |
| Office报表 | `smartbi-toolkit/service/OfficeReport` |
| Office报表服务 | `smartbi-toolkit/service/OfficeReportService` |
| OLTP元数据 | `smartbi-toolkit/service/OltpMetadataService` |
| 参数服务 | `smartbi-toolkit/service/ParameterService` |
| 连接池服务 | `smartbi-toolkit/service/PoolService` |
| 门户服务 | `smartbi-toolkit/service/PortalService` |
| 报表 | `smartbi-toolkit/service/Report` |
| 电子表格报表 | `smartbi-toolkit/service/SSReport` |
| 定时任务 | `smartbi-toolkit/service/ScheduleTaskService` |
| 简单报表 | `smartbi-toolkit/service/SimpleReportService` |
| 电子表格 | `smartbi-toolkit/service/SpreadSheetReportService` |
| 系统配置 | `smartbi-toolkit/service/SystemConfigService` |
| 耗时统计 | `smartbi-toolkit/service/TimeConsuming` |
| 耗时服务 | `smartbi-toolkit/service/TimeConsumingService` |
| 用户管理 | `smartbi-toolkit/service/UserManagerService` |

```typescript
import { openReport } from 'smartbi-toolkit/service/ClientReportService'
```

> Service 模块大部分由 AI 根据官方文档生成，接口基本与官方一致。如遇到不可用的接口，可使用 `smartbi()` 方法直接调用，或参考 [官方 API 文档](https://wiki.smartbi.com.cn/api/javaapi/index.html)。

## ext 扩展包构建

通过 Vite 插件实现一键打包 ext 扩展包，**需要 Java JDK 和 Apache Ant 环境**。

### 传统扩展包（vite-plugin-smartbi）

```typescript
import { VitePluginSmartbi } from 'smartbi-toolkit/vite-plugin/vite-plugin-smartbi'

export default defineConfig({
    plugins: [
        VitePluginSmartbi({
            name: 'ext-demo',
            alias: '示例扩展',
            desc: '示例扩展包',
            version: '1.0',
            output: 'web',          // 输出目录
            indexRename: 'main.jsp', // html 重命名
            appendPath: 'demo',      // vision 到 html 中间的路径
        })
    ],
})
```

### 新扩展包（vite-plugin-smartbix）

对应 SmartbiX 体系的扩展包构建：

```typescript
import { vitePluginSmartbiX } from 'smartbi-toolkit/vite-plugin/vite-plugin-smartbix'

export default defineConfig({
    plugins: [
        vitePluginSmartbiX({
            name: 'ext-demo',
            libRoot: 'src/addExtenders', // 扩展根目录
            output: 'web',               // 输出路径
        })
    ],
})
```

### 插件公共参数（WebProjectConfig）

| 参数 | 类型 | 说明 |
|------|------|------|
| name | `string` | **必填**，扩展名称 |
| alias | `string` | 扩展别名 |
| desc | `string` | 扩展描述 |
| priority | `number` | 优先级 |
| version | `string` | 版本号 |

## 相关链接

- [官方 API 文档](https://wiki.smartbi.com.cn/api/javaapi/index.html)
- [GitHub](https://github.com/StillAlexLiu/smartbi-toolkit)

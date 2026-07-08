# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.3] - 2026-07-08

### Changed
- 优化代码结构和性能
- 更新依赖版本

## [1.3.1] - 2026-06-24

### Fixed
- 修复 service 文件中 import 语句位置不规范的问题，统一移至文件顶部
- 修复 vite-plugin 中 console.log 混用问题，统一使用自定义日志函数
- 修复 vite-plugin 中 exec 回调参数类型使用 any 的问题，改为精确类型
- 修复 index.ts 中 timer 变量使用 any 类型的问题，改为 ReturnType<typeof setInterval>
- 优化错误处理，提供更详细的错误信息
- 修复 vite-plugin-smartbix 中 rollup 调用缺少错误处理的问题

### Added
- 添加 ESLint 配置 (.eslintrc.json)
- 添加 Prettier 配置 (.prettierrc)
- 添加 lint、lint:fix、format 脚本
- 添加 CHANGELOG.md 文件
- tsdown 配置中添加 clean 选项

### Changed
- 更新 prepublishOnly 脚本，添加 typecheck 步骤
- 修正依赖版本：typescript 改为 ^5.3.3，@types/node 改为 ^20.0.0
- 添加 @typescript-eslint/eslint-plugin、@typescript-eslint/parser、eslint、prettier 作为开发依赖

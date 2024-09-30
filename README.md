# Web Tool

基于 `gofiber` 和 `amis` , 快速构建 Web 工具应用

### 技术栈

- [fiber](https://github.com/gofiber/fiber)
- [amis](https://github.com/baidu/amis)

### 快速开始

1. `clone` 本项目
2. 安装依赖: `go mod tidy`
3. 下载[sdk.tar.gz](https://github.com/baidu/amis/releases/latest)文件并解压缩到 /web 目录
    - 正确路径如下: `web/public/sdk/sdk.js`
4. 启动服务: `go run main.go`

### 指南

- 使用场景
    - 做一些小工具 (初衷)
        - `go`: 高性能, 可跨平台编译
        - `amis`: 快速处理 UI, 专注处理业务逻辑
    - 🤔 直接作为前端使用 (有一定的局限性, 但也是个不错的思路)

- 前端
    - 前端代码在 `/web` 目录下
    - build 时, 传递 prod 参数, 可使用 `go:embed` 将页面打包到二进制文件中 (`/web`)

- 启动参数
    - port: 端口号, 默认 3000
        - eg: `go run main.go -port=3000`
        - 如果端口被占用, 会自动尝试 端口号 + 1 (100次)
    - prod: 是否为生产环境, 默认 `false`
        - eg: `go run main.go -prod`
            - 为 `true` 时, 将静态资源打包到二进制文件中

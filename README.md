# Q WORLD ATHLETICS INC 官网

一个基于 Next.js + TypeScript + Tailwind CSS 的多页面公益组织官网，包含项目展示、新闻资讯、志愿者招募、在线捐赠、联系表单、透明公开与 FAQ 等完整功能。

## 技术栈

- Next.js 16（App Router）
- TypeScript
- Tailwind CSS
- 本地 Mock 数据驱动页面

## 快速开始

1. 安装依赖

```bash
npm install
```

2. 启动开发环境

```bash
npm run dev
```

3. 打开浏览器访问

```text
http://localhost:3000
```

## 可用命令

```bash
npm run dev     # 开发模式
npm run lint    # 代码检查
npm run build   # 生产构建
npm run start   # 启动生产服务
```

## 主要页面

- 首页
- 关于我们
- 公益项目列表 / 项目详情
- 新闻资讯列表 / 新闻详情
- 志愿者招募 / 报名成功页
- 在线捐赠 / 捐赠成功页
- 联系我们
- 透明公开 / 年度报告
- FAQ
- 404 页面

## 数据说明

全部演示数据位于 [src/data/mockData.ts](src/data/mockData.ts)，包括：

- 8 个公益项目
- 6 篇新闻
- 6 位团队成员
- 8 条 FAQ
- 年度报告示例数据

## 说明

- 当前表单为前端校验与模拟提交流程，适合官网展示与原型验证。
- 若需要接入真实后端，可在现有组件基础上扩展 API 路由或外部服务。

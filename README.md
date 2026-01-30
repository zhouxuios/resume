# 🚀 现代全栈简历构建系统 (Modern Resume System)

[![Build and Deploy](https://github.com/zhouxuios/resume/actions/workflows/deploy.yml/badge.svg)](https://github.com/zhouxuios/resume/actions)
[![Node Version](https://img.shields.io/badge/node-22.x-green.svg)](https://nodejs.org/)
[![Vite Version](https://img.shields.io/badge/vite-6.x-blue.svg)](https://vitejs.dev/)

这是一个基于 Vue3 + Vite 6 构建的高性能个人简历系统。项目不仅展示了个人履历，更通过**自动化部署 (CI/CD)** 流程，体现了现代前端工程化的实践规范。

## 🌟 项目亮点 (Engineering Highlights)

* **⚡️ 顶配开发环境**：采用 **Node 22** + **pnpm 9** + **Vite 6**，极致的构建速度与依赖管理。
* **🏗️ 工业级 CI/CD**：通过 **GitHub Actions** 实现自动化流水线，一次推送，全网同步。
* **🌐 双云容灾部署**：
    * **主站 (Tencent Cloud)**：部署于腾讯云服务器，确保国内极速访问。
    * **备份站 (GitHub Pages)**：全球 CDN 加速，保障高可用性。
* **🧱 组件化架构**：简历内容数据驱动，结构与内容完全解耦，极易维护与扩展。

## 🛠️ 技术栈 (Tech Stack)

- **框架**: Vue 3 (Composition API)
- **构建**: Vite 6 + pnpm
- **部署**: GitHub Actions + SCP + SSH
- **环境**: Node.js 22.x (LTS/Current)
- **服务**: 腾讯云 Lighthouse + Nginx

## 🚀 自动化部署流程 (Workflow)

项目采用 Git Flow 规范，配置了完整的自动化链路：
1. **本地开发**：在 `develop` 或 `feature` 分支进行内容更新。
2. **代码合并**：合并至 `main` 分支并推送到远程仓库。
3. **云端构建**：GitHub Actions 自动拉起 Node 22 环境，执行 `pnpm build`。
4. **自动分发**：
    - 将编译产物推送到 `gh-pages` 分支进行托管。
    - 通过 SCP 协议将产物同步至腾讯云服务器生产目录并重载 Nginx。

## 📦 快速开始

```bash
# 克隆项目
git clone [https://github.com/zhouxuios/resume.git](https://github.com/zhouxuios/resume.git)

# 安装依赖
pnpm install

# 本地开发
pnpm dev

# 生产构建
pnpm build
# Biaoqing - 表情包管理系统

## 项目简介

Biaoqing是一个现代化的表情包管理系统，采用全栈开发方案，提供表情包的存储、管理、分类和快速检索功能。项目包含管理后台、用户门户、后端服务等多个模块，采用微服务架构设计。

## 系统架构

项目由以下四个主要模块组成：

- **Admin (管理后台)**: 基于Vue 3 + Ant Design Vue的后台管理系统
- **Portal (用户门户)**: 基于React的用户前端界面
- **Backend (后端服务)**: 基于NestJS的后端API服务
- **Shared (共享服务)**: 包含Redis和PostgreSQL的数据服务

## 技术栈

### 前端技术栈

- Admin: Vue 3 + TypeScript + Ant Design Vue + Vite
- Portal: React + TypeScript + Vite

### 后端技术栈

- NestJS框架
- TypeScript
- PostgreSQL (with pgvector扩展)
- Redis
- Docker

## 环境要求

- Node.js >= 18
- pnpm >= 9.0.2 (用于Admin模块)
- Yarn >= 4.6.0 (用于Portal模块)
- Docker和Docker Compose

## 快速开始

### 1. 启动数据服务

```bash
cd shared
docker-compose up -d
```

### 2. 启动后端服务

```bash
cd backend
pnpm install
pnpm run dev
```

### 3. 启动管理后台

```bash
cd admin
pnpm install
pnpm run dev
```

### 4. 启动用户门户

```bash
cd portal
yarn install
yarn dev
```

## 模块说明

### Admin模块

管理后台提供以下功能：
- 表情包上传和管理
- 用户管理
- 分类管理
- 系统设置

详细文档请参考：[Admin README](./admin/README.md)

### Portal模块

用户门户提供以下功能：
- 表情包浏览和搜索
- 个人收藏
- 分享功能

详细文档请参考：[Portal README](./portal/README.md)

### Backend模块

后端服务提供：
- RESTful API
- WebSocket实时通信
- 文件存储服务
- 用户认证和授权

详细文档请参考：[Backend README](./backend/README.md)

### Shared模块

共享服务包含：
- PostgreSQL数据库（用于持久化存储）
- Redis缓存服务（用于会话管理和缓存）

## 开发指南

### 代码规范

项目使用ESLint和Prettier进行代码格式化，确保在提交代码前运行lint命令：

```bash
# Admin模块
cd admin && pnpm run lint

# Portal模块
cd portal && yarn lint

# Backend模块
cd backend && pnpm run lint
```

### 环境配置

各模块都提供了环境配置文件模板（.env.example），使用前需要复制并根据实际环境进行配置：

```bash
cp .env.example .env
```

## 部署

项目支持Docker部署，每个模块都提供了Dockerfile和docker-compose配置：

```bash
# 生产环境部署
docker-compose -f docker-compose.prod.yml up -d
```

## 贡献指南

1. Fork本仓库
2. 创建特性分支：`git checkout -b feature/AmazingFeature`
3. 提交改动：`git commit -m 'Add some AmazingFeature'`
4. 推送分支：`git push origin feature/AmazingFeature`
5. 提交Pull Request

## 许可证

本项目采用 LGPL 许可证 - 查看 [LICENSE](LICENSE) 文件了解详细信息
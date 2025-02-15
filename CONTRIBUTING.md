# 贡献指南

感谢您对表情包管理系统的关注！本文档将指导您如何为项目做出贡献。

## 开发环境要求

在开始贡献之前，请确保您的开发环境满足以下要求：

- Node.js >= 18
- pnpm >= 9.0.2（用于Admin模块）
- Yarn >= 4.6.0（用于Portal模块）
- Docker和Docker Compose
- Git

## 项目结构

项目由四个主要模块组成：

- **Admin**: Vue 3 + Ant Design Vue的后台管理系统
- **Portal**: React的用户前端界面
- **Backend**: NestJS的后端API服务
- **Shared**: Redis和PostgreSQL的数据服务

## 开发环境搭建

1. 克隆项目
```bash
git clone <项目地址>
cd biaoqing
```

2. 启动数据服务
```bash
cd shared
docker-compose up -d
```

3. 根据需要启动相应模块

### Backend模块
```bash
cd backend
pnpm install
pnpm run start:dev
```

### Admin模块
```bash
cd admin
pnpm install
pnpm run dev
```

### Portal模块
```bash
cd portal
yarn install
yarn dev
```

## 代码规范

### 通用规范

- 使用TypeScript编写代码
- 遵循ESLint配置的代码风格
- 保持代码简洁、可读性强
- 添加必要的注释和文档

### 命名规范

- 文件名：使用kebab-case（如：user-service.ts）
- 类名：使用PascalCase（如：UserService）
- 变量和函数：使用camelCase（如：getUserInfo）
- 常量：使用UPPER_SNAKE_CASE（如：MAX_RETRY_COUNT）

### 提交规范

提交信息格式：
```
<type>(<scope>): <subject>

<body>

<footer>
```

类型（type）：
- feat: 新功能
- fix: 修复bug
- docs: 文档更新
- style: 代码格式调整
- refactor: 重构
- test: 测试相关
- chore: 构建过程或辅助工具的变动

## 贡献流程

1. Fork项目到自己的仓库
2. 创建新的特性分支（feature/xxx）或修复分支（fix/xxx）
3. 在新分支上进行开发
4. 确保代码通过所有测试
5. 提交Pull Request到主仓库的main分支
6. 等待代码审查和合并

## 测试要求

- 后端代码需要编写单元测试和集成测试
- 前端组件需要编写单元测试
- 提交前确保所有测试通过
- 新功能需要包含相应的测试用例

## 文档要求

- 新功能需要更新相关文档
- API变更需要更新API文档
- 重要的代码逻辑需要添加注释
- README.md需要及时更新

## 问题反馈

如果您在开发过程中遇到问题：

1. 查看项目的Issue列表，确认是否存在类似问题
2. 如果是新问题，创建新的Issue
3. 描述问题时请提供：
   - 问题的详细描述
   - 复现步骤
   - 相关的错误日志
   - 开发环境信息

## 联系方式

如有其他问题，请通过以下方式联系我们：

- 提交Issue
- 在Pull Request中讨论

感谢您的贡献！
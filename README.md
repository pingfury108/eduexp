# 百度教育AI助手

> 🚀 专为百度教育兼职平台设计的智能AI助手，提供各学段学科题目智能解答、OCR识别、公式渲染等强大功能，大幅提升答题效率。

## ✨ 项目简介

百度教育AI助手是一款专为百度教育兼职平台设计的智能浏览器插件，集成了AI解题、OCR识别、公式渲染等多项功能，让教育工作者能够轻松高效地完成答题工作。

📌 **在线体验**: [http://edu-exp.pingfury.top](http://edu-exp.pingfury.top)

📦 **插件下载**: [插件安装指南](https://doc-edu.pingfury.top/install)

📚 **使用文档**: [详细使用说明](https://doc-edu.pingfury.top/guide)

## 🎯 主要功能

### 🧠 AI智能解题
- 支持文字和图片题目识别
- 自动生成详细解题步骤和标准答案
- 覆盖小学到高中各学段题目

### 🔍 OCR文字识别
- 智能识别图片中的文字和数学公式
- 识别准确率高达99%
- 支持多种图片格式

### 📐 数学公式渲染
- 批量渲染数学公式
- 支持复制编辑功能
- 竖式计算自动生成

### ✂️ 整页自动切割
- 教辅内容录入时自动识别和分割题目
- 大幅提升录入效率
- 智能题目边界检测

### 🤖 智能补全
- 参考题目智能补全
- 减少重复录入工作
- 上下文感知优化

### ✏️ 文本优化
- 智能字体和标点符号优化
- 确保内容格式规范
- 自动纠错功能

## 🛠️ 技术栈

本项目基于以下技术栈构建：

- **前端框架**: Next.js 14.1.0
- **UI组件**: NextUI + TailwindCSS
- **动画效果**: Framer Motion
- **图标库**: React Icons + Lucide React
- **主题系统**: Next Themes
- **国际化**: React Intl
- **部署平台**: Vercel

## 🚀 快速开始

### 环境要求

- Node.js 18+
- npm 或 pnpm

### 安装依赖

```bash
# 克隆项目
git clone https://github.com/pingfury108/edu-exp.git

# 进入项目目录
cd edu-exp

# 安装依赖
npm install
# 或使用 pnpm
pnpm install
```

### 环境配置

复制 `.env.example` 文件为 `.env` 并填写相关配置：

```bash
cp .env.example .env
```

### 本地运行

```bash
npm run dev
# 或
pnpm dev
```

应用将在 `http://localhost:3000` 启动。

## 📝 项目配置

### 网站信息配置

编辑 `config/site.ts` 文件来修改网站基本信息：

```typescript
const baseSiteConfig = {
  name: "百度教育AI助手",
  description: "专为百度教育兼职平台设计的智能AI助手...",
  url: "http://edu-exp.pingfury.top",
  // ... 其他配置
}
```

### 多语言配置

项目支持中英文双语，语言文件位于 `locales/` 目录：

- `locales/zh.json` - 中文
- `locales/en.json` - 英文

## 📦 部署

### Vercel 一键部署

[![使用 Vercel 部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/pingfury108/edu-exp)

### 手动构建

```bash
# 构建项目
npm run build

# 启动生产服务器
npm run start
```

## 💡 版本说明

### 🆓 浏览器插件版（免费）
- 完整AI解题功能
- OCR文字识别
- 数学公式渲染
- 开源免费使用
- 社区技术支持

### 💎 扣子API版（￥480 买断）
- 包含所有插件功能
- 无限制调用
- 企业级稳定性
- 远程部署服务
- 一个月技术支持

详情查看：[扣子版本API](https://doc-edu.pingfury.top/coze)

## ❓ 常见问题

**Q: 什么是百度教育AI助手？**
A: 这是一个专为百度教育兼职平台设计的智能浏览器插件，能够自动识别题目并生成标准答案和解题步骤，大幅提升小学数学答题效率。

**Q: 如何安装插件？**
A: 下载插件文件后，在浏览器扩展管理页面开启开发者模式，然后选择"加载已解压的扩展程序"即可安装。详细步骤请查看安装教程。

**Q: 支持哪些浏览器？**
A: 支持Chrome、Edge、Firefox等主流浏览器，建议使用最新版本以获得最佳体验。

**Q: AI解题准确率如何？**
A: 我们的AI助手在小学数学题目上的准确率超过95%，但建议用户在提交前检查生成的答案，确保准确性。

**Q: 插件版和扣子API版有什么区别？**
A: 插件版完全免费开源，适合个人用户；扣子API版提供更稳定的服务和技术支持，适合企业用户或需要长期稳定使用的用户。

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来帮助改进项目！

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 📞 联系我们

- **GitHub**: [pingfury108](https://github.com/pingfury108)
- **邮箱**: pingfury@outlook.com
- **微信**: qzz18580256051
- **问题反馈**: [GitHub Issues](https://github.com/pingfury108/edu-exp/issues)

## 📄 许可证

本项目基于 MIT 许可证开源 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 支持项目

如果这个项目对您有帮助，请考虑：

- ⭐ 给项目点个 Star
- 🐛 反馈问题和建议
- 🔀 贡献代码
- 📢 推荐给其他人

---

<div align="center">
  <p>由 <a href="https://github.com/pingfury108">pingfury</a> 用 ❤️ 打造</p>
</div> 
---
title: github-trending-ai-ml-2026-09-21

categories:
  - github
  - 热点项目

tags:
  - github
  - 热点项目

date: "2026-09-21"

author: 深海如梦

excerpt: 本周（2026-09-21）GitHub Trending 中 AI/ML 相关热门项目共 17 个，以 AI 编程智能体（Agent）工具链为主旋律：代码审查、上下文优化、并行多 Agent 开发、Agent 联网检索与视频生成等方向集中爆发。本周新增 Star 前三为 alibaba/open-code-review（+1.6w）、microsoft/markitdown（+1.4w）、cline/cline（+7,462）。

---

# GitHub Trending · AI/ML 本周热点项目（2026-09-21）

> 数据抓取时间：2026-09-21 09:56 (GMT+8)　|　数据来源：[GitHub Trending（Weekly）](https://github.com/trending?since=weekly)
>
> 本周共筛选 17 个 AI/ML 相关项目（已剔除 home-assistant、cilium、supabase、gods-eye-view 等非 AI/ML 仓库），按本周新增 Star 降序排列。

### 1. [alibaba/open-code-review](https://github.com/alibaba/open-code-review)  ⭐ 3.8w  (+1.6w 本周)

> 阿里巴巴开源的混合架构代码审查工具，结合确定性流水线 + LLM Agent，输出精确到代码行的审查意见。

- **语言**：Go
- **核心功能**：
- 确定性流水线 + LLM Agent 双引擎，兼顾规则约束与语义理解
- 精确到代码行（line-level）的审查评论
- 内置多语言规则集（NPE、线程安全、XSS、SQL 注入），兼容 OpenAI / Anthropic
- **适用场景**：`企业级代码评审` `大模型辅助 CR` `CI 质量门禁`
### 2. [microsoft/markitdown](https://github.com/microsoft/markitdown)  ⭐ 18.6w  (+1.4w 本周)

> 微软出品的文件转 Markdown 工具，把 PDF / Office / 图片等多格式文档统一转为 LLM 易读的 Markdown。

- **语言**：Python
- **核心功能**：
- 支持 PDF、Word、Excel、PPT、图片、音频等转 Markdown
- 保留标题 / 表格 / 列表结构，便于 RAG 与数据清洗
- 轻量纯 Python，提供命令行与库两种形态
- **适用场景**：`RAG 数据预处理` `文档结构化` `知识库构建`
### 3. [cline/cline](https://github.com/cline/cline)  ⭐ 6.9w  (+7,462 本周)

> 开源的自主编程智能体，可作为 SDK、IDE 插件或 CLI 助手使用，能自行读写文件、执行命令、调用工具。

- **语言**：TypeScript
- **核心功能**：
- 自主规划并执行多步编码任务
- 支持 human-in-the-loop 人工审批
- SDK / IDE 扩展 / CLI 三种形态灵活集成
- **适用场景**：`自动化编码` `IDE 智能体增强` `个人开发提效`
### 4. [affaan-m/ECC](https://github.com/affaan-m/ECC)  ⭐ 26.4w  (+6,453 本周)

> 面向 Claude Code / Codex / Cursor 等 AI 编码工具的“智能体性能优化系统”，提供技能、直觉、记忆与安全能力。

- **语言**：JavaScript
- **核心功能**：
- Skills（技能）与 Instincts（直觉）双轨扩展机制
- 会话记忆持久化 + 安全沙箱
- 研究优先（research-first）的开发流程支持
- **适用场景**：`企业级 AI 编码` `Agent 能力增强` `安全合规开发`
### 5. [stablyai/orca](https://github.com/stablyai/orca)  ⭐ 7.4w  (+5,841 本周)

> 面向“并行智能体集群”的开发环境（ADE），用自有订阅即可运行任意编码智能体，覆盖桌面 / 移动 / 远程。

- **语言**：TypeScript
- **核心功能**：
- 统一管理多智能体并行工作流
- 支持自有 API 订阅接入主流编码 Agent
- 跨桌面、移动、远程运行时一致体验
- **适用场景**：`多 Agent 并行开发` `团队协作提效` `远程开发环境`
### 6. [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd)  ⭐ 4.9w  (+5,249 本周)

> 一个让 AI 编程助手输出更清爽、适合 ADHD 思维模式的技能包，避免模型把答案埋没在长篇大论里。

- **语言**：Python
- **核心功能**：
- 优化信息层级，快速定位关键结论
- 阻止模型过度发散，强制先给答案
- 可接入 Claude Code / Codex 等主流 AI 编码工作流
- **适用场景**：`AI 编程辅助` `信息降噪` `个人效率提升`
### 7. [Tencent/WeKnora](https://github.com/Tencent/WeKnora)  ⭐ 2.8w  (+5,242 本周)

> 腾讯开源的 LLM 知识平台，把原始文档转化为可查询的 RAG、自主推理 Agent 与自维护 Wiki。

- **语言**：Go
- **核心功能**：
- 文档 → RAG 知识库一键构建
- 内置自主推理 Agent
- 自动维护的 Wiki 知识网络
- **适用场景**：`企业知识库` `智能问答` `文档自动化`
### 8. [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)  ⭐ 5.2w  (+4,732 本周)

> HeyGen 推出的“写 HTML 即生成视频”框架，专为 Agent 自动化视频生产设计。

- **语言**：TypeScript
- **核心功能**：
- 用 HTML/CSS 编写并渲染视频内容
- 面向 Agent 的程序化视频生成
- 可与数字人 / 视频能力结合扩展
- **适用场景**：`AI 生成视频` `营销素材自动化` `程序化视频`
### 9. [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)  ⭐ 9.8w  (+3,986 本周)

> Addy Osmani 维护的“生产级”AI 编码智能体技能库，沉淀大量一线工程化最佳实践。

- **语言**：JavaScript
- **核心功能**：
- 覆盖编码 / 测试 / 文档等场景的技能集
- 来自一线工程实践的可复用模板
- 面向 Claude Code / Codex / Cursor 等主流工具
- **适用场景**：`AI 编码最佳实践` `工程提效` `团队规范`
### 10. [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)  ⭐ 8.4w  (+3,690 本周)

> 给 AI Agent 装上“看遍全网”的眼睛，一个 CLI 即可零 API 费用读取与检索 Twitter / Reddit / YouTube / GitHub / 哔哩哔哩 / 小红书。

- **语言**：Python
- **核心功能**：
- 统一 CLI 接入多平台内容读取与搜索
- 零 API 费用（基于网页抓取）
- 为 Agent 提供实时互联网感知
- **适用场景**：`Agent 联网检索` `社媒舆情监控` `实时信息获取`
### 11. [blader/humanizer](https://github.com/blader/humanizer)  ⭐ 5.1w  (+3,045 本周)

> 一个 Agent 技能，用于识别并消除文本中的“AI 味”，让内容更像人写。

- **语言**：Python
- **核心功能**：
- 自动检测 AI 写作特征
- 改写为更自然的人类表达
- 可集成到内容生产工作流
- **适用场景**：`内容去 AI 化` `营销文案` `学术/商业写作`
### 12. [anthropics/claude-code](https://github.com/anthropics/claude-code)  ⭐ 14.7w  (+2,342 本周)

> Anthropic 出品的终端智能体编码工具，理解代码库、用自然语言执行任务、处理 git 工作流。

- **语言**：TypeScript
- **核心功能**：
- 终端内自主理解与修改代码库
- 自然语言驱动的日常任务执行
- 内置 git 工作流与代码解释能力
- **适用场景**：`终端 AI 编码` `代码库维护` `自动化工程任务`
### 13. [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat)  ⭐ 4.4w  (+1,600 本周)

> 增强版开源 ChatGPT 克隆，支持 Agents、MCP、多模型切换与自托管，集成 DeepSeek / Anthropic / OpenAI 等。

- **语言**：TypeScript
- **核心功能**：
- 多模型统一接入与切换
- Agents / MCP / Skills 扩展
- 安全多用户与自托管部署
- **适用场景**：`自建 AI 对话平台` `多模型实验` `团队协作`
### 14. [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins)  ⭐ 2.5w  (+1,298 本周)

> Anthropic 开源的插件仓库，主要面向 Claude Cowork 等知识工作者场景。

- **语言**：Python
- **核心功能**：
- 面向知识工作的可复用插件
- 与 Claude Cowork 深度集成
- 提升文档 / 研究 / 协作效率
- **适用场景**：`知识工作流` `文档自动化` `研究提效`
### 15. [mksglu/context-mode](https://github.com/mksglu/context-mode)  ⭐ 2.4w  (+1,242 本周)

> 为 AI 编码智能体做上下文窗口优化的工具，沙箱化工具输出、持久化会话记忆、跨 17 平台路由。

- **语言**：TypeScript
- **核心功能**：
- 工具输出沙箱压缩（降低约 98% 上下文占用）
- 会话记忆持久化
- 通过 MCP + hooks 跨 17 个平台路由
- **适用场景**：`长上下文优化` `多平台 Agent 编排` `Token 降本`
### 16. [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk)  ⭐ 8,205  (+822 本周)

> 为“并行 AI 智能体工作流”设计的 Git worktree 管理 CLI，让多个 Agent 同时安全分支开发。

- **语言**：Rust
- **核心功能**：
- 一条命令管理多个 worktree
- 隔离多 Agent 并行开发环境
- 与 parallel agent 工作流天然契合
- **适用场景**：`多 Agent 并行开发` `Git 分支管理` `CI 提效`
### 17. [petergyang/no-ai-slop](https://github.com/petergyang/no-ai-slop)  ⭐ 1.1w  (+737 本周)

> 自动识别并移除文本中 20+ 种“AI 腔”套路的工具，提升写作质感。

- **语言**：Python
- **核心功能**：
- 识别 20+ 种 AI 写作套路
- 一键清理 AI 味表达
- 适用于任意文本润色
- **适用场景**：`内容润色` `写作质量提升` `去 AI 痕迹`


---

*数据来源：GitHub Trending（Weekly）· https://github.com/trending?since=weekly*

---
title: github-trending-ai-ml-2026-11-09

categories:
  - github
  - 热点项目

tags:
  - github
  - 热点项目

date: "2026-11-09"

author: 深海如梦

excerpt: 本周 GitHub Trending（Weekly）AI/ML 领域热门项目 Top 10：涵盖代理控制面 T3 Code、Agent Skills 技能包（mattpocock/skills、anthropics/skills）、图谱推理 auto-ontology、跨会话记忆 claude-mem、反 AI 味设计 hallmark 等，按本周新增 Star 降序排列，附中文解读与适用场景。

---

# GitHub 本周 Trending · AI / ML 热门项目 Top 10（2026-11-09）

> 数据来源：GitHub Trending（Weekly 维度）— https://github.com/trending?since=weekly
> 数据抓取时间：2026-11-09 09:31（GMT+8）
> 筛选规则：从本周 Trending 中筛选 AI / 机器学习相关项目（关键词：AI、LLM、machine-learning、deep-learning、GPT、agent 等），按「本周新增 Star」降序排列，取前 10 名。

---

## 1. t3code — 多代理统一控制面板
- **作者**：pingdotgg（T3 Code）
- **语言**：TypeScript ｜ **Star**：52,510 ｜ **本周 +15,379**
- **仓库**：https://github.com/pingdotgg/t3code
- **一句话概述**：一个统一控制本地机器上多个 AI 编程代理（Claude Code、Codex、Cursor 等）的「代理编排控制面板」，提供移动端与桌面端。
- **核心功能**：
  - 多代理统一控制面：集中管理 Claude Code、Codex、Cursor、Grok Build、OpenCode 等 LLM 代理
  - 多端远程可用：提供 iOS/Android、Web 与 Electron 桌面端，随时随地操控
  - 通过 MCP 连接各代理，支持订阅管理与运行状态监控
- **适用场景**：多代理管理 · 远程操控 · 代理编排 · AI 编程

## 2. skills — 真实工程师技能包
- **作者**：mattpocock
- **语言**：Shell ｜ **Star**：318,534 ｜ **本周 +9,635**
- **仓库**：https://github.com/mattpocock/skills
- **一句话概述**：知名 TypeScript 教育者 Matt Pocock 开源的「真实工程师技能包」，汇集其 .agents 目录下的实用 Agent Skills。
- **核心功能**：
  - 面向真实工程场景的 Agent Skills 合集
  - 覆盖类型安全、代码质量与工程最佳实践
  - 开箱即用，可直接喂给 Claude / Cursor / Codex 等代理
- **适用场景**：Agent Skills · 工程规范 · 团队提效

## 3. auto-ontology — 图谱化语义推理层
- **作者**：NVIDIA
- **语言**：Python ｜ **Star**：10,400 ｜ **本周 +9,327**
- **仓库**：https://github.com/NVIDIA/auto-ontology
- **一句话概述**：NVIDIA 开源的 Python 框架，用于在数据之上构建语义化、基于图谱的推理层，为 LLM 与 Agent 提供确定性查询与可解释 AI。
- **核心功能**：
  - 图谱化语义推理层：把数据组织成语义图谱，支撑可解释推理
  - 确定性查询生成：提升 RAG / 检索的上下文质量
  - 面向 LLM 与 Agent 工作流的上下文增强
- **适用场景**：知识图谱 · RAG · 可解释 AI · 企业级

## 4. OpenMausBot — 开源 Grok Bot 替代品
- **作者**：milind-soni
- **语言**：TypeScript ｜ **Star**：18,267 ｜ **本周 +7,621**
- **仓库**：https://github.com/milind-soni/OpenMausBot
- **一句话概述**：开源的 Grok Bot 替代品，内置一个可供机器人使用的虚拟机，用于构建自主聊天 / 任务型 AI 代理。
- **核心功能**：
  - 开源 Grok Bot 替代方案，可自托管、可控
  - 内置虚拟机沙箱，让 bot 安全地执行操作
  - 支持多平台消息接入，构建自主 AI 代理
- **适用场景**：自托管 Bot · 沙箱执行 · 自动化代理

## 5. claude-mem — 跨会话持久记忆
- **作者**：thedotmack
- **语言**：TypeScript ｜ **Star**：114,904 ｜ **本周 +6,443**
- **仓库**：https://github.com/thedotmack/claude-mem
- **一句话概述**：为各类 AI Agent 提供跨会话的持久化上下文记忆——自动捕获会话过程、用 AI 压缩，并在未来会话中注入相关上下文。
- **核心功能**：
  - 跨会话持久记忆：捕获代理每次会话的全部行为
  - AI 压缩与检索：智能压缩并注入未来会话的相关上下文
  - 多代理兼容：支持 Claude Code、Codex、Gemini、Hermes、Copilot、OpenCode 等
- **适用场景**：Agent 记忆 · 长期任务 · 上下文复用

## 6. hallmark — 反 AI 味设计技能包
- **作者**：Nutlope
- **语言**：CSS ｜ **Star**：50,973 ｜ **本周 +6,356**
- **仓库**：https://github.com/Nutlope/hallmark
- **一句话概述**：一个「反 AI 味」的设计技能包，用于 Claude Code、Cursor、Codex，让 AI 生成的 UI / 界面更克制、更专业。
- **核心功能**：
  - 反 AI-slop 设计准则：规避常见的 AI 生成界面套路
  - 直接作为 Agent Skill 接入主流编码代理
  - 提供排版、配色、留白等设计约束
- **适用场景**：前端生成 · UI 设计 · Agent Skill

## 7. Claude-Code-Game-Studios — 多代理游戏工作室
- **作者**：Donchitos
- **语言**：Shell ｜ **Star**：37,011 ｜ **本周 +5,235**
- **仓库**：https://github.com/Donchitos/Claude-Code-Game-Studios
- **一句话概述**：把 Claude Code 变成完整游戏开发工作室——49 个 AI 代理、72 个工作流技能与一套模拟真实工作室层级的控制系统。
- **核心功能**：
  - 49 个专职 AI 代理模拟真实游戏工作室分工
  - 72 个 workflow skills 覆盖策划 / 美术 / 工程 / QA
  - 工作室层级协调系统，统一调度多代理
- **适用场景**：游戏开发 · 多代理协作 · 快速原型

## 8. spec-kit — 规范驱动开发工具包
- **作者**：github
- **语言**：Python ｜ **Star**：148,719 ｜ **本周 +4,045**
- **仓库**：https://github.com/github/spec-kit
- **一句话概述**：GitHub 官方出品的「规范驱动开发（SDD）」工具包，帮助开发者以规范先行的方式启动项目（常配合 AI 代理）。
- **核心功能**：
  - 规范驱动开发脚手架：先写 spec 再写代码
  - 与 AI 代理协作的标准化流程模板
  - 官方维护，覆盖需求 → 设计 → 实现的链路
- **适用场景**：SDD · 需求管理 · AI 协作

## 9. humanizer — 去 AI 味写作技能
- **作者**：blader
- **语言**：Python ｜ **Star**：66,511 ｜ **本周 +3,118**
- **仓库**：https://github.com/blader/humanizer
- **一句话概述**：一个 Agent Skill，用于去除文本中的「AI 生成痕迹」，让 AI 写出的内容更像真人手笔。
- **核心功能**：
  - 去除 AI 味写作特征（套路化句式、过度修饰）
  - 作为 Agent Skill 直接接入编码代理
  - 面向营销、内容、邮件等需要自然语气的场景
- **适用场景**：内容写作 · 去 AI 味 · 营销文案

## 10. skills — Anthropic 官方 Agent Skills
- **作者**：anthropics
- **语言**：Python ｜ **Star**：189,662 ｜ **本周 +3,169**
- **仓库**：https://github.com/anthropics/skills
- **一句话概述**：Anthropic 官方开源的 Agent Skills 公共仓库，汇集官方维护的各类代理技能。
- **核心功能**：
  - 官方维护的高质量 Agent Skills 集合
  - 覆盖多种工程与自动化场景
  - 作为 Claude 生态技能的权威来源
- **适用场景**：Agent Skills · Claude 生态 · 自动化

---

*本页数据由自动化任务于 2026-11-09 抓取自 GitHub Trending（Weekly），仅供趋势参考。*

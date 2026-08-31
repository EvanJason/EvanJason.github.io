---
title: github-trending-ai-ml-2026-08-24
categories:
- github
- 热点项目
tags:
- github
- 热点项目
date: "2026-08-24"
author: 深海如梦
excerpt: "2026-08-17 至 08-24 的 GitHub Trending AI/ML 热点：MoneyPrinterTurbo 短视频生成工具以 +11.2k Star 领跑，OpenViking、Modular 紧随其后，共 7 个 AI/ML 项目上榜。"
---

# 本周 GitHub AI/ML 热门项目 · 2026-08-24

> 主题色：**Magenta Coral**（#FF6B6B → #C938B6 → #7209B7 渐变）
> 抓取时间：**2026-08-24 09:51 GMT+8**
> 本周区间：2026-08-17 – 2026-08-24
> AI/ML 项目数：**7 个**（从 GitHub Trending Weekly 11 条中筛选）
> 排序方式：按**本周新增 Star**降序

---

## 01｜harry0703/MoneyPrinterTurbo · Python

- 🔗 <https://github.com/harry0703/MoneyPrinterTurbo>
- ⭐ 115,338 总 · **▲ 本周 +11,167** · 🔱 17,521 forks

**一句话：**只需提供视频主题或关键词，即可一键自动生成文案、匹配素材、合成字幕、搭配背景音乐，并最终输出高清短视频的一站式 AI 视频生成工具。

**核心功能：**

- AI Agent 自动生成视频脚本并提炼素材搜索关键词
- 集成主流 LLM、素材库、TTS、字幕与背景音乐全流程
- 提供 AI Agent / WebUI / API / CLI 四种使用方式，代码按 MVC 分层

**适用场景：** 自媒体内容创作 / 批量短视频生产 / 营销内容团队 / 口播带货视频

---

## 02｜volcengine/OpenViking · Python

- 🔗 <https://github.com/volcengine/OpenViking>
- ⭐ 32,506 总 · **▲ 本周 +3,799** · 🔱 2,483 forks

**一句话：**开源的 AI Agent 上下文数据库，把记忆、资源、技能统一挂载到 `viking://` 文件系统协议下，让 Agent 像浏览文件一样操作自己的上下文。

**核心功能：**

- 三层上下文加载（L0 摘要 / L1 概览 / L2 详情），按需读取节省 token
- 目录式递归检索：向量粗筛 → 逐层下钻，结果连同上下文一起返回
- 会话结束自动沉淀长期记忆（用户偏好、Agent 经验）

**适用场景：** 长期记忆 Agent / RAG 检索增强 / Agent 平台 / 企业知识库

---

## 03｜modular/modular · Mojo

- 🔗 <https://github.com/modular/modular>
- ⭐ 28,984 总 · **▲ 本周 +2,176** · 🔱 3,077 forks

**一句话：**Modular Platform 的开源主仓库，包含面向 AI 推理的 MAX 框架与系统级编程语言 Mojo，让大模型服务兼具 Python 易用性与硬件级性能。

**核心功能：**

- MAX 推理服务器，暴露 OpenAI 兼容 endpoint，开箱即用
- Mojo 语言：类 Python 语法、原生 MLIR 编译、多硬件后端
- MAX 模型流水线（Python graphs） + 加速器内核库（max/kernels）

**适用场景：** 大模型推理部署 / 高性能 ML 系统 / 自定义算子开发 / 跨硬件加速

---

## 04｜cursor/plugins · TypeScript

- 🔗 <https://github.com/cursor/plugins>
- ⭐ 4,826 总 · **▲ 本周 +1,761** · 🔱 396 forks

**一句话：**Cursor 官方维护的插件市场与插件规范，覆盖代码审查、教学规划、子代理编排等高频场景，为 Cursor IDE 提供可一键安装的扩展能力。

**核心功能：**

- 插件全部以独立目录组织，自带 `.cursor-plugin/plugin.json` 清单
- 内置 Thermo-nuclear 评审、Orchestrate、CLI for Agents 等杀手级插件
- Cursor SDK TypeScript 接口，便于团队自建 Agent 自动化流程

**适用场景：** Cursor IDE 用户 / AI 编程自动化 / 团队 CI/CD / PR 自动评审

---

## 05｜jundot/omlx · Python

- 🔗 <https://github.com/jundot/omlx>
- ⭐ 20,452 总 · **▲ 本周 +1,671** · 🔱 1,732 forks

**一句话：**专为 Apple Silicon 优化的本地 LLM 推理服务器，配备持续批处理与内存/SSD 两级 KV 缓存，直接从 macOS 菜单栏管理，让本地大模型真正能用。

**核心功能：**

- 持续批处理 + 跨请求热缓存，长上下文工具调用不再反复重算
- macOS 菜单栏即时开关模型、调整上下文，CLI 提供后台服务模式
- GLM-5.2 / M3 / Qwen3.5 等模型可启用原生自定义 kernel（M3 Ultra 提速约 30×）

**适用场景：** Mac 本地大模型推理 / Claude Code 本地后端 / 隐私敏感型团队 / 离线开发编程

---

## 06｜apache/maka · TypeScript

- 🔗 <https://github.com/apache/maka>
- ⭐ 2,369 总 · **▲ 本周 +859** · 🔱 270 forks

**一句话：**Apache 孵化中的本地优先 Agent 工作空间，把模型消息、工具调用、权限决策以 append-only 方式记录，提供可回放、可恢复、可评测的执行事实。

**核心功能：**

- 一次 Runtime Host 同时驱动桌面 App、TUI/CLI 与 Eval 三种入口
- 短上下文 ≠ 删历史：可裁剪提示词，但完整证据永久保留
- 可选用云端 API / 本地模型 / 自有网关作为 Agent 后端

**适用场景：** 本地 Agent 调试 / AI 工作自动化 / Agent 评测平台 / 可审计 Agent

---

## 07｜anthropics/claude-plugins-community · Python

- 🔗 <https://github.com/anthropics/claude-plugins-community>
- ⭐ 980 总 · **▲ 本周 +406** · 🔱 127 forks

**一句话：**Anthropic 官方维护的 Claude Cowork / Claude Code 社区插件市场只读镜像，列表中每个插件都经过自动化安全扫描与审核才上架。

**核心功能：**

- 通过 `marketplace.json` 暴露经过审核的社区插件列表
- 一行命令安装到 Claude Code 或在 Claude Cowork 中使用
- 源自 claude.ai 提交管线，每晚自动同步更新

**适用场景：** Claude Code 用户 / 企业内部插件分发 / AI 工作流扩展 / 安全合规插件

---

## 数据来源

- GitHub Trending Weekly：<https://github.com/trending?since=weekly>
- 由 **WorkBuddy** 自动生成 · 每周一推送
- 抓取时间：2026-08-24 09:51 GMT+8

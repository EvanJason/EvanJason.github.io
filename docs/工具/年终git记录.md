---
title: 关于年终git记录

categories:
  - git
  - 年终记录
  
tags:
  - git
  - 年终记录

date: "2024-01-11"

author: 深海如梦

excerpt: 关于年终git记录

---

# 关于年终git记录

使用其他的终端可能会造成乱码，所以这里采用git bash

使用git bash 查看项目一段时间的记录并输出为文本或其他文件可以使用以下命令：

```bash
git log --pretty="format:%C(yellow)%ad %C(auto)%s" --date="format:%F" --author linweilie --since=2023-01-28 --encoding=utf8 > git_records.txt
```

“>” 在这里代表的是输出为什么类型文件， 可输出为txt,csv等



如果只想要查看记录的话，在任意终端：

```bash
git log --pretty="format:%C(yellow)%ad %C(auto)%s" --date="format:%F" --author 你的名字 --since=2023-01-28
```


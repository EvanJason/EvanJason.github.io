# git 自定义别名命令

找到git中的gitconfig设置


```
[alias]
    co = checkout
    ci = commit
    st = status
    br = branch
    type = cat-file -t
    dump = cat-file -p
    hist = log --pretty=format:\"%C(auto)%h %ad %an %s%d\" --date=format:\"%F %T\"
```
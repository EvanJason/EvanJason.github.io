---
title: sessionStorage或localStorage容量超过配额后的处理方法

categories:
  - sessionStorage
  - localStorage

tags:
  - sessionStorage
  - localStorage

date: "2023-10-17"

author: 深海如梦

excerpt: sessionStorage或localStorage容量超过配额后的处理方法

---

# sessionStorage或localStorage容量超过配额后的处理方法

`DOMException: Failed to execute 'setItem' on 'Storage': Setting the value of 'widgetCacheData' exceeded the quota.`
在使用sessionStorage做缓存处理时，报了如上的错误提示，经查是sessionStorage对大小是有限制的，所以要进行try catch，500KB左右的东西保存起来就会令到Resources变卡，`2M`左右就可以令到Resources卡死，操作不了，`5M`就到了Chrome的极限，而超过之后就会抛出上述异常。

故此解决办法如下：

```typescript
// $storage 相当于 window.sessionStorage || sessionStorage 或 window.localStorage || localStorage
// key 为要保存的缓存名字, value 为值
try {
    return $storage.setItem(key, value ? JSON.stringify(value) : value);
} catch (error) {
    const errorInfo = JSON.stringify(error).toUpperCase()
    const isMatch = errorInfo.indexOf(key) !== -1
    // 容量不够，根据具体情况进行删除
    if (errorInfo.indexOf('QUOTA') !== -1) {
        // 如果匹配当前key, 且是数组, 则进行处理
        if (isMatch && isArray(value) && value.length ) {
            // console.error(error)
            // 只保留最新200条数据
            return $storage.setItem(key, value ? JSON.stringify(value.slice(-200)) : value);
        }
        throw new Error(error);
    }
    throw new Error(error);
}
```

## 相关

[localstorage和sessionstorage的封装](/docs/本地缓存/localstorage和sessionstorage的封装.md)

---
title: localstorage和sessionstorage的封装

categories:
  - localstorage
  - sessionstorage

tags:
  - localstorage
  - sessionstorage

date: "2021-10-15"

author: 深海如梦

excerpt: localstorage和sessionstorage的封装

---

# localstorage 和 sessionstorage 的封装

## 代码

```typescript
const useStorage = ($storage) => {
    /**
     * 根据 key 值获取储存在 storage 中的值
     * @param key storage key
     */
    const get = (key: string) => {
        let value = $storage.getItem(key);
        try {
            value = JSON.parse(value);
            return value;
        } catch {
            return value;
        }
    }

    /**
     * 根据 key 值向 storage 中储存值
     * @param key storage key
     * @param value 需要储存在 storage 中的值
     */
    const set = (key: string, value: any) => {
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
    }

    /**
     * 根据 key 值移除储存在 storage 中的值
     * @param key storage key
     */
    const remove = (key: string) => {
        return $storage.removeItem(key);
    }

    /**
     * 移除除了 key 之外的所有储存在 storage 中的值
     * @param key storage key
     */
    const clearExcept = (key: string) => {
        for (let i = 0; i < $storage.length; i++) {
            const itemKey: string | undefined = $storage.key(i);
            if (itemKey && itemKey !== key) {
                $storage.removeItem(itemKey);
            }
        }
    }

    /**
     * 移除所有储存在 storage 中的值
     */
    const clearAll = () => {
        for (const itemKey in $storage) {
            if (itemKey) {
                $storage.removeItem(itemKey);
            }
        }
    }

    return {
        get,
        set,
        remove,
        clearExcept,
        clearAll,
    }
}

const SessionStorageService = useStorage(window.sessionStorage || sessionStorage)
const LocalStorageService = useStorage(window.localStorage || localStorage)

export {
    SessionStorageService,
    LocalStorageService,
}
```

## 使用

```
LocalStorageService.get('numList')
let data = [1,2,3,4,5,6,7,8,9,]
LocalStorageService.set('numList',data)
```

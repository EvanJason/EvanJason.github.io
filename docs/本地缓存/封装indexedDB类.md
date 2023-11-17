---

title: 封装indexedDB类

categories:
  - 缓存
tags:
  - 缓存

date: "2023-09-01"

authors: lin

excerpt: 封装indexedDB类

---

# 封装indexedDB类



## 创建一个索引库类（例如 `IndexedDBWrapper`）：

```typescript
class IndexedDBWrapper {
  constructor(databaseName, objectStoreName) {
    this.databaseName = databaseName;
    this.objectStoreName = objectStoreName;
    this.db = null;
  }

  open() {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open(this.databaseName);

      request.onerror = (event) => {
        reject(request.error);
      };

      request.onsuccess = (event) => {
        this.db = event.target.result;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        this.db = event.target.result;
        this.createObjectStoreIfNotExists();
      };
    });
  }

  createObjectStoreIfNotExists() {
    if (!this.db.objectStoreNames.contains(this.objectStoreName)) {
      this.db.createObjectStore(this.objectStoreName, { keyPath: 'id' });
    }
  }

  get(key) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.objectStoreName]);
      const objectStore = transaction.objectStore(this.objectStoreName);
      const request = objectStore.get(key);

      request.onerror = (event) => {
        reject(request.error);
      };

      request.onsuccess = (event) => {
        resolve(request.result);
      };
    });
  }

  put(data) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.objectStoreName], 'readwrite');
      const objectStore = transaction.objectStore(this.objectStoreName);
      const request = objectStore.put(data);

      request.onerror = (event) => {
        reject(request.error);
      };

      request.onsuccess = (event) => {
        resolve();
      };
    });
  }

  delete(key) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.objectStoreName], 'readwrite');
      const objectStore = transaction.objectStore(this.objectStoreName);
      const request = objectStore.delete(key);

      request.onerror = (event) => {
        reject(request.error);
      };

      request.onsuccess = (event) => {
        resolve();
      };
    });
  }

  close() {
    this.db.close();
  }
}
```

## 使用封装的 IndexedDB 类进行操作：



```typescript
const databaseName = 'myDatabase';
const objectStoreName = 'myObjectStore';

const indexedDBWrapper = new IndexedDBWrapper(databaseName, objectStoreName);

indexedDBWrapper.open()
  .then(() => {
    const data = { id: 1, name: 'John Doe' };
    return indexedDBWrapper.put(data);
  })
  .then(() => {
    const key = 1;
    return indexedDBWrapper.get(key);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    indexedDBWrapper.close();
  });
```



上述示例封装了打开数据库、创建对象存储、获取数据、存储数据、删除数据和关闭数据库等基本操作。您可以根据实际需求进一步扩展封装函数和添加其他功能。

请注意，IndexDB 的 API 是异步的，因此封装采用了 Promise 的方式来处理异步操作。在实际使用时，请根据需要进行错误处理和适当的异常处理。
"use strict";(self.webpackChunklwl_docusaurus_website=self.webpackChunklwl_docusaurus_website||[]).push([[154],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=o,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,s[1]=c;for(var d=2;d<a;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={title:"\u5c01\u88c5indexedDB\u7c7b",categories:["\u7f13\u5b58"],tags:["\u7f13\u5b58"],date:"2023-09-01",authors:"lin",excerpt:"\u5c01\u88c5indexedDB\u7c7b"},s="\u5c01\u88c5indexedDB\u7c7b",c={unversionedId:"\u672c\u5730\u7f13\u5b58/\u5c01\u88c5indexedDB\u7c7b",id:"\u672c\u5730\u7f13\u5b58/\u5c01\u88c5indexedDB\u7c7b",title:"\u5c01\u88c5indexedDB\u7c7b",description:"\u521b\u5efa\u4e00\u4e2a\u7d22\u5f15\u5e93\u7c7b\uff08\u4f8b\u5982 IndexedDBWrapper\uff09\uff1a",source:"@site/docs/\u672c\u5730\u7f13\u5b58/\u5c01\u88c5indexedDB\u7c7b.md",sourceDirName:"\u672c\u5730\u7f13\u5b58",slug:"/\u672c\u5730\u7f13\u5b58/\u5c01\u88c5indexedDB\u7c7b",permalink:"/docs/\u672c\u5730\u7f13\u5b58/\u5c01\u88c5indexedDB\u7c7b",draft:!1,editUrl:"https://github.com/evanjason/evanjason.github.io/tree/main/docs/\u672c\u5730\u7f13\u5b58/\u5c01\u88c5indexedDB\u7c7b.md",tags:[{label:"\u7f13\u5b58",permalink:"/docs/tags/\u7f13\u5b58"}],version:"current",frontMatter:{title:"\u5c01\u88c5indexedDB\u7c7b",categories:["\u7f13\u5b58"],tags:["\u7f13\u5b58"],date:"2023-09-01",authors:"lin",excerpt:"\u5c01\u88c5indexedDB\u7c7b"},sidebar:"tutorialSidebar",previous:{title:"\u524d\u7aef\u672c\u5730\u7f13\u5b58\u6280\u672f",permalink:"/docs/\u672c\u5730\u7f13\u5b58/\u524d\u7aef\u672c\u5730\u7f13\u5b58\u6280\u672f"},next:{title:"React Hooks 18 useEffect \u6267\u884c2\u6b21\u6216\u591a\u6b21\u7684\u89e3\u51b3\u529e\u6cd5",permalink:"/docs/\u95ee\u9898\u53ca\u7b54\u6848/React Hooks 18 useEffect \u6267\u884c2\u6b21\u6216\u591a\u6b21\u7684\u89e3\u51b3\u529e\u6cd5"}},i={},d=[{value:"\u521b\u5efa\u4e00\u4e2a\u7d22\u5f15\u5e93\u7c7b\uff08\u4f8b\u5982 <code>IndexedDBWrapper</code>\uff09\uff1a",id:"\u521b\u5efa\u4e00\u4e2a\u7d22\u5f15\u5e93\u7c7b\u4f8b\u5982-indexeddbwrapper",level:2},{value:"\u4f7f\u7528\u5c01\u88c5\u7684 IndexedDB \u7c7b\u8fdb\u884c\u64cd\u4f5c\uff1a",id:"\u4f7f\u7528\u5c01\u88c5\u7684-indexeddb-\u7c7b\u8fdb\u884c\u64cd\u4f5c",level:2}],l={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5c01\u88c5indexeddb\u7c7b"},"\u5c01\u88c5indexedDB\u7c7b"),(0,o.kt)("h2",{id:"\u521b\u5efa\u4e00\u4e2a\u7d22\u5f15\u5e93\u7c7b\u4f8b\u5982-indexeddbwrapper"},"\u521b\u5efa\u4e00\u4e2a\u7d22\u5f15\u5e93\u7c7b\uff08\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"h2"},"IndexedDBWrapper"),"\uff09\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class IndexedDBWrapper {\n  constructor(databaseName, objectStoreName) {\n    this.databaseName = databaseName;\n    this.objectStoreName = objectStoreName;\n    this.db = null;\n  }\n\n  open() {\n    return new Promise((resolve, reject) => {\n      const request = window.indexedDB.open(this.databaseName);\n\n      request.onerror = (event) => {\n        reject(request.error);\n      };\n\n      request.onsuccess = (event) => {\n        this.db = event.target.result;\n        resolve();\n      };\n\n      request.onupgradeneeded = (event) => {\n        this.db = event.target.result;\n        this.createObjectStoreIfNotExists();\n      };\n    });\n  }\n\n  createObjectStoreIfNotExists() {\n    if (!this.db.objectStoreNames.contains(this.objectStoreName)) {\n      this.db.createObjectStore(this.objectStoreName, { keyPath: 'id' });\n    }\n  }\n\n  get(key) {\n    return new Promise((resolve, reject) => {\n      const transaction = this.db.transaction([this.objectStoreName]);\n      const objectStore = transaction.objectStore(this.objectStoreName);\n      const request = objectStore.get(key);\n\n      request.onerror = (event) => {\n        reject(request.error);\n      };\n\n      request.onsuccess = (event) => {\n        resolve(request.result);\n      };\n    });\n  }\n\n  put(data) {\n    return new Promise((resolve, reject) => {\n      const transaction = this.db.transaction([this.objectStoreName], 'readwrite');\n      const objectStore = transaction.objectStore(this.objectStoreName);\n      const request = objectStore.put(data);\n\n      request.onerror = (event) => {\n        reject(request.error);\n      };\n\n      request.onsuccess = (event) => {\n        resolve();\n      };\n    });\n  }\n\n  delete(key) {\n    return new Promise((resolve, reject) => {\n      const transaction = this.db.transaction([this.objectStoreName], 'readwrite');\n      const objectStore = transaction.objectStore(this.objectStoreName);\n      const request = objectStore.delete(key);\n\n      request.onerror = (event) => {\n        reject(request.error);\n      };\n\n      request.onsuccess = (event) => {\n        resolve();\n      };\n    });\n  }\n\n  close() {\n    this.db.close();\n  }\n}\n")),(0,o.kt)("h2",{id:"\u4f7f\u7528\u5c01\u88c5\u7684-indexeddb-\u7c7b\u8fdb\u884c\u64cd\u4f5c"},"\u4f7f\u7528\u5c01\u88c5\u7684 IndexedDB \u7c7b\u8fdb\u884c\u64cd\u4f5c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const databaseName = 'myDatabase';\nconst objectStoreName = 'myObjectStore';\n\nconst indexedDBWrapper = new IndexedDBWrapper(databaseName, objectStoreName);\n\nindexedDBWrapper.open()\n  .then(() => {\n    const data = { id: 1, name: 'John Doe' };\n    return indexedDBWrapper.put(data);\n  })\n  .then(() => {\n    const key = 1;\n    return indexedDBWrapper.get(key);\n  })\n  .then((result) => {\n    console.log(result);\n  })\n  .catch((error) => {\n    console.error(error);\n  })\n  .finally(() => {\n    indexedDBWrapper.close();\n  });\n")),(0,o.kt)("p",null,"\u4e0a\u8ff0\u793a\u4f8b\u5c01\u88c5\u4e86\u6253\u5f00\u6570\u636e\u5e93\u3001\u521b\u5efa\u5bf9\u8c61\u5b58\u50a8\u3001\u83b7\u53d6\u6570\u636e\u3001\u5b58\u50a8\u6570\u636e\u3001\u5220\u9664\u6570\u636e\u548c\u5173\u95ed\u6570\u636e\u5e93\u7b49\u57fa\u672c\u64cd\u4f5c\u3002\u60a8\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u9700\u6c42\u8fdb\u4e00\u6b65\u6269\u5c55\u5c01\u88c5\u51fd\u6570\u548c\u6dfb\u52a0\u5176\u4ed6\u529f\u80fd\u3002"),(0,o.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0cIndexDB \u7684 API \u662f\u5f02\u6b65\u7684\uff0c\u56e0\u6b64\u5c01\u88c5\u91c7\u7528\u4e86 Promise \u7684\u65b9\u5f0f\u6765\u5904\u7406\u5f02\u6b65\u64cd\u4f5c\u3002\u5728\u5b9e\u9645\u4f7f\u7528\u65f6\uff0c\u8bf7\u6839\u636e\u9700\u8981\u8fdb\u884c\u9519\u8bef\u5904\u7406\u548c\u9002\u5f53\u7684\u5f02\u5e38\u5904\u7406\u3002"))}p.isMDXComponent=!0}}]);
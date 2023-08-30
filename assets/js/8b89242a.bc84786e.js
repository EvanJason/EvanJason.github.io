"use strict";(self.webpackChunklwl_docusaurus_website=self.webpackChunklwl_docusaurus_website||[]).push([[8913],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},g=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),p=c(r),y=o,m=p["".concat(l,".").concat(y)]||p[y]||u[y]||a;return r?n.createElement(m,s(s({ref:t},g),{},{components:r})):n.createElement(m,s({ref:t},g))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},9909:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"localstorage\u548csessionstorage\u7684\u5c01\u88c5",categories:["Angular"],tags:["localstorage","sessionstorage"],date:"2021-10-15",author:"\u6df1\u6d77\u5982\u68a6",excerpt:"localstorage\u548csessionstorage\u7684\u5c01\u88c5"},s="localstorage \u548c sessionstorage \u7684\u5c01\u88c5",i={unversionedId:"TypeScript/localstorage\u548csessionstorage\u7684\u5c01\u88c5",id:"TypeScript/localstorage\u548csessionstorage\u7684\u5c01\u88c5",title:"localstorage\u548csessionstorage\u7684\u5c01\u88c5",description:"\u4ee3\u7801",source:"@site/docs/TypeScript/localstorage\u548csessionstorage\u7684\u5c01\u88c5.md",sourceDirName:"TypeScript",slug:"/TypeScript/localstorage\u548csessionstorage\u7684\u5c01\u88c5",permalink:"/docs/TypeScript/localstorage\u548csessionstorage\u7684\u5c01\u88c5",draft:!1,editUrl:"https://github.com/EvanJason/EvanJason.github.io/tree/main/docs/TypeScript/localstorage\u548csessionstorage\u7684\u5c01\u88c5.md",tags:[{label:"localstorage",permalink:"/docs/tags/localstorage"},{label:"sessionstorage",permalink:"/docs/tags/sessionstorage"}],version:"current",frontMatter:{title:"localstorage\u548csessionstorage\u7684\u5c01\u88c5",categories:["Angular"],tags:["localstorage","sessionstorage"],date:"2021-10-15",author:"\u6df1\u6d77\u5982\u68a6",excerpt:"localstorage\u548csessionstorage\u7684\u5c01\u88c5"},sidebar:"tutorialSidebar",previous:{title:"Typescript\u5347\u7ea7\u6307\u5357",permalink:"/docs/TypeScript/Typescript\u5347\u7ea7\u6307\u5357"},next:{title:"\u7b56\u7565\u751f\u6210\u5668",permalink:"/docs/TypeScript/\u7b56\u7565\u751f\u6210\u5668"}},l={},c=[{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2}],g={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"localstorage-\u548c-sessionstorage-\u7684\u5c01\u88c5"},"localstorage \u548c sessionstorage \u7684\u5c01\u88c5"),(0,o.kt)("h2",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const useStorage = ($storage) => {\n    /**\n     * \u6839\u636e key \u503c\u83b7\u53d6\u50a8\u5b58\u5728 storage \u4e2d\u7684\u503c\n     * @param key storage key\n     */\n    const get = (key: string) => {\n        let value = $storage.getItem(key);\n        try {\n            value = JSON.parse(value);\n            return value;\n        } catch {\n            return value;\n        }\n    };\n\n    /**\n     * \u6839\u636e key \u503c\u5411 storage \u4e2d\u50a8\u5b58\u503c\n     * @param key storage key\n     * @param value \u9700\u8981\u50a8\u5b58\u5728 storage \u4e2d\u7684\u503c\n     */\n    const set = (key: string, value: any) => {\n        return $storage.setItem(key, value ? JSON.stringify(value) : value);\n    };\n\n    /**\n     * \u6839\u636e key \u503c\u79fb\u9664\u50a8\u5b58\u5728 storage \u4e2d\u7684\u503c\n     * @param key storage key\n     */\n    const remove = (key: string) => {\n        return $storage.removeItem(key);\n    };\n\n    /**\n     * \u79fb\u9664\u9664\u4e86 key \u4e4b\u5916\u7684\u6240\u6709\u50a8\u5b58\u5728 storage \u4e2d\u7684\u503c\n     * @param key storage key\n     */\n    const clearExcept = (key: string) => {\n        for (let i = 0; i < $storage.length; i++) {\n            const itemKey: string | undefined = $storage.key(i);\n            if (itemKey && itemKey !== key) {\n                $storage.removeItem(itemKey);\n            }\n        }\n    };\n\n    /**\n     * \u79fb\u9664\u6240\u6709\u50a8\u5b58\u5728 storage \u4e2d\u7684\u503c\n     */\n    const clearAll = () => {\n        for (const itemKey in $storage) {\n            if (itemKey) {\n                $storage.removeItem(itemKey);\n            }\n        }\n    };\n\n    return {\n        get,\n        set,\n        remove,\n        clearExcept,\n        clearAll,\n    };\n};\n\nconst SessionStorageService = useStorage(window.sessionStorage || sessionStorage);\nconst LocalStorageService = useStorage(window.localStorage || localStorage);\n\nexport { SessionStorageService, LocalStorageService };\n")),(0,o.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"LocalStorageService.get('numList')\nlet data = [1,2,3,4,5,6,7,8,9,]\nLocalStorageService.set('numList',data)\n")))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunklwl_docusaurus_website=self.webpackChunklwl_docusaurus_website||[]).push([[6849],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"react hook \u5982\u4f55\u5224\u65ad\u5f53\u524d\u7528\u6237\u662f\u5426\u79bb\u5f00\u5f53\u524d\u9875\u9762",categories:["\u662f\u5426\u79bb\u5f00\u5f53\u524d\u9875\u9762","react","react hook"],tags:["\u662f\u5426\u79bb\u5f00\u5f53\u524d\u9875\u9762","react","react hook"],date:"2023-08-14",authors:"lin",excerpt:"react hook \u5982\u4f55\u5224\u65ad\u5f53\u524d\u7528\u6237\u662f\u5426\u79bb\u5f00\u5f53\u524d\u9875\u9762"},i="react hook \u5982\u4f55\u5224\u65ad\u5f53\u524d\u7528\u6237\u662f\u5426\u79bb\u5f00\u5f53\u524d\u9875\u9762",l={permalink:"/blog/react hook \u5982\u4f55\u5224\u65ad\u5f53\u524d\u7528\u6237\u662f\u5426\u79bb\u5f00\u5f53\u524d\u9875\u9762",editUrl:"https://github.com/EvanJason/EvanJason.github.io/tree/main/blog/react hook \u5982\u4f55\u5224\u65ad\u5f53\u524d\u7528\u6237\u662f\u5426\u79bb\u5f00\u5f53\u524d\u9875\u9762.md",source:"@site/blog/react hook \u5982\u4f55\u5224\u65ad\u5f53\u524d\u7528\u6237\u662f\u5426\u79bb\u5f00\u5f53\u524d\u9875\u9762.md",title:"react hook \u5982\u4f55\u5224\u65ad\u5f53\u524d\u7528\u6237\u662f\u5426\u79bb\u5f00\u5f53\u524d\u9875\u9762",description:"\u8981\u5728React\u4e2d\u5224\u65ad\u7528\u6237\u662f\u5426\u79bb\u5f00\u5f53\u524d\u9875\u9762\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528useEffect\u94a9\u5b50\u548cbeforeunload\u4e8b\u4ef6\u6765\u5b9e\u73b0\u3002",date:"2023-08-14T00:00:00.000Z",formattedDate:"2023\u5e748\u670814\u65e5",tags:[{label:"\u662f\u5426\u79bb\u5f00\u5f53\u524d\u9875\u9762",permalink:"/blog/tags/\u662f\u5426\u79bb\u5f00\u5f53\u524d\u9875\u9762"},{label:"react",permalink:"/blog/tags/react"},{label:"react hook",permalink:"/blog/tags/react-hook"}],readingTime:2.035,hasTruncateMarker:!1,authors:[{name:"\u6df1\u6d77\u5982\u68a6",title:"\u8ffd\u5149\u5c11\u5e74",url:"https://github.com/evanJason",imageURL:"https://github.com/EvanJason.png",key:"lin"}],frontMatter:{title:"react hook \u5982\u4f55\u5224\u65ad\u5f53\u524d\u7528\u6237\u662f\u5426\u79bb\u5f00\u5f53\u524d\u9875\u9762",categories:["\u662f\u5426\u79bb\u5f00\u5f53\u524d\u9875\u9762","react","react hook"],tags:["\u662f\u5426\u79bb\u5f00\u5f53\u524d\u9875\u9762","react","react hook"],date:"2023-08-14",authors:"lin",excerpt:"react hook \u5982\u4f55\u5224\u65ad\u5f53\u524d\u7528\u6237\u662f\u5426\u79bb\u5f00\u5f53\u524d\u9875\u9762"},prevItem:{title:"\u5173\u4e8evh\uff0cios\u7684bug",permalink:"/blog/\u5173\u4e8evh\uff0cios\u7684bug"},nextItem:{title:"\u9762\u8bd5\u7ecf\u5386\u603b\u7ed3",permalink:"/blog/\u9762\u8bd5\u7ecf\u5386\u603b\u7ed3"}},c={authorsImageUrls:[void 0]},s=[],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8981\u5728React\u4e2d\u5224\u65ad\u7528\u6237\u662f\u5426\u79bb\u5f00\u5f53\u524d\u9875\u9762\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect"),"\u94a9\u5b50\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"beforeunload"),"\u4e8b\u4ef6\u6765\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u4f60\u9700\u8981\u5728\u7ec4\u4ef6\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u72b6\u6001\uff0c\u7528\u4e8e\u8868\u793a\u7528\u6237\u662f\u5426\u79bb\u5f00\u5f53\u524d\u9875\u9762\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { useEffect, useState } from 'react';\n\nconst MyComponent = () => {\n  const [isPageVisible, setPageVisible] = useState(true);\n\n  useEffect(() => {\n    const handleVisibilityChange = () => {\n      setPageVisible(!document.hidden);\n    };\n\n    document.addEventListener('visibilitychange', handleVisibilityChange);\n\n    return () => {\n      document.removeEventListener('visibilitychange', handleVisibilityChange);\n    };\n  }, []);\n\n  useEffect(() => {\n    const handleBeforeUnload = (event) => {\n      event.preventDefault();\n      return event.returnValue = '\u786e\u5b9a\u8981\u79bb\u5f00\u5417\uff1f';\n    };\n\n    window.addEventListener('beforeunload', handleBeforeUnload);\n\n    return () => {\n      window.removeEventListener('beforeunload', handleBeforeUnload);\n    };\n  }, []);\n\n  return (\n    <div>\n      {isPageVisible ? '\u5f53\u524d\u9875\u9762\u53ef\u89c1' : '\u5f53\u524d\u9875\u9762\u4e0d\u53ef\u89c1'}\n    </div>\n  );\n};\n\nexport default MyComponent;\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u4e86\u4e24\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect"),"\u94a9\u5b50\u3002\u7b2c\u4e00\u4e2a\u94a9\u5b50\u7528\u4e8e\u76d1\u542c\u9875\u9762\u7684\u53ef\u89c1\u6027\u53d8\u5316\uff0c\u5f53\u9875\u9762\u7531\u53ef\u89c1\u53d8\u4e3a\u4e0d\u53ef\u89c1\u6216\u7531\u4e0d\u53ef\u89c1\u53d8\u4e3a\u53ef\u89c1\u65f6\uff0c\u66f4\u65b0",(0,a.kt)("inlineCode",{parentName:"p"},"isPageVisible"),"\u72b6\u6001\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u94a9\u5b50\u7528\u4e8e\u76d1\u542c\u9875\u9762\u5173\u95ed\u6216\u5237\u65b0\u4e8b\u4ef6\u3002\u5f53\u7528\u6237\u8bd5\u56fe\u79bb\u5f00\u5f53\u524d\u9875\u9762\u65f6\uff0c\u4f1a\u89e6\u53d1",(0,a.kt)("inlineCode",{parentName:"p"},"beforeunload"),"\u4e8b\u4ef6\u3002\u6211\u4eec\u5728\u8fd9\u4e2a\u94a9\u5b50\u4e2d\u6dfb\u52a0\u4e86\u4e00\u4e2a\u4e8b\u4ef6\u76d1\u542c\u5668\uff0c\u5f53\u4e8b\u4ef6\u89e6\u53d1\u65f6\uff0c\u963b\u6b62\u9ed8\u8ba4\u884c\u4e3a\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u4ee5\u6fc0\u6d3b\u6d4f\u89c8\u5668\u7684\u5173\u95ed\u786e\u8ba4\u63d0\u793a\u3002"),(0,a.kt)("p",null,"\u6700\u540e\uff0c\u5728\u7ec4\u4ef6\u7684\u8fd4\u56de\u503c\u4e2d\uff0c\u6839\u636e",(0,a.kt)("inlineCode",{parentName:"p"},"isPageVisible"),"\u7684\u503c\u663e\u793a\u76f8\u5e94\u7684\u5185\u5bb9\u3002"),(0,a.kt)("p",null,"\u8fd9\u6837\uff0c\u4f60\u5c31\u53ef\u4ee5\u5728React\u4e2d\u5224\u65ad\u7528\u6237\u662f\u5426\u79bb\u5f00\u5f53\u524d\u9875\u9762\u4e86\u3002\u8bf7\u6ce8\u610f\uff0c\u6d4f\u89c8\u5668\u53ef\u80fd\u5bf9",(0,a.kt)("inlineCode",{parentName:"p"},"beforeunload"),"\u4e8b\u4ef6\u7684\u4f7f\u7528\u8fdb\u884c\u9650\u5236\uff0c\u4ee5\u63d0\u4f9b\u66f4\u597d\u7684\u7528\u6237\u4f53\u9a8c\u548c\u5b89\u5168\u6027\u4fdd\u62a4\u3002\u8fd9\u610f\u5473\u7740\u4e0a\u8ff0\u4ee3\u7801\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u53ef\u80fd\u4e0d\u4f1a\u89e6\u53d1",(0,a.kt)("inlineCode",{parentName:"p"},"beforeunload"),"\u4e8b\u4ef6\u3002"))}d.isMDXComponent=!0}}]);
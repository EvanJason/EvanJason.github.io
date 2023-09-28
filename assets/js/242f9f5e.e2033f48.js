"use strict";(self.webpackChunklwl_docusaurus_website=self.webpackChunklwl_docusaurus_website||[]).push([[6564],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,y=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(y,c(c({ref:t},p),{},{components:r})):n.createElement(y,c({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9598:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={title:"\u5173\u952e\u8bcd\u9ad8\u4eae\u51fd\u6570",categories:["React","antd","Typescript","keyword"],tags:["React","antd","Typescript","keyword"],date:"2023-09-10",authors:"lin",excerpt:"\u5173\u952e\u8bcd\u9ad8\u4eae\u51fd\u6570"},c=void 0,i={unversionedId:"React/\u5173\u952e\u8bcd\u9ad8\u4eae\u51fd\u6570",id:"React/\u5173\u952e\u8bcd\u9ad8\u4eae\u51fd\u6570",title:"\u5173\u952e\u8bcd\u9ad8\u4eae\u51fd\u6570",description:"",source:"@site/docs/React/\u5173\u952e\u8bcd\u9ad8\u4eae\u51fd\u6570.md",sourceDirName:"React",slug:"/React/\u5173\u952e\u8bcd\u9ad8\u4eae\u51fd\u6570",permalink:"/docs/React/\u5173\u952e\u8bcd\u9ad8\u4eae\u51fd\u6570",draft:!1,editUrl:"https://github.com/EvanJason/EvanJason.github.io/tree/main/docs/React/\u5173\u952e\u8bcd\u9ad8\u4eae\u51fd\u6570.md",tags:[{label:"React",permalink:"/docs/tags/react"},{label:"antd",permalink:"/docs/tags/antd"},{label:"Typescript",permalink:"/docs/tags/typescript"},{label:"keyword",permalink:"/docs/tags/keyword"}],version:"current",frontMatter:{title:"\u5173\u952e\u8bcd\u9ad8\u4eae\u51fd\u6570",categories:["React","antd","Typescript","keyword"],tags:["React","antd","Typescript","keyword"],date:"2023-09-10",authors:"lin",excerpt:"\u5173\u952e\u8bcd\u9ad8\u4eae\u51fd\u6570"},sidebar:"tutorialSidebar",previous:{title:"\u5173\u4e8evh\uff0cios\u7684bug",permalink:"/docs/React/\u5173\u4e8evh\uff0cios\u7684bug"},next:{title:"\u5c01\u88c5Antd\u57fa\u7840\u8868\u5355",permalink:"/docs/React/\u5c01\u88c5Antd\u57fa\u7840\u8868\u5355"}},s={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"\xa0 \xa0 handleSearchText = (name: string, searchValue: string) => {\n        if(!name) return ''\n\xa0 \xa0 \xa0 \xa0 const index = name.indexOf(searchValue);\n\xa0 \xa0 \xa0 \xa0 const beforeStr = name.substring(0, index);\n\xa0 \xa0 \xa0 \xa0 const afterStr = name.slice(index + searchValue.length);\n\xa0 \xa0 \xa0 \xa0 const title = index > -1 ? (\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 <span>\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 {beforeStr}\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 <Typography.Text mark>{searchValue}</Typography.Text>\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 {afterStr}\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 </span>\n\xa0 \xa0 \xa0 \xa0 ) : (\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 name\n\xa0 \xa0 \xa0 \xa0 );\n\xa0 \xa0 \xa0 \xa0 return title\n\xa0 \xa0 }\n")))}d.isMDXComponent=!0}}]);
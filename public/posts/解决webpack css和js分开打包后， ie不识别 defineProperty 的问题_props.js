import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "posts/解决webpack css和js分开打包后， ie不识别 defineProperty 的问题.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/解决webpack css和js分开打包后， ie不识别 defineProperty 的问题.html",
    'title': "解决webpack css和js分开打包后， ie不识别 defineProperty 的问题",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>解决webpack css和js分开打包后， ie不识别 defineProperty 的问题</h1>\n<pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- 直接放在html中 --></span>\n<span class="token comment">&lt;!-- 不用安装npm i object-defineproperty-ie8 直接复制改npm插件里的源码，如果出现问题了，再去看下最新版本的object-defineproperty-ie8 --></span> \n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n    <span class="token keyword">var</span> origDefineProperty <span class="token operator">=</span> <span class="token known-class-name class-name">Object</span><span class="token punctuation">.</span><span class="token property-access">defineProperty</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">var</span> <span class="token function-variable function">arePropertyDescriptorsSupported</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n      <span class="token keyword control-flow">try</span> <span class="token punctuation">{</span>\n        <span class="token function">origDefineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">"x"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n          enumerable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n          value<span class="token operator">:</span> obj\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword control-flow">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> _ <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword control-flow">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword control-flow">return</span> obj<span class="token punctuation">.</span><span class="token property-access">x</span> <span class="token operator">===</span> obj<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span> <span class="token keyword control-flow">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">/* this is IE 8. */</span>\n        <span class="token keyword control-flow">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> supportsDescriptors <span class="token operator">=</span>\n      origDefineProperty <span class="token operator">&amp;&amp;</span> <span class="token function">arePropertyDescriptorsSupported</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>supportsDescriptors<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token known-class-name class-name">Object</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">defineProperty</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">//IE8支持修改元素节点的属性</span>\n        <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>origDefineProperty <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span><span class="token property-access">nodeType</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword control-flow">return</span> <span class="token function">origDefineProperty</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword control-flow">else</span> <span class="token punctuation">{</span>\n          a<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token property-access">value</span> <span class="token operator">||</span> <span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token property-access">get</span> <span class="token operator">&amp;&amp;</span> c<span class="token punctuation">.</span><span class="token method function property-access">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</code></pre>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u89E3\u51B3webpack css\u548Cjs\u5206\u5F00\u6253\u5305\u540E\uFF0C ie\u4E0D\u8BC6\u522B defineProperty \u7684\u95EE\u9898"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- 直接放在html中 --></span>\n<span class="token comment">&lt;!-- 不用安装npm i object-defineproperty-ie8 直接复制改npm插件里的源码，如果出现问题了，再去看下最新版本的object-defineproperty-ie8 --></span> \n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n    <span class="token keyword">var</span> origDefineProperty <span class="token operator">=</span> <span class="token known-class-name class-name">Object</span><span class="token punctuation">.</span><span class="token property-access">defineProperty</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">var</span> <span class="token function-variable function">arePropertyDescriptorsSupported</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n      <span class="token keyword control-flow">try</span> <span class="token punctuation">{</span>\n        <span class="token function">origDefineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">"x"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n          enumerable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n          value<span class="token operator">:</span> obj\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword control-flow">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> _ <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword control-flow">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword control-flow">return</span> obj<span class="token punctuation">.</span><span class="token property-access">x</span> <span class="token operator">===</span> obj<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span> <span class="token keyword control-flow">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">/* this is IE 8. */</span>\n        <span class="token keyword control-flow">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> supportsDescriptors <span class="token operator">=</span>\n      origDefineProperty <span class="token operator">&amp;&amp;</span> <span class="token function">arePropertyDescriptorsSupported</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>supportsDescriptors<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token known-class-name class-name">Object</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">defineProperty</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">//IE8支持修改元素节点的属性</span>\n        <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>origDefineProperty <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span><span class="token property-access">nodeType</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword control-flow">return</span> <span class="token function">origDefineProperty</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword control-flow">else</span> <span class="token punctuation">{</span>\n          a<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token property-access">value</span> <span class="token operator">||</span> <span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token property-access">get</span> <span class="token operator">&amp;&amp;</span> c<span class="token punctuation">.</span><span class="token method function property-access">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</code></pre>'
        } }),
    'toc': null,
    'author': "深海如梦",
    'contributors': [],
    'date': "Thu May 27 2021 15:20:13 GMT+0800 (中国标准时间)",
    'updated': null,
    'excerpt': "解决webpack css和js分开打包后， ie不识别 defineProperty 的问题",
    'cover': undefined,
    '‎categories': [
        "webpack",
        "ie",
        "defineProperty"
    ],
    'tags': [
        "webpack",
        "ie",
        "defineProperty"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/数组的深浅拷贝.md",
                "title": "数组的深浅拷贝",
                "link": "posts/数组的深浅拷贝.html",
                "date": "Fri Aug 20 2021 10:26:12 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "tags": [
                    "深浅拷贝"
                ],
                "excerpt": "数组的深浅拷贝"
            },
            {
                "pagePath": "posts/Vs Code 前端常用插件.md",
                "title": "前端常用插件",
                "link": "posts/Vs Code 前端常用插件.html",
                "date": "2021-08-11T14:15:56.581Z",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "vscode"
                ],
                "tags": [
                    "vscode",
                    "插件"
                ],
                "excerpt": "前端常用插件",
                "cover": "../pic/image-20210409094037510.png"
            },
            {
                "pagePath": "posts/解决webpack css和js分开打包后， ie不识别 defineProperty 的问题.md",
                "title": "解决webpack css和js分开打包后， ie不识别 defineProperty 的问题",
                "link": "posts/解决webpack css和js分开打包后， ie不识别 defineProperty 的问题.html",
                "date": "Thu May 27 2021 15:20:13 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "tags": [
                    "webpack",
                    "ie",
                    "defineProperty"
                ],
                "excerpt": "解决webpack css和js分开打包后， ie不识别 defineProperty 的问题"
            },
            {
                "pagePath": "posts/antd表格穿梭框功能.md",
                "title": "antd表格穿梭框功能",
                "link": "posts/antd表格穿梭框功能.html",
                "date": "Sat May 15 2021 13:46:09 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "antd",
                    "Angular"
                ],
                "tags": [
                    "antd",
                    "穿梭框",
                    "表格"
                ],
                "excerpt": "angular-antd穿梭框功能实现"
            },
            {
                "pagePath": "posts/git的运用操作.md",
                "title": "git的运用操作",
                "link": "posts/git的运用操作.html",
                "date": "Sat Apr 10 2021 14:20:13 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "git"
                ],
                "tags": [
                    "git"
                ],
                "excerpt": "git的运用操作",
                "cover": "../pic/a145b3dc-f7ad-4797-afc3-1187e214a171.png"
            },
            {
                "pagePath": "posts/Echarts 配置和知识点.md",
                "title": "Echarts 配置和知识点",
                "link": "posts/Echarts 配置和知识点.html",
                "date": "Mon Dec 28 2020 10:00:21 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "Angular",
                    "Echarts"
                ],
                "tags": [
                    "知识点",
                    "配置",
                    "Echarts"
                ],
                "excerpt": "Echarts 配置和知识点"
            },
            {
                "pagePath": "posts/树形控件功能实现.md",
                "title": "树形控件功能",
                "link": "posts/树形控件功能实现.html",
                "date": "Wed Dec 23 2020 09:45:45 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "antd",
                    "Angular"
                ],
                "tags": [
                    "树形控件",
                    "功能"
                ],
                "excerpt": "树形控件功能",
                "cover": "../pic/image-20210415160710543.png"
            },
            {
                "pagePath": "posts/angular项目 页面加水印.md",
                "title": "angular项目 页面加水印",
                "link": "posts/angular项目 页面加水印.html",
                "date": "Sun Dec 6 2020 20:25:12 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "Angular"
                ],
                "tags": [
                    "水印",
                    "页面水印",
                    "Angular"
                ],
                "excerpt": "html 使用 <div style=\"position: fixed;top: 0;left: 0;\"> <div *ngFor=\"let item of watermarkList\" class=\"watermarkList\"> <div [ngStyle]=\"item.objStyle\"> {{item.txt}} </div> </div> </div> ts // 页面水印 watermarkL..."
            },
            {
                "pagePath": "posts/wangEditor富文本编辑器.md",
                "title": "wangEditor富文本编辑器",
                "link": "posts/wangEditor富文本编辑器.html",
                "date": "Mon Nov 23 2020 16:20:21 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "wangEditor",
                    "Angular",
                    "富文本"
                ],
                "tags": [
                    "wangEditor",
                    "富文本"
                ],
                "excerpt": "wangEditor富文本编辑器"
            },
            {
                "pagePath": "posts/angular 复制粘贴事件.md",
                "title": "angular 复制粘贴事件",
                "link": "posts/angular 复制粘贴事件.html",
                "date": "‎‎Fri Nov 20 2020 11:03:08 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "Angular",
                    "ngx-clipboard"
                ],
                "tags": [
                    "antd",
                    "复制粘贴"
                ],
                "excerpt": "angular 复制粘贴事件"
            },
            {
                "pagePath": "posts/Angular 多类名条件判断.md",
                "title": "Angular 多类名条件判断",
                "link": "posts/Angular 多类名条件判断.html",
                "date": "‎Thu Oct 22 2020 14:20:13 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "Angular"
                ],
                "tags": [
                    "antd",
                    "条件判断",
                    "多类名"
                ],
                "excerpt": "Angular 多类名条件判断"
            }
        ],
        "categories": [
            {
                "name": "Angular",
                "count": 7
            },
            {
                "name": "antd",
                "count": 2
            },
            {
                "name": "Echarts",
                "count": 1
            },
            {
                "name": "git",
                "count": 1
            },
            {
                "name": "ngx-clipboard",
                "count": 1
            },
            {
                "name": "vscode",
                "count": 1
            },
            {
                "name": "wangEditor",
                "count": 1
            },
            {
                "name": "富文本",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "antd",
                "count": 3
            },
            {
                "name": "Angular",
                "count": 1
            },
            {
                "name": "defineProperty",
                "count": 1
            },
            {
                "name": "Echarts",
                "count": 1
            },
            {
                "name": "git",
                "count": 1
            },
            {
                "name": "ie",
                "count": 1
            },
            {
                "name": "vscode",
                "count": 1
            },
            {
                "name": "wangEditor",
                "count": 1
            },
            {
                "name": "webpack",
                "count": 1
            },
            {
                "name": "功能",
                "count": 1
            },
            {
                "name": "复制粘贴",
                "count": 1
            },
            {
                "name": "多类名",
                "count": 1
            },
            {
                "name": "富文本",
                "count": 1
            },
            {
                "name": "插件",
                "count": 1
            },
            {
                "name": "条件判断",
                "count": 1
            },
            {
                "name": "树形控件",
                "count": 1
            },
            {
                "name": "水印",
                "count": 1
            },
            {
                "name": "深浅拷贝",
                "count": 1
            },
            {
                "name": "知识点",
                "count": 1
            },
            {
                "name": "穿梭框",
                "count": 1
            },
            {
                "name": "表格",
                "count": 1
            },
            {
                "name": "配置",
                "count": 1
            },
            {
                "name": "页面水印",
                "count": 1
            }
        ]
    }
};

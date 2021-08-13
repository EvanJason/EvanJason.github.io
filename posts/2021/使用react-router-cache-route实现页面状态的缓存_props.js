import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/2021/使用react-router-cache-route实现页面状态的缓存.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/2021/使用react-router-cache-route实现页面状态的缓存.html",
    'title': "使用react-router-cache-route实现页面状态的缓存",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>使用react-router-cache-route实现页面状态的缓存</h1>\n<p>记录一下，以防不时之需</p>\n<h2 id="%E5%85%B7%E4%BD%93">具体<a class="anchor" href="#%E5%85%B7%E4%BD%93">§</a></h2>\n<p>开发中有从详情页返回列表页的需求，这样一来页面返回后使用react-router会直接刷新页面，导致页面中的分页和搜索条件全部丢失，用户体验不佳，所以就必须将列表页的状态进行缓存。\n网上搜索大概有几种方法：\n1、使用localStorage/sessionStorage进行页面的状态的保存，跳转页面后再进行获取，这种方法虽然可行，但是从根本来说还是从新向后台再一次请求了数据，不算最佳方案。\n2、react-activation,尝试未果\n3、react-kepper,需要将项目的react-router替换掉，风险较大，慎用\n4、react-router-cache-route,简单易用，最佳方案</p>\n<p>基本使用方法：\n就是把Switch替换成CacheSwitch,因为因为Switch组件只保留第一个匹配状态的路由，卸载掉其他路由\n把Route替换成CacheRoute</p>\n<p>注意：详情页面回退列表页时使用this.props.history.push(‘’路径\')可以实现页面的缓存\n但当使用this.props.history.go(-1)则缓存失败</p>\n<p>具体代码如下：</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> React<span class="token punctuation">,</span><span class="token punctuation">{</span>Component<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Route<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-router-dom\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>CacheRoute<span class="token punctuation">,</span>CacheSwitch<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-router-cache-route\'</span>\n\n\n<span class="token keyword">import</span> PublishExpend <span class="token keyword">from</span> <span class="token string">\'./publish/publishExpend.js\'</span>\n<span class="token keyword">import</span> PublishExpendDetail <span class="token keyword">from</span> <span class="token string">\'./publish/publishExpendDetail.js\'</span>\n<span class="token keyword">import</span> EditorExpend2018 <span class="token keyword">from</span> <span class="token string">\'./editor/editorExpend2018.js\'</span>\n<span class="token keyword">import</span> EditorExpend2019 <span class="token keyword">from</span> <span class="token string">\'./editor/editorExpend2019.js\'</span>\n<span class="token keyword">import</span> EditorExpend2020 <span class="token keyword">from</span> <span class="token string">\'./editor/editorExpend2020.js\'</span>\n<span class="token keyword">import</span> ExpenseSearch <span class="token keyword">from</span> <span class="token string">\'./search/expenseSearch.js\'</span>\n\n\n<span class="token keyword">class</span> <span class="token class-name">Expense</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span><span class="token punctuation">{</span>\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//:productId?,后面加上?的意思是可有可无，有的话匹配到有id的路由，没有id的话就匹配之前的路由</span>\n        <span class="token keyword">return</span><span class="token punctuation">(</span>\n            <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">\'Expense\'</span><span class="token operator">></span>\n                    <span class="token operator">&lt;</span>CacheSwitch<span class="token operator">></span>                   \n                        <span class="token operator">&lt;</span>CacheRoute exact path<span class="token operator">=</span><span class="token string">\'/platform/expense/publishExpend\'</span> component<span class="token operator">=</span><span class="token punctuation">{</span>PublishExpend<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>                    \n                        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">\'/platform/expense/publishExpend/detail/:expendId?\'</span> component<span class="token operator">=</span><span class="token punctuation">{</span>PublishExpendDetail<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>\n                        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">\'/platform/expense/editorExpend2018\'</span> component<span class="token operator">=</span><span class="token punctuation">{</span>EditorExpend2018<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>\n                        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">\'/platform/expense/editorExpend2019\'</span> component<span class="token operator">=</span><span class="token punctuation">{</span>EditorExpend2019<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>\n                        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">\'/platform/expense/editorExpend2020\'</span> component<span class="token operator">=</span><span class="token punctuation">{</span>EditorExpend2020<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>\n                        <span class="token operator">&lt;</span>Route exact path<span class="token operator">=</span><span class="token string">\'/platform/expense/expenseSearch\'</span> component<span class="token operator">=</span><span class="token punctuation">{</span>ExpenseSearch<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>\n                    <span class="token operator">&lt;</span><span class="token operator">/</span>CacheSwitch<span class="token operator">></span>\n            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n        <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> Expense<span class="token punctuation">;</span>\n</code></pre>\n<p>其他方法了解可以前往：<a href="https://github.com/CJY0208/react-router-cache-route/blob/HEAD/README_CN.md">https://github.com/CJY0208/react-router-cache-route/blob/HEAD/README_CN.md</a></p>\n<blockquote>\n<p>本文章转载自：<a href="https://blog.csdn.net/qq_44688392/article/details/108713037">使用react-router-cache-route实现页面状态的缓存_清醒且孤独的博客-CSDN博客</a></p>\n</blockquote>'
        } }),
    'head': React.createElement("link", { href: "https://willern.gitee.io/img/favicon.ico", rel: "shortcut icon" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u4F7F\u7528react-router-cache-route\u5B9E\u73B0\u9875\u9762\u72B6\u6001\u7684\u7F13\u5B58"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>记录一下，以防不时之需</p>\n<h2 id="%E5%85%B7%E4%BD%93">具体<a class="anchor" href="#%E5%85%B7%E4%BD%93">§</a></h2>\n<p>开发中有从详情页返回列表页的需求，这样一来页面返回后使用react-router会直接刷新页面，导致页面中的分页和搜索条件全部丢失，用户体验不佳，所以就必须将列表页的状态进行缓存。\n网上搜索大概有几种方法：\n1、使用localStorage/sessionStorage进行页面的状态的保存，跳转页面后再进行获取，这种方法虽然可行，但是从根本来说还是从新向后台再一次请求了数据，不算最佳方案。\n2、react-activation,尝试未果\n3、react-kepper,需要将项目的react-router替换掉，风险较大，慎用\n4、react-router-cache-route,简单易用，最佳方案</p>\n<p>基本使用方法：\n就是把Switch替换成CacheSwitch,因为因为Switch组件只保留第一个匹配状态的路由，卸载掉其他路由\n把Route替换成CacheRoute</p>\n<p>注意：详情页面回退列表页时使用this.props.history.push(‘’路径\')可以实现页面的缓存\n但当使用this.props.history.go(-1)则缓存失败</p>\n<p>具体代码如下：</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> React<span class="token punctuation">,</span><span class="token punctuation">{</span>Component<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Route<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-router-dom\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>CacheRoute<span class="token punctuation">,</span>CacheSwitch<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-router-cache-route\'</span>\n\n\n<span class="token keyword">import</span> PublishExpend <span class="token keyword">from</span> <span class="token string">\'./publish/publishExpend.js\'</span>\n<span class="token keyword">import</span> PublishExpendDetail <span class="token keyword">from</span> <span class="token string">\'./publish/publishExpendDetail.js\'</span>\n<span class="token keyword">import</span> EditorExpend2018 <span class="token keyword">from</span> <span class="token string">\'./editor/editorExpend2018.js\'</span>\n<span class="token keyword">import</span> EditorExpend2019 <span class="token keyword">from</span> <span class="token string">\'./editor/editorExpend2019.js\'</span>\n<span class="token keyword">import</span> EditorExpend2020 <span class="token keyword">from</span> <span class="token string">\'./editor/editorExpend2020.js\'</span>\n<span class="token keyword">import</span> ExpenseSearch <span class="token keyword">from</span> <span class="token string">\'./search/expenseSearch.js\'</span>\n\n\n<span class="token keyword">class</span> <span class="token class-name">Expense</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span><span class="token punctuation">{</span>\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//:productId?,后面加上?的意思是可有可无，有的话匹配到有id的路由，没有id的话就匹配之前的路由</span>\n        <span class="token keyword">return</span><span class="token punctuation">(</span>\n            <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">\'Expense\'</span><span class="token operator">></span>\n                    <span class="token operator">&lt;</span>CacheSwitch<span class="token operator">></span>                   \n                        <span class="token operator">&lt;</span>CacheRoute exact path<span class="token operator">=</span><span class="token string">\'/platform/expense/publishExpend\'</span> component<span class="token operator">=</span><span class="token punctuation">{</span>PublishExpend<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>                    \n                        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">\'/platform/expense/publishExpend/detail/:expendId?\'</span> component<span class="token operator">=</span><span class="token punctuation">{</span>PublishExpendDetail<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>\n                        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">\'/platform/expense/editorExpend2018\'</span> component<span class="token operator">=</span><span class="token punctuation">{</span>EditorExpend2018<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>\n                        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">\'/platform/expense/editorExpend2019\'</span> component<span class="token operator">=</span><span class="token punctuation">{</span>EditorExpend2019<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>\n                        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">\'/platform/expense/editorExpend2020\'</span> component<span class="token operator">=</span><span class="token punctuation">{</span>EditorExpend2020<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>\n                        <span class="token operator">&lt;</span>Route exact path<span class="token operator">=</span><span class="token string">\'/platform/expense/expenseSearch\'</span> component<span class="token operator">=</span><span class="token punctuation">{</span>ExpenseSearch<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>\n                    <span class="token operator">&lt;</span><span class="token operator">/</span>CacheSwitch<span class="token operator">></span>\n            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n        <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> Expense<span class="token punctuation">;</span>\n</code></pre>\n<p>其他方法了解可以前往：<a href="https://github.com/CJY0208/react-router-cache-route/blob/HEAD/README_CN.md">https://github.com/CJY0208/react-router-cache-route/blob/HEAD/README_CN.md</a></p>\n<blockquote>\n<p>本文章转载自：<a href="https://blog.csdn.net/qq_44688392/article/details/108713037">使用react-router-cache-route实现页面状态的缓存_清醒且孤独的博客-CSDN博客</a></p>\n</blockquote>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%85%B7%E4%BD%93" }, "\u5177\u4F53")))),
    'author': "深海如梦",
    'contributors': [
        "Evan Jason"
    ],
    'date': "2021/07/15",
    'updated': null,
    'excerpt': "使用react-router-cache-route实现页面状态的缓存",
    'cover': undefined,
    'categories': [
        "React"
    ],
    'tags': [
        "React",
        "缓存"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/2021/使用react-router-cache-route实现页面状态的缓存.md",
                "title": "使用react-router-cache-route实现页面状态的缓存",
                "link": "posts/2021/使用react-router-cache-route实现页面状态的缓存.html",
                "date": "2021/07/15",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "Evan Jason"
                ],
                "categories": [
                    "React"
                ],
                "tags": [
                    "React",
                    "缓存"
                ],
                "excerpt": "使用react-router-cache-route实现页面状态的缓存"
            },
            {
                "pagePath": "posts/2021/数组的深浅拷贝.md",
                "title": "数组的深浅拷贝",
                "link": "posts/2021/数组的深浅拷贝.html",
                "date": "2021/06/20",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "Evan Jason"
                ],
                "tags": [
                    "深浅拷贝"
                ],
                "excerpt": "数组的深浅拷贝"
            },
            {
                "pagePath": "posts/2021/解决webpack css和js分开打包后， ie不识别 defineProperty 的问题.md",
                "title": "解决webpack css和js分开打包后， ie不识别 defineProperty 的问题",
                "link": "posts/2021/解决webpack css和js分开打包后， ie不识别 defineProperty 的问题.html",
                "date": "2021/05/27",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "Evan Jason"
                ],
                "categories": [
                    "webpack"
                ],
                "tags": [
                    "webpack"
                ],
                "excerpt": "解决webpack css和js分开打包后， ie不识别 defineProperty 的问题"
            },
            {
                "pagePath": "posts/2021/antd表格穿梭框功能.md",
                "title": "antd表格穿梭框功能",
                "link": "posts/2021/antd表格穿梭框功能.html",
                "date": "2021/05/15",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "Evan Jason"
                ],
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
                "pagePath": "posts/2021/Vs Code 前端常用插件.md",
                "title": "前端常用插件",
                "link": "posts/2021/Vs Code 前端常用插件.html",
                "date": "2021/05/06",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "Evan Jason"
                ],
                "categories": [
                    "vscode"
                ],
                "tags": [
                    "vscode",
                    "插件"
                ],
                "excerpt": "前端常用插件",
                "cover": "../../pic/image-20210409094037510.png"
            },
            {
                "pagePath": "posts/2021/2020年总结 + 新的一年目标和规划.md",
                "title": "2020年总结 + 新的一年目标和规划",
                "link": "posts/2021/2020年总结 + 新的一年目标和规划.html",
                "date": "2021/02/16",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "Evan Jason"
                ],
                "categories": [
                    "日常生活",
                    "年终总结"
                ],
                "tags": [
                    "日常生活",
                    "年终总结"
                ],
                "excerpt": "2020年总结 + 新的一年目标和规划",
                "cover": "https://willern.gitee.io/2021/02/16/20210216/night.jpg"
            },
            {
                "pagePath": "posts/2021/Angular 页面水印功能实现.md",
                "title": "Angular 页面水印功能实现",
                "link": "posts/2021/Angular 页面水印功能实现.html",
                "date": "2021/01/27",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "Evan Jason"
                ],
                "categories": [
                    "Angular"
                ],
                "tags": [
                    "水印",
                    "页面水印",
                    "Angular"
                ],
                "excerpt": "Angular 页面水印功能实现",
                "cover": "https://willern.gitee.io/2021/01/27/20210127/water-mark.png"
            },
            {
                "pagePath": "posts/2021/解决网站网页html css兼容性问题.md",
                "title": "解决网站网页html css兼容性问题",
                "link": "posts/2021/解决网站网页html css兼容性问题.html",
                "date": "2021/01/21",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "Evan Jason"
                ],
                "categories": [
                    "前端"
                ],
                "tags": [
                    "前端",
                    "兼容性",
                    "css"
                ],
                "excerpt": "总结了在项目设计中遇到的兼容性问题，在此整理出来，以备不时之需。",
                "cover": "https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWFnZXMyMDE1LmNuYmxvZ3MuY29tL2Jsb2cvNzU3ODI0LzIwMTcwMy83NTc4MjQtMjAxNzAzMjExMDI1NTgyNjgtMjA1NDc4MDUyMS5wbmc?x-oss-process=image/format,png"
            },
            {
                "pagePath": "posts/2020/树形控件功能实现.md",
                "title": "树形控件功能",
                "link": "posts/2020/树形控件功能实现.html",
                "date": "2020/12/20",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "Evan Jason"
                ],
                "categories": [
                    "antd",
                    "Angular"
                ],
                "tags": [
                    "树形控件",
                    "功能"
                ],
                "excerpt": "树形控件功能",
                "cover": "../../pic/image-20210415160710543.png"
            },
            {
                "pagePath": "posts/2020/使用 Angular RouteReuseStrategy 缓存组件.md",
                "title": "使用 Angular RouteReuseStrategy 缓存组件",
                "link": "posts/2020/使用 Angular RouteReuseStrategy 缓存组件.html",
                "date": "2020/10/29",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "Evan Jason"
                ],
                "categories": [
                    "Angular"
                ],
                "tags": [
                    "Angular",
                    "Angular RouteReuseStrategy",
                    "缓存"
                ],
                "excerpt": "使用 Angular RouteReuseStrategy 缓存组件",
                "cover": "https://willern.gitee.io/2020/10/29/20201029/show.gif"
            },
            {
                "pagePath": "posts/2020/wangEditor富文本编辑器.md",
                "title": "wangEditor富文本编辑器",
                "link": "posts/2020/wangEditor富文本编辑器.html",
                "date": "2020/10/25",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "Evan Jason"
                ],
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
                "pagePath": "posts/2020/Angular 多类名条件判断.md",
                "title": "Angular 多类名条件判断",
                "link": "posts/2020/Angular 多类名条件判断.html",
                "date": "2020/10/22",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "Evan Jason"
                ],
                "categories": [
                    "Angular"
                ],
                "tags": [
                    "antd",
                    "条件判断",
                    "多类名"
                ],
                "excerpt": "Angular 多类名条件判断"
            },
            {
                "pagePath": "posts/2020/angular 复制粘贴事件.md",
                "title": "Angular 复制粘贴事件",
                "link": "posts/2020/angular 复制粘贴事件.html",
                "date": "2020/10/20",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "Evan Jason"
                ],
                "categories": [
                    "Angular",
                    "ngx-clipboard"
                ],
                "tags": [
                    "antd",
                    "复制粘贴"
                ],
                "excerpt": "Angular 复制粘贴事件"
            },
            {
                "pagePath": "posts/2020/Echarts 配置和知识点.md",
                "title": "Echarts 配置和知识点",
                "link": "posts/2020/Echarts 配置和知识点.html",
                "date": "2020/09/28",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "Evan Jason"
                ],
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
                "pagePath": "posts/2020/Vue 父子路由的实现以及父子路由的高亮切换显示问题.md",
                "title": "Vue 父子路由的实现以及父子路由的高亮切换显示问题",
                "link": "posts/2020/Vue 父子路由的实现以及父子路由的高亮切换显示问题.html",
                "date": "2020/07/11",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "Evan Jason"
                ],
                "categories": [
                    "Vue"
                ],
                "tags": [
                    "Vue",
                    "路由高亮",
                    "父子路由"
                ],
                "excerpt": "Vue 父子路由的实现以及父子路由的高亮切换显示问题"
            },
            {
                "pagePath": "posts/2020/Vue实现分页功能.md",
                "title": "Vue实现分页功能",
                "link": "posts/2020/Vue实现分页功能.html",
                "date": "2020/07/03",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "Evan Jason"
                ],
                "categories": [
                    "Vue"
                ],
                "tags": [
                    "Vue",
                    "分页"
                ],
                "excerpt": "Vue实现分页功能",
                "cover": "https://willern.gitee.io/2020/07/03/20200703/show.gif"
            },
            {
                "pagePath": "posts/2020/Vue 动态绑定多个class 带上三元运算或其他条件.md",
                "title": "Vue 动态绑定多个class 带上三元运算或其他条件",
                "link": "posts/2020/Vue 动态绑定多个class 带上三元运算或其他条件.html",
                "date": "2020/06/24",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "Evan Jason"
                ],
                "categories": [
                    "Vue"
                ],
                "tags": [
                    "Vue",
                    "条件判断",
                    "多类名"
                ],
                "excerpt": "Vue 动态绑定多个class 带上三元运算或其他条件"
            },
            {
                "pagePath": "posts/2020/Vue-router（路由）的知识点.md",
                "title": "Vue-router（路由）的知识点",
                "link": "posts/2020/Vue-router（路由）的知识点.html",
                "date": "2020/05/01",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "Evan Jason"
                ],
                "categories": [
                    "Vue"
                ],
                "tags": [
                    "Vue",
                    "vue-router"
                ],
                "excerpt": "Vue-router（路由）的知识点"
            },
            {
                "pagePath": "posts/2019/多列表的jq展开收起效果.md",
                "title": "多列表的jq展开收起效果",
                "link": "posts/2019/多列表的jq展开收起效果.html",
                "date": "2019/12/06",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "Evan Jason"
                ],
                "categories": [
                    "Jquery"
                ],
                "tags": [
                    "Jquery"
                ],
                "excerpt": "在做项目的时候碰到的一个需求要做多列表的展开和收起的效果，一开始很快就写好了，可是出现了错误，最后找到了原因是因为动画animate()的效果，最后去掉（没有过度动画蛋疼），终于解决。",
                "cover": "https://img-blog.csdnimg.cn/2019120610061415.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dxc3NoMjE=,size_16,color_FFFFFF,t_70"
            }
        ],
        "categories": [
            {
                "name": "Angular",
                "count": 8
            },
            {
                "name": "Vue",
                "count": 4
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
                "name": "Jquery",
                "count": 1
            },
            {
                "name": "ngx-clipboard",
                "count": 1
            },
            {
                "name": "React",
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
                "name": "前端",
                "count": 1
            },
            {
                "name": "富文本",
                "count": 1
            },
            {
                "name": "年终总结",
                "count": 1
            },
            {
                "name": "日常生活",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "Vue",
                "count": 4
            },
            {
                "name": "antd",
                "count": 3
            },
            {
                "name": "Angular",
                "count": 2
            },
            {
                "name": "多类名",
                "count": 2
            },
            {
                "name": "条件判断",
                "count": 2
            },
            {
                "name": "缓存",
                "count": 2
            },
            {
                "name": "Angular RouteReuseStrategy",
                "count": 1
            },
            {
                "name": "css",
                "count": 1
            },
            {
                "name": "Echarts",
                "count": 1
            },
            {
                "name": "Jquery",
                "count": 1
            },
            {
                "name": "React",
                "count": 1
            },
            {
                "name": "vscode",
                "count": 1
            },
            {
                "name": "vue-router",
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
                "name": "兼容性",
                "count": 1
            },
            {
                "name": "分页",
                "count": 1
            },
            {
                "name": "前端",
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
                "name": "富文本",
                "count": 1
            },
            {
                "name": "年终总结",
                "count": 1
            },
            {
                "name": "插件",
                "count": 1
            },
            {
                "name": "日常生活",
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
                "name": "父子路由",
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
                "name": "路由高亮",
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

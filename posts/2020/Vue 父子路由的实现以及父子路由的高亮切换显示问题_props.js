import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/2020/Vue 父子路由的实现以及父子路由的高亮切换显示问题.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/2020/Vue 父子路由的实现以及父子路由的高亮切换显示问题.html",
    'title': "Vue 父子路由的实现以及父子路由的高亮切换显示问题",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Vue 父子路由的实现以及父子路由的高亮切换显示问题</h1>\n<h2 id="%E7%88%B6%E5%AD%90%E8%B7%AF%E7%94%B1%E7%9A%84%E5%AE%9E%E7%8E%B0">父子路由的实现<a class="anchor" href="#%E7%88%B6%E5%AD%90%E8%B7%AF%E7%94%B1%E7%9A%84%E5%AE%9E%E7%8E%B0">§</a></h2>\n<p>vue中，一般路由都是写在router中index.js下的,如</p>\n<pre class="language-typescript"><code class="language-typescript">routes<span class="token operator">:</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>\n    name<span class="token operator">:</span> <span class="token string">"home"</span><span class="token punctuation">,</span>\n    component<span class="token operator">:</span> Home\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">"/about"</span><span class="token punctuation">,</span>\n    name<span class="token operator">:</span> <span class="token string">"about"</span><span class="token punctuation">,</span>\n    component<span class="token operator">:</span> About\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n</code></pre>\n<p>父子的路由利用children来实现：</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token punctuation">{</span>\n  path<span class="token operator">:</span> <span class="token string">"/about"</span><span class="token punctuation">,</span>\n  component<span class="token operator">:</span> About<span class="token punctuation">,</span>\n  children<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> <span class="token string">"/about/me"</span><span class="token punctuation">,</span>\n      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"../pages/about/Me.vue"</span><span class="token punctuation">)</span> <span class="token comment">// 这里是利用懒加载方式</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> <span class="token string">"/about/edu"</span><span class="token punctuation">,</span>\n      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"../pages/about/Edu.vue"</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre>\n<h2 id="%E7%88%B6%E5%AD%90%E8%B7%AF%E7%94%B1%E7%9A%84%E9%AB%98%E4%BA%AE%E5%88%87%E6%8D%A2">父子路由的高亮切换<a class="anchor" href="#%E7%88%B6%E5%AD%90%E8%B7%AF%E7%94%B1%E7%9A%84%E9%AB%98%E4%BA%AE%E5%88%87%E6%8D%A2">§</a></h2>\n<p>在vue中，我们默认控制高亮显示以及激活高亮的类名</p>\n<p><em><strong>.router-link-active，*</strong></em>.router-link-exact-active。***</p>\n<p>这里我用active中代表router-link-active，</p>\n<pre class="language-typescript"><code class="language-typescript">linkActiveClass<span class="token operator">:</span> <span class="token string">"active"</span><span class="token punctuation">,</span> \nlinkExactActiveClass<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>\n<span class="token comment">// 控制router-link-active和router-link-exact-active的类名，当为""就是不用这个类名，也可以自己命名类名像active</span>\n</code></pre>\n<h2 id="%E9%97%AE%E9%A2%98">问题<a class="anchor" href="#%E9%97%AE%E9%A2%98">§</a></h2>\n<p>我们需要实现的效果，父路由默认选中第一个子路由，切换子路由让父路由高亮不会消失.\n在实际开发中，可能遇到了当前路由下（父路由）在点击它的子路由时，他的（父路由）选中状态消失了</p>\n<h5 id="%E5%8E%9F%E5%9B%A0">原因<a class="anchor" href="#%E5%8E%9F%E5%9B%A0">§</a></h5>\n<blockquote>\n<p>1、子路由router-link加了exac精确匹配路由</p>\n</blockquote>\n<h2 id="%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95">解决办法<a class="anchor" href="#%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95">§</a></h2>\n<ul>\n<li>在子路由前面加上父路由路径（使父路由高亮）,并重定向到子路由路径（使子路由高亮），如下：</li>\n</ul>\n<pre class="language-typescript"><code class="language-typescript"><span class="token punctuation">{</span>\n  path<span class="token operator">:</span> <span class="token string">"/rank"</span><span class="token punctuation">,</span>\n  component<span class="token operator">:</span> Rank<span class="token punctuation">,</span>\n  children<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> <span class="token string">"/rank"</span><span class="token punctuation">,</span>  <span class="token comment">//父路由</span>\n      redirect<span class="token operator">:</span> <span class="token string">"/rank/android"</span> <span class="token comment">//重定向 </span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> <span class="token string">"/rank/android"</span><span class="token punctuation">,</span>\n      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"../pages/ranking/Android.vue"</span><span class="token punctuation">)</span> <span class="token comment">//懒加载</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> <span class="token string">"/rank/vendor"</span><span class="token punctuation">,</span>\n      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"../pages/ranking/Vendor.vue"</span><span class="token punctuation">)</span> <span class="token comment">//懒加载</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre>\n<ul>\n<li>使用.router-link-active代替.router-link-exact-active</li>\n</ul>\n<p>最后解决了问题。</p>\n<h2 id="%E8%A1%A5%E5%85%85">补充<a class="anchor" href="#%E8%A1%A5%E5%85%85">§</a></h2>\n<p>关于vue的相关知识请参考 <a href="https://cn.vuejs.org/">vue中文文档</a></p>'
        } }),
    'head': React.createElement("link", { href: "https://willern.gitee.io/img/favicon.ico", rel: "shortcut icon" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Vue \u7236\u5B50\u8DEF\u7531\u7684\u5B9E\u73B0\u4EE5\u53CA\u7236\u5B50\u8DEF\u7531\u7684\u9AD8\u4EAE\u5207\u6362\u663E\u793A\u95EE\u9898"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E7%88%B6%E5%AD%90%E8%B7%AF%E7%94%B1%E7%9A%84%E5%AE%9E%E7%8E%B0">父子路由的实现<a class="anchor" href="#%E7%88%B6%E5%AD%90%E8%B7%AF%E7%94%B1%E7%9A%84%E5%AE%9E%E7%8E%B0">§</a></h2>\n<p>vue中，一般路由都是写在router中index.js下的,如</p>\n<pre class="language-typescript"><code class="language-typescript">routes<span class="token operator">:</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>\n    name<span class="token operator">:</span> <span class="token string">"home"</span><span class="token punctuation">,</span>\n    component<span class="token operator">:</span> Home\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">"/about"</span><span class="token punctuation">,</span>\n    name<span class="token operator">:</span> <span class="token string">"about"</span><span class="token punctuation">,</span>\n    component<span class="token operator">:</span> About\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n</code></pre>\n<p>父子的路由利用children来实现：</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token punctuation">{</span>\n  path<span class="token operator">:</span> <span class="token string">"/about"</span><span class="token punctuation">,</span>\n  component<span class="token operator">:</span> About<span class="token punctuation">,</span>\n  children<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> <span class="token string">"/about/me"</span><span class="token punctuation">,</span>\n      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"../pages/about/Me.vue"</span><span class="token punctuation">)</span> <span class="token comment">// 这里是利用懒加载方式</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> <span class="token string">"/about/edu"</span><span class="token punctuation">,</span>\n      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"../pages/about/Edu.vue"</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre>\n<h2 id="%E7%88%B6%E5%AD%90%E8%B7%AF%E7%94%B1%E7%9A%84%E9%AB%98%E4%BA%AE%E5%88%87%E6%8D%A2">父子路由的高亮切换<a class="anchor" href="#%E7%88%B6%E5%AD%90%E8%B7%AF%E7%94%B1%E7%9A%84%E9%AB%98%E4%BA%AE%E5%88%87%E6%8D%A2">§</a></h2>\n<p>在vue中，我们默认控制高亮显示以及激活高亮的类名</p>\n<p><em><strong>.router-link-active，*</strong></em>.router-link-exact-active。***</p>\n<p>这里我用active中代表router-link-active，</p>\n<pre class="language-typescript"><code class="language-typescript">linkActiveClass<span class="token operator">:</span> <span class="token string">"active"</span><span class="token punctuation">,</span> \nlinkExactActiveClass<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>\n<span class="token comment">// 控制router-link-active和router-link-exact-active的类名，当为""就是不用这个类名，也可以自己命名类名像active</span>\n</code></pre>\n<h2 id="%E9%97%AE%E9%A2%98">问题<a class="anchor" href="#%E9%97%AE%E9%A2%98">§</a></h2>\n<p>我们需要实现的效果，父路由默认选中第一个子路由，切换子路由让父路由高亮不会消失.\n在实际开发中，可能遇到了当前路由下（父路由）在点击它的子路由时，他的（父路由）选中状态消失了</p>\n<h5 id="%E5%8E%9F%E5%9B%A0">原因<a class="anchor" href="#%E5%8E%9F%E5%9B%A0">§</a></h5>\n<blockquote>\n<p>1、子路由router-link加了exac精确匹配路由</p>\n</blockquote>\n<h2 id="%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95">解决办法<a class="anchor" href="#%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95">§</a></h2>\n<ul>\n<li>在子路由前面加上父路由路径（使父路由高亮）,并重定向到子路由路径（使子路由高亮），如下：</li>\n</ul>\n<pre class="language-typescript"><code class="language-typescript"><span class="token punctuation">{</span>\n  path<span class="token operator">:</span> <span class="token string">"/rank"</span><span class="token punctuation">,</span>\n  component<span class="token operator">:</span> Rank<span class="token punctuation">,</span>\n  children<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> <span class="token string">"/rank"</span><span class="token punctuation">,</span>  <span class="token comment">//父路由</span>\n      redirect<span class="token operator">:</span> <span class="token string">"/rank/android"</span> <span class="token comment">//重定向 </span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> <span class="token string">"/rank/android"</span><span class="token punctuation">,</span>\n      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"../pages/ranking/Android.vue"</span><span class="token punctuation">)</span> <span class="token comment">//懒加载</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> <span class="token string">"/rank/vendor"</span><span class="token punctuation">,</span>\n      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"../pages/ranking/Vendor.vue"</span><span class="token punctuation">)</span> <span class="token comment">//懒加载</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre>\n<ul>\n<li>使用.router-link-active代替.router-link-exact-active</li>\n</ul>\n<p>最后解决了问题。</p>\n<h2 id="%E8%A1%A5%E5%85%85">补充<a class="anchor" href="#%E8%A1%A5%E5%85%85">§</a></h2>\n<p>关于vue的相关知识请参考 <a href="https://cn.vuejs.org/">vue中文文档</a></p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%88%B6%E5%AD%90%E8%B7%AF%E7%94%B1%E7%9A%84%E5%AE%9E%E7%8E%B0" }, "\u7236\u5B50\u8DEF\u7531\u7684\u5B9E\u73B0")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%88%B6%E5%AD%90%E8%B7%AF%E7%94%B1%E7%9A%84%E9%AB%98%E4%BA%AE%E5%88%87%E6%8D%A2" }, "\u7236\u5B50\u8DEF\u7531\u7684\u9AD8\u4EAE\u5207\u6362")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E9%97%AE%E9%A2%98" }, "\u95EE\u9898"),
                React.createElement("ol", null)),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95" }, "\u89E3\u51B3\u529E\u6CD5")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E8%A1%A5%E5%85%85" }, "\u8865\u5145")))),
    'author': "深海如梦",
    'contributors': [
        "EvanJason"
    ],
    'date': "2020/07/11",
    'updated': null,
    'excerpt': "Vue 父子路由的实现以及父子路由的高亮切换显示问题",
    'cover': undefined,
    'categories': [
        "Vue"
    ],
    'tags': [
        "Vue",
        "路由高亮",
        "父子路由"
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
                    "EvanJason"
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
                    "EvanJason"
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
                    "EvanJason"
                ],
                "tags": [
                    "webpack",
                    "ie",
                    "defineProperty"
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
                    "EvanJason"
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
                    "EvanJason"
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
                    "EvanJason"
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
                    "EvanJason"
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
                    "EvanJason"
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
                    "EvanJason"
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
                    "EvanJason"
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
                    "EvanJason"
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
                    "EvanJason"
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
                    "EvanJason"
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
                    "EvanJason"
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
                    "EvanJason"
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
                    "EvanJason"
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
                    "EvanJason"
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
                    "EvanJason"
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
                    "EvanJason"
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
                "name": "defineProperty",
                "count": 1
            },
            {
                "name": "Echarts",
                "count": 1
            },
            {
                "name": "ie",
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

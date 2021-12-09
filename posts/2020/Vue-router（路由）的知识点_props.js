import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/2020/Vue-router（路由）的知识点.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/2020/Vue-router（路由）的知识点.html",
    'title': "Vue-router（路由）的知识点",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Vue-router（路由）的知识点</h1>\n<h2 id="%E4%B8%80%E5%AE%89%E8%A3%85">一、安装<a class="anchor" href="#%E4%B8%80%E5%AE%89%E8%A3%85">§</a></h2>\n<p>如果你用vue-cli脚手架来搭建项目，配置过程会选择是否用到路由（详细见vue-cli 脚手架），如果选择y，后面下载依赖会自动下载vue-router。\n这里还是说一下安装：npm install vue-router</p>\n<h2 id="%E4%BA%8C%E5%88%9B%E5%BB%BA%E7%BB%84%E4%BB%B6">二、创建组件<a class="anchor" href="#%E4%BA%8C%E5%88%9B%E5%BB%BA%E7%BB%84%E4%BB%B6">§</a></h2>\n<p>如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能，在项目目录结构中，src文件目录下会有一个router文件夹，此处就是编写路由组件的地方。在src/router/index.js，这个文件就是路由的核心文件：</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">\'vue\'</span> <span class="token comment">//引入Vue</span>\n<span class="token keyword">import</span> Router <span class="token keyword">from</span> <span class="token string">\'vue-router\'</span> <span class="token comment">//引入vue-router</span>\n<span class="token comment">// 设置路由</span>\n<span class="token keyword">import</span> routes <span class="token keyword">from</span> <span class="token string">\'./routerConfig\'</span>  <span class="token comment">//引入同目录下的自定义路由</span>\n\nVue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Router<span class="token punctuation">)</span> <span class="token comment">//Vue全局使用Router</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token comment">//大家都知道，路由地址都是以"#"形式展示，但是有些时候，我们又希望路由地址中不出现"#"，</span>\n  <span class="token comment">//那怎么办呢？  vue给我们提供了一个属性mode="history";代码如下</span>\n  mode<span class="token operator">:</span> <span class="token string">\'history\'</span><span class="token punctuation">,</span> \n  <span class="token comment">//自定义路由</span>\n  routes\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n<h2 id="%E4%B8%89router-link%E5%88%B6%E4%BD%9C%E5%AF%BC%E8%88%AA">三、router-link制作导航<a class="anchor" href="#%E4%B8%89router-link%E5%88%B6%E4%BD%9C%E5%AF%BC%E8%88%AA">§</a></h2>\n<ol>\n<li>\n<p>router-link 是一个组件，它默认会被渲染成一个带有链接的a标签，通过to属性指定链接地址。\n注意：被选中的router-link将自动添加一个class属性值.router-link-active。\n例：我们在App.vue中添加2个导航（你需要在components下创建2个vue文件）</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/First<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span> |\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/About<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>关于<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n</li>\n<li>\n<p>router-view 用于渲染匹配到的组件。</p>\n<p>可以给router-view组件设置transition过渡（<a href="https://cn.vuejs.org/v2/guide/transitions.html">Vue2.0 Transition常见用法全解惑</a>）。</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fade<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">></span></span>\n</code></pre>\n<p><strong>css过渡类名：</strong>\n组件过渡过程中，会有四个CSS类名进行切换，这四个类名与transition的name属性有关，比如name=“fade”,会有如下四个CSS类名：</p>\n<p><code>fade-enter:进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除。</code></p>\n<p><code>fade-enter-active:进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除。</code></p>\n<p><code>fade-leave:离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除。</code></p>\n<p><code>fade-leave-active:离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除。</code></p>\n<p>从上面四个类名可以看出，<strong>fade-enter-active和fade-leave-active</strong>在整个进入或离开过程中都有效，所以CSS的transition属性在这两个类下进行设置。</p>\n<p><strong>过渡模式mode：</strong></p>\n<ul>\n<li>in-out(mode默认in-out模式）：新元素先进入过渡，完成之后当前元素过渡离开。</li>\n<li>out-in：当前元素先进行过渡离开，离开完成后新元素过渡进入。</li>\n</ul>\n<p>还可以配合使用，<strong>keep-alive</strong>可以缓存数据，这样不至于重新渲染路由组件的时候，之前那个路由组件的数据被清除了。比如对当前的路由组件a进行了一些DOM操作之后，点击进入另一个路由组件b，再回到路由组件a的时候之前的DOM操作还保存在，如果不加keep-alive再回到路由组件a时，之前的DOM操作就没有了，得重新进行。如果你的应用里有一个购物车组件，就需要用到keep-alive。</p>\n</li>\n</ol>\n<h2 id="%E5%9B%9B%E8%87%AA%E5%AE%9A%E4%B9%89%E8%B7%AF%E7%94%B1">四、自定义路由<a class="anchor" href="#%E5%9B%9B%E8%87%AA%E5%AE%9A%E4%B9%89%E8%B7%AF%E7%94%B1">§</a></h2>\n<p>因为我们是自定义的路由所在我们需要在router文件夹下新建一个routerConfig.js的文件\n然后填入引用的路由文件和相关参数，代码如下：</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> First <span class="token keyword">from</span> <span class="token string">\'@/components/First\'</span>\n<span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">\'@/components/About\'</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span> <span class="token comment">// 导出路由配置</span>\n  <span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">\'/First\'</span><span class="token punctuation">,</span>\n    name<span class="token operator">:</span> <span class="token string">\'First\'</span><span class="token punctuation">,</span>\n    component<span class="token operator">:</span> First\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">\'/About\'</span><span class="token punctuation">,</span>\n    name<span class="token operator">:</span> <span class="token string">\'About\'</span><span class="token punctuation">,</span>\n    component<span class="token operator">:</span> About\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">\'*\'</span><span class="token punctuation">,</span>\n    redirect<span class="token operator">:</span> <span class="token string">\'/First\'</span> <span class="token comment">// 默认指定页面首页</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n</code></pre>\n<p>最后保存，然后 npm run dev 就可以看到可以切换不同的页面了</p>\n<h2 id="%E4%BA%94%E8%A1%A5%E5%85%85">五、补充<a class="anchor" href="#%E4%BA%94%E8%A1%A5%E5%85%85">§</a></h2>\n<p><a href="https://router.vuejs.org/zh/api/#router-link">官方文档</a></p>'
        } }),
    'head': React.createElement("link", { href: "https://willern.gitee.io/img/favicon.ico", rel: "shortcut icon" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Vue-router\uFF08\u8DEF\u7531\uFF09\u7684\u77E5\u8BC6\u70B9"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E4%B8%80%E5%AE%89%E8%A3%85">一、安装<a class="anchor" href="#%E4%B8%80%E5%AE%89%E8%A3%85">§</a></h2>\n<p>如果你用vue-cli脚手架来搭建项目，配置过程会选择是否用到路由（详细见vue-cli 脚手架），如果选择y，后面下载依赖会自动下载vue-router。\n这里还是说一下安装：npm install vue-router</p>\n<h2 id="%E4%BA%8C%E5%88%9B%E5%BB%BA%E7%BB%84%E4%BB%B6">二、创建组件<a class="anchor" href="#%E4%BA%8C%E5%88%9B%E5%BB%BA%E7%BB%84%E4%BB%B6">§</a></h2>\n<p>如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能，在项目目录结构中，src文件目录下会有一个router文件夹，此处就是编写路由组件的地方。在src/router/index.js，这个文件就是路由的核心文件：</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">\'vue\'</span> <span class="token comment">//引入Vue</span>\n<span class="token keyword">import</span> Router <span class="token keyword">from</span> <span class="token string">\'vue-router\'</span> <span class="token comment">//引入vue-router</span>\n<span class="token comment">// 设置路由</span>\n<span class="token keyword">import</span> routes <span class="token keyword">from</span> <span class="token string">\'./routerConfig\'</span>  <span class="token comment">//引入同目录下的自定义路由</span>\n\nVue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Router<span class="token punctuation">)</span> <span class="token comment">//Vue全局使用Router</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token comment">//大家都知道，路由地址都是以"#"形式展示，但是有些时候，我们又希望路由地址中不出现"#"，</span>\n  <span class="token comment">//那怎么办呢？  vue给我们提供了一个属性mode="history";代码如下</span>\n  mode<span class="token operator">:</span> <span class="token string">\'history\'</span><span class="token punctuation">,</span> \n  <span class="token comment">//自定义路由</span>\n  routes\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n<h2 id="%E4%B8%89router-link%E5%88%B6%E4%BD%9C%E5%AF%BC%E8%88%AA">三、router-link制作导航<a class="anchor" href="#%E4%B8%89router-link%E5%88%B6%E4%BD%9C%E5%AF%BC%E8%88%AA">§</a></h2>\n<ol>\n<li>\n<p>router-link 是一个组件，它默认会被渲染成一个带有链接的a标签，通过to属性指定链接地址。\n注意：被选中的router-link将自动添加一个class属性值.router-link-active。\n例：我们在App.vue中添加2个导航（你需要在components下创建2个vue文件）</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/First<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span> |\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/About<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>关于<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n</li>\n<li>\n<p>router-view 用于渲染匹配到的组件。</p>\n<p>可以给router-view组件设置transition过渡（<a href="https://cn.vuejs.org/v2/guide/transitions.html">Vue2.0 Transition常见用法全解惑</a>）。</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fade<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">></span></span>\n</code></pre>\n<p><strong>css过渡类名：</strong>\n组件过渡过程中，会有四个CSS类名进行切换，这四个类名与transition的name属性有关，比如name=“fade”,会有如下四个CSS类名：</p>\n<p><code>fade-enter:进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除。</code></p>\n<p><code>fade-enter-active:进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除。</code></p>\n<p><code>fade-leave:离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除。</code></p>\n<p><code>fade-leave-active:离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除。</code></p>\n<p>从上面四个类名可以看出，<strong>fade-enter-active和fade-leave-active</strong>在整个进入或离开过程中都有效，所以CSS的transition属性在这两个类下进行设置。</p>\n<p><strong>过渡模式mode：</strong></p>\n<ul>\n<li>in-out(mode默认in-out模式）：新元素先进入过渡，完成之后当前元素过渡离开。</li>\n<li>out-in：当前元素先进行过渡离开，离开完成后新元素过渡进入。</li>\n</ul>\n<p>还可以配合使用，<strong>keep-alive</strong>可以缓存数据，这样不至于重新渲染路由组件的时候，之前那个路由组件的数据被清除了。比如对当前的路由组件a进行了一些DOM操作之后，点击进入另一个路由组件b，再回到路由组件a的时候之前的DOM操作还保存在，如果不加keep-alive再回到路由组件a时，之前的DOM操作就没有了，得重新进行。如果你的应用里有一个购物车组件，就需要用到keep-alive。</p>\n</li>\n</ol>\n<h2 id="%E5%9B%9B%E8%87%AA%E5%AE%9A%E4%B9%89%E8%B7%AF%E7%94%B1">四、自定义路由<a class="anchor" href="#%E5%9B%9B%E8%87%AA%E5%AE%9A%E4%B9%89%E8%B7%AF%E7%94%B1">§</a></h2>\n<p>因为我们是自定义的路由所在我们需要在router文件夹下新建一个routerConfig.js的文件\n然后填入引用的路由文件和相关参数，代码如下：</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> First <span class="token keyword">from</span> <span class="token string">\'@/components/First\'</span>\n<span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">\'@/components/About\'</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span> <span class="token comment">// 导出路由配置</span>\n  <span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">\'/First\'</span><span class="token punctuation">,</span>\n    name<span class="token operator">:</span> <span class="token string">\'First\'</span><span class="token punctuation">,</span>\n    component<span class="token operator">:</span> First\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">\'/About\'</span><span class="token punctuation">,</span>\n    name<span class="token operator">:</span> <span class="token string">\'About\'</span><span class="token punctuation">,</span>\n    component<span class="token operator">:</span> About\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">\'*\'</span><span class="token punctuation">,</span>\n    redirect<span class="token operator">:</span> <span class="token string">\'/First\'</span> <span class="token comment">// 默认指定页面首页</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n</code></pre>\n<p>最后保存，然后 npm run dev 就可以看到可以切换不同的页面了</p>\n<h2 id="%E4%BA%94%E8%A1%A5%E5%85%85">五、补充<a class="anchor" href="#%E4%BA%94%E8%A1%A5%E5%85%85">§</a></h2>\n<p><a href="https://router.vuejs.org/zh/api/#router-link">官方文档</a></p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%B8%80%E5%AE%89%E8%A3%85" }, "\u4E00\u3001\u5B89\u88C5")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%BA%8C%E5%88%9B%E5%BB%BA%E7%BB%84%E4%BB%B6" }, "\u4E8C\u3001\u521B\u5EFA\u7EC4\u4EF6")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%B8%89router-link%E5%88%B6%E4%BD%9C%E5%AF%BC%E8%88%AA" }, "\u4E09\u3001router-link\u5236\u4F5C\u5BFC\u822A")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%9B%9B%E8%87%AA%E5%AE%9A%E4%B9%89%E8%B7%AF%E7%94%B1" }, "\u56DB\u3001\u81EA\u5B9A\u4E49\u8DEF\u7531")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%BA%94%E8%A1%A5%E5%85%85" }, "\u4E94\u3001\u8865\u5145")))),
    'author': "深海如梦",
    'contributors': [
        "EvanJason"
    ],
    'date': "2020/05/01",
    'updated': null,
    'excerpt': "Vue-router（路由）的知识点",
    'cover': undefined,
    'categories': [
        "Vue"
    ],
    'tags': [
        "Vue",
        "vue-router"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/2021/解决react项目生产环境部署，浏览器可以看到源码的问题.md",
                "title": "解决 react 项目生产环境部署，浏览器可以看到源码的问题",
                "link": "posts/2021/解决react项目生产环境部署，浏览器可以看到源码的问题.html",
                "date": "2021/11/21",
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
                    "打包"
                ],
                "excerpt": "React生产环境还有源代码的问题解决,并记录"
            },
            {
                "pagePath": "posts/2021/localstorage和sessionstorage的封装.md",
                "title": "localstorage 和 sessionstorage 的封装",
                "link": "posts/2021/localstorage和sessionstorage的封装.html",
                "date": "2021/10/15",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "Angular"
                ],
                "tags": [
                    "localstorage",
                    "sessionstorage"
                ],
                "excerpt": "localstorage和sessionstorage的封装"
            },
            {
                "pagePath": "posts/2021/Angular表格自定义列配置.md",
                "title": "Angular 表格自定义列配置",
                "link": "posts/2021/Angular表格自定义列配置.html",
                "date": "2021/10/10",
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
                    "表格",
                    "自定义"
                ],
                "excerpt": "Angular表格自定义列配置"
            },
            {
                "pagePath": "posts/2021/Angular光标处插入图片功能.md",
                "title": "Angular 光标处插入图片功能",
                "link": "posts/2021/Angular光标处插入图片功能.html",
                "date": "2021/09/20",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "Angular"
                ],
                "tags": [
                    "插入功能",
                    "光标处",
                    "聚焦"
                ],
                "excerpt": "Angular光标处插入图片功能"
            },
            {
                "pagePath": "posts/2021/通用水印功能实现.md",
                "title": "通用水印功能实现",
                "link": "posts/2021/通用水印功能实现.html",
                "date": "2021/08/16",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "水印"
                ],
                "tags": [
                    "水印",
                    "页面水印"
                ],
                "excerpt": "新的水印功能实现"
            },
            {
                "pagePath": "posts/2021/语言代码表.md",
                "title": "语言代码表",
                "link": "posts/2021/语言代码表.html",
                "date": "2021/07/27",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "工具"
                ],
                "tags": [
                    "语言代码表"
                ],
                "excerpt": "语言代码表"
            },
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
                "categories": [
                    "webpack"
                ],
                "tags": [
                    "webpack"
                ],
                "excerpt": "解决webpack css和js分开打包后， ie不识别 defineProperty 的问题"
            },
            {
                "pagePath": "posts/2021/vscode快捷键.md",
                "title": "vscode 快捷键",
                "link": "posts/2021/vscode快捷键.html",
                "date": "2021/05/25",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "工具"
                ],
                "tags": [
                    "vscode",
                    "快捷键"
                ],
                "excerpt": "vscode快捷键"
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
                "count": 11
            },
            {
                "name": "Vue",
                "count": 4
            },
            {
                "name": "antd",
                "count": 3
            },
            {
                "name": "React",
                "count": 2
            },
            {
                "name": "工具",
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
            },
            {
                "name": "水印",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "antd",
                "count": 4
            },
            {
                "name": "Vue",
                "count": 4
            },
            {
                "name": "Angular",
                "count": 2
            },
            {
                "name": "React",
                "count": 2
            },
            {
                "name": "vscode",
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
                "name": "水印",
                "count": 2
            },
            {
                "name": "缓存",
                "count": 2
            },
            {
                "name": "表格",
                "count": 2
            },
            {
                "name": "页面水印",
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
                "name": "localstorage",
                "count": 1
            },
            {
                "name": "sessionstorage",
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
                "name": "光标处",
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
                "name": "快捷键",
                "count": 1
            },
            {
                "name": "打包",
                "count": 1
            },
            {
                "name": "插件",
                "count": 1
            },
            {
                "name": "插入功能",
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
                "name": "聚焦",
                "count": 1
            },
            {
                "name": "自定义",
                "count": 1
            },
            {
                "name": "语言代码表",
                "count": 1
            },
            {
                "name": "路由高亮",
                "count": 1
            },
            {
                "name": "配置",
                "count": 1
            }
        ]
    }
};

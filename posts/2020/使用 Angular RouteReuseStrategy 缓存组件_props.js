import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/2020/使用 Angular RouteReuseStrategy 缓存组件.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/2020/使用 Angular RouteReuseStrategy 缓存组件.html",
    'title': "使用 Angular RouteReuseStrategy 缓存组件",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>使用 Angular RouteReuseStrategy 缓存组件</h1>\n<p>记录在项目中需求所需要的功能点实现。</p>\n<p><a href="https://angular.cn/api/router/RouteReuseStrategy">RouteReuseStrategy</a> provider 允许我们控制 Angular 路由和组件生命周期的行为。</p>\n<p>当我们在组件间切换的时候，Angular都会销毁上一个组件，并且创建一个新的组件。在大多数情况下，我们可能不想让它这样工作，因为每次加载一个组件，可能会有很多类似HTTP请求一样的昂贵的操作。</p>\n<p>这时候就需要RouteReuseStrategy了。</p>\n<h3 id="routereusestrategy%E6%98%AF%E4%BB%80%E4%B9%88">RouteReuseStrategy是什么<a class="anchor" href="#routereusestrategy%E6%98%AF%E4%BB%80%E4%B9%88">§</a></h3>\n<p>RouteReuseStrategy接口声明了5个方法。</p>\n<h4 id="shouldreuseroute">shouldReuseRoute<a class="anchor" href="#shouldreuseroute">§</a></h4>\n<p>这个方法每次切换路由时都会被调用。<code>future</code>参数是将要离开的路由，<code>curr</code>参数是将要加载的路由。如果这个方法返回<code>true</code>，路由将不会跳转（意味着路由没有发生变化）。如果它返回<code>false</code>，则路由发生变化并且其余方法会被调用。</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token function">shouldReuseRoute</span><span class="token punctuation">(</span>future<span class="token operator">:</span> ActivatedRouteSnapshot<span class="token punctuation">,</span> curr<span class="token operator">:</span> ActivatedRouteSnapshot<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 默认行为</span>\n    <span class="token keyword">return</span> future<span class="token punctuation">.</span>routeConfig <span class="token operator">===</span> curr<span class="token punctuation">.</span>routeConfig<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h4 id="shouldattach">shouldAttach<a class="anchor" href="#shouldattach">§</a></h4>\n<p>路由刚刚被打开，当我们加载到这个路由的组件上时，<code>shouldAttach</code>会被调用。一旦组件被加载这个方法都会被调用。如果这个方法返回<code>true</code>，<code>retrieve</code>方法将会被调用。否则这个组件将会被重新创建。</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token function">shouldAttach</span><span class="token punctuation">(</span>route<span class="token operator">:</span> ActivatedRouteSnapshot<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n</code></pre>\n<h4 id="retrieve">retrieve<a class="anchor" href="#retrieve">§</a></h4>\n<p>当<code>shouldAttach</code>方法返回<code>true</code>时这个方法会被调用。提供当前路由的参数（刚打开的路由），并且返回一个缓存的<code>RouteHandle</code>。如果返回<code>null</code>表示没有效果。我们可以使用这个方法手动获取任何已被缓存的<code>RouteHandle</code>。框架不会自动管理它，需要我们手动实现。</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token function">retrieve</span><span class="token punctuation">(</span>route<span class="token operator">:</span> ActivatedRouteSnapshot<span class="token punctuation">)</span><span class="token operator">:</span> DetachedRouteHandle <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n</code></pre>\n<h4 id="shoulddetach">shouldDetach<a class="anchor" href="#shoulddetach">§</a></h4>\n<p>当离开当前路由时这个方法会被调用。如果返回<code>true</code>，<code>store</code>方法会被调用。</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token function">shouldDetach</span><span class="token punctuation">(</span>route<span class="token operator">:</span> ActivatedRouteSnapshot<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n</code></pre>\n<h4 id="store">store<a class="anchor" href="#store">§</a></h4>\n<p>这个方法当且仅当<code>shouldDetach</code>方法返回<code>true</code>时被调用。我们可以在这里具体实现如何缓存<code>RouteHandle</code>。在这个方法中缓存的内容将会被用在<code>retrieve</code>方法中。它提供了我们离开的路由和<code>RouteHandle</code>。</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token function">store</span><span class="token punctuation">(</span>route<span class="token operator">:</span> ActivatedRouteSnapshot<span class="token punctuation">,</span> detachedTree<span class="token operator">:</span> DetachedRouteHandle<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n</code></pre>\n<h3 id="%E7%A4%BA%E4%BE%8B">示例<a class="anchor" href="#%E7%A4%BA%E4%BE%8B">§</a></h3>\n<p><code>src/services/route-strategy.service.ts</code>:</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token punctuation">{</span> RouteReuseStrategy<span class="token punctuation">,</span> DetachedRouteHandle<span class="token punctuation">,</span> ActivatedRouteSnapshot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@angular/router\'</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">RouteStrategyService</span> <span class="token keyword">implements</span> <span class="token class-name">RouteReuseStrategy</span> <span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token keyword">static</span> handlers<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> DetachedRouteHandle <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">deleteRouteSnapshot</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> name <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\/</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">\'_\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>RouteStrategyService<span class="token punctuation">.</span>handlers<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">delete</span> RouteStrategyService<span class="token punctuation">.</span>handlers<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token doc-comment comment">/**\n   * 判断当前路由是否需要缓存\n   * 这个方法返回false时则路由发生变化并且其余方法会被调用\n   * <span class="token keyword">@param</span> <span class="token punctuation">{</span>ActivatedRouteSnapshot<span class="token punctuation">}</span> future\n   * <span class="token keyword">@param</span> <span class="token punctuation">{</span>ActivatedRouteSnapshot<span class="token punctuation">}</span> curr\n   * <span class="token keyword">@returns</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span>\n   * <span class="token keyword">@memberof</span> CacheRouteReuseStrategy\n   */</span>\n  <span class="token keyword">public</span> <span class="token function">shouldReuseRoute</span><span class="token punctuation">(</span>future<span class="token operator">:</span> ActivatedRouteSnapshot<span class="token punctuation">,</span> curr<span class="token operator">:</span> ActivatedRouteSnapshot<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> future<span class="token punctuation">.</span>routeConfig <span class="token operator">===</span> curr<span class="token punctuation">.</span>routeConfig\n      <span class="token operator">&amp;&amp;</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>future<span class="token punctuation">.</span>params<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>curr<span class="token punctuation">.</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token doc-comment comment">/**\n   * 当离开当前路由时这个方法会被调用\n   * 如果返回 true 则 store 方法会被调用\n   * <span class="token keyword">@param</span> <span class="token punctuation">{</span>ActivatedRouteSnapshot<span class="token punctuation">}</span> route\n   * <span class="token keyword">@returns</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span>\n   * <span class="token keyword">@memberof</span> CacheRouteReuseStrategy\n   */</span>\n  <span class="token keyword">public</span> <span class="token function">shouldDetach</span><span class="token punctuation">(</span>route<span class="token operator">:</span> ActivatedRouteSnapshot<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token doc-comment comment">/**\n   * 将路由写入缓存\n   * 在这里具体实现如何缓存 RouteHandle\n   * 提供了我们离开的路由和 RouteHandle\n   * <span class="token keyword">@param</span> <span class="token punctuation">{</span>ActivatedRouteSnapshot<span class="token punctuation">}</span> route\n   * <span class="token keyword">@param</span> <span class="token punctuation">{</span>DetachedRouteHandle<span class="token punctuation">}</span> detachedTree\n   * <span class="token keyword">@memberof</span> CacheRouteReuseStrategy\n   */</span>\n  <span class="token keyword">public</span> <span class="token function">store</span><span class="token punctuation">(</span>route<span class="token operator">:</span> ActivatedRouteSnapshot<span class="token punctuation">,</span> detachedTree<span class="token operator">:</span> DetachedRouteHandle<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    RouteStrategyService<span class="token punctuation">.</span>handlers<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> detachedTree<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token doc-comment comment">/**\n   * 路由被导航 如果此方法返回 true 则触发 retrieve 方法\n   * 如果返回 false 这个组件将会被重新创建\n   * <span class="token keyword">@param</span> <span class="token punctuation">{</span>ActivatedRouteSnapshot<span class="token punctuation">}</span> route\n   * <span class="token keyword">@returns</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span>\n   * <span class="token keyword">@memberof</span> CacheRouteReuseStrategy\n   */</span>\n  <span class="token keyword">public</span> <span class="token function">shouldAttach</span><span class="token punctuation">(</span>route<span class="token operator">:</span> ActivatedRouteSnapshot<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token operator">!</span><span class="token operator">!</span>RouteStrategyService<span class="token punctuation">.</span>handlers<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token doc-comment comment">/**\n   * 从缓存读取cached route\n   * 提供当前路由的参数（刚打开的路由），并且返回一个缓存的 RouteHandle\n   * 可以使用这个方法手动获取任何已被缓存的 RouteHandle\n   * <span class="token keyword">@param</span> <span class="token punctuation">{</span>ActivatedRouteSnapshot<span class="token punctuation">}</span> route\n   * <span class="token keyword">@returns</span> <span class="token punctuation">{</span>(DetachedRouteHandle | null)<span class="token punctuation">}</span>\n   * <span class="token keyword">@memberof</span> CacheRouteReuseStrategy\n   */</span>\n  <span class="token keyword">public</span> <span class="token function">retrieve</span><span class="token punctuation">(</span>route<span class="token operator">:</span> ActivatedRouteSnapshot<span class="token punctuation">)</span><span class="token operator">:</span> DetachedRouteHandle <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> RouteStrategyService<span class="token punctuation">.</span>handlers<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">private</span> <span class="token function">getPath</span><span class="token punctuation">(</span>route<span class="token operator">:</span> ActivatedRouteSnapshot<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>\n    <span class="token comment">// tslint:disable-next-line: no-string-literal</span>\n    <span class="token keyword">const</span> path <span class="token operator">=</span> route<span class="token punctuation">[</span><span class="token string">\'_routerState\'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\/</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">\'_\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> path<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p><code>src/app/app.module.ts</code>:</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token punctuation">{</span> RouteReuseStrategy <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@angular/router\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> RouteStrategyService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'../services/route-strategy.service\'</span><span class="token punctuation">;</span>\n\n@<span class="token function">NgModule</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n    providers<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token operator">...</span>\n        <span class="token punctuation">{</span> provide<span class="token operator">:</span> RouteReuseStrategy<span class="token punctuation">,</span> useClass<span class="token operator">:</span> RouteStrategyService <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    bootstrap<span class="token operator">:</span> <span class="token punctuation">[</span>AppComponent<span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppModule</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>\n</code></pre>\n<p>以上示例运行时会缓存所有路由组件。\n实现比如标签页效果时，关闭标签页，调用<code>RouteStrategyService</code>中的<code>deleteRouteSnapshot</code>方法删除已缓存的页面即可。</p>\n<p><em>这里可能会有个问题，如果你不想用这个路由缓存了，请务必删除掉app.module.ts中的providers，而不是将RouteStrategyService的shouldReuseRoute始终return true；这样会出现路由跳转页面不跳转的问题，原因暂时未知。</em></p>\n<h2 id="%E6%95%88%E6%9E%9C%E5%9B%BE">效果图<a class="anchor" href="#%E6%95%88%E6%9E%9C%E5%9B%BE">§</a></h2>\n<p><a href="https://willern.gitee.io/2020/10/29/20201029/show.gif"><img src="https://willern.gitee.io/2020/10/29/20201029/show.gif" alt="img"></a></p>\n<blockquote>\n<p>文章转载于https://www.cnblogs.com/jehorn/p/11776730.html</p>\n</blockquote>'
        } }),
    'head': React.createElement("link", { href: "https://willern.gitee.io/img/favicon.ico", rel: "shortcut icon" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u4F7F\u7528 Angular RouteReuseStrategy \u7F13\u5B58\u7EC4\u4EF6"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>记录在项目中需求所需要的功能点实现。</p>\n<p><a href="https://angular.cn/api/router/RouteReuseStrategy">RouteReuseStrategy</a> provider 允许我们控制 Angular 路由和组件生命周期的行为。</p>\n<p>当我们在组件间切换的时候，Angular都会销毁上一个组件，并且创建一个新的组件。在大多数情况下，我们可能不想让它这样工作，因为每次加载一个组件，可能会有很多类似HTTP请求一样的昂贵的操作。</p>\n<p>这时候就需要RouteReuseStrategy了。</p>\n<h3 id="routereusestrategy%E6%98%AF%E4%BB%80%E4%B9%88">RouteReuseStrategy是什么<a class="anchor" href="#routereusestrategy%E6%98%AF%E4%BB%80%E4%B9%88">§</a></h3>\n<p>RouteReuseStrategy接口声明了5个方法。</p>\n<h4 id="shouldreuseroute">shouldReuseRoute<a class="anchor" href="#shouldreuseroute">§</a></h4>\n<p>这个方法每次切换路由时都会被调用。<code>future</code>参数是将要离开的路由，<code>curr</code>参数是将要加载的路由。如果这个方法返回<code>true</code>，路由将不会跳转（意味着路由没有发生变化）。如果它返回<code>false</code>，则路由发生变化并且其余方法会被调用。</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token function">shouldReuseRoute</span><span class="token punctuation">(</span>future<span class="token operator">:</span> ActivatedRouteSnapshot<span class="token punctuation">,</span> curr<span class="token operator">:</span> ActivatedRouteSnapshot<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 默认行为</span>\n    <span class="token keyword">return</span> future<span class="token punctuation">.</span>routeConfig <span class="token operator">===</span> curr<span class="token punctuation">.</span>routeConfig<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h4 id="shouldattach">shouldAttach<a class="anchor" href="#shouldattach">§</a></h4>\n<p>路由刚刚被打开，当我们加载到这个路由的组件上时，<code>shouldAttach</code>会被调用。一旦组件被加载这个方法都会被调用。如果这个方法返回<code>true</code>，<code>retrieve</code>方法将会被调用。否则这个组件将会被重新创建。</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token function">shouldAttach</span><span class="token punctuation">(</span>route<span class="token operator">:</span> ActivatedRouteSnapshot<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n</code></pre>\n<h4 id="retrieve">retrieve<a class="anchor" href="#retrieve">§</a></h4>\n<p>当<code>shouldAttach</code>方法返回<code>true</code>时这个方法会被调用。提供当前路由的参数（刚打开的路由），并且返回一个缓存的<code>RouteHandle</code>。如果返回<code>null</code>表示没有效果。我们可以使用这个方法手动获取任何已被缓存的<code>RouteHandle</code>。框架不会自动管理它，需要我们手动实现。</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token function">retrieve</span><span class="token punctuation">(</span>route<span class="token operator">:</span> ActivatedRouteSnapshot<span class="token punctuation">)</span><span class="token operator">:</span> DetachedRouteHandle <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n</code></pre>\n<h4 id="shoulddetach">shouldDetach<a class="anchor" href="#shoulddetach">§</a></h4>\n<p>当离开当前路由时这个方法会被调用。如果返回<code>true</code>，<code>store</code>方法会被调用。</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token function">shouldDetach</span><span class="token punctuation">(</span>route<span class="token operator">:</span> ActivatedRouteSnapshot<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n</code></pre>\n<h4 id="store">store<a class="anchor" href="#store">§</a></h4>\n<p>这个方法当且仅当<code>shouldDetach</code>方法返回<code>true</code>时被调用。我们可以在这里具体实现如何缓存<code>RouteHandle</code>。在这个方法中缓存的内容将会被用在<code>retrieve</code>方法中。它提供了我们离开的路由和<code>RouteHandle</code>。</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token function">store</span><span class="token punctuation">(</span>route<span class="token operator">:</span> ActivatedRouteSnapshot<span class="token punctuation">,</span> detachedTree<span class="token operator">:</span> DetachedRouteHandle<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n</code></pre>\n<h3 id="%E7%A4%BA%E4%BE%8B">示例<a class="anchor" href="#%E7%A4%BA%E4%BE%8B">§</a></h3>\n<p><code>src/services/route-strategy.service.ts</code>:</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token punctuation">{</span> RouteReuseStrategy<span class="token punctuation">,</span> DetachedRouteHandle<span class="token punctuation">,</span> ActivatedRouteSnapshot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@angular/router\'</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">RouteStrategyService</span> <span class="token keyword">implements</span> <span class="token class-name">RouteReuseStrategy</span> <span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token keyword">static</span> handlers<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> DetachedRouteHandle <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">deleteRouteSnapshot</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> name <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\/</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">\'_\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>RouteStrategyService<span class="token punctuation">.</span>handlers<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">delete</span> RouteStrategyService<span class="token punctuation">.</span>handlers<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token doc-comment comment">/**\n   * 判断当前路由是否需要缓存\n   * 这个方法返回false时则路由发生变化并且其余方法会被调用\n   * <span class="token keyword">@param</span> <span class="token punctuation">{</span>ActivatedRouteSnapshot<span class="token punctuation">}</span> future\n   * <span class="token keyword">@param</span> <span class="token punctuation">{</span>ActivatedRouteSnapshot<span class="token punctuation">}</span> curr\n   * <span class="token keyword">@returns</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span>\n   * <span class="token keyword">@memberof</span> CacheRouteReuseStrategy\n   */</span>\n  <span class="token keyword">public</span> <span class="token function">shouldReuseRoute</span><span class="token punctuation">(</span>future<span class="token operator">:</span> ActivatedRouteSnapshot<span class="token punctuation">,</span> curr<span class="token operator">:</span> ActivatedRouteSnapshot<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> future<span class="token punctuation">.</span>routeConfig <span class="token operator">===</span> curr<span class="token punctuation">.</span>routeConfig\n      <span class="token operator">&amp;&amp;</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>future<span class="token punctuation">.</span>params<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>curr<span class="token punctuation">.</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token doc-comment comment">/**\n   * 当离开当前路由时这个方法会被调用\n   * 如果返回 true 则 store 方法会被调用\n   * <span class="token keyword">@param</span> <span class="token punctuation">{</span>ActivatedRouteSnapshot<span class="token punctuation">}</span> route\n   * <span class="token keyword">@returns</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span>\n   * <span class="token keyword">@memberof</span> CacheRouteReuseStrategy\n   */</span>\n  <span class="token keyword">public</span> <span class="token function">shouldDetach</span><span class="token punctuation">(</span>route<span class="token operator">:</span> ActivatedRouteSnapshot<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token doc-comment comment">/**\n   * 将路由写入缓存\n   * 在这里具体实现如何缓存 RouteHandle\n   * 提供了我们离开的路由和 RouteHandle\n   * <span class="token keyword">@param</span> <span class="token punctuation">{</span>ActivatedRouteSnapshot<span class="token punctuation">}</span> route\n   * <span class="token keyword">@param</span> <span class="token punctuation">{</span>DetachedRouteHandle<span class="token punctuation">}</span> detachedTree\n   * <span class="token keyword">@memberof</span> CacheRouteReuseStrategy\n   */</span>\n  <span class="token keyword">public</span> <span class="token function">store</span><span class="token punctuation">(</span>route<span class="token operator">:</span> ActivatedRouteSnapshot<span class="token punctuation">,</span> detachedTree<span class="token operator">:</span> DetachedRouteHandle<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    RouteStrategyService<span class="token punctuation">.</span>handlers<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> detachedTree<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token doc-comment comment">/**\n   * 路由被导航 如果此方法返回 true 则触发 retrieve 方法\n   * 如果返回 false 这个组件将会被重新创建\n   * <span class="token keyword">@param</span> <span class="token punctuation">{</span>ActivatedRouteSnapshot<span class="token punctuation">}</span> route\n   * <span class="token keyword">@returns</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span>\n   * <span class="token keyword">@memberof</span> CacheRouteReuseStrategy\n   */</span>\n  <span class="token keyword">public</span> <span class="token function">shouldAttach</span><span class="token punctuation">(</span>route<span class="token operator">:</span> ActivatedRouteSnapshot<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token operator">!</span><span class="token operator">!</span>RouteStrategyService<span class="token punctuation">.</span>handlers<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token doc-comment comment">/**\n   * 从缓存读取cached route\n   * 提供当前路由的参数（刚打开的路由），并且返回一个缓存的 RouteHandle\n   * 可以使用这个方法手动获取任何已被缓存的 RouteHandle\n   * <span class="token keyword">@param</span> <span class="token punctuation">{</span>ActivatedRouteSnapshot<span class="token punctuation">}</span> route\n   * <span class="token keyword">@returns</span> <span class="token punctuation">{</span>(DetachedRouteHandle | null)<span class="token punctuation">}</span>\n   * <span class="token keyword">@memberof</span> CacheRouteReuseStrategy\n   */</span>\n  <span class="token keyword">public</span> <span class="token function">retrieve</span><span class="token punctuation">(</span>route<span class="token operator">:</span> ActivatedRouteSnapshot<span class="token punctuation">)</span><span class="token operator">:</span> DetachedRouteHandle <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> RouteStrategyService<span class="token punctuation">.</span>handlers<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">private</span> <span class="token function">getPath</span><span class="token punctuation">(</span>route<span class="token operator">:</span> ActivatedRouteSnapshot<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>\n    <span class="token comment">// tslint:disable-next-line: no-string-literal</span>\n    <span class="token keyword">const</span> path <span class="token operator">=</span> route<span class="token punctuation">[</span><span class="token string">\'_routerState\'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\/</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">\'_\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> path<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p><code>src/app/app.module.ts</code>:</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token punctuation">{</span> RouteReuseStrategy <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@angular/router\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> RouteStrategyService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'../services/route-strategy.service\'</span><span class="token punctuation">;</span>\n\n@<span class="token function">NgModule</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n    providers<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token operator">...</span>\n        <span class="token punctuation">{</span> provide<span class="token operator">:</span> RouteReuseStrategy<span class="token punctuation">,</span> useClass<span class="token operator">:</span> RouteStrategyService <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    bootstrap<span class="token operator">:</span> <span class="token punctuation">[</span>AppComponent<span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppModule</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>\n</code></pre>\n<p>以上示例运行时会缓存所有路由组件。\n实现比如标签页效果时，关闭标签页，调用<code>RouteStrategyService</code>中的<code>deleteRouteSnapshot</code>方法删除已缓存的页面即可。</p>\n<p><em>这里可能会有个问题，如果你不想用这个路由缓存了，请务必删除掉app.module.ts中的providers，而不是将RouteStrategyService的shouldReuseRoute始终return true；这样会出现路由跳转页面不跳转的问题，原因暂时未知。</em></p>\n<h2 id="%E6%95%88%E6%9E%9C%E5%9B%BE">效果图<a class="anchor" href="#%E6%95%88%E6%9E%9C%E5%9B%BE">§</a></h2>\n<p><a href="https://willern.gitee.io/2020/10/29/20201029/show.gif"><img src="https://willern.gitee.io/2020/10/29/20201029/show.gif" alt="img"></a></p>\n<blockquote>\n<p>文章转载于https://www.cnblogs.com/jehorn/p/11776730.html</p>\n</blockquote>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#routereusestrategy%E6%98%AF%E4%BB%80%E4%B9%88" }, "RouteReuseStrategy\u662F\u4EC0\u4E48"),
                React.createElement("ol", null)),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%A4%BA%E4%BE%8B" }, "\u793A\u4F8B")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%95%88%E6%9E%9C%E5%9B%BE" }, "\u6548\u679C\u56FE")))),
    'author': "深海如梦",
    'contributors': [
        "Evan Jason"
    ],
    'date': "2020/10/29",
    'updated': null,
    'excerpt': "使用 Angular RouteReuseStrategy 缓存组件",
    'cover': "https://willern.gitee.io/2020/10/29/20201029/show.gif",
    'categories': [
        "Angular"
    ],
    'tags': [
        "Angular",
        "Angular RouteReuseStrategy",
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

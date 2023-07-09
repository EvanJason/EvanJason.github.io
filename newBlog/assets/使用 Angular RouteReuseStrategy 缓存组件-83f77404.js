const e={title:"使用 Angular RouteReuseStrategy 缓存组件",categories:["Angular"],tags:["Angular","Angular RouteReuseStrategy","缓存"],date:"2020-10-29",author:"深海如梦",excerpt:"使用 Angular RouteReuseStrategy 缓存组件"},t=`<h1>使用 Angular RouteReuseStrategy 缓存组件</h1>
<p>记录在项目中需求所需要的功能点实现。</p>
<p><a href="https://angular.cn/api/router/RouteReuseStrategy">RouteReuseStrategy</a> provider 允许我们控制 Angular 路由和组件生命周期的行为。</p>
<p>当我们在组件间切换的时候，Angular都会销毁上一个组件，并且创建一个新的组件。在大多数情况下，我们可能不想让它这样工作，因为每次加载一个组件，可能会有很多类似HTTP请求一样的昂贵的操作。</p>
<p>这时候就需要RouteReuseStrategy了。</p>
<h3>RouteReuseStrategy是什么</h3>
<p>RouteReuseStrategy接口声明了5个方法。</p>
<h4>shouldReuseRoute</h4>
<p>这个方法每次切换路由时都会被调用。<code>future</code>参数是将要离开的路由，<code>curr</code>参数是将要加载的路由。如果这个方法返回<code>true</code>，路由将不会跳转（意味着路由没有发生变化）。如果它返回<code>false</code>，则路由发生变化并且其余方法会被调用。</p>
<pre><code class="language-typescript">shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    // 默认行为
    return future.routeConfig === curr.routeConfig;
}
</code></pre>
<h4>shouldAttach</h4>
<p>路由刚刚被打开，当我们加载到这个路由的组件上时，<code>shouldAttach</code>会被调用。一旦组件被加载这个方法都会被调用。如果这个方法返回<code>true</code>，<code>retrieve</code>方法将会被调用。否则这个组件将会被重新创建。</p>
<pre><code class="language-typescript">shouldAttach(route: ActivatedRouteSnapshot): boolean;
</code></pre>
<h4>retrieve</h4>
<p>当<code>shouldAttach</code>方法返回<code>true</code>时这个方法会被调用。提供当前路由的参数（刚打开的路由），并且返回一个缓存的<code>RouteHandle</code>。如果返回<code>null</code>表示没有效果。我们可以使用这个方法手动获取任何已被缓存的<code>RouteHandle</code>。框架不会自动管理它，需要我们手动实现。</p>
<pre><code class="language-typescript">retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null;
</code></pre>
<h4>shouldDetach</h4>
<p>当离开当前路由时这个方法会被调用。如果返回<code>true</code>，<code>store</code>方法会被调用。</p>
<pre><code class="language-typescript">shouldDetach(route: ActivatedRouteSnapshot): boolean;
</code></pre>
<h4>store</h4>
<p>这个方法当且仅当<code>shouldDetach</code>方法返回<code>true</code>时被调用。我们可以在这里具体实现如何缓存<code>RouteHandle</code>。在这个方法中缓存的内容将会被用在<code>retrieve</code>方法中。它提供了我们离开的路由和<code>RouteHandle</code>。</p>
<pre><code class="language-typescript">store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void;
</code></pre>
<h3>示例</h3>
<p><code>src/services/route-strategy.service.ts</code>:</p>
<pre><code class="language-typescript">import { RouteReuseStrategy, DetachedRouteHandle, ActivatedRouteSnapshot } from '@angular/router';
export class RouteStrategyService implements RouteReuseStrategy {
  public static handlers: { [key: string]: DetachedRouteHandle } = {};
  public static deleteRouteSnapshot(path: string): void {
    const name = path.replace(/\\//g, '_');
    if (RouteStrategyService.handlers[name]) {
      delete RouteStrategyService.handlers[name];
    }
  }
  /**
   * 判断当前路由是否需要缓存
   * 这个方法返回false时则路由发生变化并且其余方法会被调用
   * @param {ActivatedRouteSnapshot} future
   * @param {ActivatedRouteSnapshot} curr
   * @returns {boolean}
   * @memberof CacheRouteReuseStrategy
   */
  public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig
      &amp;&amp; JSON.stringify(future.params) === JSON.stringify(curr.params);
  }
  /**
   * 当离开当前路由时这个方法会被调用
   * 如果返回 true 则 store 方法会被调用
   * @param {ActivatedRouteSnapshot} route
   * @returns {boolean}
   * @memberof CacheRouteReuseStrategy
   */
  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return true;
  }
  /**
   * 将路由写入缓存
   * 在这里具体实现如何缓存 RouteHandle
   * 提供了我们离开的路由和 RouteHandle
   * @param {ActivatedRouteSnapshot} route
   * @param {DetachedRouteHandle} detachedTree
   * @memberof CacheRouteReuseStrategy
   */
  public store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void {
    RouteStrategyService.handlers[this.getPath(route)] = detachedTree;
  }
  /**
   * 路由被导航 如果此方法返回 true 则触发 retrieve 方法
   * 如果返回 false 这个组件将会被重新创建
   * @param {ActivatedRouteSnapshot} route
   * @returns {boolean}
   * @memberof CacheRouteReuseStrategy
   */
  public shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!RouteStrategyService.handlers[this.getPath(route)];
  }
  /**
   * 从缓存读取cached route
   * 提供当前路由的参数（刚打开的路由），并且返回一个缓存的 RouteHandle
   * 可以使用这个方法手动获取任何已被缓存的 RouteHandle
   * @param {ActivatedRouteSnapshot} route
   * @returns {(DetachedRouteHandle | null)}
   * @memberof CacheRouteReuseStrategy
   */
  public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return RouteStrategyService.handlers[this.getPath(route)] || null;
  }
  private getPath(route: ActivatedRouteSnapshot): string {
    // tslint:disable-next-line: no-string-literal
    const path = route['_routerState'].url.replace(/\\//g, '_');
    return path;
  }
}
</code></pre>
<p><code>src/app/app.module.ts</code>:</p>
<pre><code class="language-typescript">import { RouteReuseStrategy } from '@angular/router';
import { RouteStrategyService } from '../services/route-strategy.service';

@NgModule({
    ...
    providers: [
        ...
        { provide: RouteReuseStrategy, useClass: RouteStrategyService }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
</code></pre>
<p>以上示例运行时会缓存所有路由组件。
实现比如标签页效果时，关闭标签页，调用<code>RouteStrategyService</code>中的<code>deleteRouteSnapshot</code>方法删除已缓存的页面即可。</p>
<p><em>这里可能会有个问题，如果你不想用这个路由缓存了，请务必删除掉app.module.ts中的providers，而不是将RouteStrategyService的shouldReuseRoute始终return true；这样会出现路由跳转页面不跳转的问题，原因暂时未知。</em></p>
<h2>效果图</h2>
<p><a href="https://willern.gitee.io/2020/10/29/20201029/show.gif"><img src="https://willern.gitee.io/2020/10/29/20201029/show.gif" alt="img"></a></p>
<blockquote>
<p>文章转载于https://www.cnblogs.com/jehorn/p/11776730.html</p>
</blockquote>
`;export{e as attributes,t as html};

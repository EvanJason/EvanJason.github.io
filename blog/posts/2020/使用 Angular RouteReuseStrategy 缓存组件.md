---
categories:
  - Angular
tags:
  - Angular
  - Angular RouteReuseStrategy
  - 缓存
date: 2020/10/29
author: 深海如梦
excerpt: 使用 Angular RouteReuseStrategy 缓存组件
---



# 使用 Angular RouteReuseStrategy 缓存组件

记录在项目中需求所需要的功能点实现。



[RouteReuseStrategy](https://angular.cn/api/router/RouteReuseStrategy) provider 允许我们控制 Angular 路由和组件生命周期的行为。

当我们在组件间切换的时候，Angular都会销毁上一个组件，并且创建一个新的组件。在大多数情况下，我们可能不想让它这样工作，因为每次加载一个组件，可能会有很多类似HTTP请求一样的昂贵的操作。

这时候就需要RouteReuseStrategy了。

### RouteReuseStrategy是什么

RouteReuseStrategy接口声明了5个方法。

#### shouldReuseRoute

这个方法每次切换路由时都会被调用。`future`参数是将要离开的路由，`curr`参数是将要加载的路由。如果这个方法返回`true`，路由将不会跳转（意味着路由没有发生变化）。如果它返回`false`，则路由发生变化并且其余方法会被调用。

```typescript
shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    // 默认行为
    return future.routeConfig === curr.routeConfig;
}
```

#### shouldAttach

路由刚刚被打开，当我们加载到这个路由的组件上时，`shouldAttach`会被调用。一旦组件被加载这个方法都会被调用。如果这个方法返回`true`，`retrieve`方法将会被调用。否则这个组件将会被重新创建。

```typescript
shouldAttach(route: ActivatedRouteSnapshot): boolean;
```

#### retrieve

当`shouldAttach`方法返回`true`时这个方法会被调用。提供当前路由的参数（刚打开的路由），并且返回一个缓存的`RouteHandle`。如果返回`null`表示没有效果。我们可以使用这个方法手动获取任何已被缓存的`RouteHandle`。框架不会自动管理它，需要我们手动实现。

```typescript
retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null;
```

#### shouldDetach

当离开当前路由时这个方法会被调用。如果返回`true`，`store`方法会被调用。

```typescript
shouldDetach(route: ActivatedRouteSnapshot): boolean;
```

#### store

这个方法当且仅当`shouldDetach`方法返回`true`时被调用。我们可以在这里具体实现如何缓存`RouteHandle`。在这个方法中缓存的内容将会被用在`retrieve`方法中。它提供了我们离开的路由和`RouteHandle`。

```typescript
store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void;
```

### 示例

`src/services/route-strategy.service.ts`:

```typescript
import { RouteReuseStrategy, DetachedRouteHandle, ActivatedRouteSnapshot } from '@angular/router';
export class RouteStrategyService implements RouteReuseStrategy {
  public static handlers: { [key: string]: DetachedRouteHandle } = {};
  public static deleteRouteSnapshot(path: string): void {
    const name = path.replace(/\//g, '_');
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
      && JSON.stringify(future.params) === JSON.stringify(curr.params);
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
    const path = route['_routerState'].url.replace(/\//g, '_');
    return path;
  }
}
```

`src/app/app.module.ts`:

```typescript
import { RouteReuseStrategy } from '@angular/router';
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
```

以上示例运行时会缓存所有路由组件。
实现比如标签页效果时，关闭标签页，调用`RouteStrategyService`中的`deleteRouteSnapshot`方法删除已缓存的页面即可。

*这里可能会有个问题，如果你不想用这个路由缓存了，请务必删除掉app.module.ts中的providers，而不是将RouteStrategyService的shouldReuseRoute始终return true；这样会出现路由跳转页面不跳转的问题，原因暂时未知。*

## 效果图

[![img](https://willern.gitee.io/2020/10/29/20201029/show.gif)](https://willern.gitee.io/2020/10/29/20201029/show.gif)

> 文章转载于https://www.cnblogs.com/jehorn/p/11776730.html
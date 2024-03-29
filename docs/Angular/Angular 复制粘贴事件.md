---
title: Angular 复制粘贴事件

categories:
  - Angular
  - ngx-clipboard

tags:
  - antd
  - 复制粘贴  

date: "2020-10-20"

author: 深海如梦

excerpt: Angular 复制粘贴事件

---



# Angular 复制粘贴事件

```html
<a ngxClipboard [cbContent]="复制的内容" (cbOnSuccess)="successFun($event)" (click)="copy($event)">复制粘贴事件</a>
```



在shared.module.ts 中 声明  

```typescript
共享组件
import {ClipboardModule} from 'ngx-clipboard';

@NgModule({
  exports: [
    ClipboardModule,
    ...
  ],
  imports: [
    ClipboardModule,
    ...
  ]
})

```



在父组件 的 module

```typescript
import {SharedModule} from '../../shared.module';
import {childComponent} from '../childComponent';

@NgModule({
  imports: [
    SharedModule,
    ...
  ],
  declarations: [
    childComponent,
    ...
  ]
      
})

export class ParentModule {
}
```



父组件下的子组件中使用

```typescript
childComponent.ts

// 复制粘贴事件
  successFun(e) {
    // console.log(e);
    if (e.isSuccess === true) {
      this.message.config({
        nzMaxStack: 1,
      });
      this.message.success('复制成功!');
    }
  }

  copy(e) {
    e.preventDefault();
  }
```






const n={title:"Angular 复制粘贴事件",categories:["Angular","ngx-clipboard"],tags:["antd","复制粘贴"],date:"2020-10-20",author:"深海如梦",excerpt:"Angular 复制粘贴事件"},e=`<h1>Angular 复制粘贴事件</h1>
<pre><code class="language-html">&lt;a ngxClipboard [cbContent]=&quot;复制的内容&quot; (cbOnSuccess)=&quot;successFun($event)&quot; (click)=&quot;copy($event)&quot;&gt;复制粘贴事件&lt;/a&gt;
</code></pre>
<p>在shared.module.ts 中 声明</p>
<pre><code class="language-typescript">共享组件
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

</code></pre>
<p>在父组件 的 module</p>
<pre><code class="language-typescript">import {SharedModule} from '../../shared.module';
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
</code></pre>
<p>父组件下的子组件中使用</p>
<pre><code class="language-typescript">childComponent.ts

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
</code></pre>
`;export{n as attributes,e as html};

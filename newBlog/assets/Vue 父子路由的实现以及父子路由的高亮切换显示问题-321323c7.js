const n={title:"Vue 父子路由的实现以及父子路由的高亮切换显示问题",categories:["Vue"],tags:["Vue","路由高亮","父子路由"],date:"2020-07-11",author:"深海如梦",excerpt:"Vue 父子路由的实现以及父子路由的高亮切换显示问题"},t=`<h1>Vue 父子路由的实现以及父子路由的高亮切换显示问题</h1>
<h2>父子路由的实现</h2>
<p>vue中，一般路由都是写在router中index.js下的,如</p>
<pre><code class="language-typescript">routes: [
  {
    path: &quot;/&quot;,
    name: &quot;home&quot;,
    component: Home
  },
  {
    path: &quot;/about&quot;,
    name: &quot;about&quot;,
    component: About
  },
]
</code></pre>
<p>父子的路由利用children来实现：</p>
<pre><code class="language-typescript">{
  path: &quot;/about&quot;,
  component: About,
  children: [
    {
      path: &quot;/about/me&quot;,
      component: () =&gt; import(&quot;../pages/about/Me.vue&quot;) // 这里是利用懒加载方式
    },
    {
      path: &quot;/about/edu&quot;,
      component: () =&gt; import(&quot;../pages/about/Edu.vue&quot;)
    }
  ]
},
</code></pre>
<h2>父子路由的高亮切换</h2>
<p>在vue中，我们默认控制高亮显示以及激活高亮的类名</p>
<p><em><strong>.router-link-active，*</strong></em>.router-link-exact-active。***</p>
<p>这里我用active中代表router-link-active，</p>
<pre><code class="language-typescript">linkActiveClass: &quot;active&quot;, 
linkExactActiveClass: &quot;&quot;,
// 控制router-link-active和router-link-exact-active的类名，当为&quot;&quot;就是不用这个类名，也可以自己命名类名像active
</code></pre>
<h2>问题</h2>
<p>我们需要实现的效果，父路由默认选中第一个子路由，切换子路由让父路由高亮不会消失.
在实际开发中，可能遇到了当前路由下（父路由）在点击它的子路由时，他的（父路由）选中状态消失了</p>
<h5>原因</h5>
<blockquote>
<p>1、子路由router-link加了exac精确匹配路由</p>
</blockquote>
<h2>解决办法</h2>
<ul>
<li>在子路由前面加上父路由路径（使父路由高亮）,并重定向到子路由路径（使子路由高亮），如下：</li>
</ul>
<pre><code class="language-typescript">{
  path: &quot;/rank&quot;,
  component: Rank,
  children: [
    {
      path: &quot;/rank&quot;,  //父路由
      redirect: &quot;/rank/android&quot; //重定向 
    },
    {
      path: &quot;/rank/android&quot;,
      component: () =&gt; import(&quot;../pages/ranking/Android.vue&quot;) //懒加载
    },
    {
      path: &quot;/rank/vendor&quot;,
      component: () =&gt; import(&quot;../pages/ranking/Vendor.vue&quot;) //懒加载
    }
  ]
},
</code></pre>
<ul>
<li>使用.router-link-active代替.router-link-exact-active</li>
</ul>
<p>最后解决了问题。</p>
<h2>补充</h2>
<p>关于vue的相关知识请参考 <a href="https://cn.vuejs.org/">vue中文文档</a></p>
`;export{n as attributes,t as html};

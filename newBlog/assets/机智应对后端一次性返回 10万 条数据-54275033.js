const n={title:"机智应对后端一次性返回 10万 条数据",categories:["大量数据"],tags:["大量数据"],date:"2023-05-08",author:"深海如梦",excerpt:"机智应对后端一次性返回 10万 条数据"},t=`<h1>机智应对后端一次性返回 10万 条数据</h1>
<h2>问题描述</h2>
<ul>
<li>面试官：后端一次性返回<code>10万条</code>数据给你，你如何处理？</li>
<li>我：歪嘴一笑，<code>what the f**k!</code></li>
</ul>
<h2>问题考察点</h2>
<p><strong>看似无厘头的问题，实际上考查候选人</strong>**「知识的广度和深度」****，虽然在工作中这种情况很少遇到...**</p>
<ul>
<li>考察前端如何处理大量数据</li>
<li>考察候选人对于大量数据的性能优化</li>
<li><strong>「考察候选人处理问题的思考方式」</strong>（关于这一点，文末会说到，大家继续阅读）</li>
<li>......</li>
</ul>
<h2>使用express创建一个十万条数据的接口</h2>
<p><strong>若是道友对</strong><code>express</code><strong>相关不太熟悉的话，有空可以看看笔者的这一篇全栈文章（还有完整代码哦）：****《Vue+Express+Mysql全栈项目之增删改查、分页排序导出表格功能》</strong></p>
<pre><code class="language-typescript">route.get(&quot;/bigData&quot;, (req, res) =&gt; {
  res.header('Access-Control-Allow-Origin', '*'); // 允许跨域
  let arr = [] // 定义数组，存放十万条数据
  for (let i = 0; i &lt; 100000; i++) { // 循环添加十万条数据
    arr.push({
      id: i + 1,
      name: '名字' + (i + 1),
      value: i + 1,
    })
  }
  res.send({ code: 0, msg: '成功', data: arr }) // 将十万条数据返回之
})
</code></pre>
<h2>点击按钮，发请求，获取数据，渲染到表格上</h2>
<p><strong>html结构如下：</strong></p>
<pre><code class="language-typescript">&lt;el-button :loading=&quot;loading&quot; @click=&quot;plan&quot;&gt;点击请求加载&lt;/el-button&gt;

&lt;el-table :data=&quot;arr&quot;&gt;
  &lt;el-table-column type=&quot;index&quot; label=&quot;序&quot; /&gt;
  &lt;el-table-column prop=&quot;id&quot; label=&quot;ID&quot; /&gt;
  &lt;el-table-column prop=&quot;name&quot; label=&quot;名字&quot; /&gt;
  &lt;el-table-column prop=&quot;value&quot; label=&quot;对应值&quot; /&gt;
&lt;/el-table&gt;

data() {
    return {
      arr: [],
      loading: false,
    };
},

async plan() {
    // 发请求，拿数据，赋值给arr
}
</code></pre>
<h2>方案一: 使用定时器<code>分组分批分堆</code>依次渲染（定时加载、分堆思想）</h2>
<ul>
<li>正常来说，十万条数据请求，需要2秒到10秒之间（有可能更长，取决于数据具体内容）</li>
<li>而这种方式就是，前端请求到10万条数据以后，先不着急渲染，先将10万条数据分堆分批次</li>
<li>比如一堆存放10条数据，那么十万条数据就有一万堆</li>
<li>使用定时器，一次渲染一堆，渲染一万次即可</li>
<li>这样做的话，页面就不会卡死了</li>
</ul>
<h2>分组分批分堆函数</h2>
<ul>
<li>我们先写一个函数，用于将10万条数据进行分堆</li>
<li>所谓的分堆其实**「思想就是一次截取一定长度的数据」**</li>
<li>比如一次截取10条数据，<code>头一次截取0~9，第二次截取10~19等固定长度的截取</code></li>
<li>举例原来的数据是：<code>[1,2,3,4,5,6,7]</code></li>
<li>假设我们分堆以后，一堆分3个，那么得到的结果就是二维数组了</li>
<li>即：<code>[ [1,2,3], [4,5,6], [7]]</code></li>
<li>然后就遍历这个二维数组，得到每一项的数据，即为每一堆的数据</li>
<li>进而使用定时器一点点、一堆堆赋值渲染即可</li>
</ul>
<p><strong>分组分批分堆函数（一堆分10个）</strong></p>
<pre><code class="language-typescript">function averageFn(arr) {
  let i = 0; // 1. 从第0个开始截取
  let result = []; // 2. 定义结果，结果是二维数组
  while (i &lt; arr.length) { // 6. 当索引等于或者大于总长度时，即截取完毕
    // 3. 从原始数组的第一项开始遍历
    result.push(arr.slice(i, i + 10)); // 4. 在原有十万条数据上，一次截取10个用于分堆
    i = i + 10; // 5. 这10条数据截取完，再截取下十条数据，以此类推
  }
  return result; // 7. 最后把结果丢出去即可
}
</code></pre>
<h2>创建定时器去依次赋值渲染</h2>
<p><strong>比如我们每隔一秒钟去赋值渲染一次</strong></p>
<pre><code class="language-typescript">  async plan() {
      this.loading = true;
      const res = await axios.get(&quot;http://ashuai.work:10000/bigData&quot;);
      this.loading = false;
      let twoDArr = averageFn(res.data.data);
      for (let i = 0; i &lt; twoDArr.length; i++) {
        // 相当于在很短的时间内创建许多个定时任务去处理
        setTimeout(() =&gt; {
          this.arr = [...this.arr, ...twoDArr[i]]; // 赋值渲染
        }, 1000 * i); // 17 * i // 注意设定的时间间隔... 17 = 1000 / 60
      }
    },
</code></pre>
<p><strong>这种方式，相当于在很短的时间内创建许多个定时任务去处理，定时任务太多了，也耗费资源啊。</strong></p>
<p><strong>实际上，这种方式就有了大数据量分页的思想</strong></p>
<h2>方案二: 使用requestAnimationFrame替代定时器去做渲染</h2>
<p><strong>关于</strong><code>requestAnimationFrame</code><strong>比</strong><code>定时器</code><strong>的</strong><code>优点</code><strong>，道友们可以看笔者的这篇文章：《<strong><strong>性能优化之通俗易懂学习requestAnimationFrame和使用场景举例</strong></strong>》</strong></p>
<blockquote>
<p><strong>「反正大家遇到定时器的时候，就可以考虑一下，是否可以使用请求动画帧进行优化执行渲染？」</strong></p>
</blockquote>
<p><strong>如果使用请求动画帧的话，就要修改一下代码写法了，前面的不变化，plan方法中的写法变一下即可，注意注释：</strong></p>
<pre><code class="language-typescript">async plan() {
  this.loading = true;
  const res = await axios.get(&quot;http://ashuai.work:10000/bigData&quot;);
  this.loading = false;
  // 1. 将大数据量分堆
  let twoDArr = averageFn(res.data.data);
  // 2. 定义一个函数，专门用来做赋值渲染（使用二维数组中的每一项）
  const use2DArrItem = (page) =&gt; {
    // 4. 从第一项，取到最后一项
    if (page &gt; twoDArr.length - 1) {
      console.log(&quot;每一项都获取完了&quot;);
      return;
    }
    // 5. 使用请求动画帧的方式
    requestAnimationFrame(() =&gt; {
      // 6. 取出一项，就拼接一项（concat也行）
      this.arr = [...this.arr, ...twoDArr[page]];
      // 7. 这一项搞定，继续下一项
      page = page + 1;
      // 8. 直至完毕（递归调用，注意结束条件）
      use2DArrItem(page);
    });
  };
  // 3. 从二维数组中的第一项，第一堆开始获取并渲染（数组的第一项即索引为0）
  use2DArrItem(0); 
}
</code></pre>
<p>其他方案，滚动加载，分页组件加载，虚拟列表，等等</p>
`;export{n as attributes,t as html};

const t={title:"多列表的jq展开收起效果",categories:["Jquery"],tags:["Jquery"],date:"2019-12-06",author:"深海如梦",excerpt:"在做项目的时候碰到的一个需求要做多列表的展开和收起的效果，一开始很快就写好了，可是出现了错误，最后找到了原因是因为动画animate()的效果，最后去掉（没有过度动画蛋疼），终于解决。"},o=`<h1>多列表的jq展开收起效果</h1>
<h6>在做项目的时候碰到的一个需求要做多列表的展开和收起的效果，一开始很快就写好了，可是出现了错误，最后找到了原因是因为动画animate()的效果，最后去掉（没有过度动画蛋疼），终于解决。</h6>
<p><strong>效果图如下：</strong></p>
<p><img src="/images/2019120610061415.png" alt="效果图"></p>
<p><strong>jq代码：</strong></p>
<pre><code class="language-javascript">$(&quot;.zimu_con_list dl&quot;).each(function (i, item) {
    // console.log($(item).find(&quot;dt&quot;).html())
    var defHeight = 115;//默认高度
    var infoHeight = $(item).find(&quot;dd&quot;).height();
    if (infoHeight &gt; defHeight) {
    // 设置需求所在位置的默认高度,隐藏超出部分
    $(item).find(&quot;dd&quot;).css('height', defHeight + 'px');
    //加按钮
    $(item).append('&lt;p class=&quot;more&quot;&gt;&lt;span&gt;展开&lt;/span&gt;&lt;i class=&quot;sprite&quot;&gt;&lt;/i&gt;&lt;/p&gt;');
    }
    // 点击按钮
    $(item).find(&quot;.more&quot;).click(function () {
    var curHeight = $(item).find(&quot;dd&quot;).height();
    // console.log(curHeight)
    if (curHeight == defHeight) {
    //这里看看能不能有其他的办法加个过渡效果，用animate()有错误
    $(item).find(&quot;dd&quot;).addClass(&quot;auto&quot;);
    $(item).find(&quot;.more&quot;).html('&lt;span&gt;收起&lt;/span&gt;&lt;i class=&quot;sprite&quot;&gt;&lt;/i&gt;');
    $(item).find(&quot;.more i.sprite&quot;).css(&quot;transform&quot;, &quot;rotate(-180deg)&quot;)
    } else {
    $(item).find(&quot;dd&quot;).removeClass(&quot;auto&quot;);
    $(item).find(&quot;.more&quot;).html('&lt;span&gt;展开&lt;/span&gt;&lt;i class=&quot;sprite&quot;&gt;&lt;/i&gt;');
    };
    event.stopPropagation();
    });
})
</code></pre>
`;export{t as attributes,o as html};

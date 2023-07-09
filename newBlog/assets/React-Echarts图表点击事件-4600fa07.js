const n={title:"React-Echarts图表点击事件",categories:["React","ECharts"],tags:["React","ECharts"],date:"2023-02-20",author:"深海如梦",excerpt:"echarts图表点击事件"},e=`<h1>echarts图表点击事件</h1>
<p>问题：echarts图表点击事件，进行查询条件，实现高亮</p>
<h2>echarts-for-react（https://www.npmjs.com/package/echarts-for-react）</h2>
<p>阅读官网相关文档，知道有一个属性onEvent可以用来进行操作</p>
<ul>
<li><strong><code>onEvents</code></strong> (optional, array(string=&gt;function) )</li>
</ul>
<p>binding the echarts event, will callback with the <code>echarts event object</code>, and <code>the echart object</code> as it's paramters. e.g:</p>
<pre><code>const onEvents = {
  'click': this.onChartClick,
  'legendselectchanged': this.onChartLegendselectchanged
}
...
&lt;ReactECharts
  option={this.getOption()}
  style={{ height: '300px', width: '100%' }}
  onEvents={onEvents}
/&gt;
</code></pre>
<p>然后我们处理好点击事件后，需要设置高亮状态，</p>
<h3>需求是，当我们点击柱状时，点击的柱状高亮，其余柱状变浅色，那么我们需要怎么进行处理让他们的颜色可以交替改变呢？</h3>
<p>我研究了一下官网关于柱状图颜色的api文档，发现颜色是可以设定的，那么我们为什么不弄一个数组用来装颜色呢？然后根据点击的柱状为唯一值，设置它的颜色</p>
<h4>下面是相应代码</h4>
<p>没有设定时，我们一般的设置颜色</p>
<pre><code class="language-typescript">var colors = ['#4587E7','#35AB33','#F5AD1D','#ff7f50','#da70d6','#32cd32','#6495ed'];
option = {
    ...
    series:[{
        ...
        itemStyle: {
            color: function(params) {
                //通过返回值的下标一一对应将颜色赋给柱子上
                return colors[params.dataIndex];
            }
        }
        ...
    }]
}
</code></pre>
<p>设定了高亮颜色与其他的颜色不同</p>
<pre><code class="language-typescript">// x轴数据
let xArr = ['一般','测试','的时刻','大苏打','数据']
// 点击后的名字
let uniqueName = '测试'
let colors = [];
xArr.forEach(item =&gt; {
    if (uniqueName === item) {
    	// 设定高亮
    	colors.push('#3daae3');
    } else {
    	// 浅色
    	colors.push('#b1ddf4');
    }
})
 
option = {
    ...
    data: data,
    itemStyle: {
        color: function (params) {
            if (!uniqueName) {
            	return '#3daae3'
            } else {
            	return colors[params.dataIndex]
            }
        }
    },
    ...
}
</code></pre>
`;export{n as attributes,e as html};

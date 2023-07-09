const t={title:"Echarts 配置和知识点",categories:["Angular","Echarts"],tags:["知识点","配置","Echarts"],author:"深海如梦",date:"2020-09-28",excerpt:"Echarts 配置和知识点"},e=`<h1>Echarts 配置和知识点</h1>
<h4><a href="https://echarts.apache.org/zh/option.html#tooltip">tooltip.</a> <a href="https://echarts.apache.org/zh/option.html#tooltip.confine">confine</a></h4>
<p>boolean</p>
<p>是否将 tooltip 框限制在图表的区域内。</p>
<p>当图表外层的 dom 被设置为 <code>'overflow: hidden'</code>，或者移动端窄屏，导致 tooltip 超出外界被截断时，此配置比较有用。</p>
<p>formatter 字符串格式化</p>
<p>双Y轴图</p>
<pre><code class="language-typescript">let x1 = Math.ceil(Math.max.apply(null, this.ManynewUsers3) / 5) * 5;

let x2 = Math.ceil(Math.max.apply(null, this.ManynewRoles3) / 5) * 5;

let x3 = Math.ceil(Math.max.apply(null, this.ManyfirstRoles3) / 5) * 5;

let arr = [x1, x2, x3];

let Xmax = Math.max(...arr);

let Ymax = 100;

let Ymin = 0;

yAxis: [{
    // 第一条Y轴
    name: '单位(人)',
    type: 'value',
    axisLabel: {
        show: true,
        interval: 'auto',
        formatter: '{value}',
        textStyle: {
            color: '#808695'
        }
    },
    splitLine: {
        // show: true,
        lineStyle: {
            type: 'solid',
            color: '#e8eaec', // 左边线的颜色
            width: '1', // 坐标线的宽度
        },
    },
    nameTextStyle: { // y轴上方单位的颜色
        color: '#808695',
    },
    axisLine: {
        lineStyle: {
            type: 'solid',
            color: '#e8eaec', // 左边线的颜色
            width: '1', // 坐标线的宽度
        },
        textStyle: {
            color: '#808695',
        }
    },
    min: 0,
    max: Xmax,
    splitNumber: 5,
    interval: Xmax / 5,
},
{//第二条Y轴
    type: 'value',
    axisLabel: {
        show: true,
        interval: 'auto',
        formatter: '{value}%',
        textStyle: {
            color: '#808695'
        }
    },
    splitLine: {
        // show: true,
        lineStyle: {
            type: 'solid',
            color: '#e8eaec', // 左边线的颜色
            width: '1', // 坐标线的宽度
        },
    },
    nameTextStyle: { // y轴上方单位的颜色
        color: '#808695',
    },
    axisLine: {
        show: TwoYaxis,
        lineStyle: {
            type: 'solid',
            color: '#e8eaec', // 左边线的颜色
            width: '1', // 坐标线的宽度
        },
        textStyle: {
            color: '#808695',
        }
    },
    min: Ymin,
    max: Ymax,
    splitNumber: 5,
    interval: 20
}
],
</code></pre>
<pre><code class="language-typescript">//自定义工具
toolbox: {
    feature: {
        myTool: {
            // 是否显示
            show: true,
                title: '导出'
        },
            dataView: {
                readOnly: true,
                    title: '查看',
                        // lang: ['数据视图', '关闭', '刷新'],
                        optionToContent: function (opt) {
                            // 坐标数据
                            const axisData = opt.xAxis[0].data;
                            // 折线图数据
                            const series = opt.series;
                            let tdHeads = '&lt;td  style=&quot;background:#ebf7ff;padding: 0 10px;min-width: 0;height: 48px;box-sizing: border-box;text-overflow: ellipsis;vertical-align: middle;border-bottom: 1px solid #e9eaec;&quot;&gt;时间&lt;/td&gt;'; //表头
                            // 数据
                            let tdBodys = '';
                            series.forEach(function (item) {
                                // 组装表头
                                tdHeads += \`&lt;td style=&quot;background:#ebf7ff;padding: 0 10px;min-width: 0;height: 48px;box-sizing: border-box;text-overflow: ellipsis;vertical-align: middle;border-bottom: 1px solid #e9eaec;&quot;&gt;\${item.name}&lt;/td&gt;\`;
                            });
                            let table = \`&lt;table id=&quot;tableExcel&quot; style=&quot;border: 1px solid #e9eaec;width:100%;border-collapse:collapse;font-size:14px;text-align:center&quot;&gt;&lt;tbody&gt;&lt;tr&gt;\${tdHeads} &lt;/tr&gt;\`;

                            for (let i = 0, l = axisData.length; i &lt; l; i++) {
                                for (let j = 0; j &lt; series.length; j++) {
                                    // 组装表数据
                                    tdBodys += \`&lt;td style=&quot;padding: 0 10px;min-width: 0;height: 48px;box-sizing: border-box;text-overflow: ellipsis;vertical-align: middle;border-bottom: 1px solid #e9eaec;&quot;&gt;\${series[j].data[i] || 0}&lt;/td&gt;\`;
                                }
                                table += \`&lt;tr&gt;&lt;td style=&quot;padding: 0 10px;min-width: 0;height: 48px;box-sizing: border-box;text-overflow: ellipsis;vertical-align: middle;border-bottom: 1px solid #e9eaec;&quot;&gt;\${axisData[i]}&lt;/td&gt;\${tdBodys}&lt;/tr&gt;\`;
                                tdBodys = '';
                            }
                            // table += '&lt;/tbody&gt;&lt;/table&gt;&lt;div style=&quot;position: absolute; bottom: 0px; right: 0;z-index: 10;&quot;&gt;&lt;div style=&quot;float: right; margin-right: 20px; border: none; cursor: pointer; padding: 2px 5px; font-size: 12px; border-radius: 3px; background-color: rgb(194, 53, 49); color: rgb(255, 255, 255);&quot;&gt;导出&lt;/div&gt;&lt;/div&gt;';
                            table += '&lt;/tbody&gt;&lt;/table&gt;';
                            return table;
                        }
            }
    }
},
</code></pre>
`;export{t as attributes,e as html};

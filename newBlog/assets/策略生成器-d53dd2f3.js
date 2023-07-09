const n={title:"策略生成器",categories:["设计模式"],tags:["设计模式"],date:"2023-03-19",author:"深海如梦",excerpt:"关于策略生成器"},t=`<h1>关于策略生成器</h1>
<h2>tactics.tsx</h2>
<pre><code class="language-typescript">import React from 'react';
import map from 'lodash/map';

import {
    AreaChartOutlined,
    LineChartOutlined,
    TableOutlined,
    BarChartOutlined,
    PieChartOutlined,
} from &quot;@ant-design/icons&quot;;


/**
 * 字典 shape as [value, label, Icon][].
 * @summary 图表类型
 * @readonly
 */
const AnalysisCharts = [
    ['line', '趋势图', LineChartOutlined],
    ['table', '数据表', TableOutlined],
    ['stack', '堆积图', AreaChartOutlined],
    ['lineSum', '累计图', LineChartOutlined],
    ['bar', '柱状分布图', BarChartOutlined],
    ['pie', '饼状分布图', PieChartOutlined],
] as const;

/**
 * 策略接口
 * @example
 * {
 *    value: 'line',
 *    label: '趋势图',
 *    icon: &lt;LineChartOutlined /&gt;,
 * }
 */
export interface ChartOption {
    value: typeof AnalysisCharts[number][0];
    label: typeof AnalysisCharts[number][1];
    icon: React.ReactNode;
}

/**
 * 策略生成器
 * @param {typeof AnalysisCharts} ls 字典列表
 * @returns {ChartOption[]} 策略列表
 */
const generator = (ls: typeof AnalysisCharts): ChartOption[] =&gt;
    map(ls, ([value, label, Icon]): ChartOption =&gt; (
        {
            value,
            label,
            icon: &lt;Icon /&gt;,
        }
    ));

export const chartOption = generator(AnalysisCharts);

</code></pre>
<h2>调用</h2>
<pre><code class="language-typescript">
import { chartOption } from 'tactics'

</code></pre>
`;export{n as attributes,t as html};

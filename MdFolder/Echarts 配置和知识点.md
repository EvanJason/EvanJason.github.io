---
title: Echarts 配置和知识点

categories:
  - Angular
  - Echarts

tags:
  - 知识点
  - 配置
  - Echarts

author: 深海如梦

date: "2020-09-28"

excerpt: Echarts 配置和知识点

---



# Echarts 配置和知识点

#### [tooltip.](https://echarts.apache.org/zh/option.html#tooltip) [confine](https://echarts.apache.org/zh/option.html#tooltip.confine)

boolean

是否将 tooltip 框限制在图表的区域内。

当图表外层的 dom 被设置为 `'overflow: hidden'`，或者移动端窄屏，导致 tooltip 超出外界被截断时，此配置比较有用。

formatter 字符串格式化



双Y轴图

```typescript
let x1 = Math.ceil(Math.max.apply(null, this.ManynewUsers3) / 5) * 5;

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
```



```typescript
//自定义工具
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
                            let tdHeads = '<td  style="background:#ebf7ff;padding: 0 10px;min-width: 0;height: 48px;box-sizing: border-box;text-overflow: ellipsis;vertical-align: middle;border-bottom: 1px solid #e9eaec;">时间</td>'; //表头
                            // 数据
                            let tdBodys = '';
                            series.forEach(function (item) {
                                // 组装表头
                                tdHeads += `<td style="background:#ebf7ff;padding: 0 10px;min-width: 0;height: 48px;box-sizing: border-box;text-overflow: ellipsis;vertical-align: middle;border-bottom: 1px solid #e9eaec;">${item.name}</td>`;
                            });
                            let table = `<table id="tableExcel" style="border: 1px solid #e9eaec;width:100%;border-collapse:collapse;font-size:14px;text-align:center"><tbody><tr>${tdHeads} </tr>`;

                            for (let i = 0, l = axisData.length; i < l; i++) {
                                for (let j = 0; j < series.length; j++) {
                                    // 组装表数据
                                    tdBodys += `<td style="padding: 0 10px;min-width: 0;height: 48px;box-sizing: border-box;text-overflow: ellipsis;vertical-align: middle;border-bottom: 1px solid #e9eaec;">${series[j].data[i] || 0}</td>`;
                                }
                                table += `<tr><td style="padding: 0 10px;min-width: 0;height: 48px;box-sizing: border-box;text-overflow: ellipsis;vertical-align: middle;border-bottom: 1px solid #e9eaec;">${axisData[i]}</td>${tdBodys}</tr>`;
                                tdBodys = '';
                            }
                            // table += '</tbody></table><div style="position: absolute; bottom: 0px; right: 0;z-index: 10;"><div style="float: right; margin-right: 20px; border: none; cursor: pointer; padding: 2px 5px; font-size: 12px; border-radius: 3px; background-color: rgb(194, 53, 49); color: rgb(255, 255, 255);">导出</div></div>';
                            table += '</tbody></table>';
                            return table;
                        }
            }
    }
},
```


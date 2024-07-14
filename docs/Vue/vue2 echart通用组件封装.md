---
title: vue2 echart通用组件封装

categories:
  - Vue
  - echart

tags:
  - Vue 
  - echart

date: "2024-06-28"

author: 深海如梦

excerpt: vue2 echart通用组件封装

---

封装

```vue
<template>
  <div class="page_block" v-if="visible" :style="{ height: bodyStyle.height }">
    <div class="title" v-if="title">{{ title }}</div>
    <div @resize="handleResize" ref="myDiv" :id="chartId" :style="{ width: bodyStyle.width, height: bodyStyle.height }"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'ChartData',
  components: {},
  props: {
    bodyStyle: {
      type: Object,
      default: () => {
        return {
          width: '100%',
          height: '400px',
        }
      },
    },
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: null,
    },
    optionData: {
      type: Object,
      default: {},
    },
    chartId: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      charts: '',
      observer: {},
    }
  },
  watch: {
    visible: {
      handler: function (val, oldVal) {
        if (val) {
          this.$nextTick(() => {
            this.drawChart(this.chartId)
          })
          this.observer = new ResizeObserver(this.handleResize) // 创建观察器对象
          this.$nextTick(() => {
            const divElement = this.$refs.myDiv // 获取要监测的DIV元素
            if (divElement) {
              this.observer?.observe?.(divElement) // 开始观察该元素的大小变化
            }
          })
        }
      },
      deep: true,
    },
  },
  mounted() {
    // window.addEventListener('resize', this.drawChart, true);
    let that = this
    window.addEventListener('resize', function () {
      that.handleResize()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
    if (!this.observer) {
      return
    }
    this.observer.disconnect?.() // 释放资源并停止观察
  },
  methods: {
    handleResize() {
      if (!this.charts) return
      this.charts?.resize()
    },
    drawChart(id) {
      this.charts = echarts.init(document.getElementById(this.chartId)) //$echarts就是引入时原型链的更改
      this.charts.showLoading({ text: '数据加载中.请稍后' })
      let curSeries = _.cloneDeep(this.optionData.series)
      this.charts.setOption({
        ...this.optionData,
        series: curSeries.map((item, index) => {
          return {
            ...item,
            emphasis: {
              focus: 'self', // 只高亮当前系列
              label: {
                fontWeight: 'bold',
              },
            },
          }
        }),
      })
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.charts.hideLoading()
      }, 1000)
    },
  },
  beforeDestroy() {
    clearTimeout(this.timer)
  },
}
</script>

<style scoped lang="scss">
.page_block {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
}

.title {
  font-size: 20px;
  font-weight: bold;
}
</style>
```


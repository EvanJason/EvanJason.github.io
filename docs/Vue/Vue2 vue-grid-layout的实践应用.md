---
title: Vue2 vue-grid-layout的实践应用

categories:
  - Vue

tags:
  - Vue
  - vue-grid-layout

date: "2024-06-15"

author: 深海如梦

excerpt: Vue2 vue-grid-layout的实践应用

---

## 例子

layout.vue

```vue
<template>
  ...
  <grid-layout
    :layout.sync="layout"
    :col-num="4"
    :margin="[0, 10]"
    :is-draggable="powerType === 2"
    :is-resizable="false"
    :vertical-compact="true"
    :use-css-transforms="true"
    @layout-updated="layoutUpdated"
  >
    <grid-item
      v-for="(item, index) in layout"
      :key="item.id"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
      :drag-allow-from="dragAllowFrom"
      :drag-ignore-from="dragIgnoreFrom"
      ref="gridItem"
      :id="item.id"
    >
      <!-- 每一块布局内容 -->
      <DashboardCardRander
        v-if="!parentLoading"
        :loading="item['loading']"
        :info="item"
        :init="item['init']"
        :setttingType="setttingType"
        @getData="(e) => getData(index, e)"
        @changeOnResize="(e) => changeOnResize(index, e)"
        @removeReport="() => removeReport(index)"
        @changeLoading="(e) => changeLoading(index, e)"
      />
    </grid-item>
  </grid-layout>
</template>
<script>
import { GridLayout, GridItem } from 'vue-grid-layout'
import DashboardCardRander from '../DashboardCardRander'
export default {
  name: 'DashboardLayout',
  components: {
    GridLayout,
    GridItem,
    DashboardCardRander,
  },
  data() {
    return {
      layout: [],
      dragAllowFrom: '.layout-card-header',
      dragIgnoreFrom: '.layout-card-header-content, .layout-card-header-extra, .layout-card-content',
    }
  },
  methods: {
    // blockSortUpdateItemVo 服务端缓存的布局数据
    generateLayout(list) {
      let arr = []
      const sortList = _.cloneDeep(list)
      // 按照 y 坐标然后是 x 坐标进行排序
      sortList.sort((a, b) => {
        const configA =
          a.blockSortUpdateItemVo && Object.keys(a.blockSortUpdateItemVo).length > 0
            ? {
                i: a.blockSortUpdateItemVo.sortKey,
                x: a.blockSortUpdateItemVo.x,
                y: a.blockSortUpdateItemVo.y,
                w: a.blockSortUpdateItemVo.width,
                h: a.blockSortUpdateItemVo.height,
              }
            : null
        const configB =
          b.blockSortUpdateItemVo && Object.keys(b.blockSortUpdateItemVo).length > 0
            ? {
                i: b.blockSortUpdateItemVo.sortKey,
                x: b.blockSortUpdateItemVo.x,
                y: b.blockSortUpdateItemVo.y,
                w: b.blockSortUpdateItemVo.width,
                h: b.blockSortUpdateItemVo.height,
              }
            : null
        // 检查是否有空对象，空对象放置在最后
        if (!configA) {
          return 1
        }
        if (!configB) {
          return -1
        }
        // 比较 y 值
        if (configA.y !== configB.y) {
          return configA.y - configB.y
        }
        // 如果 y 相同，则比较 x 值
        return configA.x - configB.x
      })
      sortList.forEach((item, index) => {
        const { blockSortUpdateItemVo } = item
        const config =
          blockSortUpdateItemVo && Object.keys(blockSortUpdateItemVo).length > 0
            ? {
                i: blockSortUpdateItemVo.sortKey,
                x: blockSortUpdateItemVo.x,
                y: blockSortUpdateItemVo.y,
                w: blockSortUpdateItemVo.width,
                h: blockSortUpdateItemVo.height,
              }
            : {}
        arr.push({
          ...item,
          i: `${item.id}-${item.dataAnalysisType}`,
          x: (index % 2) * 2,
          y: Math.floor(index / 2) * 3,
          w: item.data?.saveConfigParams?.viewSizeType === 2 ? 4 : 2,
          h: 3,
          ...config,
        })
      })
      return arr
    },
    /** 处理布局错乱 */
    handleLayoutDisorder(list) {
      let arr1 = list.map((it) => {
        let arrangedItem = { ...it }
        // 如果当前元素宽度为4，直接放置并跳过到下一行
        if (arrangedItem.w === 4) {
          arrangedItem.x = 0 // 重置x为0
        } else {
          // 如果当前元素宽度为2，检查是否有足够的空间放置
          if (arrangedItem.x + arrangedItem.w > 6) {
            // 如果没有足够的空间，移动到新行
            arrangedItem.x = 0
            arrangedItem.y += 3 // 增加1行的高度
          }
        }
        return arrangedItem
      })
      return arr1
    },
    async handleSearchData(item, list) {
      try {
        const params = {
          dashboardConfigId: this.dashboardConfigId,
          id: item.id,
          opType: this.setttingType,
          refreshQueryFlag: this.refreshQueryFlag || 0,
        }
        const results = await this.getBlockDetails(params)
        const curFindIndex = this.layout.findIndex((it) => it.id === item.id)
        if (curFindIndex != -1) {
          const newLayout = {
            ...this.layout[curFindIndex],
            w: results?.data?.saveConfigParams?.viewSizeType === 2 ? 4 : list[curFindIndex]?.w || 2,
            ...results,
          }
          this.$set(this.layout, curFindIndex, { ...newLayout, loading: false, init: false })
        }
      } catch (error) {
        this.layout = this.layout.map((it) => {
          return {
            ...it,
            loading: false,
            message: '请求异常',
            code: undefined,
            data: undefined,
          }
        })
        console.error(error)
      }
    },
    async getBlockDetails(params) {
      // 请求接口
      return await getDashboardReportBlockDetails(params)
    },
    async getData(index, record) {
      this.$set(this.layout[index], 'loading', true)
      const list = this.layout.map((it) => {
        return {
          blockConfigId: it.id,
          height: it.h,
          sortKey: it.i,
          width: it.w,
          x: it.x,
          y: it.y,
        }
      })
      // 布局缓存接口 this.blockSortUpdate(list)
      const params = {
        dashboardConfigId: this.dashboardConfigId,
        id: this.layout[index].id,
        opType: this.setttingType,
        showType: record.showType,
        refreshQueryFlag: record.refreshQueryFlag || 0,
        eventOpenLevelTrConfigList: record?.eventOpenLevelTrConfigList || undefined,
        analysisParams: record?.analysisParams || undefined,
      }
      try {
        const result = await this.getBlockDetails(params)
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.$nextTick(() => {
            this.$set(this.layout[index], 'loading', false)
            this.$set(this.layout[index], 'code', result.code)
            this.$set(this.layout[index], 'data', result.data)
            this.$set(this.layout[index], 'message', result.message)
          })
        }, 200)
      } catch (error) {
        this.$set(this.layout[index], 'loading', false)
        this.$set(this.layout[index], 'code', undefined)
        this.$set(this.layout[index], 'data', undefined)
        this.$set(this.layout[index], 'message', '请求异常')
      }
    },
    /** 改变卡片尺寸大小 */
    changeOnResize(index, value) {
      const newItemObj = {
        // 'small': { w: 1, h: 1 },
        middle: { w: 2, h: 3 },
        large: { w: 4, h: 3 },
      }
      this.$set(this.layout, index, { ...this.layout[index], ...newItemObj[value] })

      this.layout = this.handleLayoutDisorder(this.layout)
    },
    async removeReport(index) {
      const reportId = this.layout[index].id
      const result = await delDashboardReportBlock({ id: reportId })
      if (result?.code !== 1) {
        return
      }
      this.layout.splice(index, 1)
      this.layout = this.handleLayoutDisorder(this.layout)
    },
    layoutUpdated(newLayout) {
     	// 比较当前和缓存的，当有变化时才执行布局缓存方法
        // 布局缓存接口 this.blockSortUpdate(list)
      }
    },
    changeLoading(index, val) {
      this.$set(this.layout[index], 'loading', val)
    },
  },
  watch: {
    blockItemVoList: {
      handler(val, oldVal) {
        this.abReportFlag = false
        if (val?.length > 0) {
          this.layout = this.generateLayout(val)
          this.layout = this.handleLayoutDisorder(this.layout)
          // 监听视图元素是否在浏览器窗口视野内，在窗口内才进行请求
          this.$nextTick(() => {
            const observer = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry, arr) => {
                  if (entry.isIntersecting) {
                    // 需要在grid-item上设置id才能触发
                    const curFindIndex = this.layout.findIndex((it) => it.id === +entry.target.id)
                    if (curFindIndex != -1) {
                      this.handleSearchData(this.layout[curFindIndex], this.layout)
                      this.$set(this.layout, curFindIndex, { ...this.layout[curFindIndex], loading: true, init: true })
                    }
                    observer.unobserve(entry.target)
                  }
                })
              },
              { threshold: 0.3 }
            )
            const gridItems = this.$refs.gridItem.map((item) => item.$el)
            if (gridItems) {
              gridItems.forEach((item) => observer.observe(item))
            }
          })
        } else {
          this.layout = []
        }
      },
      deep: true,
      immediate: true,
    },
  },
  beforeDestroy() {
    clearTimeout(this.timer)
  },
}
</script>
```



## vue-grid-layout插件文档

https://jbaysolutions.github.io/vue-grid-layout/zh/guide/
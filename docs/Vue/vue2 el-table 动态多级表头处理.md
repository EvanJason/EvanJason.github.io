---
title: vue2 el-table 动态多级表头处理

categories:
  - Vue
  -	el-table

tags:
  - Vue 
  -	el-table

date: "2024-07-11"

author: 深海如梦

excerpt: vue2 el-table 动态多级表头处理

---

## thMergeData多级表头数据

{
    "指标均值": [
        "mean_457-1004",
        "mean_457-1005"
    ],
    "变化值|变化比例": [
        "change_457-1004",
        "change_457-1005"
    ],
    "P-value|95%置信区间|统计功效": [
        "stat_457-1004",
        "stat_457-1005"
    ]
}

## thList 数据

[
    {
        "name": "指标",
        "name1": null,
        "name2": null,
        "field": "index",
        "fixedFlag": null,
        "sortFlag": null,
        "valueType": 2,
        "trMergeFlag": null,
        "columnIndex": null,
        "extJson": null,
        "catName": null
    },
    {
        "name": "对照组",
        "name1": null,
        "name2": null,
        "field": "mean_457-1004",
        "fixedFlag": null,
        "sortFlag": null,
        "valueType": 2,
        "trMergeFlag": null,
        "columnIndex": null,
        "extJson": null,
        "catName": "指标均值"
    },
    {
        "name": "对照组",
        "name1": null,
        "name2": null,
        "field": "change_457-1004",
        "fixedFlag": null,
        "sortFlag": null,
        "valueType": 2,
        "trMergeFlag": null,
        "columnIndex": null,
        "extJson": null,
        "catName": "变化值|变化比例"
    },
    {
        "name": "对照组",
        "name1": null,
        "name2": null,
        "field": "stat_457-1004",
        "fixedFlag": null,
        "sortFlag": null,
        "valueType": 2,
        "trMergeFlag": null,
        "columnIndex": null,
        "extJson": null,
        "catName": "P-value|95%置信区间|统计功效"
    },
    {
        "name": "实验组1",
        "name1": null,
        "name2": null,
        "field": "mean_457-1005",
        "fixedFlag": null,
        "sortFlag": null,
        "valueType": 2,
        "trMergeFlag": null,
        "columnIndex": null,
        "extJson": null,
        "catName": "指标均值"
    },
    {
        "name": "实验组1",
        "name1": null,
        "name2": null,
        "field": "change_457-1005",
        "fixedFlag": null,
        "sortFlag": null,
        "valueType": 2,
        "trMergeFlag": null,
        "columnIndex": null,
        "extJson": null,
        "catName": "变化值|变化比例"
    },
    {
        "name": "实验组1",
        "name1": null,
        "name2": null,
        "field": "stat_457-1005",
        "fixedFlag": null,
        "sortFlag": null,
        "valueType": 2,
        "trMergeFlag": null,
        "columnIndex": null,
        "extJson": null,
        "catName": "P-value|95%置信区间|统计功效"
    }
]



## 处理方法


```javascript
handleColumnData(thMergeData, thList) {
  let list = []
  let mergeMap = _.cloneDeep(thMergeData || {})

  if (Object.keys(mergeMap).length > 0) {
    // 创建一个映射，以加速查找
    const mergeMapLookup = new Map(Object.entries(mergeMap))
    // console.log('💖 ~ file: index.vue:146 ~ handleColumnData ~ mergeMapLookup:', mergeMapLookup)

    // 将 thList 转换为 Map 以加速查找
    const thMap = new Map(thList.map((item) => [item.field, item]))
    // console.log("💖 ~ file: index.vue:149 ~ handleColumnData ~ thMap:", thMap)

    // 根据 mergeMap 组织列
    for (const [groupName, items] of mergeMapLookup) {
      const children = items.map((name) => thMap.get(name))
      if (children.length > 0) {
        list.push({
          name: groupName,
          children: children.filter((item) => item !== undefined), // 过滤掉未找到的项
        })
      }
    }

    // 处理不属于任何分组的列
    for (const [name, item] of thMap) {
      if (!mergeMapLookup.has(item.catName)) {
        list.unshift({ name: '', children: [item] })
      }
    }
  }

  this.tableColumn = list
},
```

然后进行渲染





## 使用

```
        <el-table v-if="!loading" size="mini" max-height="300" :data="tableData" :span-method="objectSpanMethod">
          <el-table-column
            :resizable="false"
            show-overflow-tooltip
            align="center"
            v-for="(mergeItem, mergeIndex) in tableColumn"
            :key="mergeIndex"
            :prop="mergeItem.name"
            :label="mergeItem.name"
          >
            <el-table-column
              :resizable="false"
              show-overflow-tooltip
              v-for="(item, index) in mergeItem.children"
              :key="index"
              :label="item.name"
              :prop="item.field"
            >
              <template slot="header" slot-scope="scope">
                <div class="flex flex-align-center">
                  <div>{{ item.name }}</div>
                </div>
              </template>
              <template slot-scope="scope">
                <div class="flex flex-align-center" :class="handleDataRender(scope.row.tdData[item.field], 'v3') !== '-' ? 'linkClass' : ''">
                  <div :style="{ color: handleColorData(scope.row.tdData[item.field]) }" @click="(e) => handleScroll(e, scope.row.tdData[item.field])">
                    {{ handleDataRender(scope.row.tdData[item.field], 'v') }}
                  </div>
                </div>
              </template>
            </el-table-column>
          </el-table-column>
        </el-table>
```



## 合并行或列方法

```
    /** 合并表格行或列 */
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      const list = _.cloneDeep(this.mergeList)
      for (let i = 0; i < list.length; i++) {
        let el = list[i]
        if (columnIndex === el.columnIndex) {
          if (el.rowIndex == rowIndex) {
            return {
              rowspan: el.rowSpan,
              colspan: 1,
            }
          } else if (rowIndex > el.rowIndex && el.rowIndex + el.rowSpan > rowIndex) {
            return {
              rowspan: 0,
              colspan: 0,
            }
          }
        }
      }
    },
```


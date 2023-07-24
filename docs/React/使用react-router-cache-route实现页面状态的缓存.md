---
title: 使用react-router-cache-route实现页面状态的缓存

categories:
  - React

tags:
  - React
  - 缓存

date: "2021-07-15"

author: 深海如梦

excerpt: 使用react-router-cache-route实现页面状态的缓存

---



# 使用react-router-cache-route实现页面状态的缓存

记录一下，以防不时之需

## 具体

开发中有从详情页返回列表页的需求，这样一来页面返回后使用react-router会直接刷新页面，导致页面中的分页和搜索条件全部丢失，用户体验不佳，所以就必须将列表页的状态进行缓存。
网上搜索大概有几种方法：
1、使用localStorage/sessionStorage进行页面的状态的保存，跳转页面后再进行获取，这种方法虽然可行，但是从根本来说还是从新向后台再一次请求了数据，不算最佳方案。
2、react-activation,尝试未果
3、react-kepper,需要将项目的react-router替换掉，风险较大，慎用
4、react-router-cache-route,简单易用，最佳方案

基本使用方法：
就是把Switch替换成CacheSwitch,因为因为Switch组件只保留第一个匹配状态的路由，卸载掉其他路由
把Route替换成CacheRoute

注意：详情页面回退列表页时使用this.props.history.push(‘’路径')可以实现页面的缓存
但当使用this.props.history.go(-1)则缓存失败

具体代码如下：

```typescript
import React,{Component} from 'react'
import { Route} from 'react-router-dom'
import {CacheRoute,CacheSwitch} from 'react-router-cache-route'


import PublishExpend from './publish/publishExpend.js'
import PublishExpendDetail from './publish/publishExpendDetail.js'
import EditorExpend2018 from './editor/editorExpend2018.js'
import EditorExpend2019 from './editor/editorExpend2019.js'
import EditorExpend2020 from './editor/editorExpend2020.js'
import ExpenseSearch from './search/expenseSearch.js'


class Expense extends Component{
    render(){//:productId?,后面加上?的意思是可有可无，有的话匹配到有id的路由，没有id的话就匹配之前的路由
        return(
            <div className='Expense'>
                    <CacheSwitch>                   
                        <CacheRoute exact path='/platform/expense/publishExpend' component={PublishExpend}/>                    
                        <Route path='/platform/expense/publishExpend/detail/:expendId?' component={PublishExpendDetail}/>
                        <Route path='/platform/expense/editorExpend2018' component={EditorExpend2018}/>
                        <Route path='/platform/expense/editorExpend2019' component={EditorExpend2019}/>
                        <Route path='/platform/expense/editorExpend2020' component={EditorExpend2020}/>
                        <Route exact path='/platform/expense/expenseSearch' component={ExpenseSearch}/>
                    </CacheSwitch>
            </div>
        )
    }
}
export default Expense;
```

其他方法了解可以前往：https://github.com/CJY0208/react-router-cache-route/blob/HEAD/README_CN.md

> 本文章转载自：[使用react-router-cache-route实现页面状态的缓存_清醒且孤独的博客-CSDN博客](https://blog.csdn.net/qq_44688392/article/details/108713037)


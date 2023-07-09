const e={title:"树形控件功能实现",categories:["antd","Angular"],tags:["树形控件","功能"],author:"深海如梦",date:"2020-12-20",excerpt:"树形控件功能"},n=`<h1>树形控件功能</h1>
<h4>实现的图：</h4>
<p><img src="/images/image-20210415160710543.png" alt="image-20210415160710543"></p>
<h4>ts</h4>
<pre><code class="language-typescript">import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NzMessageService, NzFormatEmitEvent } from 'ng-zorro-antd';
import { Router } from '@angular/router';

// moment插件
import * as moment from 'moment';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor(private router: Router, private message: NzMessageService) {

  }
  into(){
    this.router.navigate([this.router.url]);
  }

  
  // 树组件
  // 默认选中复选框
  defaultCheckedKeys = []
  // // 默认展开项
  defaultExpandedKeys = ['g0']

  // 删除选中成员
  deleteUserNumber(item, index) {
    // console.log(item,index)
    const userIdList = [];
    // this.selectTreeValue = this.selectTreeValue.
    // if(item.userId)
    // this.selectTreeValue = this.selectTreeValue.filter(d =&gt; d.item.userId !== item.userId);
    this.selectTreeValue.splice(index, 1)
    for (const value of this.selectTreeValue) {
      // console.log(value)
      if (value.userId) {
        if (value.userId !== item.userId) {
          userIdList.push(value.userId)
        }
      } else if (value.key) {
        if (value.key !== item.key) {
          userIdList.push(value.key)
        }
      }
    }
    // 默认选中
    this.defaultCheckedKeys = userIdList
    // 默认展开全部
    this.defaultExpandedKeys = ['g0']
    this.selectTreeNum = this.selectTreeValue.length
  }
  nodes = [
    {
      title: '全部',
      key: 'g0',
      expanded: true,
      children: [
        {
          title: '海外英文组',
          key: '0-0',
          children: [
            { title: '刘慧欣', key: '0-0-1', isLeaf: true , checked: false},
            { title: '黎海清', key: '0-0-2', isLeaf: true , checked: false},
            { title: '杨妙灵', key: '0-0-3', isLeaf: true , checked: false},
            { title: '罗淑萍', key: '0-0-4', isLeaf: true , checked: false},
            { title: '郭柯芯', key: '0-0-5', isLeaf: true , checked: false}            
          ],
          checked: false
        },
        {
          title: '妙妙组',
          key: '0-1',
          children: [
            { title: '刘佩玲', key: '0-1-1', isLeaf: true , checked: false},
            { title: '测试赛', key: '0-1-2', isLeaf: true , checked: false},
          ],
          checked: false
        },
        {
          title: '小鱼组',
          key: '0-2',
          isLeaf: true,
          checked: false
        }
      ]
    },
  ];

  // parentTreeValue;
  // childTreeValue = [];
  selectTreeValue;
  selectTreeNum = 0;//选中的数量
  nzEvent(event: NzFormatEmitEvent): void {
    // let parentValue;
    // 只有选中才进行赋值
    if (event.eventName === 'check') {
      // console.log(event)
      // console.log(event.keys)
      const SelectArr = []
      for (const item of event.checkedKeys) {
        // console.log(item.key)
        if (item.key) {
          // 第一级
          if (item.level === 0 &amp;&amp; item.origin.checked === true) {
            // console.log('level0:', event.checkedKeys)
            //console.log(item.service.checkedNodeList)
            for (const value of item.service.checkedNodeList) {
              // console.log(value.level)
              if (value.level === 2) {
                SelectArr.push(value)
                // console.log(SelectArr)
              }
            }
            // 第二级
          } else if (item.level === 1 &amp;&amp; item.origin.checked === true) {
            // console.log('level1:', event.checkedKeys)
            for (const value of item.parentNode.children) {
              if (value.origin.checked === true) {
                if (value.origin.children) {
                  // console.log(value.origin.children)
                  for (const i of value.origin.children) {
                    SelectArr.push(i)
                  }
                }
              }
            }
            // 第三级
          } else if (item.level === 2 &amp;&amp; item.origin.checked === true) {
            // console.log('level2:', event.checkedKeys)
            for (const value of item.parentNode.origin.children) {
              if (value.checked === true) {
                SelectArr.push(value)
              }
            }
          }
        }
      }
      // console.log(SelectArr)
      // 去重重组
      this.selectTreeValue = [...new Set(SelectArr)]
      // this.selectTreeValue = SelectArr
      // console.log(this.selectTreeValue)
      this.selectTreeNum = this.selectTreeValue.length
      // console.log(this.selectTreeValue)
    }
  }

  ngOnInit() {
    console.log(moment().format('HH:mm:ss') &gt; '06:00:00')
  }

}

</code></pre>
<h4>html</h4>
<pre><code class="language-html">&lt;div class=&quot;layout&quot; style=&quot;background: #ffffff;padding: 0 10px 10px;&quot;&gt;
  &lt;p&gt;树形控件antd&lt;/p&gt;
  &lt;div class=&quot;TreeSection&quot; style=&quot;width: 600px;&quot;&gt;
    &lt;div class=&quot;leftTree&quot;&gt;
      &lt;p&gt;考核成员：&lt;/p&gt;
      &lt;div class=&quot;leftTree_content&quot;&gt;
        &lt;nz-tree [nzData]=&quot;nodes&quot; nzBlockNode nzExpandAll nzCheckable nzMultiple [nzCheckedKeys]=&quot;defaultCheckedKeys&quot; (nzCheckBoxChange)=&quot;nzEvent($event)&quot;&gt;
        &lt;/nz-tree&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;rightSelect&quot;&gt;
      &lt;p&gt;已选择 {{selectTreeNum}} 名成员&lt;/p&gt;
      &lt;div class=&quot;rightSelect_content&quot;&gt;
        &lt;ul&gt;
          &lt;li *ngFor=&quot;let item of selectTreeValue;let i=index&quot;&gt;
            &lt;i nz-icon style=&quot;margin-right: 5px;color: #1890ff;&quot; nzType=&quot;user&quot;
              nzTheme=&quot;outline&quot;&gt;&lt;/i&gt;&lt;span&gt;{{item.title}}&lt;/span&gt;&lt;span style=&quot;float: right;&quot;
              (click)=&quot;deleteUserNumber(item,i)&quot;&gt;&lt;i nz-icon nzType=&quot;close&quot; nzTheme=&quot;outline&quot;&gt;&lt;/i&gt;&lt;/span&gt;
          &lt;/li&gt;
          &lt;!--  &lt;span style=&quot;float: right;&quot; (click)=&quot;deleteUserNumber(item.key)&quot;&gt;&lt;i nz-icon nzType=&quot;close&quot; nzTheme=&quot;outline&quot;&gt;&lt;/i&gt;&lt;/span&gt; --&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<h4>css</h4>
<pre><code class="language-css">/* 树组件 */
.TreeSection {
  overflow: hidden;
}

.leftTree,
.rightSelect {
  border: 1px solid #eeeeee;
  width: 50%;
}

.leftTree {
  float: left;
}

.rightSelect {
  float: right;
}

.leftTree p,
.rightSelect p,
.MemberList p {
  font-size: 16px;
  margin: 0;
  padding: 0 10px;
  border-bottom: 1px solid #eeeeee;
}

.leftTree_content,
.rightSelect_content {
  height: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.rightSelect_content ul {
  margin: 0;
  padding: 0 10px;
}

.rightSelect_content ul li {
  list-style: none;
  line-height: 30px;
}


::ng-deep .ant-tree.ant-tree-block-node li span.ant-tree-checkbox+.ant-tree-node-content-wrapper{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</code></pre>
`;export{e as attributes,n as html};

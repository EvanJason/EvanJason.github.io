const t={title:"antd表格穿梭框功能",categories:["antd","Angular"],tags:["antd","穿梭框","表格"],date:"2021-05-15",author:"深海如梦",excerpt:"angular-antd穿梭框功能实现"},n=`<h1>antd表格穿梭框功能</h1>
<h4>html</h4>
<pre><code class="language-html">&lt;div class=&quot;layout&quot; style=&quot;background: #ffffff;padding: 0 10px 10px;&quot;&gt;

  &lt;nz-form-item style=&quot;padding: 20px 0;&quot;&gt;
    &lt;nz-form-label [nzSm]=&quot;2&quot; [nzXs]=&quot;24&quot;&gt;关联知识&lt;/nz-form-label&gt;
    &lt;div nz-col [nzSm]=&quot;12&quot; [nzXs]=&quot;24&quot; style=&quot;margin-top: 10px;&quot;&gt;
      &lt;div style=&quot;padding: 5px;&quot;&gt;
      &lt;nz-table #basicTable nzBordered [nzData]=&quot;listOfData&quot; [nzFrontPagination]=&quot;false&quot;  nzShowPagination=&quot;false&quot; nzScroll=&quot;{ x: '300px', y: '300px' }&quot;&gt;
        &lt;thead&gt;
          &lt;tr&gt;
            &lt;th nzAlign=&quot;center&quot;&gt;知识名称&lt;/th&gt;
          &lt;/tr&gt;
        &lt;/thead&gt;
        &lt;tbody&gt;
          &lt;tr *ngFor=&quot;let data of basicTable.data&quot;&gt;
            &lt;td nzAlign=&quot;center&quot;&gt;{{data.knowledgeTitle || '-'}}&lt;/td&gt;
          &lt;/tr&gt;
        &lt;/tbody&gt;
      &lt;/nz-table&gt;
      &lt;/div&gt;
      &lt;!-- 添加关联知识 --&gt;
      &lt;a nz-button nzType=&quot;default&quot; style=&quot;margin-top: 10px;margin-right: 15px;margin-bottom: 10px;&quot; (click)=&quot;openKnowledge()&quot;&gt;&lt;i nz-icon type=&quot;edit&quot;&gt;&lt;/i&gt;编辑关联知识&lt;/a&gt;
    &lt;/div&gt;
  &lt;/nz-form-item&gt;
&lt;/div&gt;


&lt;nz-modal nzClassName=&quot;knowledge&quot; nzWidth=&quot;800px&quot; [(nzVisible)]=&quot;isVisible&quot; [nzTitle]=&quot;ass_title&quot; (nzOnCancel)=&quot;handleCancel()&quot; (nzOnOk)=&quot;handleOk()&quot;&gt;
  &lt;div style=&quot;overflow-y: auto;max-height: 650px;padding: 10px;position: relative;&quot;&gt;
    &lt;!-- 穿梭框 --&gt;
    &lt;div style=&quot;position: relative;&quot; *ngIf=&quot;dataList.length !==0&quot;&gt;
        &lt;div *ngIf=&quot;transferDisabled === true&quot; class=&quot;eloading&quot;&gt;
          &lt;i style=&quot;position: absolute;top: 50%;left: 50%;transform:translate(-50%,-50%);color: red;font-size: 50px;&quot; nz-icon nzType=&quot;loading&quot; nzTheme=&quot;outline&quot;&gt;&lt;/i&gt;
        &lt;/div&gt;
        &lt;p style=&quot;color: red;&quot;&gt;注：关联知识最多选择5条!&lt;/p&gt;
        &lt;nz-transfer
        [nzDataSource]=&quot;dataList&quot;
        [nzShowSelectAll]=&quot;false&quot;
        [nzRenderList]=&quot;[renderList, renderList, renderList]&quot;
        (nzSelectChange)=&quot;transferSelect($event)&quot;
        (nzChange)=&quot;transferChange($event)&quot;
        nzShowSearch
        nzSearchPlaceholder=&quot;请输入搜索内容&quot;
        [nzFilterOption]=&quot;filterOption&quot;
        (nzSearchChange)=&quot;transferSearch($event)&quot;
      &gt;
        &lt;ng-template
          #renderList
          let-items
          let-direction=&quot;direction&quot;
          let-stat=&quot;stat&quot;
          let-onItemSelectAll=&quot;onItemSelectAll&quot;
          let-onItemSelect=&quot;onItemSelect&quot;
        &gt;
          &lt;nz-table #t [nzData]=&quot;convertItems(items)&quot; nzSize=&quot;small&quot;&gt;
            &lt;thead&gt;
              &lt;tr&gt;
                &lt;th
                  [nzChecked]=&quot;stat.checkAll&quot;
                  [nzIndeterminate]=&quot;stat.checkHalf&quot;
                  (nzCheckedChange)=&quot;onItemSelectAll($event)&quot;
                &gt;&lt;/th&gt;
                &lt;th nzAlign=&quot;center&quot; nzWidth=&quot;300px&quot;&gt;问题&lt;/th&gt;
              &lt;/tr&gt;
            &lt;/thead&gt;
            &lt;tbody&gt;
              &lt;tr *ngFor=&quot;let data of t.data&quot; (click)=&quot;onItemSelect(data)&quot;&gt;
                &lt;td
                  nzShowCheckbox
                  [nzChecked]=&quot;data.checked&quot;
                  (nzCheckedChange)=&quot;onItemSelect(data)&quot;
                &gt;&lt;/td&gt;
                &lt;td nzAlign=&quot;center&quot; nzWidth=&quot;300px&quot;&gt;{{ data.knowledgeTitle }}&lt;/td&gt;
              &lt;/tr&gt;
            &lt;/tbody&gt;
          &lt;/nz-table&gt;
        &lt;/ng-template&gt;
        &lt;/nz-transfer&gt;
    &lt;/div&gt;

    &lt;nz-empty *ngIf=&quot;dataList.length ===0&quot; nzNotFoundContent=&quot;暂无数据&quot;&gt;&lt;/nz-empty&gt;
  &lt;/div&gt;
&lt;/nz-modal&gt;
</code></pre>
<p>ts</p>
<pre><code class="language-typescript">import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService, TransferItem } from 'ng-zorro-antd';

@Component({
  selector: 'app-shuttleBox',
  templateUrl: './shuttleBox.component.html',
  styleUrls: ['./shuttleBox.component.css'],
})
export class ShuttleBoxComponent implements OnInit {
  constructor(
    private router: Router,
    private message: NzMessageService
  ) {}

  // 关联知识
  listOfData = [];
  // 显示对话框
  isVisible = false;
  ass_title = '关联知识';
  // 一级分类名
  gameValue = undefined;
  gameList = [];
  // 穿梭框列表
  dataList = [
    {
      knowledgeTitle: '终身卡没有到账的',
      knowledgeContent:
        '&lt;p&gt;先确认下个人中心里面是否有补单显示，有的话自行操作补单即可哦；如果没有个人中心的，可以重新拉起下对应充值的档位（不需要再次支付哦）然后重启手机重新进入游戏即可；还是没有解决的可以提供充值扣费的订单联系客服反馈哦！&lt;/p&gt;',
      knowledgeStatus: 1,
      toppingType: 3,
      knowledgeId: '2538',
      robotNum: 0,
      visitNum: 30,
      likeNum: 1,
      helpfulNum: 0,
      uselessNum: 8,
      direction: 'left',
      checked: false,
    },
    {
      knowledgeTitle: '啊虽然大家喀什地方',
      knowledgeContent:
        '&lt;p&gt;先确认下个人中心里面是否有补单显示，有的话自行操作补单即可哦；如果没有个人中心的，可以重新拉起下对应充值的档位（不需要再次支付哦）然后重启手机重新进入游戏即可；还是没有解决的可以提供充值扣费的订单联系客服反馈哦！&lt;/p&gt;',
      knowledgeStatus: 1,
      toppingType: 3,
      knowledgeId: '2538',
      robotNum: 0,
      visitNum: 30,
      likeNum: 1,
      helpfulNum: 0,
      uselessNum: 8,
      direction: 'left',
      checked: false,
    },
    {
      knowledgeTitle: '如何获得兑换码',
      knowledgeContent:
        '兑换码需要小主关注微信公众号：花之舞H5（有时候会有兑换码的文章推送即可得到），或者在花之舞论坛领取哦，会不定时更新的',
      knowledgeStatus: 1,
      toppingType: 1,
      knowledgeId: '1154',
      robotNum: 0,
      visitNum: 0,
      likeNum: 0,
      helpfulNum: 0,
      uselessNum: 0,
      direction: 'left',
      checked: false,
    },
    {
      knowledgeTitle: '如何获得请帖',
      knowledgeContent: '商城购买或者活动获取哦',
      knowledgeStatus: 1,
      toppingType: 1,
      knowledgeId: '1153',
      robotNum: 0,
      visitNum: 0,
      likeNum: 0,
      helpfulNum: 0,
      uselessNum: 0,
      direction: 'left',
      checked: false,
    },
    {
      knowledgeTitle: '提升情谊需要的道具,以及知己的属性怎么获得?',
      knowledgeContent:
        '飞鸽传书可以提升知己的属性,皇家苑囿右下角的积分兑换可以兑换提升知己属性和情谊的道具',
      knowledgeStatus: 1,
      toppingType: 1,
      knowledgeId: '1152',
      robotNum: 0,
      visitNum: 0,
      likeNum: 0,
      helpfulNum: 0,
      uselessNum: 0,
      direction: 'left',
      checked: false,
    },
    {
      knowledgeTitle: '为什么提升知己的情谊增加的势力与显示的不同?',
      knowledgeContent:
        '提升情谊等级增加的势力已包括前一等级情谊所增加的势力,因此需要扣除前一等级情谊所增加的势力',
      knowledgeStatus: 1,
      toppingType: 1,
      knowledgeId: '1151',
      robotNum: 0,
      visitNum: 0,
      likeNum: 0,
      helpfulNum: 0,
      uselessNum: 0,
      direction: 'left',
      checked: false,
    },
  ];
  transferDisabled = false;
  // 穿梭框，传过来的值
  transferRightList = [];

  title = '新增知识';

  // 打开关联知识
  openKnowledge(): void {
    this.isVisible = true;

    // // this.assValue = undefined;
    // if (this.title === '编辑知识') {
    //   // 关联知识对话框的一级分类
    //   this.transferDisabled = true;
    //   // 1.把选中的关联知识列表赋值到穿梭框右边
    //   // 2.获取所有一级分类的所有问题
    //   console.log(this.dataList);

    //   for (const item of this.dataList) {
    //     for (const j of this.listOfData) {
    //       if (j.knowledgeId === item.knowledgeId) {
    //         item.direction = 'right';
    //       }
    //     }
    //   }
    // }
  }

  // 关联知识确认
  handleOk(): void {
    this.isVisible = false;
    this.listOfData = this.transferRightList;
  }

  // 关联知识取消
  handleCancel(): void {
    // console.log('Button cancel clicked!');
    this.isVisible = false;
    if (this.title === '新增知识') {
      this.gameValue = undefined;
      this.transferRightList = [];
    }
  }

  convertItems(items: TransferItem[]): TransferItem[] {
    return items.filter((i) =&gt; !i.hide);
  }

  filterOption(inputValue: string, item: any): boolean {
    return item.knowledgeTitle.indexOf(inputValue) &gt; -1;
  }

  // 选择的回调函数
  transferSelect(event): void {
    // console.log('transferSelect', event);
    let data = event.list;
    if (data) {
      // console.log(this.transferRightList.length)
      if (event.direction === 'left' &amp;&amp; event.checked === true) {
        let num = this.transferRightList.length + data.length;
        if (num &gt; 5) {
          this.message.create('warning', '关联知识不超过5个');
          if (this.dataList) {
            for (const item of this.dataList) {
              item.checked = false;
            }
          }
        }
      }
    }
  }

  // 穿梭框，传过来的值
  transferChange(event): void {
    // console.log('transferChange',event);
    if (event.from === 'left' &amp;&amp; event.to === 'right') {
      let newData = [...this.transferRightList, ...event.list];
      let arr1 = Array.from(new Set(newData));
      // console.log(arr1)
      let selectData = [];
      if (arr1) {
        for (const item of arr1) {
          if (this.title === '新增知识' &amp;&amp; item.direction === 'right') {
            selectData.push(item);
          } else if (this.title === '编辑知识') {
            selectData.push(item);
          }
        }
      }

      this.transferRightList = selectData.filter((x, index, self) =&gt; {
        let arrids = [];
        newData.forEach((item, i) =&gt; {
          arrids.push(item.knowledgeId);
        });
        return arrids.indexOf(x.knowledgeId) === index;
      });

      // console.log(this.transferRightList)
    } else if (event.from === 'right' &amp;&amp; event.to === 'left') {
      let arr1 = this.transferRightList.filter((item) =&gt;
        event.list.some((ele) =&gt; ele.knowledgeId !== item.knowledgeId)
      );
      // console.log(arr1)
      let arr2 = [];
      for (const item of arr1) {
        if (this.title === '新增知识' &amp;&amp; item.direction === 'right') {
          arr2.push(item);
        } else if (this.title === '编辑知识') {
          for (const j of event.list) {
            if (item.knowledgeId === j.knowledgeId) {
              item.direction = 'left';
            }
          }
          if (item.direction !== 'left') {
            arr2.push(item);
          }
        }
      }

      this.transferRightList = arr2;
      // console.log(this.transferRightList)
      // console.log(this.listOfData)
    }

    // this.listOfData = this.transferRightList
  }

  // 穿梭框搜索的查询
  transferSearch(event): void {
    // console.log('transferSearch', event);
  }

  ngOnInit() {
    
  }
}

</code></pre>
<p>css</p>
<pre><code class="language-css">::ng-deep .cdk-overlay-pane .knowledge&gt;&gt;&gt;.ant-modal-body {
  padding: 15px 5px 15px 0 !important;
}

</code></pre>
`;export{t as attributes,n as html};

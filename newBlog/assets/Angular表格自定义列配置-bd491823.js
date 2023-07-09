const t={title:"Angular表格自定义列配置",categories:["antd","Angular"],tags:["antd","表格","自定义"],date:"2021-10-10",author:"深海如梦",excerpt:"Angular表格自定义列配置"},e=`<h1>Angular 表格自定义列配置</h1>
<h2>效果图</h2>
<p>略</p>
<h2>ts 代码</h2>
<h3>global.service.ts</h3>
<pre><code class="language-typescript">import { Injectable } from '@angular/core';
@Injectable({
	providedIn: 'root',
})
export class Global {
	public thOfData: any[] = [];
	public indeterminateTh = false;
	public checkedTh = true;
	public setOfThCheckedId = null;
	public changeTh = false;
	public isShowTable = true;

	/**
	 * 初始化列展示
	 * @param data
	 */
	public initSetTHcheckedFun(data: any[]) {
		// console.log(data);
		let defalutTh = [];
		for (const item of data) {
			if (item.checked) {
				defalutTh.push(item.id);
			}
		}
		this.setOfThCheckedId = new Set&lt;number&gt;(defalutTh);
	}

	/**
	 * 全选列展示操作
	 * @param checked
	 */
	public onAllThChecked(checked: boolean): void {
		this.changeTh = true;
		this.thOfData.forEach(({ id }) =&gt; this.updateThCheckedSet(id, checked));
		this.refreshThCheckedStatus();
	}

	/**
	 * 重置列展示
	 */
	public resetTh() {
		this.onAllThChecked(true);
	}

	/**
	 * 列展示-单选
	 * @param id
	 * @param checked
	 */
	public onItemThChecked(id: number, checked: boolean): void {
		this.changeTh = true;
		this.updateThCheckedSet(id, checked);
		this.refreshThCheckedStatus();
	}

	/**
	 * 进行列展示单选操作
	 * @param id
	 * @param checked
	 */
	public updateThCheckedSet(id: number, checked: boolean): void {
		if (checked) {
			this.setOfThCheckedId.add(id);
		} else {
			this.setOfThCheckedId.delete(id);
		}

		this.thOfData.forEach((item) =&gt; {
			item.checked = this.setOfThCheckedId.has(item.id);
		});

		// 当列展示全不选时，数据为空
		if (this.thOfData.every((item) =&gt; !item.checked)) {
			this.isShowTable = false;
		} else {
			this.isShowTable = true;
		}
	}

	/**
	 * 更新列展示的状态
	 */
	public refreshThCheckedStatus(): void {
		this.checkedTh = this.thOfData.every(({ id }) =&gt; this.setOfThCheckedId.has(id));
		this.indeterminateTh = this.thOfData.some(({ id }) =&gt; this.setOfThCheckedId.has(id)) &amp;&amp; !this.checkedTh;
	}
}
</code></pre>
<h3>app.component.ts</h3>
<pre><code class="language-typescript">import { Global } from 'src/app/common/pastData.service';

...


this.globalCommon.isShowTable = true;
let thOfData = [
    { id: 1, value: !this.isShowtd ? &quot;新增注册&quot; : null, key: !this.isShowtd ? &quot;newUsers&quot; : null, checked: true },
    { id: 2, value: &quot;新增创角&quot;, key: &quot;newRoles&quot;, checked: true },
    { id: 3, value: &quot;首次创角&quot;, key: &quot;firstRoles&quot;, checked: true },
    { id: 4, value: &quot;老用户活跃&quot;, key: &quot;oldActive&quot;, checked: true },
    { id: 5, value: &quot;总活跃&quot;, key: &quot;totalActive&quot;, checked: true },
    { id: 6, value: !this.roleSelect &amp;&amp; mark === 1 || !this.roleSelect &amp;&amp; mark === 2 ? &quot;活跃指数&quot; : null, key: !this.roleSelect &amp;&amp; mark === 1 || !this.roleSelect &amp;&amp; mark === 2 ? &quot;activeIndex&quot; : null, checked: true },
    { id: 7, value: !this.roleSelect ? &quot;首日付费人数&quot; : null, key: !this.roleSelect ? &quot;firstDayPayUsers&quot; : null, checked: true },
    { id: 8, value: !this.roleSelect || !this.isShowtd ? &quot;老付费人数&quot; : null, key: !this.roleSelect || !this.isShowtd ? &quot;oldPayUsers&quot; : null, checked: true },

    { id: 9, value: this.roleSelect &amp;&amp; this.mark !== 2 ? &quot;月活跃&quot; : null, key: this.roleSelect &amp;&amp; this.mark !== 2 ? &quot;avticeUsersOnMonth&quot; : null, checked: true },
    { id: 10, value: this.roleSelect &amp;&amp; this.mark !== 2 ? &quot;月平均活跃天数&quot; : null, key: this.roleSelect &amp;&amp; this.mark !== 2 ? &quot;viscosityIndex&quot; : null, checked: true },
    { id: 11, value: this.roleSelect &amp;&amp; this.mark !== 2 ? &quot;月付费人数&quot; : null, key: this.roleSelect &amp;&amp; this.mark !== 2 ? &quot;payUsersOnMonth&quot; : null, checked: true },

    { id: 12, value: &quot;总付费人数&quot;, key: &quot;payUsers&quot;, checked: true },
    { id: 13, value: &quot;总付费金额&quot;, key: &quot;totalFeeCny&quot;, checked: true },
    { id: 14, value: &quot;活跃付费率&quot;, key: &quot;activeFeeRate&quot;, checked: true },
    { id: 15, value: this.DayTabsIndex !== 1 ? &quot;总用户付费率&quot; : null, key: this.DayTabsIndex !== 1 ? &quot;totalPayRate&quot; : null, checked: true },
    { id: 16, value: !this.roleSelect &amp;&amp; mark === 1 || !this.roleSelect &amp;&amp; mark === 2 ? &quot;首日付费率&quot; : null, key: !this.roleSelect &amp;&amp; mark === 1 || !this.roleSelect &amp;&amp; mark === 2 ? &quot;firstPayRate&quot; : null, checked: true },
    { id: 17, value: !this.isShowtd ? &quot;首次创角率&quot; : null, key: !this.isShowtd ? &quot;firstRoleRate&quot; : null, checked: true },
    { id: 18, value: !this.roleSelect ? &quot;首日付费金额&quot; : null, key: !this.roleSelect ? &quot;firstDayPayFeeCny&quot; : null, checked: true },
    { id: 19, value: !this.roleSelect ? &quot;老付费金额&quot; : null, key: !this.roleSelect ? &quot;oldPayFee&quot; : null, checked: true },
    { id: 20, value: &quot;ARPU&quot;, key: &quot;arpu&quot;, checked: true },
    { id: 21, value: &quot;ARPPU&quot;, key: &quot;arppu&quot;, checked: true },
]

this.globalCommon.thOfData = thOfData;
this.globalCommon.initSetTHcheckedFun(this.globalCommon.thOfData);
</code></pre>
<h2>html 代码</h2>
<pre><code class="language-html">&lt;a nz-tooltip nzTitle=&quot;列设置&quot; *ngIf=&quot;!loading &amp;&amp; dataSet.length &gt; 0&quot;&gt;
	&lt;a nz-button nzType=&quot;link&quot; nz-popover nzTrigger=&quot;click&quot; [nzTitle]=&quot;thTitle&quot; [nzContent]=&quot;thContent&quot; nzPlacement=&quot;right&quot;&gt;&lt;i nz-icon nzType=&quot;setting&quot; style=&quot;font-size: 16px;&quot;&gt;&lt;/i&gt;&lt;/a&gt;
	&lt;ng-template #thTitle&gt;
		&lt;div&gt;
			&lt;label nz-checkbox [nzChecked]=&quot;this.globalCommon.checkedTh&quot; [nzIndeterminate]=&quot;this.globalCommon.indeterminateTh&quot; (nzCheckedChange)=&quot;this.globalCommon.onAllThChecked($event)&quot;&gt;列展示&lt;/label&gt;
			&lt;a (click)=&quot;this.globalCommon.resetTh()&quot; style=&quot;float: right;&quot;&gt;重置&lt;/a&gt;
		&lt;/div&gt;
	&lt;/ng-template&gt;
	&lt;ng-template #thContent&gt;
		&lt;div style=&quot;width: 500px;&quot;&gt;
			&lt;span style=&quot;display: inline-block;&quot; [ngStyle]=&quot;{width: item.value ? '32%':'0'}&quot; *ngFor=&quot;let item of this.globalCommon.thOfData&quot;&gt;
				&lt;label *ngIf=&quot;item.value&quot; nz-checkbox [nzDisabled]=&quot;item.disabled&quot; [nzChecked]=&quot;this.globalCommon.setOfThCheckedId.has(item.id)&quot; (nzCheckedChange)=&quot;this.globalCommon.onItemThChecked(item.id, $event)&quot;&gt; {{item.value}} &lt;/label&gt;
			&lt;/span&gt;
		&lt;/div&gt;
	&lt;/ng-template&gt;
&lt;/a&gt;
</code></pre>
<p>isShowTable 用来判断是否显示隐藏表格 数据为空的时候，显示出空数据</p>
`;export{t as attributes,e as html};

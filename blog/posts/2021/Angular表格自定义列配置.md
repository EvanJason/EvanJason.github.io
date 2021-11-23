---
categories:
  - antd
  - Angular
tags:
  - antd
  - 表格
  - 自定义
date: 2021/10/10
author: 深海如梦
excerpt: Angular表格自定义列配置
---

# Angular 表格自定义列配置

## 效果图

略

## ts 代码

### global.service.ts

```typescript
import { Injectable } from '@angular/core';
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
		this.setOfThCheckedId = new Set<number>(defalutTh);
	}

	/**
	 * 全选列展示操作
	 * @param checked
	 */
	public onAllThChecked(checked: boolean): void {
		this.changeTh = true;
		this.thOfData.forEach(({ id }) => this.updateThCheckedSet(id, checked));
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

		this.thOfData.forEach((item) => {
			item.checked = this.setOfThCheckedId.has(item.id);
		});

		// 当列展示全不选时，数据为空
		if (this.thOfData.every((item) => !item.checked)) {
			this.isShowTable = false;
		} else {
			this.isShowTable = true;
		}
	}

	/**
	 * 更新列展示的状态
	 */
	public refreshThCheckedStatus(): void {
		this.checkedTh = this.thOfData.every(({ id }) => this.setOfThCheckedId.has(id));
		this.indeterminateTh = this.thOfData.some(({ id }) => this.setOfThCheckedId.has(id)) && !this.checkedTh;
	}
}
```

### app.component.ts

```typescript
import { Global } from 'src/app/common/pastData.service';

...


this.globalCommon.isShowTable = true;
let thOfData = [
    { id: 1, value: !this.isShowtd ? "新增注册" : null, key: !this.isShowtd ? "newUsers" : null, checked: true },
    { id: 2, value: "新增创角", key: "newRoles", checked: true },
    { id: 3, value: "首次创角", key: "firstRoles", checked: true },
    { id: 4, value: "老用户活跃", key: "oldActive", checked: true },
    { id: 5, value: "总活跃", key: "totalActive", checked: true },
    { id: 6, value: !this.roleSelect && mark === 1 || !this.roleSelect && mark === 2 ? "活跃指数" : null, key: !this.roleSelect && mark === 1 || !this.roleSelect && mark === 2 ? "activeIndex" : null, checked: true },
    { id: 7, value: !this.roleSelect ? "首日付费人数" : null, key: !this.roleSelect ? "firstDayPayUsers" : null, checked: true },
    { id: 8, value: !this.roleSelect || !this.isShowtd ? "老付费人数" : null, key: !this.roleSelect || !this.isShowtd ? "oldPayUsers" : null, checked: true },

    { id: 9, value: this.roleSelect && this.mark !== 2 ? "月活跃" : null, key: this.roleSelect && this.mark !== 2 ? "avticeUsersOnMonth" : null, checked: true },
    { id: 10, value: this.roleSelect && this.mark !== 2 ? "月平均活跃天数" : null, key: this.roleSelect && this.mark !== 2 ? "viscosityIndex" : null, checked: true },
    { id: 11, value: this.roleSelect && this.mark !== 2 ? "月付费人数" : null, key: this.roleSelect && this.mark !== 2 ? "payUsersOnMonth" : null, checked: true },

    { id: 12, value: "总付费人数", key: "payUsers", checked: true },
    { id: 13, value: "总付费金额", key: "totalFeeCny", checked: true },
    { id: 14, value: "活跃付费率", key: "activeFeeRate", checked: true },
    { id: 15, value: this.DayTabsIndex !== 1 ? "总用户付费率" : null, key: this.DayTabsIndex !== 1 ? "totalPayRate" : null, checked: true },
    { id: 16, value: !this.roleSelect && mark === 1 || !this.roleSelect && mark === 2 ? "首日付费率" : null, key: !this.roleSelect && mark === 1 || !this.roleSelect && mark === 2 ? "firstPayRate" : null, checked: true },
    { id: 17, value: !this.isShowtd ? "首次创角率" : null, key: !this.isShowtd ? "firstRoleRate" : null, checked: true },
    { id: 18, value: !this.roleSelect ? "首日付费金额" : null, key: !this.roleSelect ? "firstDayPayFeeCny" : null, checked: true },
    { id: 19, value: !this.roleSelect ? "老付费金额" : null, key: !this.roleSelect ? "oldPayFee" : null, checked: true },
    { id: 20, value: "ARPU", key: "arpu", checked: true },
    { id: 21, value: "ARPPU", key: "arppu", checked: true },
]

this.globalCommon.thOfData = thOfData;
this.globalCommon.initSetTHcheckedFun(this.globalCommon.thOfData);
```

## html 代码

```html
<a nz-tooltip nzTitle="列设置" *ngIf="!loading && dataSet.length > 0">
	<a nz-button nzType="link" nz-popover nzTrigger="click" [nzTitle]="thTitle" [nzContent]="thContent" nzPlacement="right"><i nz-icon nzType="setting" style="font-size: 16px;"></i></a>
	<ng-template #thTitle>
		<div>
			<label nz-checkbox [nzChecked]="this.globalCommon.checkedTh" [nzIndeterminate]="this.globalCommon.indeterminateTh" (nzCheckedChange)="this.globalCommon.onAllThChecked($event)">列展示</label>
			<a (click)="this.globalCommon.resetTh()" style="float: right;">重置</a>
		</div>
	</ng-template>
	<ng-template #thContent>
		<div style="width: 500px;">
			<span style="display: inline-block;" [ngStyle]="{width: item.value ? '32%':'0'}" *ngFor="let item of this.globalCommon.thOfData">
				<label *ngIf="item.value" nz-checkbox [nzDisabled]="item.disabled" [nzChecked]="this.globalCommon.setOfThCheckedId.has(item.id)" (nzCheckedChange)="this.globalCommon.onItemThChecked(item.id, $event)"> {{item.value}} </label>
			</span>
		</div>
	</ng-template>
</a>
```

isShowTable 用来判断是否显示隐藏表格 数据为空的时候，显示出空数据

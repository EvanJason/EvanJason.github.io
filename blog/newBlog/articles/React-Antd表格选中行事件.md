---
categories:
  - React
  - Antd

tags:
  - React
  - Antd

date: 2023-03-10

author: 深海如梦

excerpt: antd表格选中行事件

---

# antd表格选中行事件

问题：antd表格选中行事件，并设置高亮，去除掉原始的radio

通过onRow和rowSelection方法来进行点击行即选中该表格行

代码如下：

```typescript
/* 操作表格选择 */
const checkRows = (record) => {
    if (selectedRows.includes(record.id)) {
        selectedRows.splice(selectedRows.indexOf(record.id), 1);
    } else {
        selectedRows.push(record.id);
    }
    console.log(selectedRows)
};

const onSelectedRowKeysChange = (selectedRowKeys, selectedRows) => {
    setSelectedRows(selectedRowKeys);
};

const rowSelection = {
    renderCell: ()=>{return null}, //渲染radio选中框元素
    selectedRowKeys: selectedRows,
    type: 'radio',
    onChange: onSelectedRowKeysChange, //事件
}
        
<Table
    ...
    className='linked'
    rowSelection={rowSelection}
    onRow={(record) => ({
        onClick: () => { 
            checkRows(record);
        },
    })}
    ...
/>
```

选中高亮，可设置className，然后找到css修改背景颜色

```css
.linked .ant-table-tbody > tr.ant-table-row-selected td{
    background-color: #e6f7ff; 
}
```


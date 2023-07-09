const e={title:"React-Antd表格选中行事件",categories:["React","Antd"],tags:["React","Antd"],date:"2023-03-10",author:"深海如梦",excerpt:"antd表格选中行事件"},n=`<h1>antd表格选中行事件</h1>
<p>问题：antd表格选中行事件，并设置高亮，去除掉原始的radio</p>
<p>通过onRow和rowSelection方法来进行点击行即选中该表格行</p>
<p>代码如下：</p>
<pre><code class="language-typescript">/* 操作表格选择 */
const checkRows = (record) =&gt; {
    if (selectedRows.includes(record.id)) {
        selectedRows.splice(selectedRows.indexOf(record.id), 1);
    } else {
        selectedRows.push(record.id);
    }
    console.log(selectedRows)
};

const onSelectedRowKeysChange = (selectedRowKeys, selectedRows) =&gt; {
    setSelectedRows(selectedRowKeys);
};

const rowSelection = {
    renderCell: ()=&gt;{return null}, //渲染radio选中框元素
    selectedRowKeys: selectedRows,
    type: 'radio',
    onChange: onSelectedRowKeysChange, //事件
}
        
&lt;Table
    ...
    className='linked'
    rowSelection={rowSelection}
    onRow={(record) =&gt; ({
        onClick: () =&gt; { 
            checkRows(record);
        },
    })}
    ...
/&gt;
</code></pre>
<p>选中高亮，可设置className，然后找到css修改背景颜色</p>
<pre><code class="language-css">.linked .ant-table-tbody &gt; tr.ant-table-row-selected td{
    background-color: #e6f7ff; 
}
</code></pre>
`;export{e as attributes,n as html};

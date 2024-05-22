---
title: react antd table 拖拽表格

categories:
  - React
  - antd
  - table
  - 拖拽

tags:
  - React
  - antd
  - table
  - 拖拽

date: "2023-05-22"

author: 深海如梦

excerpt: react antd table 拖拽表格

---


# react antd table 拖拽表格





需要安装插件

```bash
npm install react-dnd react-dnd-html5-backend
```


封装拖拽表格
```tsx
import React, { useState, useCallback, useRef, useEffect } from 'react';

import { DndProvider, useDrag, useDrop } from 'react-dnd';

import { HTML5Backend } from 'react-dnd-html5-backend';

import { Table } from 'antd';

import update from 'immutability-helper';

const ItemTypes = {
    ROW: 'row',
};

function DragTable(props) {
    const {
        dataSource,
        columns,
        onChange,
        rowSelection,
        pagination,
        ...tableProps
    } = props;

    const [list, setList] = useState([]);

    useEffect(() => {
        setList(dataSource);
    }, [dataSource]);

    const handleDrag = useCallback(
        (col, hoverIndex) => {
            if (!col.record) return;
            let dragItem = col.record;
            let newList = [];
            //组内交换顺序
            newList = update(list, {
                $splice: [
                    [col.index, 1],
                    [hoverIndex, 0, dragItem],
                ],
            });
            setList(newList);
            onChange(newList)
        },
        [list]
    );

    const DraggableRow = (props) => {
        const {
            index,
            record,
            handleDrag,
            rowSelection,
            pagination,
            ...restProps
        } = props;

        const ref = useRef(null);

        // 接收
        const [{ isOver, canDrop }, drop] = useDrop({
            accept: ItemTypes.ROW,

            drop: (col) => handleDrag(col, index),

            canDrop: (item:any) => {
                // setError(undefined);
                const filter = list.filter((it) => it.id === item.id);
                if (!!filter.length) {
                    // setError('数据已经被放置');
                    return false;
                }
                return true;
            },

            collect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            }),
        });

        const rowStyle = { ...restProps.style };

        if (isOver && canDrop) {
            rowStyle.background = '#f0f4f8';
        }

        // 拖拽
        const [{ isDragging }, drag] = useDrag({
            // item: { type: ItemTypes.ROW, record, index },
            type: ItemTypes.ROW,
            item: () => {
                return { record, index };
            },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        });

        const opacity = isDragging ? 0 : 1;

        drag(drop(ref));

        return <tr ref={ref} {...restProps} style={{ ...rowStyle, opacity }}></tr>;
    };

    const components = {
        body: {
            row: DraggableRow,
        },
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <Table
                className="single-table"
                {...tableProps}
                components={components}
                dataSource={list}
                columns={columns}
                onRow={(record, index) => ({
                    record,
                    index,
                    handleDrag,
                })}
            />
        </DndProvider>
    );
}

export default DragTable;
```

使用, 需要有id
```tsx
<DragTable
  dataSource={dataSource.map((it,index)=> ({ ...it, id: index + 1 }))}
  columns={columns}
  rowKey={(record, index): string => `${record.key}-${index.toString()}`}
  style={{ width: '100%' }}
  onChange={value=> setDataSource(value)}
  />
```

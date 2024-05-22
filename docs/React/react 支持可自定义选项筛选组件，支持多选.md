---
title: react 支持可自定义选项筛选组件，支持多选

categories:
  - React
  - antd
  - Select

tags:
  - React
  - antd
  - Select

date: "2023-05-22"

author: 深海如梦

excerpt: react 支持可自定义选项筛选组件，支持多选

---


# react 支持可自定义选项筛选组件，支持多选





## 封装TooMuchOptionSelect组件

```tsx
import React, { ReactElement, useState, useEffect } from 'react';
import { Select } from 'antd';
import { debounce } from 'lodash';
import { SelectProps } from 'antd/lib/select';
import { getFilterOption } from '@/utils/utils';

const { Option } = Select;
interface Props extends SelectProps {
  count?: number;
  className?: string;
  config: SelectOpt[];
}

interface SelectOpt {
  value: string;
  name: string;
}

export default React.forwardRef(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (props: Props, ref): ReactElement => {
    const { count = 100, value, config, onSearch, onBlur, ...rest } = props;
    const [enumInputValue, setEnumInputValue] = useState('');
    const [optsPageNum, setOptsPageNum] = useState(0);
    const [filterOpts, setFilterOpts] = useState<SelectOpt[]>([]);
    const halfCount = count / 2;

    useEffect(() => {
      if (enumInputValue) {
        setFilterOpts(config.filter(i => getFilterOption(enumInputValue, i.name)));
      } else {
        setFilterOpts(config);
      }
    }, [enumInputValue, config]);

    return (
      <Select
        {...rest}
        value={value}
        filterOption={() => true}
        onBlur={(val: any) => {
          enumInputValue && setEnumInputValue('');
          optsPageNum !== 0 && setOptsPageNum(0);
          onBlur && onBlur(val);
        }}
        onSearch={debounce((str: string) => {
          setEnumInputValue(str.trim());
          setOptsPageNum(0);
          onSearch && onSearch(str);
        }, 300)}
        onPopupScroll={(e: any) => {
          if (filterOpts.length > count) {
            let num;
            if (e.target.scrollTop >= e.target.scrollHeight - e.target.clientHeight) {
              num = Math.min(optsPageNum + 1, Math.ceil(filterOpts.length / halfCount) - 2);
              setOptsPageNum(num);
            } else if (e.target.scrollTop <= 0) {
              num = Math.max(0, optsPageNum - 1);
              setOptsPageNum(num);
              if (num !== 0) {
                e.target.scrollTo(0, (e.target.scrollHeight - e.target.clientHeight) / 2);
              }
            }
          }
        }}
      >
        {(() => {
          const opts =
            filterOpts.length > count
              ? filterOpts.slice(optsPageNum * halfCount, (optsPageNum + 2) * halfCount)
              : filterOpts;
          const curValue: any = value || [];
          let checkedOpts: SelectOpt[] = [];
          if (Array.isArray(curValue)) {
            checkedOpts = curValue.reduce((prev: SelectOpt[], cur: string) => {
              if (!opts.some(o => o.value === cur)) {
                const opt = config.find(j => j.value === cur) || {
                  value: cur,
                  name: cur,
                };
                return [...prev, opt];
              } else {
                return prev;
              }
            }, []);
          } else if (curValue && !opts.some(o => o.value === curValue)) {
            checkedOpts = [
              config.find(j => j.value === curValue) || {
                value: curValue,
                name: curValue,
              },
            ];
          }

          return [...checkedOpts, ...opts].map(opt => (
            <Option key={`${opt.value}`}>{opt.name}</Option>
          ));
        }).call(null)}
      </Select>
    );
  },
);

```

## 使用
```tsx
const [enumInputValue, setEnumInputValue] = useState<string>('');

const [checkboxVal, setCheckboxVal] = useState<string[]>([]);

<TooMuchOptionSelect
  allowClear
  mode="multiple"
  maxTagCount={1}
  count={100}
  config={options}
  autoClearSearchValue={false}
  {/* className={addClassName} */}
  value={checkboxVal}
  placeholder="统一转化目标"
  style={{ minHeight: 34 }}
  onBlur={() => {
    enumInputValue && setEnumInputValue('');
  }}
  onSearch={(str: string) => {
    setEnumInputValue(str.trim());
  }} 
  onInputKeyDown={async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      if (enumInputValue.trim()) {
        const value = checkboxVal || [];
        const hasInputValue = value.some((i: string) => i === enumInputValue);
        const newValue = hasInputValue
          ? value.filter((i: string) => i !== enumInputValue)
          : [...value, enumInputValue];
        setCheckboxVal(newValue)
      }
    }
  }}
  defaultActiveFirstOption={false}
  onChange={async (value: any) => {
    setCheckboxVal(value);
  }}
/>
```

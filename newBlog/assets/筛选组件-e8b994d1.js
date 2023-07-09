const t={title:"筛选组件",categories:["React","antd","筛选组件"],tags:["React","antd","筛选组件"],date:"2022-08-10",author:"深海如梦",excerpt:"筛选组件"},e=`<h1>筛选组件</h1>
<h2>less文件  antd组件</h2>
<pre><code class="language-less">

.m-arrow-close {
    .ant-popover-arrow {
        display: none;
    }
}

.m-checbox-group-title {
    font-size: 12px;
    border-right: 1px solid #D9D9D9;
    padding: 0px 5px;
    cursor: pointer;
}

.m-checbox-group-title:hover {
    color: rgb(91, 183, 225);
    transition: all 1s;
}

.m-checkbox-dropdown-content {
    .ant-popover-inner-content {
        padding: 12px;
        max-height: 300px;
        overflow: hidden;
    }
}

.filter-checbox-group-content {
    max-height: 205px;
    min-height: 100px;
    overflow: auto;
}

.m-checbox-group-content-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #f0f0f0;
    padding-top: 5px;
}
</code></pre>
<h2>主代码</h2>
<pre><code class="language-typescript">import React from 'react';
import { Popover, Button, Checkbox, Space, Input, Divider } from 'antd';
import { SearchOutlined } from &quot;@ant-design/icons&quot;;
import 'g-userGroup/src/component/IUserBehaviorSequence/EventFilter/index.less';
import _ from 'lodash';

interface IFilterProps {
    title?: string,
    onChange?: (value: any[]) =&gt; void,
    value?: any[],
    options: {
        label: string,
        value: string
    }[],
    position?: 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop',
    /** 可以全选*/
    canSelectAll?: boolean,
    loading?: boolean,
    triggerNode?: React.ReactNode,
    size?: 'small' | 'middle' | 'large'
    style?: any, // 下拉样式
}

export default class EventFilter extends React.Component&lt;IFilterProps, {}&gt; {

    state = {
        visible: false,
        value: [],
        searchKeywords: '',
    }

    // 上次选中的值
    lastValue: any[] = []

    componentDidMount() {
        const { value } = this.props;
        if (value) {
            this.setState({ value })
            this.lastValue = value
        }
    }

    componentDidUpdate(preProps) {
        const lastValue = preProps?.value
        const curValue = this.props?.value
        if (lastValue &amp;&amp; curValue &amp;&amp; !(_.isEqual(lastValue, curValue))) {
            this.setState({ value: curValue })
            this.lastValue = curValue
        }
    }

    handleVisibleChange = (visible: boolean) =&gt; {
        this.setState({ visible, searchKeywords: '', value: this.props.value })
    }

    handleChange = (checkedList: any[]) =&gt; {
        let { options } = this.props;
        let value = this.lastValue;
        const { searchKeywords } = this.state;
        let realOptions = options.filter(it =&gt; it.label.includes(searchKeywords));
        // 对应列表value集
        let realOptionsValues = realOptions.map((it) =&gt; it.value);
        realOptionsValues.forEach((item) =&gt; {
            // 列表的在旧的选中列表存在，在新的选中列表不存在则旧选中列表过滤掉这个值
            if (
                value.includes(item) &amp;&amp;
                !checkedList.includes(item)
            ) {
                value = value.filter(
                    (it) =&gt; it !== item
                );
            }
        });
        // 新列表增加的值
        let changeValues = checkedList.filter((it) =&gt; {
            return !value.includes(it);
        });
        // 合并之后最终值
        let newCheckedList = [...value, ...changeValues];
        this.lastValue = newCheckedList
        this.setState({ value: newCheckedList })
    }

    onCheckAllChange = (e, hasSearch?: boolean) =&gt; {
        const { options } = this.props
        const { searchKeywords } = this.state
        if (e.target.checked) {
            if (hasSearch) {
                this.handleChange(options.filter(it =&gt; it.label?.includes(searchKeywords)).map(({ value }) =&gt; value) || []);
            } else {
                this.handleChange(options.map(({ value }) =&gt; value));
            }
        } else {
            this.handleChange([]);
        }
    };

    handleOk = () =&gt; {
        const { onChange } = this.props
        onChange &amp;&amp; onChange(this.state.value)
        this.setState({ visible: false })
    }

    handleFilterReset = () =&gt; {
        const { value } = this.state
        if (value.length) {
            this.setState({ value: [] })
            this.lastValue = []
        }
    }

    getContent = () =&gt; {
        const { options, canSelectAll } = this.props;
        const { value } = this.state;
        const { searchKeywords } = this.state;
        let renderOptions = options.filter(it =&gt; it.label?.includes(searchKeywords)) || [];
        return &lt;div className='d-flex flex-column' onClick={(e) =&gt; e.stopPropagation()}&gt;
            &lt;Input
                onChange={(e)=&gt;{
                    this.setState({ searchKeywords: e.target.value })
                }}
                value={searchKeywords}
                style={{ width: '100%', marginBottom: 15 }}
                prefix={&lt;SearchOutlined /&gt;}
                placeholder=&quot;请输入&quot;
            /&gt;
            &lt;div className='filter-checbox-group-content'&gt;
                {canSelectAll &amp;&amp; (
                    &lt;&gt;
                        &lt;Checkbox
                            indeterminate={value.length &amp;&amp; value.length &lt; options.length}
                            onChange={(value) =&gt; this.onCheckAllChange(value, Boolean(searchKeywords))}
                            checked={value.length &amp;&amp; value.length === options.length}
                        &gt;
                            全选
                        &lt;/Checkbox&gt;
                        &lt;Divider className='my-2' /&gt;
                    &lt;/&gt;
                )}
                &lt;Checkbox.Group onChange={this.handleChange} value={value}&gt;
                    &lt;Space direction=&quot;vertical&quot;&gt;
                        {
                            renderOptions.map((item) =&gt; {
                                return (
                                    &lt;Checkbox
                                        key={item.value}
                                        value={item.value}
                                    &gt;
                                        &lt;div style={{ whiteSpace: 'nowrap' }} title={item.label}&gt;{item.label}&lt;/div&gt;
                                    &lt;/Checkbox&gt;
                                );
                            })
                        }
                    &lt;/Space&gt;
                &lt;/Checkbox.Group&gt;
            &lt;/div&gt;
            &lt;div className='m-checbox-group-content-footer'&gt;
                &lt;div
                    style={{
                        color: value.length ? '#5BB7E1' : &quot;#C9C9C9&quot;,
                        cursor: value.length ? 'pointer' : 'not-allowed',
                        userSelect: 'none'
                    }}
                    onClick={this.handleFilterReset}
                &gt;
                    重置
                &lt;/div&gt;
                &lt;Button type='primary' size='small' onClick={this.handleOk}&gt;确定&lt;/Button&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    }

    render() {
        const { position, title, loading, triggerNode, style, size } = this.props;
        const { visible } = this.state;
        const content = this.getContent()
        return &lt;div&gt;
            &lt;Popover
                overlayClassName='m-checkbox-dropdown-content m-arrow-close'
                content={content}
                trigger=&quot;click&quot;
                visible={visible}
                placement={position || 'bottomRight'}
                onVisibleChange={this.handleVisibleChange}
                // getPopupContainer={triggerNode =&gt; triggerNode.parentElement}
                overlayStyle={{ ...style, zIndex: 1 }}
            &gt;
                {
                    !triggerNode ? &lt;Button size={size ? size : 'small'} loading={loading}&gt;{title}&lt;/Button&gt; :
                        &lt;div style={{ userSelect: 'none' }} onClick={(e) =&gt; e.stopPropagation()}&gt;{triggerNode}&lt;/div&gt;
                }
            &lt;/Popover&gt;
        &lt;/div&gt;
    }
}
</code></pre>
<h2>使用</h2>
<pre><code class="language-typescript">
&lt;EventFilter
    options={eventList}
    value={selectEventList}
    onChange={(value) =&gt; this.eventListChange(value)}
    canSelectAll
    triggerNode={
        &lt;div
        style={{
        display: 'flex',
        alignItems: 'center',
        width: 150,
        marginRight: 10
    }}
    &gt;
            &lt;Button type='default'&gt;事件 {\`\${selectEventList.length}/\${eventList.length}\`}&lt;/Button&gt;
    &lt;/div&gt;
    }
/&gt;
</code></pre>
`;export{t as attributes,e as html};

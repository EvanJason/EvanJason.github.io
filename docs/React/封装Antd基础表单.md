---

title: 封装Antd基础表单

categories:
  - React
  - antd
  - Typescript
  - Form
tags:
  - React
  - antd
  - Typescript
  - Form

date: "2023-07-22"

authors: lin

excerpt: 封装Antd基础表单

---


```tsx
import { Button, Checkbox, Col, DatePicker, Form, FormInstance, Input, Radio, Row, Select, Space, Spin } from 'antd'
import { Rule } from 'antd/es/form'
import React, { createRef } from 'react'
const FormItem = Form.Item


export interface formItemAttr {
    label?: string
    field: string
    width?: number
    options?: Array<{ label: React.ReactNode, value: React.Key }>
    initialValue?: any
    rules?: Rule[]
    placeholder?: string
    type: 'DATE' | 'INPUT' | 'SELECT' | 'CHECKBOX' | 'RADIO' | 'TEXTAREA' | 'CUSTOM'
    render?: (formRef: React.RefObject<FormInstance<any>>, item: any) => React.ReactNode
}
export interface IProps_BaseForm {
    formList: Array<formItemAttr>;
    onCancel: () => void
    onOk: (formValue) => void
    loading?: boolean
    formItemLayout?: {
        labelCol: { span: number },
        wrapperCol: { span: number }
    }
    onValuesChange?: (changedValues, allValues) => void
    footer?: React.ReactNode
    footerStyle?: React.CSSProperties
}
const BaseForm = (props: IProps_BaseForm) => {

    const defaultLayout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 }
    }
    const { loading = false, formList, formItemLayout = defaultLayout, onOk, onCancel, footer, footerStyle } = props
    const formRef = createRef<FormInstance>();
    const handleOk = () => {
        formRef.current?.validateFields().then((values) => {
            onOk(values)
        }).catch((errorInfo) => {
            console.log(errorInfo)
        })
    }
    const handleFormValue = (changedValues, allValues) => {
        props.onValuesChange?.(changedValues, allValues)
    }
    const renderFormList = () => {
        return formList.map((item, index) => {
            let label = item.label;
            let field = item.field;
            let initialValue = item.initialValue || null;
            let placeholder = item.placeholder;
            let width = item.width || 300;
            let rules = item.rules || [];
            switch (item.type) {
                case 'DATE':
                    return <FormItem label={label} name={field} initialValue={initialValue} key={field} rules={rules}>
                        <DatePicker allowClear placeholder={placeholder} format="YYYY-MM-DD HH:mm:ss" />
                    </FormItem>
                case 'INPUT':
                    return <FormItem label={label} name={field} initialValue={initialValue} key={field} rules={rules}>
                        <Input type="text" placeholder={placeholder} style={{ width }} />
                    </FormItem>
                case 'SELECT':
                    return <FormItem label={label} name={[field]} initialValue={initialValue} key={field} rules={rules}>
                        <Select
                            style={{ width }}
                            placeholder={placeholder}
                            options={item.options || []}
                        />
                    </FormItem>
                case 'CHECKBOX':
                    return <FormItem label={label} name={[field]} valuePropName="checked" initialValue={initialValue} key={field} rules={rules}>
                        <Space>
                            <Checkbox.Group options={item.options || []} style={{ width }} />
                        </Space>
                    </FormItem>
                case 'RADIO':
                    return <FormItem label={label} name={[field]} initialValue={initialValue} key={field} rules={rules}>
                        <Radio.Group options={item.options || []} style={{ width }} />
                    </FormItem>
                case 'TEXTAREA':
                    return <FormItem label={label} name={[field]} initialValue={initialValue} key={field} rules={rules}>
                        <Input.TextArea rows={4} placeholder={placeholder} style={{ width }} />
                    </FormItem>
                case 'CUSTOM':
                    formRef.current?.setFieldsValue({ [field]: initialValue })
                    return item.render(formRef, item)
            }
        })
    }
    if (formList.length === 0) return
    return (
        <Spin spinning={loading}>
            <Form
                layout="horizontal"
                ref={formRef}
                scrollToFirstError
                {...formItemLayout}
                onValuesChange={handleFormValue}
            >
                {renderFormList()}
            </Form>
            {
                footer ? footer : <Row justify="center" style={{ marginTop: 50, width: '50%', ...footerStyle }}>
                    <Col>
                        <Button
                            type="primary"
                            style={{ marginRight: 100, width: 120 }}
                            shape="round"
                            onClick={handleOk}
                        >
                            确认
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            style={{ width: 120 }}
                            shape="round"
                            onClick={onCancel}
                        >
                            取消
                        </Button>
                    </Col>
                </Row>
            }
        </Spin>
    )
}
export default BaseForm
```
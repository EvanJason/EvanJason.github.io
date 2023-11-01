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

# 封装Antd基础表单

## 封装自定义表单

```tsx
import { Button, Checkbox, Col, DatePicker, Form, FormInstance, Input, Radio, Row, Select, Space, Spin } from 'antd'
import { Rule } from 'antd/es/form'
import React, { createRef, useEffect } from 'react'
import {CheckboxOptionType} from "antd/es/checkbox/Group";
const FormItem = Form.Item

export type formActionType = 'add' | 'edit' | 'del' | 'detail'
export interface formItemAttr {
    label?: string
    field: string
    width?: React.CSSProperties['width']
    options?: Array<{ label: React.ReactNode, value: React.Key }>
    mode?: 'multiple' | 'tags'
    initialValue?: any
    rules?: Rule[]
    placeholder?: string
    disabled?: boolean
    type: 'DATE' | 'INPUT' | 'SELECT' | 'CHECKBOX' | 'RADIO' | 'TEXTAREA' | 'CUSTOM'
    render?: (formRef: React.RefObject<FormInstance<any>>, item: any) => React.ReactNode
    allowClear?: boolean
    maxLength?: number
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

    useEffect(() => {
        formRef.current?.setFieldsValue({
            ...props.formList.reduce((pre, cur) => {
                pre[cur.field] = cur.initialValue
                return pre
            }, {})
        })
        return () => {
            formRef.current?.resetFields()
        }
    },[formList])

    const handleFormValue = (changedValues, allValues) => {
        props.onValuesChange?.(changedValues, allValues)
    }
    const renderFormList = () => {
        return formList.map((item, index) => {
            let label = item.label;
            let field = item.field;
            let initialValue = item.mode ? item.initialValue || [] : item.initialValue || null;
            let placeholder = item.placeholder;
            let width = item.width || 300;
            let rules = item.rules || [];
            let disabled = item.disabled || false;
            switch (item.type) {
                case 'DATE':
                    return <FormItem label={label} name={field} initialValue={initialValue} key={field} rules={rules}>
                        <DatePicker disabled={disabled} allowClear placeholder={placeholder} format="YYYY-MM-DD HH:mm:ss" />
                    </FormItem>
                case 'INPUT':
                    return <FormItem label={label} name={field} initialValue={initialValue} key={field} rules={rules}>
                        <Input type="text" disabled={disabled} showCount maxLength={item.maxLength || 50} placeholder={placeholder} style={{ width }} />
                    </FormItem>
                case 'SELECT':
                    return <FormItem label={label} name={[field]} initialValue={initialValue} key={field} rules={rules}>
                        <Select
                            mode={item.mode}
                            maxTagCount={item.mode ? 1 : undefined}
                            maxTagTextLength={item.mode ? 20 : undefined}
                            style={{ width }}
                            placeholder={placeholder}
                            options={item.options || []}
                            disabled={disabled}
                            optionFilterProp="label"
                            allowClear={item.allowClear}
                        />
                    </FormItem>
                case 'CHECKBOX':
                    return <FormItem label={label} name={[field]} valuePropName="checked" initialValue={initialValue} key={field} rules={rules}>
                        <Space>
                            <Checkbox.Group options={(item.options || []) as CheckboxOptionType[]} style={{ width }} disabled={disabled} />
                        </Space>
                    </FormItem>
                case 'RADIO':
                    return <FormItem label={label} name={[field]} initialValue={initialValue} key={field} rules={rules}>
                        <Radio.Group disabled={disabled} options={(item.options || []) as CheckboxOptionType[]} style={{ width }} />
                    </FormItem>
                case 'TEXTAREA':
                    return <FormItem label={label} name={[field]} initialValue={initialValue} key={field} rules={rules}>
                        <Input.TextArea disabled={disabled} rows={4} placeholder={placeholder} style={{ width }} />
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



## ContactForm组件

```tsx
import { Button, Form, FormInstance, Input, Select, Space } from 'antd';
import React from 'react'
import {
    PlusOutlined,
    MinusCircleOutlined
} from '@ant-design/icons';
import { sexArr } from 'components/customerManagement/constant';
export interface IProps_ContactForm {
    field: string
    data: any[]
    formRef: React.RefObject<FormInstance<any>>
}
const ContactForm = (props: IProps_ContactForm) => {
    const { field, data, formRef } = props
    const formItemLayout = {
        labelCol: { span: 10 },
        wrapperCol: { span: 14 }
    }

    return (
        <Form.List name={field} initialValue={data}>
            {(fields, { add, remove }) => (
                <>
                    {fields.map((field, index) => (
                        <div key={field.key}>
                            <Space align="baseline" style={{ width: '100%', marginLeft: 135 }}>
                                <Form.Item
                                    {...field}
                                    {...formItemLayout}
                                    label={index === 0 ? '主联系人' : `联系人${index}`}
                                    name={[field.name, 'contactName']}
                                    rules={[{
                                        message: '',
                                        required: true,
                                        validator: async (_, value) => {
                                            if (!value) {
                                                return Promise.reject('');
                                            }
                                        }
                                    }]}
                                >
                                    <Input placeholder='请输入联系人名字' />
                                </Form.Item>
                                <Form.Item
                                    noStyle
                                    shouldUpdate={(prevValues, curValues) =>
                                        prevValues.departmentTitle !== curValues.departmentTitle
                                    }
                                >
                                    {() => (
                                        <Form.Item
                                            {...field}
                                            name={[field.name, 'departmentTitle']}
                                        >
                                            <Input placeholder='请输入部门职务' style={{ width: 150 }} />
                                        </Form.Item>
                                    )}
                                </Form.Item>
                                <Form.Item
                                    noStyle
                                    shouldUpdate={(prevValues, curValues) =>
                                        prevValues.phoneNumber !== curValues.phoneNumber
                                    }
                                >
                                    {() => (
                                        <Form.Item
                                            {...field}
                                            name={[field.name, 'phoneNumber']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '',
                                                    validator: async (_, value) => {
                                                        if (!value) {
                                                            return Promise.reject();
                                                        }
                                                        if (value) {
                                                            const reg = /^1[3-9]\d{9}$/;
                                                            if (!reg.test(value)) {
                                                                return Promise.reject();
                                                            }
                                                            const curList: Array<{
                                                                contactName: string
                                                                departmentTitle: string
                                                                phoneNumber: string
                                                                sex: string
                                                            }> = formRef?.current?.getFieldValue?.('contactsInfoList')
                                                            if (curList.filter(item => item.phoneNumber === value).length > 1) {
                                                                return Promise.reject();
                                                            }
                                                        }
                                                    }
                                                },
                                            ]}

                                        >
                                            <Input placeholder='请输入手机号码' style={{ width: 150 }} />
                                        </Form.Item>
                                    )}
                                </Form.Item>
                                <Form.Item
                                    noStyle
                                    shouldUpdate={(prevValues, curValues) =>
                                        prevValues.sex !== curValues.sex
                                    }
                                >
                                    {() => (
                                        <Form.Item
                                            {...field}
                                            name={[field.name, 'sex']}
                                            rules={[{ required: true, message: '' }]}
                                        >
                                            <Select
                                                placeholder='请选择性别'
                                                style={{ width: 150 }}
                                                options={sexArr}
                                            />
                                        </Form.Item>
                                    )}
                                </Form.Item>
                                {
                                    index > 0 && <MinusCircleOutlined onClick={() => remove(field.name)} />
                                }
                            </Space>
                        </div>
                    ))}

                    <Form.Item style={{ marginLeft: 235, width: 200 }}>
                        <Button type="link" onClick={() => add()} block icon={<PlusOutlined />}>
                            添加联系人
                        </Button>
                    </Form.Item>
                </>
            )}
        </Form.List>
    )
}
export default ContactForm
```

## 使用示例

```tsx
import { Card, Divider } from 'antd'
import BaseForm, { formActionType, formItemAttr } from 'components/common/BaseForm'
import ContactForm from '../contactForm'
import { corporateTableItmes } from 'components/customerManagement/constant'
import { useEffect, useMemo, useState } from 'react'

export interface IProps_CorporateForm {
    type: formActionType
    data: corporateTableItmes
    onCancel: () => void
    onOk: (formValue) => void
    loading?: boolean
    serverList: any[]
}
const CorporateForm = (props: IProps_CorporateForm) => {
    const { loading, data, type, serverList } = props
    const [formValue, setFormValue] = useState<any>(null)
    useEffect(() => {
        if (type === 'edit') {
            setFormValue({
                companyName: data?.companyName,
                address: data?.address,
                email: data?.email,
                remark: data?.remark,
                systemId: data?.systemIds?.length ? data.systemIds : undefined,
                contactsInfoList: data?.contacts?.length ? data.contacts.map(item => ({
                    contactName: item?.contactName,
                    departmentTitle: item?.departmentTitle,
                    phoneNumber: item?.phoneNumber,
                    sex: item?.sex
                })) : [{
                    contactName: undefined,
                    departmentTitle: undefined,
                    phoneNumber: undefined,
                    sex: undefined,
                }],
            })
        }
    }, [data])

    const formList = useMemo(() => {
        const list: Array<formItemAttr> = [
            {
                type: 'INPUT',
                label: '企业名称',
                field: 'companyName',
                placeholder: '请输入企业名称',
                initialValue: formValue?.companyName,
                rules: [
                    {
                        required: true,
                    }
                ]
            },
            {
                type: 'INPUT',
                label: '企业邮箱',
                field: 'email',
                placeholder: '请输入企业邮箱',
                initialValue: formValue?.email,
                rules: [
                    {
                        required: true,
                        type: 'email',
                    }
                ]
            },
            {
                type: 'INPUT',
                label: '企业地址',
                field: 'address',
                placeholder: '请输入企业地址',
                initialValue: formValue?.address,
                rules: [
                    {
                        required: true,
                    }
                ]
            },
            {
                type: 'SELECT',
                label: '服务器编号',
                field: 'systemId',
                placeholder: '请选择服务器编号',
                initialValue: formValue?.systemId,
                mode: 'multiple',
                options: serverList,
                rules: [
                    {
                        required: false,
                    }
                ]
            },
            {
                type: 'TEXTAREA',
                label: '备注',
                field: 'remark',
                placeholder: '请输入备注',
                initialValue: formValue?.remark,
            },
            {
                type: 'CUSTOM',
                field: 'contactsInfoList',
                initialValue: formValue?.contactsInfoList || [{
                    contactName: undefined,
                    departmentTitle: undefined,
                    phoneNumber: undefined,
                    sex: undefined,
                }],
                render: (formRef, record) => {
                    return <div>
                        <Divider style={{ width: '50%', minWidth: '50%' }} />
                        <ContactForm
                            field={record.field}
                            data={record?.initialValue}
                            formRef={formRef}
                        />
                    </div>
                }
            }
        ]
        return list
    }, [formValue])

    return (
        <Card
            bodyStyle={{ height: 800, overflow: 'hidden auto' }}
        >
            <div>
                <BaseForm
                    formList={formList}
                    formItemLayout={{
                        labelCol: { span: 4 },
                        wrapperCol: { span: 14 }
                    }}
                    onCancel={props.onCancel}
                    onOk={props.onOk}
                    loading={loading}
                    footerStyle={{ width: '50%' }}
                />
            </div>
        </Card>
    )
}
export default CorporateForm
```
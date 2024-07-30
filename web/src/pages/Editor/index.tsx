import {useEffect, useState} from 'react'
import AmisEditor from '@/components/AmisEditor'
import {Button, Form, Input, message, Modal, Space} from 'antd'
import {history} from '@umijs/max'
import {request} from '@@/plugin-request'
import {useModel} from '@@/plugin-model'
import {useSearchParams} from '@@/exports'

const EditorPage = () => {
    const [isPreview, setIsPreview] = useState(false)
    const [schema, setSchema] = useState({})
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [form] = Form.useForm()
    const {initialState, refresh} = useModel('@@initialState')
    const [searchParams, setSearchParams] = useSearchParams()
    const [uuid, setUUID] = useState(searchParams.get('uuid'))

    const handleChange = (schema: any) => {
        setSchema(schema)
    }

    const save = () => {
        form.validateFields().then(value => {
            const path = '/' + value.path.replace(/\/+/, '')

            // 校验特殊字符
            if (path.match(/[^a-zA-Z0-9\-_\/]/)) {
                return message.error('路径只能包含字母、数字、下划线、中划线、斜杠')
            }

            if (path == '/_editor') {
                return message.error('路径不可用')
            }

            request('/_save', {
                method: 'post',
                data: {
                    uuid,
                    name: value.name,
                    path: path,
                    schema
                }
            }).then(async (res) => {
                if (res.status == 1) {
                    message.error(res.msg)
                    return
                }

                message.success(res.msg)

                await refresh()

                setTimeout(() => history.push(path), 500)
            })
        })
    }

    const showModal = () => {
        setIsModalOpen(true)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    useEffect(() => {
        if (initialState.config?.prod) {
            history.push('/')
            return
        }

        // edit
        if (uuid) {
            const item = initialState.menus.find((item: any) => item.uuid == uuid)
            if (item?.uuid) {
                form.setFieldsValue({
                    name: item.name,
                    path: item.path
                })
            }

            request('/_schema', {params: {uuid}}).then(res => {
                console.clear()
                console.log(res.data)
                setSchema(res.data)
            })
            console.log(schema)
        }
    }, [uuid])

    return (
        <div className={'h-screen'}>
            <div className="w-full h-[48px] border-b flex justify-between items-center px-2">
                <div className="text-xl font-smeibold">Amis Editor</div>
                <Space>
                    <Button type="primary" ghost onClick={() => setIsPreview(!isPreview)}>
                        {isPreview ? '编辑' : '预览'}
                    </Button>
                    {!isPreview && <Button onClick={() => showModal()} type="primary">保存</Button>}
                    {!isPreview && <Button onClick={() => history.back()}>退出</Button>}
                </Space>
            </div>
            <Modal title="配置"
                   open={isModalOpen}
                   okText="确定"
                   cancelText="取消"
                   onOk={save}
                   onCancel={handleCancel}>
                <Form layout="vertical" form={form}>
                    <Form.Item label="名称" name="name" rules={[{required: true, message: '请输入页面名称'}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label="路径" name="path" rules={[{required: true, message: '请输入页面路径'}]}>
                        <Input/>
                    </Form.Item>
                </Form>
            </Modal>
            <div className="h-[calc(100vh-48px)]">
                <AmisEditor defaultSchema={schema} onChange={handleChange} preview={isPreview}/>
            </div>
        </div>
    )
}

export default EditorPage

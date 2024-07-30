import {Button, Form, Input, message, Modal, Tooltip} from 'antd'
import {SettingOutlined} from '@ant-design/icons'
import {useEffect, useState} from 'react'
import {useModel} from '@@/plugin-model'
import InputTree from '@/components/InputTree'
import {request} from '@@/plugin-request'

const SettingsAction = ({className}: { className?: string }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [form] = Form.useForm()
    const {initialState, refresh} = useModel('@@initialState')

    const showModal = () => {
        setIsModalOpen(true)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    const handleOk = () => {
        form.validateFields().then(value => {
            request('/_config', {
                method: 'POST',
                data: {
                    config: {app_name: value.app_name},
                    menus: value.menus
                }
            }).then(async (res) => {
                if (res.status == 1) {
                    message.error(res.msg)
                    return
                }

                message.success(res.msg)

                setIsModalOpen(false)
                refresh()
            })
        })
    }

    useEffect(() => {
        form.setFieldsValue({
            app_name: initialState?.config?.app_name,
            menus: initialState?.menus
        })
    }, [])

    return (
        <Tooltip className={className} title="配置">
            <Button type="text" icon={<SettingOutlined/>} onClick={showModal}/>
            <Modal title="配置" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form layout="vertical" form={form}>
                    <Form.Item label="应用名称" name="app_name" rules={[{required: true, message: '请输入应用名称'}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label="菜单排序" name="menus">
                        <InputTree defaultValue={initialState?.menus}
                                   onChange={(value) => form.setFieldValue('menus', value)}/>
                    </Form.Item>
                </Form>
            </Modal>
        </Tooltip>
    )
}

export default SettingsAction

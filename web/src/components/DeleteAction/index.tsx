import {Button, message, Popconfirm, Tooltip} from 'antd'
import {DeleteOutlined} from '@ant-design/icons'
import {useMenu} from '@/hooks/useMenu'
import {useModel} from '@@/plugin-model'
import {request} from '@@/plugin-request'
import {history} from '@umijs/max'

const DeleteAction = ({className}: { className?: string }) => {
    const {name, uuid} = useMenu()
    const {initialState, refresh} = useModel('@@initialState')

    const confirm = () => {
        request('/_del', {method: 'post', data: {uuid}}).then(async (res) => {
            if (res.status == 1) {
                message.error(res.msg)
                return
            }

            message.success(res.msg)

            refresh()
        })
    }

    const cancel = () => {

    }

    return (
        <Tooltip className={className} title="删除当前页面">
            <Popconfirm
                placement="topLeft"
                title={`删除: ${name}`}
                description="确认删除该页面 ?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="确定"
                cancelText="取消"
            >
                <Button type="text" icon={<DeleteOutlined/>} disabled={initialState?.menus?.length == 1}/>
            </Popconfirm>
        </Tooltip>
    )
}

export default DeleteAction

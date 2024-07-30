import {Button, Tooltip} from 'antd'
import {PlusOutlined} from '@ant-design/icons'
import {history} from '@umijs/max'

const CreateAction = ({className}: { className?: string }) => {
    return (
        <Tooltip className={className} title="新增页面">
            <Button type="text" icon={<PlusOutlined/>} onClick={() => history.push('/_editor')}/>
        </Tooltip>
    )
}

export default CreateAction

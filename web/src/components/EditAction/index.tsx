import {Button, Tooltip} from 'antd'
import {EditOutlined} from '@ant-design/icons'
import {history} from '@umijs/max'
import {useMenu} from '@/hooks/useMenu'

const EditAction = ({className}: { className?: string }) => {
    const {uuid} = useMenu()

    return (
        <Tooltip className={className} title="编辑当前页面">
            <Button type="text" icon={<EditOutlined/>} onClick={() => history.push('/_editor?uuid=' + uuid)}/>
        </Tooltip>
    )
}

export default EditAction

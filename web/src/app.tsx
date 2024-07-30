// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
import {history, RunTimeLayoutConfig, useLocation} from '@umijs/max'
import SettingAction from '@/components/SettingAction'
import DeleteAction from '@/components/DeleteAction'
import EditAction from '@/components/EditAction'
import CreateAction from '@/components/CreateAction'
import {RequestConfig} from '@@/plugin-request/request'
import {request as fetch} from '@@/plugin-request'
import React from 'react'
import {Alert} from 'antd'

export async function getInitialState(): Promise<any> {
    let {data} = await fetch('/_app')

    return {...data}
}

export const layout: RunTimeLayoutConfig = ({initialState}) => {
    if (!initialState?.menus) {
        return {
            logo: false,
            rightContentRender: () => <Alert description="Service connection failure" type="error"/>,
        }
    }

    const location = useLocation()
    if (location.pathname == '/') {
        history.push(initialState.menus[0].path)
    }

    return {
        title: initialState.config.app_name,
        logo: false,
        bgLayoutImgList: [
            {
                src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                left: 85,
                bottom: 100,
                height: '303px',
            },
            {
                src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                bottom: -68,
                right: -45,
                height: '303px',
            },
            {
                src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
                bottom: 0,
                left: 0,
                width: '420px',
            },
        ],
        actionsRender: (props) => {
            if (initialState.config.prod) return []

            const padding = props.collapsed ? 'mb-2' : 'mr-2'

            return (
                <div>
                    <SettingAction className={padding}/>
                    <DeleteAction className={padding}/>
                    <EditAction className={padding}/>
                    <CreateAction/>
                </div>
            )
        },
        menu: {
            params: initialState,
            request: async () => initialState.menus
        }
    }
}

export const request: RequestConfig = {
    baseURL: '/api',
}

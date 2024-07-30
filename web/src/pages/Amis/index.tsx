import React, {useEffect, useState} from 'react'
import {PageContainer} from '@ant-design/pro-components'
import {render as renderAmis, RenderOptions} from 'amis'
import axios from 'axios'
import {AlertComponent, toast, ToastComponent} from 'amis-ui'
import copy from 'copy-to-clipboard'

import 'amis/lib/themes/cxd.css'
import 'amis/lib/helper.css'
import 'amis/sdk/iconfont.css'
import {Card} from 'antd'
import {history} from '@umijs/max'
import {request} from '@@/plugin-request'
import {useMenu} from '@/hooks/useMenu'

const Amis: React.FC = () => {
    const {uuid} = useMenu()

    const [schema, setSchema] = useState<any>({})

    const locale = 'zh-CN'
    const props = {locale: locale}
    const options: RenderOptions = {
        // 下面三个接口必须实现
        fetcher: ({
                      url, // 接口地址
                      method, // 请求方法 get、post、put、delete
                      data, // 请求数据
                      responseType,
                      config, // 其他配置
                      headers // 请求头
                  }: any) => {
            config = config || {}
            config.withCredentials = true
            responseType && (config.responseType = responseType)

            if (config.cancelExecutor) {
                config.cancelToken = new (axios as any).CancelToken(
                    config.cancelExecutor
                )
            }

            config.headers = headers || {}

            if (method !== 'post' && method !== 'put' && method !== 'patch') {
                if (data) {
                    config.params = data
                }

                return (axios as any)[method](url, config)
            } else if (data && data instanceof FormData) {
                config.headers = config.headers || {}
                config.headers['Content-Type'] = 'multipart/form-data'
            } else if (
                data &&
                typeof data !== 'string' &&
                !(data instanceof Blob) &&
                !(data instanceof ArrayBuffer)
            ) {
                data = JSON.stringify(data)
                config.headers = config.headers || {}
                config.headers['Content-Type'] = 'application/json'
            }

            return (axios as any)[method](url, data, config)
        },
        isCancel: (value: any) => (axios as any).isCancel(value),
        copy: content => {
            copy(content)
            toast.success('复制成功')
        },
    }

    useEffect(() => {
        if (!uuid) {
            history.push('/')
            return
        }
        request('/_schema', {params: {uuid}}).then(res => setSchema(res.data))
    }, [uuid])

    return (
        <PageContainer ghost>
            {Object.keys(schema).length && (
                <Card>
                    <AlertComponent key="alert" locale={locale}/>
                    <ToastComponent key="toast" locale={locale}/>
                    {renderAmis(schema, props, options)}
                </Card>
            )}
        </PageContainer>
    )
}

export default Amis

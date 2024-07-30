import React from 'react'
import {Editor} from 'amis-editor'
import {RenderOptions} from 'amis'
import copy from 'copy-to-clipboard'
import axios from 'axios'
import {toast} from 'amis-ui'
import 'amis-editor-core/lib/style.css'

function AmisEditor({onChange, preview, defaultSchema}: {
    onChange: (val: any) => void,
    preview: boolean,
    defaultSchema?: any
}) {
    if (!defaultSchema || (typeof defaultSchema == 'object' && Object.keys(defaultSchema).length === 0)) {
        defaultSchema = {type: 'page', regions: ['body']}
    }

    const change = (val: any) => {
        onChange(val)
    }

    const env: RenderOptions = {
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

    return (
        <div className="h-full">
            <Editor theme="cxd" onChange={change} value={defaultSchema} preview={preview} amisEnv={env}/>
        </div>
    )
}

export default AmisEditor

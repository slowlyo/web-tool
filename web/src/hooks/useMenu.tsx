import {history, useLocation} from '@umijs/max'
import {useModel} from '@@/plugin-model'

type Menu = {
    name: string,
    path: string,
    uuid: string
}

export const useMenu = (): Menu => {
    const {initialState, loading} = useModel('@@initialState')
    const location = useLocation()

    let current: Menu = {name: '', path: '', uuid: ''}

    if (!loading) {
        const res = initialState?.menus?.find((item: any) => item.path == location.pathname)

        if (res?.uuid) {
            current = res
        }
    }

    if (!current.uuid && location.pathname != '/') {
        history.push('/')
    }

    return current
}

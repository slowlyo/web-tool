import {defineConfig} from '@umijs/max'

export default defineConfig({
    antd: {},
    access: {},
    model: {},
    initialState: {},
    request: {},
    layout: {
        title: 'Web Tool',
    },
    history: {type: 'hash'},
    proxy: {
        '/api': {
            target: 'http://127.0.0.1:3000',
            changeOrigin: true,
        }
    },
    routes: [
        {
            path: '_editor',
            layout: false,
            component: './Editor'
        },
        {
            path: '*',
            component: './Amis'
        }
    ],

    npmClient: 'pnpm',
    tailwindcss: {},
    scripts: [{src: './loading.js'}],
    esbuildMinifyIIFE: true
})

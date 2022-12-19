import type { App, Plugin } from 'vue'
export type SFCWithInstall<T> = T & Plugin
export const withInstall = <T>(comp: T) => {
    (comp as SFCWithInstall<T>).install = (app: App) => {
        // 组件是script setup 的形式时，会自动以文件名注册，会挂载到组件的_name属性上
        const name = (comp as any).name || (comp as any)._name
        // const { name } = comp as unknown as { name: string }
        // 注册组件
        app.component(name, comp as SFCWithInstall<T>)
    }
    return comp as SFCWithInstall<T>
}
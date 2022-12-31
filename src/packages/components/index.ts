import components from './src/index'
export * from './src/index'
import { App } from 'vue'
import './common/css/index.less'
// import './style/theme/primary.less'

export default {
    // 安装所有组件
    install: (app: App) => {
        components.forEach(c => app.use(c))
    }
}
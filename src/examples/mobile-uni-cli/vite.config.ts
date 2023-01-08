import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
// 组件动态注册【仅支持vue页面】
import Components from 'unplugin-vue-components/vite';
// 打包剔除页面没用到的全局CSS，可参考(purgecss)[https://www.purgecss.cn/]
import purgecss from '@fullhuman/postcss-purgecss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    // 只支持H5环境
    // Components({
    //   extensions: ['vue', 'nvue'],
    //   include: [/\.vue$/, /\.vue\?vue/, /\.nvue$/],
    //   dts: 'src/components.d.ts',
    //   // dirs: ['node_modules/@kviewui/kviewui/src'],
    //   resolvers: [
    //     (componentName) => {
    //       if (componentName.startsWith('Kui')) {
    //         return {
    //           name: componentName,
    //           from: '@kviewui/kviewui'
    //         }
    //       }
    //     }
    //   ]
    // })
  ],
  // css: {
  //   postcss: {
  //     plugins: [
  //       purgecss({
  //         content: ['./src/**/*.vue', './src/**/*.nvue', 'node_modules/@kviewui/kviewui/src/**/*.vue'],
  //         safelist: [/^uni-(.*)/],
  //       })
  //     ]
  //   }
  // }
});

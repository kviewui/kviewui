/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import packageConfig from './package.json'

const topper = `/*!
* ${packageConfig.name} v${packageConfig.version} ${new Date()}
* (c) 2022 @kviewui.
* Released under the MIT License.
*/`;
const buildRollupOutput = {
    banner: topper,
    exports: 'named',
    inlineDynamicImports: true,
    global: {
        vue: 'Vue'
    }
}
export default defineConfig(
    {
        build: {
            // 压缩
            minify: false,
            // css 分离
            // cssCodeSplit: true
            rollupOptions: {
                // 忽略打包vue文件
                external: ['vue'],
                // output: {
                //     banner: '/* 哈哈哈 */',
                //     globals: {
                //         vue: 'Vue'
                //     },
                //     plugins: []
                // },
                output: [
                    {
                        format: 'es',
                        // 打包为.js格式
                        entryFileNames: 'kviewui.es.js',
                        // 打包目录和实际目录对应
                        // preserveModules: true,
                        // 配置打包根目录
                        dir: 'dist',
                        // preserveModulesRoot: 'src',
                        exports: 'named'
                    },
                    {
                        format: 'umd',
                        // preserveModules: true,
                        dir: 'dist',
                        name: 'kviewui',
                        entryFileNames: 'kviewui.umd.js',
                        exports: 'named',
                        // 在UMD 构建模式下为这些外部化的依赖提供一个全局变量
                        globals: {
                            vue: 'Vue'
                        }
                    }
                ]
            },
            lib: {
                entry: './index.ts',
                name: 'kviewui',
                fileName: 'kviewui',
                formats: ['es', 'umd']
            }
        },
        plugins: [
            vue({
                exclude: ['src/**/*.vue'],
                template: {
                    compilerOptions: {
                        isCustomElement: (tag) => {
                            return (
                                tag.startsWith('swiper') ||
                                tag.startsWith('swiper-item') ||
                                tag.startsWith('scroll-view') ||
                                tag.startsWith('picker') ||
                                tag.startsWith('picker-view') ||
                                tag.startsWith('picker-view-column') ||
                                tag.startsWith('view')
                            );
                        }
                    }
                }
            }),
            dts({
                // 指定使用的tsconfig.json文件
                tsConfigFilePath: '../../../tsconfig.json'
            }),
            dts({
                outputDir: 'dist',
                tsConfigFilePath: '../../../tsconfig.json'
            })
        ]
    }
)
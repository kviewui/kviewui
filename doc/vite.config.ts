import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import UnoCSS from 'unocss/vite';

export default defineConfig({
    plugins: [
        AutoImport({
            resolvers: [ArcoResolver()],
            dts: './auto-imports.d.ts',
            dirs: [
                '.vitepress/vitepress/composables',
                '.vitepress/vitepress/store',
            ],
            vueTemplate: true,
            imports: [
                'vue',
                'vue-i18n',
                'vue-router',
                '@vueuse/core',
                '@vueuse/head',
                'pinia',
                'vitepress'
            ],
        }),
        Components({
            extensions: ['vue', 'md'],
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
            dts: './components.d.ts',
            dirs: ['.vitepress/vitepress/components'],
            resolvers: [
                ArcoResolver({
                    sideEffect: true
                }),
                IconsResolver(),
            ],
        }),
        Icons({
            autoInstall: true,
        }),
        UnoCSS(),
    ]
});
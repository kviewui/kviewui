<template>
    <!-- #ifndef APP-NVUE -->
    <text :style="iconStyle" class="kui-icon"
        :class="[`kui-${name}`, customClassName, `${customPrefix}${name}`]"></text>
    <!-- #endif -->
    <!-- #ifdef APP-PLUS-NVUE -->
    <text :style="iconStyle" class="kui-icon" :class="[customClassName || '']">&#xec7a;</text>
    <!-- #endif -->
</template>

<script lang="ts">
import { ref, reactive, SetupContext, computed, CSSProperties, onBeforeMount } from 'vue';

import {
    createComponent
} from '@kviewui/utils';

import { colorBuilder } from '@kviewui/color-builder';

import { iconProps } from './types';
import { getFontSize } from '../../global/tools';

// 引入默认图标unicode
import icons from './kuiIcons.json';
import iconUrl from './iconfont.ttf';

const { create } = createComponent('icon');

export default create({
    props: iconProps,
    setup(props, context: SetupContext) {

        // console.log(uni['$kView']);
        console.log(props.name);
        const theme: KuiNamespace.Theme = uni['$kView'].theme;
        // const unicode = ref('');

        /**
         * 获取图标unicode
         * @param unicode 
         */
        const getUnicode = (unicode: string | number): string => {
            return unescape(`%u${unicode}`);
            // return `\\u${unicode}`;
        }

        // 获取图标unicode
        const code = icons.glyphs.find(v => v.font_class === props.name);
        console.log(code.unicode);

        const unicode = computed(() => {
            if (props.unicode) {
                return getUnicode(props.unicode);
            } else {
                if (code) {
                    return getUnicode(code.unicode);
                }
            }
        });

        // 图标样式
        const iconStyle = computed(() => {
            const style: CSSProperties = reactive({});

            style.color = colorBuilder.generate(props.color, { dark: props.mode === 'dark', list: true })[props.colorLevel];

            style.fontSize = getFontSize(props.size);

            style.fontWeight = props.weight as number;

            return style;
        });

        onBeforeMount(() => {
            // #ifdef APP-NVUE
            const domModule = uni.requireNativePlugin('dom');
            const ttfUrl = props.iconUrl ? props.iconUrl : iconUrl;
            domModule.addRule('fontFace', {
                "fontFamily": "kui-icons",
                "src": "url('./iconfont.ttf')"
            })
            // #endif
        })

        return {
            iconStyle,
            unicode
        }
    }
});

</script>
<style>
/* #ifndef APP-NVUE */
@import './kviewicons.css';

@font-face {
    font-family: kview-icons;
    src: url('./kviewicons.ttf') format('truetype');
}

/* #endif */
.kui-icon {
    font-family: kui-icons;
    text-decoration: none;
    text-align: center;
    color: blueviolet !important;
}
</style>
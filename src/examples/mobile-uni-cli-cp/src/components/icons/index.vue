<template>
    <!-- #ifndef APP-NVUE -->
    <text class="kui-icons" :style="iconStyle" :class="[customClassName, `${customPrefix}${name}`, customClass]" />
    <!-- #endif -->
    <!-- #ifdef APP-NVUE -->
    <text class="kui-icons" >2222</text>
    <!-- #endif -->
</template>
<script lang="ts" setup>
import { reactive, onBeforeMount, CSSProperties, computed } from 'vue';

import { iconProps } from './types';
import iconUrl from './kuiIcons.ttf';

import { theme } from '@kviewui/theme';
import { colorBuilder } from '@kviewui/color-builder';
import { getFontSize } from '@kviewui/utils';

const props = defineProps(iconProps);
console.log(theme);

// const appTheme = theme;

// console.log(JSON.stringify(colorBuilder.getPresetColors()));

// console.log(appTheme.colors.light.danger[5]);
</script>
<!-- <script lang="ts">
import { reactive, onBeforeMount, CSSProperties, computed } from 'vue';

import { iconProps } from './types';
import iconCode from './kuiIcons.json';

import { colorBuilder } from '@kviewui/color-builder';
import { createComponent, getFontSize } from '@kviewui/utils';
const { create } = createComponent('icon');

import iconUrl from './kuiIcons.ttf';

export default create({
    props: iconProps,
    setup(props) {
        // 图标样式
        const iconStyle = computed(() => {
            const style: CSSProperties = reactive({});

            style.color = colorBuilder.generate(props.color, { dark: props.mode === 'dark', list: true })[props.colorLevel as number];

            style.fontSize = getFontSize(props.size);

            style.fontWeight = props.weight as number;

            return style;
        });

        /**
        * 获取图标unicode
        * @param unicode 
        */
        const getUnicode = (unicode: string | number): string => {
            return unescape(`%u${unicode}`);
            // return `\\u${unicode}`;
        }

        const code = iconCode.glyphs.find(v => v.font_class === props.name);

        const unicode = computed(() => {
            if (props.unicode) {
                return getUnicode(props.unicode);
            } else {
                if (code) {
                    return getUnicode(code.unicode);
                }
            }
        });

        onBeforeMount(() => {
            // #ifdef APP-NVUE
            const domModule = uni.requireNativePlugin('dom');
            const iconTTf = props.iconUrl || iconUrl;
            domModule.addRule('fontFace', {
                "fontFamily": "kui-icons",
                "src": "url('"+iconTTf+"')"
            })
            // #endif
        });

        return {
            unicode,
            iconStyle
        }
    }
});
</script> -->

<style>
/* #ifndef APP-NVUE */
@import './kuiIcons.css';

@font-face {
    font-family: kui-icons;
    src: url('./kuiIcons.ttf') format('truetype');
}

/* #endif */
.kui-icons {
    font-family: kui-icons;
    text-decoration: none;
    /* text-align: center; */
}
</style>
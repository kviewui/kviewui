<template>
    <!-- #ifndef APP-NVUE -->
    <text class="kui-icons" :style="{ ...iconStyle, ...customStyle }"
        :class="[customClassName, `${customPrefix}-${name}`, customClass]" />
    <!-- #endif -->
    <!-- #ifdef APP-NVUE -->
    <text :id="elId" ref="iconRef" class="kui-icons" :style="{ ...iconStyle, ...customStyle }"
        :class="[customClassName, customClass]">{{ unicode }}</text>
    <!-- #endif -->
</template>
<script lang="ts">
import { reactive, onBeforeMount, CSSProperties, computed, ref, nextTick, onMounted } from 'vue';

import { iconProps } from './types';
import iconCode from './kuiIcons.json';

import { colorBuilder } from '@kviewui/color-builder';
import { createComponent, getFontSize, getElId } from '@kviewui/utils';
const { create } = createComponent('icon');

const elId = getElId();

import iconUrl from './kuiIcons.ttf';

import { getThemeColor } from '../../global/tools';

export default create({
    props: iconProps,
    setup(props) {
        const iconRef = ref(null);

        const theme: KuiNamespace.Theme = uni['$kView'];

        // 图标样式
        const iconStyle = computed(() => {
            const style: CSSProperties = reactive({});

            style.color = getThemeColor(props.color, props.mode, props.colorLevel);

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
                "src": "url('" + iconTTf + "')"
            })
            // #endif
        });

        return {
            unicode,
            iconStyle,
            elId,
            iconRef
        }
    }
});
</script>

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
<template>
	<text
		class="kui-flex kui-flex-col kui-justify-center"
		:selectable="selectable"
		:user-select="userSelect"
		:space="space"
		:decode="decode"
        :class="[customClass]"
		:style="{
			color: data.color,
			fontSize: data.fontSize,
			fontWeight: data.fontWeight,
            ...customStyle
		}"
	>
        {{ content }}
	</text>
</template>

<script lang="ts">
/**
 * Text 文本组件
 * @description 基础文本容器组件，方便组件库统一暗黑模式切换时对页面文本的转换
 * @property {String} color 文本颜色
 * @property {String} fontSize 文本大小
 * @property {Number} fontWeight 文本粗细
 * @property {Boolean} selectable 文本是否可选 [App、H5、快手小程序]
 *  @value true 是
 *  @value false 否
 * @property {Boolean} userSelect 文本是否可选 [微信小程序]
 *  @value true 是
 *  @value false 否
 * @property {String} space 显示连续空格 [App、H5、微信小程序]
 * @property {Boolean} decode 是否解码 [App、H5、微信小程序]
 * @example
 * <kui-text>示例文本</kui-text>
 */
import { reactive, getCurrentInstance, defineComponent, watch } from 'vue';
import { createComponent } from '@kviewui/utils';
import { colorBuilder } from '@kviewui/color-builder';

const { create } = createComponent('text');

import { textProps, TextProps } from './types';
import { getThemeColor } from '../../global/tools';

export default create({
	props: textProps,
	options: {
		// 小程序虚拟节点设置
		virtualHost: false
	},
	setup(props) {
		// const { proxy }: any = getCurrentInstance();
		// const theme = proxy.$theme;
        const theme: KuiNamespace.Theme = uni['$kView'].theme;
				
		const data = reactive({
			mode: props.mode,
			color: getThemeColor(props.color, props.mode, props.colorLevel),
			fontSize: props.size ? props.size : `${theme.size.fonts['base']}${theme.size.fontUnit}`,
			fontWeight: props.weight
		});
		
		const changeMode = e => {
			const isDark = e === 'dark';
			const color = props.color ? getThemeColor(props.color, props.mode, props.colorLevel) : theme.colors[e]['grey'][9];
			
			data.color = color;
		};
		
		changeMode(data.mode);
		
		watch(
			() => [props.color, props.mode],
			(newVal) => {
				data.color = newVal[0];
			}
		);
		
		uni.$on('changeMode', e => {
			changeMode(e);
		});
		
		return {
			data
		}
	}
});
</script>

<style scoped></style>

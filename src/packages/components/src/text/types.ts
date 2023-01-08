import {ModeEnum} from '@kviewui/components/global/types';
import {PropType, inject, ExtractPropTypes} from 'vue';
import { configProviderInjectionKey } from '@kviewui/components/src/config-provider/types';

export type WeightEnum = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

export const textProps = {
    /**
	 * 页面模式
	 */
	mode: {
		type: String as PropType<ModeEnum>,
		default: () => inject(configProviderInjectionKey, undefined)?.mode ?? 'light'
	},
	/**
	 * 文本颜色
	 */
	color: {
		type: String,
		default: () => inject(configProviderInjectionKey, undefined)?.color ?? ''
	},
	/**
	 * 文本大小
	 */
	size: {
		type: String,
		default: () => inject(configProviderInjectionKey, undefined)?.fontSize ?? ''
	},
	/**
	 * 文本粗细
	 */
	weight: {
		type: Number as PropType<WeightEnum>,
		default: 400
	},
	/**
	 * 文本是否可选
	 */
	selectable: {
		type: Boolean,
		default: false
	},
	/**
	 * 文本是否可选【微信小程序】
	 */
	userSelect: {
		type: Boolean,
		default: false
	},
	/**
	 * 显示连续空格
	 */
	space: {
		type: String,
		default: ''
	},
	/**
	 * 是否解码
	 */
	decode: {
		type: Boolean,
		default: false
	},
	/**
	 * @zh 是否为富文本
	 */
	richtext: {
		type: Boolean,
		default: false
	},
    /**
     * @zh 文本内容
     */
    content: {
        type: String,
        default: ''
    }
};

export type TextProps = ExtractPropTypes<typeof textProps>;
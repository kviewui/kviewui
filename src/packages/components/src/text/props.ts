import { TextProps } from './type';
import {PropType, inject} from 'vue';
import { configProviderInjectionKey } from '../config-provider/type';

export default {
	/**
	 * 页面模式
	 */
	mode: {
		type: String as PropType<TextProps['mode']>,
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
		type: Number as PropType<TextProps['weight']>,
		default: 400 as TextProps['weight']
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
	}
}
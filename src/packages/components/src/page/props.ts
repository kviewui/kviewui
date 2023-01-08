import { PageProps } from './type';
import {PropType, inject} from 'vue';
import { configProviderInjectionKey } from '../config-provider/type';

export default {
	/**
	 * 背景色
	 */
	bgColor: {
		type: String,
		default: ''
	},
	/**
	 * 背景样式
	 */
	bgClass: {
		type: String,
		default: ''
	},
	/**
	 * 禁止滚动
	 */
	disableScroll: {
		type: Boolean,
		default: false
	},
	/**
	 * 垂直方向内间距
	 */
	paddingY: {
		type: Number,
		default: 44
	},
	/**
	 * 水平方向内间距
	 */
	paddingX: {
		type: Number,
		default: 24
	},
	/**
	 * 标题
	 */
	title: {
		type: String,
		default: ''
	},
	/**
	 * 页面模式
	 */
	mode: {
		type: String as PropType<PageProps['mode']>,
		default: () => inject(configProviderInjectionKey, undefined)?.mode ?? 'light'
	},
	/**
	 * 自定义导航
	 */
	customHeader: {
		type: Boolean,
		default: false
	},
	/**
	 * 灰度模式
	 */
	grayscale: {
		type: Boolean,
		default: false
	},
	/**
	 * 默认全屏
	 */
	fullscreen: {
		type: Boolean,
		default: true
	},
	/**
	 * 是否使用body插槽
	 */
	useBodySlot: {
		type: Boolean,
		default: true
	}
}
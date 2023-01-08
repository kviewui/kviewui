import { ContainerProps } from './type';
import { PropType, inject } from 'vue';
import type { CSSProperties } from 'vue';
import { configProviderInjectionKey } from '../config-provider/type'; 

export default {
	/**
	 * @zh 背景色
	 */
	backgroundColor: {
		type: String,
		default: ''
	},
	/**
	 * @zh 宽度
	 */
	width: {
		type: String,
		default: '100%'
	},
	/**
	 * @zh 高度
	 */
	height: {
		type: String,
		default: '100%'
	},
	/**
	 * @zh 左上圆角
	 */
	topLeftRadius: {
		type: String,
		default: ''
	},
	/**
	 * @zh 右上圆角
	 */
	topRightRadius: {
		type: String,
		default: ''
	},
	/**
	 * @zh 左下圆角
	 */
	bottomLeftRadius: {
		type: String,
		default: ''
	},
	/**
	 * @zh 右下圆角
	 */
	bottomRightRadius: {
		type: String,
		default: ''
	},
	/**
	 * @zh 圆角
	 */
	radius: {
		type: String,
		default: ''
	},
	/**
	 * @zh 暗黑模式透明度
	 */
	darken: {
		type: Number,
		default: 0.2
	},
	/**
	 * @zh 水平内间距
	 */
	paddingX: {
		type: Number,
		default: 20
	},
	/**
	 * @zh 垂直内间距
	 */
	paddingY: {
		type: Number,
		default: 20
	},
	/**
	 * @zh 水平外间距
	 */
	marginX: {
		type: Number,
		default: 0
	},
	/**
	 * 垂直外间距
	 */
	marginY: {
		type: Number,
		default: 20
	},
	/**
	 * 页面模式
	 */
	mode: {
		type: String as PropType<ContainerProps['mode']>,
		default: () =>
			inject(configProviderInjectionKey, undefined)?.mode ?? 'light'
	},
	/**
	 * @zh 自定义class
	 */
	customClass: {
		type: String,
		default: ''
	},
    /**
     * @zh 自定义style
     */
    customStyle: {
        type: Object as PropType<CSSProperties>
    }
}
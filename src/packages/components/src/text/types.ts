import {globalProps, WeightEnum} from '../../global/types';
import {PropType, inject, ExtractPropTypes} from 'vue';
import { configProviderInjectionKey } from '../config-provider/types';

export const textProps = {
    ...globalProps,
	/**
	 * 文本颜色
	 */
	color: {
		type: String,
		default: () => inject(configProviderInjectionKey, undefined)?.color ?? ''
	},
    /**
     * 颜色色阶
     */
    colorLevel: {
        type: Number as PropType<KuiNamespace.ColorLevel>,
        default: 5
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
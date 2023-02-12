import { ModeEnum } from '../../global/types';
import { PropType,inject, ExtractPropTypes } from 'vue';
import { configProviderInjectionKey } from '../config-provider/types';

export const switchProps = {
    /**
	 * @zh 是否选中
	 */
	modelValue: {
		type: Boolean,
		default: false
	},
	/**
	 * @zh 是否禁用
	 */
	disabled: {
		type: Boolean,
		default: false
	},
	/**
	 * @zh 是否加载状态
	 */
	loading: {
		type: Boolean,
		default: false
	},
	/**
	 * @zh 图标颜色
	 */
	iconColor: {
		type: String,
		default: 'primary'
	},
	/**
	 * @zh 图标
	 */
	icon: {
		type: String,
		default: ''
	},
	/**
	 * @zh 打开的背景颜色
	 */
	activeColor: {
		type: String,
		default: 'primary'
	},
	/**
	 * @zh 关闭的背景颜色
	 */
	inactiveColor: {
		type: String,
		default: 'grey'
	},
	/**
	 * @zh 打开的文字描述
	 */
	activeText: {
		type: String,
		default: ''
	},
	/**
	 * @zh 关闭的文字描述
	 */
	inactiveText: {
		type: String,
		default: ''
	},
	/**
	 * @zh 打开的值
	 */
	activeValue: {
		type: [String, Number, Boolean],
		default: true
	},
	/**
	 * @zh 关闭的值
	 */
	inactiveValue: {
		type: [String, Number, Boolean],
		default: false
	},
	/**
	 * 页面模式
	 */
	mode: {
		type: String as PropType<ModeEnum>,
		default: () => inject(configProviderInjectionKey, undefined)?.mode ?? 'light'
	}
};

export type SwitchProps = ExtractPropTypes<typeof switchProps>;
import { ModeEnum } from '../../global/types';
import { InjectionKey, ExtractPropTypes, PropType } from 'vue';

export const configProviderProps = {
    /**
	 * @zh 页面模式
	 */
	mode: {
		type: String as PropType<ModeEnum>,
		default: 'light' as ModeEnum
	},
	/**
	 * @zh 字体颜色
	 */
	color: {
		type: String,
		default: ''
	},
	/**
	 * @zh 字体大小
	 */
	fontSize: {
		type: String,
		default: ''
	}
};

export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>;

export const configProviderInjectionKey: InjectionKey<ConfigProviderProps> = Symbol('KuiConfigProvider');
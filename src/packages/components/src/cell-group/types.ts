import {PropType, ExtractPropTypes} from 'vue';
import { globalProps } from '../../global/types';

export type TypeEnum = "normal" | "space";

export const cellGroupProps = {
    ...globalProps,
    /**
	 * 标题
	 */
	title: {
		type: String,
		default: ''
	},
	/**
	 * Cell 标题粗细
	 */
	cellTitleWeight: {
		type: Number,
		default: 0
	},
	/**
	 * Cell 圆角大小
	 */
	cellRadius: {
		type: Number,
		default: 0
	},
	/**
	 * 描述内容
	 */
	desc: {
		type: String,
		default: ''
	},
	/**
	 * 单元格类型
	 */
	type: {
		type: String as PropType<TypeEnum>,
		default: 'normal'
	}
};

export type CellGroupProps = ExtractPropTypes<typeof cellGroupProps>;
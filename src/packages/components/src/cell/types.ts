import { globalProps } from "../../global/types";
import { ExtractPropTypes } from 'vue';

export const cellProps = {
    ...globalProps,
    /**
	 * 标题
	 */
	title: {
		type: String,
		default: ''
	},
	/**
	 * 标题大小
	 */
	titleSize: {
		type: Number,
		default: 18
	},
	/**
	 * 标题粗细
	 */
	titleWeight: {
		type: Number,
		default: 400
	},
	/**
	 * 标题颜色
	 */
	color: {
		type: String,
		default: 'black'
	},
	/**
	 * 副标题
	 */
	subTitle: {
		type: String,
		default: ''
	},
	/**
	 * 副标题颜色
	 */
	subTitleColor: {
		type: String,
		default: ''
	},
	/**
	 * 描述内容
	 */
	desc: {
		type: String,
		default: ''
	},
	/**
	 * 描述内容颜色
	 */
	descColor: {
		type: String,
		default: ''
	},
	/**
	 * 圆角大小
	 */
	radius: {
		type: Number,
		default: 10
	},
	/**
	 * 点击态
	 */
	clickStatus: {
		type: Boolean,
		default: true
	},
	/**
	 * 展示右边图标
	 */
	showRightIcon: {
		type: Boolean,
		default: true
	},
	/**
	 * 跳转链接
	 */
	url: {
		type: String,
		default: ''
	},
	/**
	 * 左边图标
	 */
	icon: {
		type: String,
		default: ''
	},
	/**
	 * 垂直居中
	 */
	center: {
		type: Boolean,
		default: false
	}
};

export type CellProps = ExtractPropTypes<typeof cellProps>;
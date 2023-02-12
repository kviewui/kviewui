import { JustifyEnum, DirectionEnum, AlignEnum } from '../../global/types';
import { ExtractPropTypes, PropType } from 'vue';

export const spaceProps = {
    /**
	 * 主轴排列方式
	 */
	justify: {
		type: String as PropType<JustifyEnum>,
		default: 'flex-start' as JustifyEnum
	},
	/**
	 * 布局方向
	 */
	direction: {
		type: String as PropType<DirectionEnum>,
		default: 'row' as DirectionEnum
	},
	/**
	 * 侧轴排列方式
	 */
	align: {
		type: String as PropType<AlignEnum>,
		default: 'flex-start' as AlignEnum
	},
	/**
	 * 子元素间距
	 */
	gap: {
		type: Array,
		default: [10,10]
	},
	/**
	 * 块状布局[布局方向为column时生效]
	 */
	block: {
		type: Boolean,
		default: false
	}
};

export type SpaceProps = ExtractPropTypes<typeof spaceProps>;
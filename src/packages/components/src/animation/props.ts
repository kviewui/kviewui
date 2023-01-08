import {PropType} from 'vue';
import { AnimationProps } from './type';

export default {
	/**
	 * @zh 动画时间
	 */
	duration: {
		type: Number,
		default: 0.4
	},
	/**
	 * @zh 动画时间单位
	 */
	durationUnit: {
		type: String as PropType<AnimationProps['durationUnit']>,
		default: 's' as AnimationProps['durationUnit']
	},
	/**
	 * @zh 时间缓动曲线函数
	 */
	timingFunction: {
		type: String as PropType<AnimationProps['timingFunction']>,
		default: 'linear' as AnimationProps['timingFunction']
	},
	/**
	 * @zh 动画延迟时间
	 */
	delay: {
		type: Number,
		default: 0
	},
	/**
	 * @zh 动画延迟时间单位
	 */
	delayUnit: {
		type: String as PropType<AnimationProps['delayUnit']>,
		default: 's' as AnimationProps['delayUnit']
	},
	/**
	 * @zh 动画重复次数
	 */
	interationCount: {
		type: Number,
		default: 1
	},
	/**
	 * @zh 循环播放动画
	 */
	infinite: {
		type: Boolean,
		default: false
	},
	/**
	 * @zh 动画方向
	 */
	direction: {
		type: String as PropType<AnimationProps['direction']>,
		default: 'normal' as  AnimationProps['direction']
	},
	/**
	 * @zh 动画填充模式
	 */
	fillMode: {
		type: String as PropType<AnimationProps['fillMode']>,
		default: 'both' as AnimationProps['fillMode']
	},
	/**
	 * @zh 动画名称
	 */
	name: {
		type: String,
		default: 'scale-up-center'
	},
	/**
	 * @zh 是否正在播放动画
	 */
	runing: {
		type: Boolean,
		default: false
	}
}
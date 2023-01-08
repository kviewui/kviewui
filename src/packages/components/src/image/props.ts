import { ImageProps } from "./type";
import { PropType } from 'vue';

export default {
	/**
	 * @zh 图片路径
	 */
	src: {
		type: String,
		default: ''
	},
	/**
	 * @zh 图片宽度
	 */
	width: {
		type: String,
		default: '100%'
	},
	/**
	 * @zh 图片高度
	 */
	height: {
		type: String,
		default: ''
	},
	/**
	 * @zh 页面模式，light 亮色模式 dark 暗色模式
	 */
	mode: {
		type: String as PropType<ImageProps['mode']>,
		default: '' as ImageProps['mode']
	},
    /**
     * @zh 填充模式，见[uniapp image组件手册](https://uniapp.dcloud.net.cn/component/image.html)
     */
    fit: {
        type: String as PropType<ImageProps['fit']>,
        default: 'scaleToFill'
    },
	/**
	 * @zh 是否禁用图片缩放，禁用后将完全跟随设置的宽高，同时fit属性失效
	 */
	disableFit: {
		type: Boolean,
		default: false
	},
	/**
	 * @zh 展示动画
	 */
	fadeShow: {
		type: Boolean,
		default: true
	},
	/**
	 * @zh 动画展示时间
	 */
	delay: {
		type: Number,
		default: 1000
	},
	/**
	 * @zh 图片圆角
	 */
	radius: {
		type: Number,
		default: 0
	},
	/**
	 * @zh 缩放比例
	 */
	scale: {
		type: Number,
		default: 1
	},
	/**
	 * @zh 加载错误
	 */
	error: {
		type: Boolean,
		default: false
	},
	/**
	 * @zh 加载中
	 */
	loading: {
		type: Boolean,
		default: true
	},
	/**
	 * @zh 展示预览
	 */
	preview: {
		type: Boolean,
		default: false
	},
	/**
	 * 懒加载
	 */
	lazyload: {
		type: Boolean,
		default: false
	}
}
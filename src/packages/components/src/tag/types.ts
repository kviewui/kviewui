import { ExtractPropTypes, PropType } from 'vue';
import { TypeEnum, ThemeEnum, globalProps } from '../../global/types';

export type SizeEnum = 'large' | 'normal' | 'small' | 'mini';
export type ShapeEnum = 'square' | 'capsule' | 'round';
export type HalfRoundEnum = 'left' | 'right' | '';

export const tagProps = {
    ...globalProps,
    /**
     * @zh 标签类型
     */
    type: {
        type: String as PropType<TypeEnum>,
        default: ''
    },
    /**
     * @zh 块级标签
     */
    block: {
        type: Boolean,
        default: false
    },
    /**
     * @zh 标签大小
     */
    size: {
        type: String as PropType<SizeEnum>,
        default: 'normal' as SizeEnum
    },
    /**
     * @zh 标签形状
     */
    shape: {
        type: String as PropType<ShapeEnum>,
        default: 'round' as ShapeEnum
    },
    /**
     * @zh 空心标签
     */
    plain: {
        type: Boolean,
        default: false
    },
    /**
     * @zh 标签背景色
     */
    backgroundColor: {
        type: String,
        default: ''
    },
    /**
     * @zh 标签边框色
     */
    borderColor: {
        type: String,
        default: ''
    },
    /**
     * @zh 标签文本色
     */
    textColor: {
        type: String,
        default: ''
    },
    /**
     * @zh 半圆角标签
     */
    halfRound: {
        type: String as PropType<HalfRoundEnum>,
        default: ''
    },
    /**
     * @zh 主题色
     */
    theme: {
        type: String as PropType<ThemeEnum>,
        default: ''
    },
    /**
     * @zh 可关闭标签
     */
    closable: {
        type: Boolean,
        default: false
    },
    /**
     * @zh 关闭图标
     */
    closeIcon: {
        type: String,
        default: 'circle-close-filled'
    },
    /**
     * @zh 左图标
     */
    leftIcon: {
        type: String,
        default: ''
    },
    /**
     * @zh 右图标
     */
    rightIcon: {
        type: String,
        default: ''
    },
    /**
     * @zh 唯一标识符
     */
    name: {
        type: String,
        default: ''
    },
    /**
     * @zh 加载状态
     */
    loading: {
        type: Boolean,
        default: false
    },
    /**
     * @zh 加载状态图标
     */
    loadingIcon: {
        type: String,
        default: 'spiner-solid'
    },
    /**
     * @zh 可选中标签
     */
    checkable: {
        type: Boolean,
        default: false
    },
    /**
     * @zh 默认选中状态
     */
    defaultChecked: {
        type: Boolean,
        default: false
    },
    /**
     * @zh 组件自动选中
     */
    autoChecked: {
        type: Boolean,
        default: true
    }
}

export type TagProps = ExtractPropTypes<typeof tagProps>
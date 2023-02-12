import { ExtractPropTypes, PropType } from 'vue';
import { globalProps } from '../../global/types';

export const iconProps = {
    // 引入全局共有props
    ...globalProps,
    /**
     * 图标名称或者图标链接
     */
    name: {
        type: String,
        default: ''
    },
    /**
     * 图标颜色，支持组件库内置颜色名
     */
    color: {
        type: String,
        default: 'grey'
    },
    /**
     * 图标颜色色阶
     */
    colorLevel: {
        type: [String, Number] as PropType<KuiNamespace.ColorLevelMap>,
        default: 5 as KuiNamespace.ColorLevel
    },
    /**
     * 图标大小
     */
    size: {
        type: [String, Number],
        default: ''
    },
    /**
     * 图标粗细
     */
    weight: {
        type: [String, Number],
        default: ''
    },
    /**
     * 自定义icon基础类名
     */
    customClassName: {
        type: String,
        default: '',
    },
    /**
     * 自定义icon类名前缀
     */
    customPrefix: {
        type: String,
        default: ''
    },
    /**
     * 自定义图标的unicode值，nvue有效
     * @example 'e900'
     */
    unicode: {
        type: String,
        default: ''
    },
    /**
     * 自定义图标的ttf字体文件路径
     */
    iconUrl: {
        type: String,
        default: ''
    }
};

export type IconProps = ExtractPropTypes<typeof iconProps>;
declare namespace KuiNamespace {
    /**
     * 预设颜色库色阶
     */
    type ColorLevelMap = {
        [key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9]: string
    }

    /**
     * 预设颜色库
     */
    interface ColorsMap {
        // 海空蓝
        blue: string[],
        // 品牌绿
        brandgreen: string[],
        // 碧涛青
        cyan: string[],
        // 极致蓝
        deepblue: string[],
        // 黄昏色
        gold: string[],
        // 翡翠绿
        green: string[],
        // 中性灰
        grey: string[],
        // 新生绿
        lime: string[],
        // 品红色
        magenta: string[],
        // 活力橙
        orange: string[],
        // 晚秋红
        orangered: string[],
        // 青春紫
        pinkpurple: string[],
        // 暗夜紫
        purple: string[],
        // 浪漫红
        red: string[],
        // 柠檬黄
        yellow: string[],
        /**
         * 主题色
         */
        // 危险色
        danger: string[],
        // 信息色
        info: string[],
        // 链接色
        link: string[],
        // 品牌色
        primary: string[],
        // 成功色
        success: string[],
        // 警告色
        warning: string[],
    }

    interface Colors {
        /**
         * 明亮模式
         */
        light: ColorsMap;
        /**
         * 暗黑模式
         */
        dark: ColorsMap;
        /**
         * 获取指定颜色的暗黑模式颜色
         * @param color 指定的颜色值
         * @param alpha 亮度
         * @returns {String}
         */
        darken: (color: string, alpha: number = 0.2) => {color: string[]};
    }

    /**
     * 字重
     */
    interface fontWeightType {
        'thin': number;
        'extralight': number;
        'light': number;
        'normal': number;
        'medium': number;
        'semibold': number;
        'bold': number;
        'extrabold': number;
        'black': number;
    }

    /**
     * 字体大小
     */
    interface fontType {
        'xs'?: number;
        'sm'?: number;
        'base'?: number;
        'lg'?: number;
        'xl'?: number;
        '2xl'?: number;
        '3xl'?: number;
        '4xl'?: number;
        '5xl'?: number;
        '6xl'?: number;
        '7xl'?: number;
        '8xl'?: number;
        '9xl'?: number;
    }

    // 元素运动时长
    interface motionTimesType {
        'base': string;
        'lg': string;
        'xl': string;
    }

    /**
     * 定义圆角大小
     */
    interface RadiusSize {
        'none': number;
        'xs': number;
        'sm': number;
        'base': number;
        'lg': number;
        'xl': number;
        'max': number;
    }

    /**
     * 组件库尺寸大小规范
     */
    interface Size {
        fontUnit: string;
        fontWeight: fontWeightType;
        fonts: fontType;
        // 行高基数
        lineBase: number;
        motionTimes: motionTimesType;
        radiusSize: RadiusSize;
        // 遮罩透明度
        shadeOpenness: number;
        // 段落间距系数
        spacing: number;
    }
    
    /**
     * 组件库主题配置
     */
    interface Theme {
        /**
         * 预设颜色
         */
        colors: Colors,
        /**
         * 组件大小规范
         */
        size: Size,
        config: {
            shade: string,
            colorPresetPanel: ColorsMap,
        }
    }
}
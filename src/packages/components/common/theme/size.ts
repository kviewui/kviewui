interface fontType {
    'xs'?: number
    'sm'?: number
    'base'?: number
    'lg'?: number
    'xl'?: number
    '2xl'?: number
    '3xl'?: number
    '4xl'?: number
    '5xl'?: number
    '6xl'?: number
    '7xl'?: number
    '8xl'?: number
    '9xl'?: number
  }
  
  /**
     * 定义字体单位
     */
  export const fontUnit = 'rpx'
  
  /**
     * 定义字体大小
     */
  export const fonts: fontType = {
    'xs': 20,
    'sm': 24,
    'base': 28,
    'lg': 32,
    'xl': 40,
    '2xl': 48,
    '3xl': 56,
    '4xl': 72,
    '5xl': 96,
    '6xl': 128,
    '7xl': 164,
    '8xl': 208,
    '9xl': 252,
  }
  
  interface RadiusSize {
    'none': number
    'xs': number
    'sm': number
    'base': number
    'lg': number
    'xl': number
    'max': number
  }
  
  /**
     * 定义圆角大小
     */
  export const radiusSize: RadiusSize = {
    none: 0,
    xs: 10,
    sm: 20,
    base: 30,
    lg: 40,
    xl: 50,
    max: 9999,
  }
  
  interface fontWeightType {
    // 'sm': number
    // 'base': number
    // 'lg': number
    // 'xl': number
    'thin': number
    'extralight': number
    'light': number
    'normal': number
    'medium': number
    'semibold': number
    'bold': number
    'extrabold': number
    'black': number
  }
  
  /**
     * 定义字体粗细
     */
  export const fontWeight: fontWeightType = {
    // sm: 300,
    // base: 400,
    // lg: 500,
    // xl: 600,
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  }
  
  /**
     * 定义行高基数
     */
  export const lineBase = 16
  
  /**
     * 定义段落间距系数
     */
  export const spacing = 1.5
  
  /**
     * 定义遮罩透明度
     */
  export const shadeOpenness = 0.6
  
  interface motionTimesType {
    'base': string
    'lg': string
    'xl': string
  }
  
  /**
     * 定义元素运动时长
     */
  export const motionTimes: motionTimesType = {
    base: '100ms',
    lg: '120ms',
    xl: '140ms',
  }
  
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
  export const fontUnit = 'px'
  
  /**
     * 定义字体大小
     */
  export const fonts: fontType = {
    'xs': 10,
    'sm': 12,
    'base': 14,
    'lg': 16,
    'xl': 20,
    '2xl': 24,
    '3xl': 28,
    '4xl': 36,
    '5xl': 48,
    '6xl': 64,
    '7xl': 82,
    '8xl': 104,
    '9xl': 126,
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
    xs: 5,
    sm: 10,
    base: 15,
    lg: 20,
    xl: 25,
    max: 9999,
  }
  
  interface fontWeightType {
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
  
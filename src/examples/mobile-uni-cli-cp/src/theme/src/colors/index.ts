import { colorBuilder } from '@kviewui/color-builder'
import { config } from '@kviewui/theme/src/config';

interface colorType {
    red: string,
    orangered: string,
    orange: string,
    gold: string,
    yellow: string,
    lime: string,
    green: string,
    brandgreen: string,
    cyan: string,
    blue: string,
    deepblue: string,
    purple: string,
    pinkpurple: string,
    magenta: string,
    grey: string,
    primary: string,
    success: string,
    danger: string,
    warning: string,
    link: string,
    info: string,
    [colorName: string]: string
}

// 获取组件库预设亮色主色值
const getPresetColor = (key: string): string => {
    return colorBuilder.generate(key, {
        dark: false,
        list: true
    })[5];
}

// 组件库预设调色板
const colorPresetPanel: colorType = {
    red: getPresetColor('red'), // 红色 AA(5.67)
    orangered: getPresetColor('orangered'), // 橙红色 AAA(13.63)
    orange: getPresetColor('orange'), // 橙色 AAA(8.19)
    gold: getPresetColor('gold'), // 黄昏色 AAA(12.0)
    yellow: getPresetColor('yellow'), // 黄色 AAA(15.32)
    lime: getPresetColor('lime'), // 新生绿 AAA(12.62)
    green: getPresetColor('green'), // 绿色 AAA(7.56)
    brandgreen: getPresetColor('green'), // 活力绿 AAA(8.47)
    cyan: getPresetColor('cyan'), // 青色 AAA(10.23)
    blue: getPresetColor('blue'), // 蓝色 AA(6.58)
    deepblue: getPresetColor('arcoblue'), // 极致蓝 AA(5.19)
    purple: getPresetColor('purple'), // 暗夜紫 AA(6.94)
    pinkpurple: getPresetColor('pinkpurple'), // 青春紫 AA(5.10)
    magenta: getPresetColor('magenta'), // 品红 AA(5.81)
    grey: getPresetColor('gray'), // 中性灰 AA(6.48)
    // 以下为功能色设置
    primary: getPresetColor('green'), // 品牌色
    success: getPresetColor('green'), // 成功色
    danger: getPresetColor('red'), // 危险色
    warning: getPresetColor('orange'), // 警告色
    link: getPresetColor('blue'), // 链接色
    info: getPresetColor('blue') // 信息色
};

// 基础主色
const colorPresetData: colorType = {
    'red': config.colorPresetPanel.red || colorPresetPanel.red, // 红色 AA(5.67)
    'orangered': config.colorPresetPanel.orangered || colorPresetPanel.orangered, // 橙红色 AAA(13.63)
    'orange': config.colorPresetPanel.orange || colorPresetPanel.orange, // 橙色 AAA(8.19)
    'gold': config.colorPresetPanel.gold || colorPresetPanel.gold, // 黄昏色 AAA(12.0)
    'yellow': config.colorPresetPanel.yellow || colorPresetPanel.yellow, // 黄色 AAA(15.32)
    'lime': config.colorPresetPanel.lime || colorPresetPanel.lime, // 新生绿 AAA(12.62)
    'green': config.colorPresetPanel.green || colorPresetPanel.green, // 绿色 AAA(7.56)
    'brandgreen': config.colorPresetPanel.brandgreen || colorPresetPanel.brandgreen, // 活力绿 AAA(8.47)
    'cyan': config.colorPresetPanel.cyan || colorPresetPanel.cyan, // 青色 AAA(10.23)
    'blue': config.colorPresetPanel.blue || colorPresetPanel.blue, // 蓝色 AA(6.58)
    'deepblue': config.colorPresetPanel.deepblue || colorPresetPanel.deepblue, // 极致蓝 AA(5.19)
    'purple': config.colorPresetPanel.purple || colorPresetPanel.purple, // 暗夜紫 AA(6.94)
    'pinkpurple': config.colorPresetPanel.pinkpurple || colorPresetPanel.pinkpurple, // 青春紫 AA(5.10)
    'magenta': config.colorPresetPanel.magenta || colorPresetPanel.magenta, // 品红 AA(5.81)
    'grey': config.colorPresetPanel.grey || colorPresetPanel.grey, // 中性灰 AA(6.48)
    // 以下为功能色设置
    'primary': config.colorPresetPanel.primary || colorPresetPanel.primary, // 品牌色
    'success': config.colorPresetPanel.success || colorPresetPanel.success, // 成功色
    'danger': config.colorPresetPanel.danger || colorPresetPanel.danger, // 危险色
    'warning': config.colorPresetPanel.warning || colorPresetPanel.warning, // 警告色
    'link': config.colorPresetPanel.link || colorPresetPanel.link, // 链接色
    'info': config.colorPresetPanel.info || colorPresetPanel.info
}

// 亮色/暗色色板
const colorPalette: Function = (color: string, index: number, dark: boolean = false): String => {
    return colorBuilder.generate(color, { dark: dark, list: false, index: index })
}

// 根据色板生成主色的阶梯色阶
const makeColorByPalette: Function = (color: string, dark: boolean): Array<string> => {
    const colorData: any = [];
    for (let i: number = 1; i <= 10; i++) {
        colorData.push(colorPalette(colorPresetData[color], i, dark));
    }

    // 灰色单独处理
    if (color === 'grey' && dark) {
        return [
            '#17171a',
            '#2e2e30',
            '#484849',
            '#5f5f60',
            '#78787a',
            '#929293',
            '#ababac',
            '#c5c5c5',
            '#dfdfdf',
            '#f6f6f6'
        ]
    }

    if (color === 'grey' && !dark) {
        return [
            '#f7f8fa',
            '#f2f3f5',
            '#e5e6eb',
            '#c9cdd4',
            '#a9aeb8',
            '#86909c',
            '#6b7785',
            '#4e5969',
            '#272e3b',
            '#1d2129'
        ];
    }

    return colorData;
}

// 根据基础主色生成亮色/暗色模式的阶梯色阶色板
const makeModeColors: Function = (dark: boolean) :Object => {
    const modeColors: any = [];
    // 获取基础主色key
    const colorPresetKey: Array<string> = Object.keys(colorPresetData);
    colorPresetKey.map(item => {
      if (!dark) {
        modeColors[item] = [];
        modeColors[item] = makeColorByPalette(item, dark);
      } else {
        modeColors[item] = makeColorByPalette(item, !!dark);
      }
    })
  
    return modeColors;
  }

  // 根据颜色色调生成暗黑模式色调
const darken: Function = (colorString: string, alpha: number = 0.2) :String => {
    // const Color = require('color');
    // const color = Color(colorString);
	// const isDarken = color.isDark();

    // if (isDarken) return color.lighten(alpha);
    // return color.darken(alpha);
	// return isDarken ? color.lighten(alpha) : new Color(color).darken(alpha);
    return '';
}

export const colors = {
    light: makeModeColors(false),
    dark: makeModeColors(true),
    darken: darken
  }
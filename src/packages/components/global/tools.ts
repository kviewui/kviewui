import { theme } from '@kviewui/theme';
import { isNumber, getUnitByUnit, isThemeColor } from '@kviewui/utils';
import { colorBuilder } from '@kviewui/color-builder';
import { ModeEnum } from './types';

const $theme: KuiNamespace.Theme = theme;

/**
 * 获取字体大小
 * @param {string | number} size
 * @returns {string}
 */
export const getFontSize = (size: string | number): string => {
    if (isNumber(size) || getUnitByUnit(size) === '') return `${size}${theme.size.fontUnit}`;

    return size as string;
}

/**
 * 获取自定义class数组
 * @param {string} customClass 自定义class字符串，多个class空格分隔开
 * @returns {string[]}
 */
export const getCustomClass = (customClass: string): string[] => {
    return customClass.split(" ");
}

/**
 * 获取主题色色值，如果是主题色变量则直接获取，否则根据颜色工具获取自定义颜色的主题色
 * @param {string} color 颜色变量
 * @param {ModeEnum} mode 明亮模式或暗黑模式
 * - dark 暗黑模式
 * - light 明亮模式
 * @param {KuiNamespace.ColorLevel} colorLevel 颜色色阶[0-9]
 * @returns 
 */
export const getThemeColor = (
    color: string, 
    mode: ModeEnum = 'light', 
    colorLevel: KuiNamespace.ColorLevel = 5): string => {
    if (isThemeColor(color)) {
        return $theme.colors[mode][color][colorLevel];
    }

    return colorBuilder.generate(color, {
        dark: mode !== 'light',
        list: true,
        index: 5
    })[colorLevel];
}
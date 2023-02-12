import { theme } from '@kviewui/theme';
import { isNumber, getUnitByUnit } from '@kviewui/utils';

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
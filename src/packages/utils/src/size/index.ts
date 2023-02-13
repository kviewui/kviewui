import { isNumber } from "../is";
import { getUnitByUnit } from "../unit";
// import { theme } from "@kviewui/theme";

// const $theme: KuiNamespace.Theme = theme;

/**
 * 获取字体大小
 * @param {string | number} size
 * @returns {string}
 */
export const getFontSize = (size: string | number): string => {
    if (isNumber(size) || getUnitByUnit(size) === '') return `${size}px`;

    return size as string;
}

/**
 * 获取长度单位
 * @description 一般用于设置字体大小，宽度/高度，内外间距场景
 * @param {string | number} size 尺寸单位
 * @returns {string} 
 */
export const getUnitSize = getFontSize;
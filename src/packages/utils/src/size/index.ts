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
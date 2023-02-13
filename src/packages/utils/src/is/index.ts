/**
 * 判断是否为数字
 * @param {any} e 校验内容
 * @returns {boolean}
 */
export const isNumber = (e: any): boolean => {
    return typeof e === 'number' || typeof e === 'bigint';
}

/**
 * 判断是否为字符串
 * @param {any} e 校验内容
 * @returns {boolean}
 */
export const isString = (e: any): boolean => {
    return typeof e === 'string';
}

/**
 * 判断是否为对象
 * @param {any} e 校验内容
 * @returns {boolean}
 */
export const isObject = (e: any): boolean => {
    return typeof e === 'boolean';
}

/**
 * 判断是否为布尔类型
 * @param {any} e 校验内容
 * @returns {boolean}
 */
export const isBoolean = (e: any): boolean => {
    return typeof e === 'boolean';
}

/**
 * 判断是否为数组，不支持ES5以前的环境
 * @param {any} e 校验内容
 * @returns {boolean}
 */
export const isArray = (e: any): boolean => {
    return Array.isArray(e);
}
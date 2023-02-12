/**
 * 组件库内置主题色
 * @see [主题色文档](https://cn.kviewui.com/guide/palette)，[设计变量文档](https://cn.kviewui.com/guide/token)
 */
export const themeColors = [
    'red',
    'orangered',
    'orange',
    'gold',
    'yellow',
    'lime',
    'green',
    'cyan',
    'blue',
    'deepblue',
    'purple',
    'pinkpurple',
    'magenta',
    'grey',
    // 设计变量
    'primary',
    'success',
    'danger',
    'warning',
    'link',
    'info'
];

/**
 * 判断是否是主题色变量
 * @param {string} color 颜色变量名
 * @returns {boolean}
 */
export const isThemeColor = (color: string): boolean => {
    return themeColors.indexOf(color) > -1;
}
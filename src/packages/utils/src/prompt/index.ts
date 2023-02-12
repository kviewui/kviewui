/**
 * @zh 显示消息提示框
 * @param {string} title 提示的内容，长度与icon取值有关
 * @param icon 
 * @see [原API文档](https://uniapp.dcloud.net.cn/api/ui/prompt.html#showtoast)
 */
export const showToast = (title: string, icon: 'success'|'loading'|'error'|'none' = 'success') => {
    uni.showToast({
        title: title,
        icon: icon
    });
}

/**
 * @zh 隐藏消息提示框
 * @see [原API文档](https://uniapp.dcloud.net.cn/api/ui/prompt.html#hideToast)
 */
export const hideToast = () => {
    uni.hideToast();
}

/**
 * @zh 显示loading提示框
 * @param {string} title 提示的文字内容，显示在loading的下方
 * @see [原API文档](https://uniapp.dcloud.net.cn/api/ui/prompt.html#showloading)
 */
export const showLoading = (title: string) => {
    uni.showLoading({
        title: title
    })
}

/**
 * @zh 隐藏loading提示框
 * @see [原API文档](https://uniapp.dcloud.net.cn/api/ui/prompt.html#hideloading)
 */
export const hideLoading = () => {
    uni.hideLoading();
}
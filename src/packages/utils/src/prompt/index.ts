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

/**
 * @zh 显示模态弹窗
 * 
 * 参考：[原API文档](https://uniapp.dcloud.net.cn/api/ui/prompt.html#showModal)
 * 
 * @param {string} title 提示标题
 * @param {string} content 提示内容
 * @param {boolean} showCancel 是否显示取消按钮
 * @param {string} cancelText 取消按钮文本
 * @param {string} confirmText 确定按钮文本
 * @param {string} cancelColor 取消按钮文字颜色
 * @param {string} confirmColor 确定按钮文字颜色
 * @param {boolean} editable 是否显示输入框
 * @param {Function} success 成功回调
 * @param {Function} fail 失败回调
 * @param {Function} complete 完成回调
 */
export const showModal = (
    title?: string, 
    content?: string, 
    showCancel?: boolean,
    cancelText?: string,
    confirmText?: string,
    cancelColor?: string,
    confirmColor?: string,
    editable?: boolean,
    success?: any,
    fail?: any,
    complete?: any
) => {
    uni.showModal({
        title: title,
        content: content,
        showCancel: showCancel ?? true,
        cancelText: cancelText ?? '取消',
        confirmText: confirmText ?? '确定',
        cancelColor: cancelColor ?? '#999',
        confirmColor: confirmColor ?? '#00BC79',
        editable: editable ?? false,
        success: success,
        fail: fail,
        complete: complete
    });
}
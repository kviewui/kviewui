/**
 * 设置剪贴板内容
 * @description 设置剪贴板内容
 * 参考：[https://uniapp.dcloud.net.cn/api/system/clipboard.html#setclipboarddata](https://uniapp.dcloud.net.cn/api/system/clipboard.html#setclipboarddata)
 * @property {string} data 需要设置的内容
 * @property {boolean} showToast 是否弹出提示
 * @returns {Promise}
 */
export const setCliboardData = (data: string, showToast: boolean = true): Promise<any> => {
    return new Promise((resolve, reject) => {
        uni.setClipboardData({
            data: data,
            showToast: showToast,
            success: () => {
                resolve({
                    errCode: 0,
                    errMsg: '复制成功'
                })
            },
            fail: () => {
                reject({
                    errCode: 1,
                    errMsg: '复制失败'
                })
            }
        })
    });
}
/**
 * 节流hook
 * @param {(..._args: A) => R} func 需要执行的函数 
 * @param {number} wait 延迟时间
 * @param {boolean} isTimer 是否开启定时器响应事件结束后的回调
 */
export function useThrottle<A extends Array<any>, R = void> (
    func: (..._args: A) => R,
    wait: number,
    isTimer: boolean = false,
 ) {
    let timeOut: null | NodeJS.Timeout = null;
    let args: A;
    let agoTimestamp: number;
    function throttle(..._args: A) {
        args = _args;
        if (!agoTimestamp) agoTimestamp = +new Date();
        if (timeOut) {
            clearTimeout(timeOut);
            timeOut = null;
        }
        return new Promise<R>((resolve, reject) => {
            if (+new Date() - agoTimestamp >= wait) {
                try {
                    const result = func.apply(null, args);
                    resolve(result);
                    agoTimestamp = +new Date();
                } catch(e) {
                    reject(e)
                }
            } else if (isTimer) {
                timeOut = setTimeout(async () => {
                    try {
                        const result = await func.apply(null, args);
                        resolve(result);
                        agoTimestamp = +new Date();
                    } catch (e) {
                        reject(e)
                    }
                }, agoTimestamp + wait - +new Date());
            }
        });
    }
    // 取消
    function cancel() {
        if (!timeOut) return;
        clearTimeout(timeOut);
        timeOut = null;
    }
    // 立即执行
    function flush() {
        cancel();
        return func.apply(null, args);
    }
    throttle.flush = flush;
    throttle.cancel = cancel;
}
import type { Ref } from 'vue';

const animation = uni.requireNativePlugin('animation');

/**
 * 单个动画执行程序
 * @description 单个动画执行程序
 * 
 * 参考：[https://weexapp.com/zh/docs/modules/animation.html#transition](https://weexapp.com/zh/docs/modules/animation.html#transition)
 * 
 * @param {Ref} ref 将要执行的动画元素
 * @param {KuiNamespace.AnimationTransitionStylesOptions} options 动画参数
 * @param {number} duration 指定动画的持续时间 (单位是毫秒)，默认值是 0，表示瞬间达到动画结束状态。
 * @param {number} delay 指定请求动画操作到执行动画之间的时间间隔 (单位是毫秒)，默认值是 0，表示没有延迟，在请求后立即执行动画。
 * @param {boolean} needLayout 动画执行是否影响布局，默认值是false。
 * @param {string} timingFunction 描述动画执行的速度曲线，用于描述动画已消耗时间和动画完成进度间的映射关系。默认值是 linear，表示动画从开始到结束都拥有同样的速度。下表列出了所有合法的属性:
 * - linear: 动画从头到尾的速度是相同的
 * - ease-in: 动画速度由慢到快
 * - ease-out: 动画速度由快到慢
 * - ease-in-out: 动画先加速到达中间点后减速到达终点
 * - cubic-bezier(x1, y1, x2, y2): 在三次贝塞尔函数中定义变化过程，函数的参数值必须处于 0 到 1 之间。更多关于三次贝塞尔的信息请参阅 [cubic-bezier](http://cubic-bezier.com/?spm=a2c7j.-zh-docs-modules-animation.0.0.209e20b6OR9Q9f) 和 [Bézier curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve?spm=a2c7j.-zh-docs-modules-animation.0.0.209e20b6OR9Q9f)。
 * @returns 
 */
export const animationTransition = (
    ref: Ref,
    options: KuiNamespace.AnimationTransitionStylesOptions,
    duration: number = 0,
    delay: number = 0,
    needLayout: boolean = false,
    timingFunction: string = 'linear'): Promise<any> => {
    return new Promise((resolve, _) => {
        animation.transition(ref, {
            styles: {
                ...options
            },
            duration: duration,
            delay: delay,
            needLayout: needLayout,
            timingFunction: timingFunction
        }, () => {
            resolve(null);
        })
    });
}

const animationTransitionSpin = async (
    ref: Ref,
    deg: number,
    duration: number
) => {
    return await animationTransition(ref, {
        transform: `rotate(${deg})`
    }, duration, 0, false, 'linear');
}

/**
 * 旋转动画
 * @description 旋转动画
 * @param {Ref} ref 将要执行的动画元素
 * @param {boolean} loop 是否循环执行
 */
export const useSpin = async (ref: Ref, loop: boolean = false) => {
    await animationTransitionSpin(ref, 0, 0);
    await animationTransitionSpin(ref, 360, 46000);
    if (loop) useSpin(ref, loop);
}

const animationTransitionPulse = async (ref: Ref, opacity: number) => {
    return await animationTransition(ref, {
        opacity: opacity
    }, 1000, 0, false, 'cubic-bezier(0.4, 0, 0.6, 1)');
}

/**
 * 脉搏动画
 * @description 脉搏动画，元素透明度显隐切换
 * @param {Ref} ref 将要执行的动画元素
 * @param {boolean} loop 是否循环执行
 */
export const usePulse = async (ref: Ref, loop: boolean = false) => {
    await animationTransitionPulse(ref, .5);
    await animationTransitionPulse(ref, 1);
    if (loop) usePulse(ref, loop);
}

const animationTransitionBounce = async (
    ref: Ref, 
    y: string, 
    timingFunction: string
) => {
    return await animationTransition(ref, {
        transform: `translateY(${y})`
    }, 500, 0, false, timingFunction);
}
/**
 * 上下跳动动画
 * @description 上下跳动动画
 * @param {Ref} ref 将要执行的动画元素
 * @param {boolean} loop 是否循环执行
 */
export const useBounce = async (ref: Ref, loop: boolean = false) => {
    await animationTransitionBounce(ref, '-25%', 'cubic-bezier(0.8, 0, 1, 1)');
    await animationTransitionBounce(ref, '0', 'cubic-bezier(0, 0, 0.2, 1)');
    if (loop) useBounce(ref, loop);
}


const animationTransitionHeartbeat = async (ref: Ref, scale: number) => {
    return await animationTransition(ref, {
        transform: `scale(${scale})`
    }, 500, 0, false);
}
/**
 * 心跳动画
 * @param {Ref} ref 将要执行的动画元素
 * @param {boolean} loop 是否循环执行
 */
export const useHeartbeat = async (ref: Ref, loop: boolean = false) => {
    await animationTransitionHeartbeat(ref, 1.1);
    await animationTransitionHeartbeat(ref, 1);
    if (loop) useHeartbeat(ref, loop);
}

const animationTransitionShake = async (ref: Ref, x: string) => {
    return await animationTransition(ref, {
        transform: `translateX(${x})`
    }, 50, 0, false, 'ease-out');
}
/**
 * 抖动动画
 * @param {Ref} ref 将要执行的动画元素
 * @param {boolean} loop 是否循环执行
 */
export const useShake = async (ref: Ref, loop: boolean = false) => {
    await animationTransitionShake(ref, '-8px');
    await animationTransitionShake(ref, '7px');
    await animationTransitionShake(ref, '-6px');
    await animationTransitionShake(ref, '5px');
    await animationTransitionShake(ref, '-4px');
    await animationTransitionShake(ref, '3px');
    await animationTransitionShake(ref, '-2px');
    await animationTransitionShake(ref, '1px');
    if (loop) setTimeout(() => { useShake(ref, loop); });
}
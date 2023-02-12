declare namespace KuiNamespace {
    /**
     * 不同样式过渡效果合法参数类型
     * 
     * 参考：[https://weexapp.com/zh/docs/modules/animation.html#transition](https://weexapp.com/zh/docs/modules/animation.html#transition)
     * 
     */
    interface AnimationTransitionStylesOptions {
        width?: number | string
        height?: number | string
        backgroundColor?: string
        opacity?: number
        transformOrigin?: 'left' | 'center' | 'right'
        transform?: string
    }

    /**
     * 描述动画执行的速度曲线，用于描述动画已消耗时间和动画完成进度间的映射关系。默认值是 linear，表示动画从开始到结束都拥有同样的速度。
     * 
     * 参考：[https://weexapp.com/zh/docs/modules/animation.html#transition](https://weexapp.com/zh/docs/modules/animation.html#transition)
     */
    type AnimateTimingFunction = 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out'
}
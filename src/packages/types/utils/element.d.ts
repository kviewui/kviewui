declare namespace KuiNamespace {
    /**
     * 获取节点的大小及相对于视图窗口的位置信息工具方法返回结果
     * @property {number} width 节点宽度
     * @property {number} height 节点高度
     * @property {number} top 节点上边界坐标
     * @property {number} right 节点右边界坐标
     * @property {number} bottom 节点下边界坐标
     * @property {number} left 节点左边界坐标
     */
    interface useKviewuiRectPromiseCallback {
        width: number;
        height: number;
        top: number;
        right: number;
        bottom: number;
        left: number;
    }
}
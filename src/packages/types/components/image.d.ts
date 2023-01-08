declare namespace KuiNamespace {
    /**
     * 图片File源文件信息
     * @property {string} path 图片路径
     * @property {number} size 图片大小
     * @property {string} name 图片name，对应input的name和后端接收的files
     * @property {string} type 图片类型
     * @property {any} originalFileObj
     */
    interface ImageFile {
        path?: string;
        size?: number;
        name?: string;
        type?: string;
        originalFileObj?: any;
    }

    /**
     * chooseImage回调
     * @property {string[]} tempFilePaths 临时文件路径集合
     * @property {ImageFile} tempFiles 临时文件
     * @property {string} errMsg 回调内容
     */
    interface SuccessCallbackResult {
        tempFilePaths?: string[];
        tempFiles?: ImageFile;
        errMsg?: string;
    }
};
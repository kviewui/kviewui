import { Plugin, defineComponent, Ref } from 'vue';

type SFCWithInstall<T> = T & Plugin;
declare const withInstall: <T>(comp: T) => SFCWithInstall<T>;

declare function useThrottle<A extends Array<any>, R = void>(func: (..._args: A) => R, wait: number, isTimer?: boolean): void;

declare const createComponent: (name: string) => {
    componentName: string;
    create: typeof defineComponent;
};

declare const getUnitByUnit: (e: any) => String;
declare const getNumberByUnit: (e: any) => any;

declare const getImageInfo: (src: string) => any;
declare const fileToUrl: (file: File) => string;
declare const compress: (file: KuiNamespace.ImageFile, quality?: number) => Promise<KuiNamespace.ImageFile>;
declare const isImage: (url: string) => boolean;

declare const getElId: (prefix?: string) => string;
declare const useKviewuiRect: (eleRef: (Element | Window | any) | Ref<Element | Window | any>, eleId: string, proxy: any) => any;

declare const useProvide: (config?: {}) => void;

declare const useConfig: (config?: {}) => void;
declare const useInject: () => any;

declare const isNumber: (e: any) => boolean;
declare const isString: (e: any) => boolean;
declare const isObject: (e: any) => boolean;
declare const isBoolean: (e: any) => boolean;

declare const getFontSize: (size: string | number) => string;

declare const showToast: (title: string, icon?: 'success' | 'loading' | 'error' | 'none') => void;
declare const hideToast: () => void;
declare const showLoading: (title: string) => void;
declare const hideLoading: () => void;

declare const themeColors: string[];
declare const isThemeColor: (color: string) => boolean;

declare const setCliboardData: (data: string, showToast?: boolean) => Promise<any>;

export { compress, createComponent, fileToUrl, getElId, getFontSize, getImageInfo, getNumberByUnit, getUnitByUnit, hideLoading, hideToast, isBoolean, isImage, isNumber, isObject, isString, isThemeColor, setCliboardData, showLoading, showToast, themeColors, useConfig, useInject, useKviewuiRect, useProvide, useThrottle, withInstall };

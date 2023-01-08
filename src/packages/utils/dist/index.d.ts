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

declare const getElId: () => String;
declare const useKviewuiRect: (eleRef: (Element | Window | any) | Ref<Element | Window | any>, eleId: string, proxy: any) => any;

declare const useProvide: (config?: {}) => void;

declare const useConfig: (config?: {}) => void;
declare const useInject: () => any;

export { compress, createComponent, fileToUrl, getElId, getImageInfo, getNumberByUnit, getUnitByUnit, isImage, useConfig, useInject, useKviewuiRect, useProvide, useThrottle, withInstall };

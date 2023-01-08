import { inject, provide, createSSRApp, App, getCurrentInstance } from 'vue';

export const useConfig = (config = {}) => {
    uni.setStorageSync('$kConfig', config);
}

export const useInject = () => {
    return uni.getStorageSync('$kConfig');
}
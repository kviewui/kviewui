declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        kButton: typeof import('./index').KuiButton,
        kPage: typeof import('./index').KuiPage,
        kImage: typeof import('./index').KuiImage,
        kText: typeof import('./index').KuiText,
        kContainer: typeof import('./index').KuiContainer
    }
}
export {}
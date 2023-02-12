declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        kButton: typeof import('./index').KuiButton,
        kPage: typeof import('./index').KuiPage,
        kImage: typeof import('./index').KuiImage,
        kText: typeof import('./index').KuiText,
        kContainer: typeof import('./index').KuiContainer,
        kSwitch: typeof import('./index').KuiSwitch,
        kAnimation: typeof import('./index').KuiAnimation,
        kCellGroup: typeof import('./index').KuiCellGroup,
        kCell: typeof import('./index').KuiCell,
        kIcon: typeof import('./index').KuiIcon,
        kIcons: typeof import('./index').KuiIcons,
        kSpace: typeof import('./index').KuiSpace,
        kConfigProvider: typeof import('./index').KuiConfigProvider,
        kAnimate: typeof import('./index').KuiAnimate,
        kTag: typeof import('./index').KuiTag
    }
}
export {}
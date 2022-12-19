declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        kButton: typeof import('@kviewui/kviewui').Button
    }
}
export {}
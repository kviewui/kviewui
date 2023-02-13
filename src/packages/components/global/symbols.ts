import { InjectionKey, Ref } from "vue";
import { ConfigProviderProps } from "../src/config-provider/types";
import { SpaceProviderOptions } from "./types";

/**
 * 全局的space组件providerKey
 */
export const spaceProviderKey: InjectionKey<SpaceProviderOptions | undefined> = Symbol();

/**
 * 全局的config-provider组件providerKey
 */
export const configProviderInjectionKey: InjectionKey<ConfigProviderProps> = Symbol('KuiConfigProvider');
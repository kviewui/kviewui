import { ModeEnum } from '@/packages/components/global/type';
import { InjectionKey } from 'vue';

export interface KuiConfigProviderProps {
	mode?: ModeEnum,
	color?: string,
	fontSize?: string
}

export const configProviderInjectionKey: InjectionKey<KuiConfigProviderProps> = Symbol('KuiConfigProvider');
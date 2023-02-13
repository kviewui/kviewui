import { configProviderInjectionKey } from '../src/config-provider/types';
import { 
	PropType,
	inject,
    ExtractPropTypes,
    InjectionKey,
    Ref
} from 'vue';
import type { CSSProperties } from 'vue';

export type WeightEnum = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
export type ModeEnum = 'light' | 'dark';
export type JustifyEnum = 'flex-start' | 'flex-end' | 'center' | 'space-around' | 'space-between' | 'space-evenly';
export type DirectionEnum = 'row' | 'column';
export type AlignEnum = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
export type RadiusSizeEnum = 'sm' | 'base' | 'lg' | 'xl' | 'max' | 'none';
export type SpinTypeEnum = 'square-turn' | 'chase-dot' | 'double-bounce' | 'rect' | 'cube1' | 'spinner' | 'dot' | 'bounce' | 'circle-dot' | 'cube2' | 'circle-dot2' | 'cube3' | 'circle-dot3' | 'square-dot' | 'square-dot2';
export type ShadowSizeEnum = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
export type ThemeEnum = 'red' | 'oranged' | 'orange' | 'gold' | 'yellow' | 'lime' | 'green' | 'brandgreen' | 'cyan' | 'blue' | 'deepblue' | 'purple' | 'pinkpurple' | 'magenta' | 'grey' | 'primary' | 'success' | 'danger' | 'warning' | 'link' | 'info';
export type TypeEnum = 'primary' | 'info' | 'success' | 'warning' | 'danger';
export type ShapeEnum = 'round' | 'square';
export type AnimateTypeEnum = 'spin' | 'pulse' | 'bounce' | 'heartbeat' | 'shake';

type ValidatorType<T> = (score: T) => boolean;

export interface RulesType {
	validator?: ValidatorType<string | number>,
	message?: string
}

export interface SpaceProviderOptions {
    marginRight: any
    marginBottom: any
}

export const globalProps = {
    /**
     * 页面模式
     */
    mode: {
        type: String as PropType<ModeEnum>,
        default: () => 
            inject(configProviderInjectionKey, undefined)?.mode ?? 'light'
    },
    /**
     * 自定义class
     */
    customClass: {
        type: String,
        default: ''
    },
    /**
     * 自定义style
     */
    customStyle: {
        type: Object as PropType<CSSProperties>,
        default: {}
    },
    /**
     * 是否启用组模式
     */
    group: {
        type: Boolean,
        default: true
    }
};

export type GlobalProps = ExtractPropTypes<typeof globalProps>;

export interface SpaceComponentProps {
    marginTop?: string;
    marginRight?: string;
    marginBottom?: string;
    marginLeft?: string;
    right?: number;
    $forceUpdate?: () => {}
};

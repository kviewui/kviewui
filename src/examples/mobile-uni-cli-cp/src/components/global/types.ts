import { configProviderInjectionKey } from '../config-provider/types';
import { 
	PropType,
	inject,
    ExtractPropTypes
} from 'vue';

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

type ValidatorType<T> = (score: T) => boolean;

export interface RulesType {
	validator?: ValidatorType<string | number>,
	message?: string
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

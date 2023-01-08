import { ModeEnum } from '@kviewui/components/global/type';

export interface ImageProps {
    src?: string;
    width?: number | string;
    height?: number | string;
    mode?: ModeEnum;
    fit?: FitEnum;
    disableFit?: boolean;
    fadeShow?: boolean;
    delay?: number;
    radius?: number | string;
    scale?: number;
    error?: boolean;
    loading?: boolean;
    preview?: boolean;
    lazyload?: boolean;
}

export type FitEnum = 'scaleToFill' | 'aspectFit' | 'aspectFill' | 'widthFix' | 'heightFix' | 'top' | 'bottom' | 'center' | 'left' | 'right' | 'top left' | 'top right' | 'bottom left	' | 'bottom right';
import { colors as themeColors } from './colors'
import * as size from './size'
import { config } from './config'

const colors = {
    light: themeColors.light,
    dark: themeColors.dark,
    darken: themeColors.darken
}

export interface Theme {
    colors: {
        light: any;
        dark: any;
        darken: Function;
    };
    size: any;
    config: {
        shade: string;
        colorPresetPanel: {
            [colorName: string]: string;
        }
    }
}

export const theme: Theme = {
    colors,
    size,
    config
}
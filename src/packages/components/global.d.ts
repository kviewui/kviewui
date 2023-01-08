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
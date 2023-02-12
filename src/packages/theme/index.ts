import { colors as themeColors } from './src/colors'
import * as sizeConfig from './src/size'
import { config } from './src/config'

const colors = {
    light: themeColors.light as KuiNamespace.ColorsMap,
    dark: themeColors.dark as KuiNamespace.ColorsMap,
    darken: themeColors.darken as KuiNamespace.Colors['darken']
}

export const theme = {
    colors,
    size: sizeConfig,
    config
}

export { timingFunctionMap } from './src/animation';
import { App, createSSRApp } from "vue";
import Button from './src/button/index.vue';
import Page from './src/page/index.vue';
import Image from './src/image/index.vue';
import Text from './src/text/index.vue';
import Container from './src/container/index.vue';
import Switch from './src/switch/index.vue';
import Animation from './src/animation/index.vue';
import CellGroup from './src/cell-group/index.vue';
import Cell from './src/cell/index.vue';
import Icon from './src/icon/index.vue';
import Icons from './src/icons/index.vue';
import Space from './src/space/index.vue';
import ConfigProvider from './src/config-provider/index.vue';
import Animate from './src/animate/index.vue';

import { theme } from "@kviewui/theme";
// import { theme } from "./common/theme";

function install(app: App) {
    const packages = [Button, Page, Image, Text, Container, Switch, Animation, CellGroup, Cell, Icon, Icons, Space, ConfigProvider, Animate];

    packages.forEach((item: any) => {
        if (item.install) {
            app.use(item);
        } else if (item.name) {
            app.component(item.name, item);
        }
    });
}

const app = createSSRApp(import('vue'));

uni['$kView'] = {
    install,
    theme: theme,
    app
}
console.log('test');

const version = '1.0.0';

export {
    Button as KuiButton,
    Page as KuiPage,
    Image as KuiImage,
    Text as KuiText,
    Container as KuiContainer,
    Switch as KuiSwitch,
    Animation as KuiAnimation,
    CellGroup as KuiCellGroup,
    Cell as KuiCell,
    Icon as KuiIcon,
    Space as KuiSpace,
    ConfigProvider as KuiConfigProvider,
    Icons as KuiIcons,
    Animate as KuiAnimate,
    theme,
    app,
    version
}

export default {
    install,
    theme,
    app,
    version
}
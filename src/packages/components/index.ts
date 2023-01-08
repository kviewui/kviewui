import { App, createSSRApp } from "vue";
import Button from './src/button/index.vue';
import Page from './src/page/index.vue';
import Image from './src/image/index.vue';
import Text from './src/text/index.vue';
import Container from './src/container/index.vue';
import { theme } from './common/theme';

function install(app: App) {
    const packages = [Button, Page, Image, Text, Container];

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
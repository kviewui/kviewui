import { createSSRApp } from "vue";
// import '@kviewui/kviewui/common/css/index.less';
import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}

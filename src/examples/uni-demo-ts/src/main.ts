import { createSSRApp } from "vue";
// import { Button } from '@kviewui/kviewui'
import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App);
  // app.use(Button)
  return {
    app,
  };
}

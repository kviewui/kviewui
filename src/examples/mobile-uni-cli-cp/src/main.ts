import { createSSRApp } from "vue";
import KviewUI from '@kviewui/kviewui';
console.log(KviewUI);
import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}

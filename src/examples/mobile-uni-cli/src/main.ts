import { createSSRApp } from "vue";
import KviewUI from '@kviewui/components';
import { useProvide, useConfig } from '@kviewui/utils';

// 组件库自定义配置信息
const KviewUIConfig = {
  debug: true
};

import App from "./App.vue";
import { debug } from "console";
export function createApp() {
  const app = createSSRApp(App);
  // 注册组件库配置信息
  useProvide(KviewUI);
  useConfig(KviewUIConfig);
  app.provide('$kView', KviewUIConfig);
  // app.use(KviewUI)
  return {
    app,
  };
}

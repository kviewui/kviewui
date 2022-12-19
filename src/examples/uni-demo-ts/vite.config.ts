import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
});

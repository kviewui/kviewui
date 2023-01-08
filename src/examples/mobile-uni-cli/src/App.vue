<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style lang="less">
/* // @import url('node_modules/@kviewui/kviewui/style/theme/index.less'); */
/* @import url('@kviewui/kviewui/common/css/dist/index.css'); */
@import url('@kviewui/components/styles/kviewui/index.css');
</style>

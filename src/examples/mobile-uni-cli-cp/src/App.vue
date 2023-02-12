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
<style>
@import url('@kviewui/kviewui/styles/kviewui/index.css');

.kui-iconfont {
    font-family: kview-icon;
    text-decoration: none;
    text-align: center;
}
</style>

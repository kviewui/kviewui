"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent({
  setup() {
    console.log(common_vendor.inject("name"));
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/work/kviewui/src/examples/mobile-uni-cli/src/components/A2/index.vue"]]);
wx.createComponent(Component);

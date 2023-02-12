"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  KuiIcon();
}
const KuiIcon = () => "../../node-modules/@kviewui/kviewui/src/icon/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          name: "spinner3",
          size: "48px"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fab03d13"], ["__file", "E:/work/kviewui/src/examples/mobile-uni-cli/src/pages/test/index.nvue"]]);
wx.createPage(MiniProgramPage);

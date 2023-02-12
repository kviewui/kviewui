"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  (KuiIcon + KuiButton + KuiSpace + KuiCellGroup + KuiConfigProvider + KuiPage)();
}
const KuiButton = () => "../../../node-modules/@kviewui/kviewui/src/button/index.js";
const KuiSpace = () => "../../../node-modules/@kviewui/kviewui/src/space/index.js";
const KuiIcon = () => "../../../node-modules/@kviewui/kviewui/src/icon/index.js";
const KuiPage = () => "../../../node-modules/@kviewui/kviewui/src/page/index.js";
const KuiConfigProvider = () => "../../../node-modules/@kviewui/kviewui/src/config-provider/index.js";
const KuiCellGroup = () => "../../../node-modules/@kviewui/kviewui/src/cell-group/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          name: "code"
        })
      }, {}, {
        az: common_vendor.p({
          customHeader: false
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/work/kviewui/src/examples/mobile-uni-cli/src/pages/components/button/index.nvue"]]);
wx.createPage(MiniProgramPage);

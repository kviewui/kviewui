"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (KuiImage + KuiText + KuiIcon + KuiSwitch + KuiCell + KuiCellGroup + KuiContainer + KuiSpace + KuiPage)();
}
const KuiPage = () => "../../node-modules/@kviewui/kviewui/src/page/index.js";
const KuiImage = () => "../../node-modules/@kviewui/kviewui/src/image/index.js";
const KuiText = () => "../../node-modules/@kviewui/kviewui/src/text/index.js";
const KuiContainer = () => "../../node-modules/@kviewui/kviewui/src/container/index.js";
const KuiSwitch = () => "../../node-modules/@kviewui/kviewui/src/switch/index.js";
const KuiCellGroup = () => "../../node-modules/@kviewui/kviewui/src/cell-group/index.js";
const KuiCell = () => "../../node-modules/@kviewui/kviewui/src/cell/index.js";
const KuiIcon = () => "../../node-modules/@kviewui/kviewui/src/icon/index.js";
const KuiSpace = () => "../../node-modules/@kviewui/kviewui/src/space/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    common_vendor.ref("Hello");
    const theme = common_vendor.index.$kView.theme;
    const pageRef = common_vendor.ref(null);
    const checked = common_vendor.ref(false);
    let sysinfo = common_vendor.reactive({});
    const systemInfo = common_vendor.reactive({ windowHeight: "" });
    let style = common_vendor.reactive({});
    const contentHeight = common_vendor.ref("");
    common_vendor.watch(
      () => systemInfo.windowHeight,
      (height, preHeight) => {
        console.log(height);
        contentHeight.value = height;
      }
    );
    common_vendor.onMounted(() => {
      if (pageRef.value) {
        sysinfo = pageRef.value.getApp();
        style.height = `${sysinfo.windowHeight}px`;
        systemInfo.windowHeight = style.height;
        console.log(style);
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          src: "/static/kviewui.png",
          radius: 10,
          width: "440rpx",
          height: "110rpx",
          ["disable-fit"]: true
        }),
        b: common_vendor.p({
          size: "16px",
          color: common_vendor.unref(theme).colors.light.grey[6],
          content: "\u57FA\u4E8EUNI-APP\u6846\u67B6\u7684\u591A\u7AEF\u5F00\u53D1UI\u7EC4\u4EF6\u5E93\uFF0C\u8BA9\u60A8\u7684\u5F00\u53D1\u6548\u7387\u52A0\u500D\u63D0\u5347"
        }),
        c: common_vendor.p({
          name: "spinner3"
        }),
        d: common_vendor.p({
          name: "code"
        }),
        e: common_vendor.p({
          size: "16px",
          content: "\u6697\u9ED1\u6A21\u5F0F\uFF1A"
        }),
        f: common_vendor.o(($event) => checked.value = $event),
        g: common_vendor.p({
          modelValue: checked.value
        }),
        h: common_vendor.p({
          title: "Button \u6309\u94AE",
          url: "/pages/components/button/index"
        }),
        i: common_vendor.p({
          title: "Cell \u5355\u5143\u683C",
          url: "/pages/components/cell/cell"
        }),
        j: common_vendor.p({
          title: "Image \u56FE\u7247",
          url: "/pages/components/image/image"
        }),
        k: common_vendor.p({
          title: "Icon \u56FE\u6807",
          url: "/pages/components/icon/icon"
        }),
        l: common_vendor.p({
          title: "Tag \u6807\u7B7E",
          url: "/pages/components/tag/tag"
        }),
        m: common_vendor.p({
          title: "Badge \u5FBD\u6807",
          url: "/pages/components/badge/badge"
        }),
        n: common_vendor.p({
          title: "\u57FA\u7840\u7EC4\u4EF6",
          type: "space",
          ["cell-title-weight"]: 600,
          ["cell-radius"]: 100
        }),
        o: common_vendor.p({
          title: "Layout \u5E03\u5C40",
          url: "/pages/components/layout/layout"
        }),
        p: common_vendor.p({
          title: "Grid \u5BAB\u683C",
          url: "/pages/components/grid/grid"
        }),
        q: common_vendor.p({
          title: "Divider \u5206\u5272\u7EBF",
          url: "/pages/components/divider/divider"
        }),
        r: common_vendor.p({
          title: "Space \u95F4\u9694",
          url: "/pages/components/space/space"
        }),
        s: common_vendor.p({
          title: "Sticky \u7C98\u6027\u5E03\u5C40",
          url: "/pages/components/sticky/sticky"
        }),
        t: common_vendor.p({
          title: "\u5E03\u5C40\u7EC4\u4EF6",
          type: "space",
          ["cell-title-weight"]: 600,
          ["cell-radius"]: 100
        }),
        v: common_vendor.p({
          title: "Spin \u52A0\u8F7D\u52A8\u753B",
          url: "/pages/components/spin/spin"
        }),
        w: common_vendor.p({
          title: "Overlay \u906E\u7F69",
          url: "/pages/components/overlay/overlay"
        }),
        x: common_vendor.p({
          title: "Animation \u52A8\u6548",
          url: "/pages/components/animation/animation"
        }),
        y: common_vendor.p({
          title: "Collapse \u6298\u53E0\u9762\u677F",
          url: "/pages/components/collapse/collapse"
        }),
        z: common_vendor.p({
          title: "Skeleton \u9AA8\u67B6\u5C4F",
          url: "/pages/components/skeleton/skeleton"
        }),
        A: common_vendor.p({
          title: "Progress \u8FDB\u5EA6\u6761",
          url: "/pages/components/progress/progress"
        }),
        B: common_vendor.p({
          title: "\u5C55\u793A\u7EC4\u4EF6",
          type: "space",
          ["cell-title-weight"]: 600,
          ["cell-radius"]: 100
        }),
        C: common_vendor.p({
          title: "Popup \u5F39\u51FA\u5C42",
          url: "/pages/components/popup/popup"
        }),
        D: common_vendor.p({
          title: "Snackbar \u6D88\u606F\u6761",
          url: "/pages/components/snackbar/snackbar"
        }),
        E: common_vendor.p({
          title: "Actionsheet \u52A8\u4F5C\u9762\u677F",
          url: "/pages/components/actionsheet/actionsheet"
        }),
        F: common_vendor.p({
          title: "Dialog \u5BF9\u8BDD\u6846",
          url: "/pages/components/dialog/dialog"
        }),
        G: common_vendor.p({
          title: "Toast \u5410\u53F8",
          url: "/pages/components/toast/toast"
        }),
        H: common_vendor.p({
          title: "DatePicker \u65E5\u671F\u9009\u62E9\u5668",
          url: "/pages/components/datepicker/datepicker"
        }),
        I: common_vendor.p({
          title: "\u53CD\u9988\u7EC4\u4EF6",
          type: "space",
          ["cell-title-weight"]: 600,
          ["cell-radius"]: 100
        }),
        J: common_vendor.p({
          title: "Switch \u5F00\u5173",
          url: "/pages/components/switch/switch"
        }),
        K: common_vendor.p({
          title: "Radio \u5355\u9009\u6309\u94AE",
          url: "/pages/components/radio/radio"
        }),
        L: common_vendor.p({
          title: "Checkbox \u590D\u9009\u6309\u94AE",
          url: "/pages/components/checkbox/checkbox"
        }),
        M: common_vendor.p({
          title: "Input \u8F93\u5165\u6846",
          url: "/pages/components/input/input"
        }),
        N: common_vendor.p({
          title: "Stepper \u6B65\u8FDB\u5668",
          url: "/pages/components/stepper/stepper"
        }),
        O: common_vendor.p({
          title: "Numberkeyboard \u6570\u5B57\u952E\u76D8",
          url: "/pages/components/numberkeyboard/numberkeyboard"
        }),
        P: common_vendor.p({
          title: "Picker \u9009\u62E9\u5668",
          url: "/pages/components/picker/picker"
        }),
        Q: common_vendor.p({
          title: "Rate \u8BC4\u5206",
          url: "/pages/components/rate/rate"
        }),
        R: common_vendor.p({
          title: "Slider \u6ED1\u5757",
          url: "/pages/components/slider/slider"
        }),
        S: common_vendor.p({
          title: "SearchBar \u641C\u7D22\u680F",
          url: "/pages/components/searchbar/searchbar"
        }),
        T: common_vendor.p({
          title: "ShortPassword \u77ED\u5BC6\u7801",
          url: "/pages/components/shortpassword/shortpassword"
        }),
        U: common_vendor.p({
          title: "Uploader \u4E0A\u4F20",
          url: "/pages/components/uploader/uploader"
        }),
        V: common_vendor.p({
          title: "\u8868\u5355\u7EC4\u4EF6",
          type: "space",
          ["cell-title-weight"]: 600,
          ["cell-radius"]: 100
        }),
        W: common_vendor.p({
          title: "ConfigProvider \u5168\u5C40\u914D\u7F6E",
          url: "/pages/components/config-provider/config-provider"
        }),
        X: common_vendor.p({
          title: "\u7279\u8272\u7EC4\u4EF6",
          type: "space",
          ["cell-title-weight"]: 600,
          ["cell-radius"]: 100
        }),
        Y: common_vendor.p({
          title: "\u6D4B\u8BD5",
          url: "/pages/test/index"
        }),
        Z: common_vendor.p({
          title: "",
          type: "space",
          ["cell-title-weight"]: 600,
          ["cell-radius"]: 100
        }),
        aa: common_vendor.p({
          width: "750rpx",
          ["background-color"]: "#F8F8F8",
          ["top-left-radius"]: "60rpx",
          ["top-right-radius"]: "60rpx",
          ["custom-style"]: {
            padding: "0 20px",
            marginTop: "30px"
          },
          ["custom-class"]: " kui-flex kui-flex-1"
        }),
        ab: common_vendor.sr(pageRef, "afbf3330-0", {
          "k": "pageRef"
        }),
        ac: common_vendor.p({
          ["padding-x"]: 0,
          ["padding-y"]: 0,
          ["bg-color"]: "#FFFFFF"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/work/kviewui/src/examples/mobile-uni-cli/src/pages/index/index.nvue"]]);
wx.createPage(MiniProgramPage);

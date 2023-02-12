import { defineComponent, openBlock, createElementBlock, createElementVNode, createCommentVNode } from "vue";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("scroll-view", {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true",
        style: { flexDirection: "column" }
      }, [
        createElementVNode("div", { class: "test kui-flex kui-flex-col" }, [
          createElementVNode("u-text", null, " test "),
          createCommentVNode(' <text class="kui-icon kui-code"></text> ')
        ]),
        createCommentVNode(' <kui-icons name="code" />\n  <kui-icons name="code" />\n  <kui-icons name="code" />\n  <kui-icons name="code" />\n  <kui-icons name="code" />\n  <kui-icons name="code" />\n  <kui-icons name="code" />\n  <kui-icons name="code" />\n  <kui-icons name="code" /> '),
        createCommentVNode(" <A1>\n    <A2 />\n  </A1> "),
        createCommentVNode(' <text class="tt-icon">&#xec7a;</text> ')
      ]);
    };
  }
});
const _style_0 = { "tt-icon": { "": { "fontFamily": "tt-icon" } } };
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]], ["__file", "E:/work/kviewui/src/examples/mobile-uni-cli/src/pages/test/index.nvue"]]);
export {
  index as default
};

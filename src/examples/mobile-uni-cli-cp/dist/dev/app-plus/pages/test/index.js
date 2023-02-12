"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // dist/dev/.nvue/pages/test/index.js
  var import_vue = __toESM(require_vue());

  // dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // dist/dev/.nvue/pages/test/index.js
  var _sfc_main = /* @__PURE__ */ (0, import_vue.defineComponent)({
    __name: "index",
    setup(__props) {
      return (_ctx, _cache) => {
        return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("scroll-view", {
          scrollY: true,
          showScrollbar: true,
          enableBackToTop: true,
          bubble: "true",
          style: { flexDirection: "column" }
        }, [
          (0, import_vue.createElementVNode)("div", { class: "test kui-flex kui-flex-col" }, [
            (0, import_vue.createElementVNode)("u-text", null, " test "),
            (0, import_vue.createCommentVNode)(' <text class="kui-icon kui-code"></text> ')
          ]),
          (0, import_vue.createCommentVNode)(' <kui-icons name="code" />\n  <kui-icons name="code" />\n  <kui-icons name="code" />\n  <kui-icons name="code" />\n  <kui-icons name="code" />\n  <kui-icons name="code" />\n  <kui-icons name="code" />\n  <kui-icons name="code" />\n  <kui-icons name="code" /> '),
          (0, import_vue.createCommentVNode)(" <A1>\n    <A2 />\n  </A1> "),
          (0, import_vue.createCommentVNode)(' <text class="tt-icon">&#xec7a;</text> ')
        ]);
      };
    }
  });
  var _style_0 = { "tt-icon": { "": { "fontFamily": "tt-icon" } } };
  var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]], ["__file", "E:/work/kviewui/src/examples/mobile-uni-cli/src/pages/test/index.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/test/index";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    index.mpType = "page";
    const app = Vue.createPageApp(index, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...index.styles || []]));
    app.mount("#root");
  }
})();

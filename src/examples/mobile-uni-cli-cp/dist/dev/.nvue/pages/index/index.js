import { g as getElId, c as createComponent, a as getUnitByUnit, b as getNumberByUnit, d as configProviderInjectionKey, K as KuiIcons, e as colorBuilder, f as formatAppLog, h as KuiPage, i as KuiCellGroup, j as KuiSpace } from "../../index.js";
import { reactive, useSlots, onMounted, openBlock, createElementBlock, normalizeClass, createElementVNode, normalizeStyle, createCommentVNode, inject, renderSlot, toDisplayString, resolveComponent, createVNode, defineComponent, ref, watch, withCtx } from "vue";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
const imageProps = {
  src: {
    type: String,
    default: ""
  },
  width: {
    type: String,
    default: "100%"
  },
  height: {
    type: String,
    default: ""
  },
  mode: {
    type: String,
    default: "light"
  },
  fit: {
    type: String,
    default: "scaleToFill"
  },
  disableFit: {
    type: Boolean,
    default: false
  },
  fadeShow: {
    type: Boolean,
    default: true
  },
  delay: {
    type: Number,
    default: 1e3
  },
  radius: {
    type: Number,
    default: 0
  },
  scale: {
    type: Number,
    default: 1
  },
  error: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: true
  },
  preview: {
    type: Boolean,
    default: false
  },
  lazyload: {
    type: Boolean,
    default: false
  }
};
const { create: create$2 } = createComponent("image");
var intersectionObserver;
const _sfc_main$4 = create$2({
  props: imageProps,
  emits: ["click", "previewImageSuccess", "previewImageFail"],
  setup(props, context) {
    const data = reactive({
      animateShow: props.fadeShow,
      loadError: false,
      loading: props.loading,
      iconSize: 100,
      slotLoading: useSlots().loading,
      slotError: useSlots().error,
      src: props.src,
      lazyloaded: false
    });
    const elId = getElId();
    if (props.delay) {
      setTimeout(() => {
        data.loadError = false;
        data.animateShow = false;
      }, props.delay);
    }
    const onLoadSuccess = (e) => {
      setTimeout(() => {
        data.loadError = false;
        data.loading = props.lazyload ? true : false;
        data.animateShow = false;
      }, props.delay);
    };
    const onLoadError = (e) => {
      data.loadError = true;
    };
    const onClick = (e) => {
      if (!props.preview) {
        context.emit("click");
      } else {
        uni.previewImage({
          urls: [props.src],
          current: 0,
          success: (res) => {
            context.emit("previewImageSuccess", res);
          },
          fail: (fail) => {
            context.emit("previewImageFail", fail);
          }
        });
      }
    };
    let imageHeight = 0;
    const getImageInfo = () => {
      uni.getImageInfo({
        src: props.src,
        success: (res) => {
          imageHeight = res.height;
          data.loading = false;
        }
      });
    };
    const getImageHeight = () => {
      props.src;
      const height = props.height;
      if (height) {
        if (getUnitByUnit(height) === "px") {
          data.iconSize = getNumberByUnit(height);
        } else {
          const number = getNumberByUnit(height);
          data.iconSize = number / 2;
        }
      } else {
        data.iconSize = imageHeight;
      }
    };
    getImageInfo();
    setTimeout(() => {
      getImageHeight();
    }, 800);
    onMounted(() => {
      setTimeout(() => {
        if (props.lazyload) {
          intersectionObserver = uni.createIntersectionObserver(this);
          intersectionObserver.relativeToViewport({ bottom: 0 }).observe(`.${elId}`, (res) => {
            if (res.intersectionRatio > 0) {
              data.loading = false;
            } else if (res.intersectionRatio <= 0) {
              data.loading = true;
            }
          });
        }
      }, 1e3);
    });
    return {
      props,
      data,
      elId,
      onLoadSuccess,
      onLoadError,
      onClick
    };
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(["kui-leading-none", _ctx.elId]),
    renderWhole: true
  }, [
    createElementVNode("u-image", {
      src: _ctx.src,
      style: { "width": "0px", "height": "0px" },
      onLoad: _cache[0] || (_cache[0] = (...args) => _ctx.onLoadSuccess && _ctx.onLoadSuccess(...args)),
      onError: _cache[1] || (_cache[1] = (...args) => _ctx.onLoadError && _ctx.onLoadError(...args))
    }, null, 40, ["src"]),
    _ctx.data.loading || _ctx.error ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: normalizeClass(["kui-bg-gray-200 kui-flex kui-flex-col kui-justify-center kui-items-center", _ctx.data.animateShow ? "kui-animate-pulse" : ""]),
      style: normalizeStyle({
        width: _ctx.width,
        height: _ctx.height,
        borderRadius: `${_ctx.radius}rpx`
      })
    }, [
      createCommentVNode(' <kui-icons type="image" :size="Number(data.iconSize)" class="kui-text-gray-300"></kui-icons> ')
    ], 6)) : createCommentVNode("v-if", true),
    !_ctx.data.loading && _ctx.data.src && _ctx.disableFit && !_ctx.error ? (openBlock(), createElementBlock("u-image", {
      key: 1,
      src: _ctx.data.src,
      style: normalizeStyle({
        width: _ctx.width,
        height: _ctx.height,
        borderRadius: `${_ctx.radius}rpx`,
        transform: `scale(${_ctx.scale})`
      }),
      onClick: _cache[2] || (_cache[2] = (...args) => _ctx.onClick && _ctx.onClick(...args))
    }, null, 12, ["src"])) : createCommentVNode("v-if", true),
    !_ctx.data.loading && _ctx.data.src && !_ctx.disableFit ? (openBlock(), createElementBlock("u-image", {
      key: 2,
      src: _ctx.data.src,
      mode: _ctx.fit,
      style: normalizeStyle({
        borderRadius: `${_ctx.radius}rpx`,
        transform: `scale(${_ctx.scale})`
      }),
      onClick: _cache[3] || (_cache[3] = (...args) => _ctx.onClick && _ctx.onClick(...args))
    }, null, 12, ["src", "mode"])) : createCommentVNode("v-if", true)
  ], 2);
}
const KuiImage = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "E:/work/kviewui/src/packages/components/src/image/index.vue"]]);
const containerProps = {
  backgroundColor: {
    type: String,
    default: ""
  },
  width: {
    type: String,
    default: "100%"
  },
  height: {
    type: String,
    default: "100%"
  },
  topLeftRadius: {
    type: String,
    default: ""
  },
  topRightRadius: {
    type: String,
    default: ""
  },
  bottomLeftRadius: {
    type: String,
    default: ""
  },
  bottomRightRadius: {
    type: String,
    default: ""
  },
  radius: {
    type: String,
    default: ""
  },
  darken: {
    type: Number,
    default: 0.2
  },
  paddingX: {
    type: Number,
    default: 20
  },
  paddingY: {
    type: Number,
    default: 20
  },
  marginX: {
    type: Number,
    default: 0
  },
  marginY: {
    type: Number,
    default: 0
  },
  mode: {
    type: String,
    default: () => {
      var _a, _b;
      return (_b = (_a = inject(configProviderInjectionKey, void 0)) == null ? void 0 : _a.mode) != null ? _b : "light";
    }
  },
  customClass: {
    type: String,
    default: ""
  },
  customStyle: {
    type: Object
  }
};
const { create: create$1 } = createComponent("container");
const _sfc_main$3 = create$1({
  props: containerProps,
  options: {
    virtualHost: true
  },
  setup(props) {
    const theme = uni["$kView"].theme;
    const data = reactive({
      mode: props.mode,
      backgroundColor: props.backgroundColor,
      topLeftRadius: props.topLeftRadius,
      topRightRadius: props.topRightRadius,
      bottomLeftRadius: props.bottomLeftRadius,
      bottomRightRadius: props.bottomRightRadius,
      darken: props.darken
    });
    data.backgroundColor = !props.backgroundColor ? theme.colors[data.mode]["grey"][1] : props.backgroundColor;
    if (props.radius) {
      data.topLeftRadius = data.topRightRadius = data.bottomLeftRadius = data.bottomRightRadius = props.radius;
    }
    const changeMode = () => {
      if (data.mode === "light") {
        data.backgroundColor = !props.backgroundColor ? theme.colors[data.mode]["grey"][1] : props.backgroundColor;
      }
      if (data.mode === "dark") {
        data.backgroundColor = !props.backgroundColor ? theme.colors[data.mode]["grey"][1] : `hsl(${theme.colors.darken(props.backgroundColor, data.darken).color[0]}, ${theme.colors.darken(props.backgroundColor, data.darken).color[1]}%, ${theme.colors.darken(props.backgroundColor, data.darken).color[2]}%)`;
      }
    };
    uni.$on("changeMode", (e) => {
      data.mode = e;
      changeMode();
    });
    return {
      data
    };
  }
});
const _style_0$3 = {};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: normalizeClass([[_ctx.customClass], "kui-container kui-flex kui-flex-col kui-box-border kui-flex-shrink"]),
    style: normalizeStyle({
      width: _ctx.width,
      height: _ctx.height,
      color: _ctx.data.backgroundColor,
      borderTopLeftRadius: _ctx.data.topLeftRadius,
      borderTopRightRadius: _ctx.data.topRightRadius,
      borderBottomLeftRadius: _ctx.data.bottomLeftRadius,
      borderBottomRightRadius: _ctx.data.bottomRightRadius,
      paddingLeft: `${_ctx.paddingX}rpx`,
      paddingRight: `${_ctx.paddingX}rpx`,
      paddingTop: `${_ctx.paddingY}rpx`,
      paddingBottom: `${_ctx.paddingY}rpx`,
      marginLeft: `${_ctx.marginX}rpx`,
      marginRight: `${_ctx.marginX}rpx`,
      marginTop: `${_ctx.marginY}rpx`,
      marginBottom: `${_ctx.marginY}rpx`,
      backgroundColor: _ctx.data.backgroundColor,
      flexShrink: 0,
      ..._ctx.customStyle
    }),
    renderWhole: true
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
const KuiContainer = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["styles", [_style_0$3]], ["__file", "E:/work/kviewui/src/packages/components/src/container/index.vue"]]);
const cellProps = {
  title: {
    type: String,
    default: ""
  },
  titleSize: {
    type: Number,
    default: 16
  },
  titleWeight: {
    type: Number,
    default: 400
  },
  color: {
    type: String,
    default: ""
  },
  subTitle: {
    type: String,
    default: ""
  },
  subTitleColor: {
    type: String,
    default: ""
  },
  desc: {
    type: String,
    default: ""
  },
  descColor: {
    type: String,
    default: ""
  },
  radius: {
    type: Number,
    default: 10
  },
  clickStatus: {
    type: Boolean,
    default: true
  },
  showRightIcon: {
    type: Boolean,
    default: true
  },
  mode: {
    type: String,
    default: () => {
      var _a, _b;
      return (_b = (_a = inject(configProviderInjectionKey, void 0)) == null ? void 0 : _a.mode) != null ? _b : "light";
    }
  },
  url: {
    type: String,
    default: ""
  },
  icon: {
    type: String,
    default: ""
  },
  center: {
    type: Boolean,
    default: false
  }
};
const icons = {
  "id": "2852637",
  "name": "uniui\u56FE\u6807\u5E93",
  "font_family": "uniicons",
  "css_prefix_text": "uniui-",
  "description": "",
  "glyphs": [
    {
      "icon_id": "25027049",
      "name": "yanse",
      "font_class": "color",
      "unicode": "e6cf",
      "unicode_decimal": 59087
    },
    {
      "icon_id": "25027048",
      "name": "wallet",
      "font_class": "wallet",
      "unicode": "e6b1",
      "unicode_decimal": 59057
    },
    {
      "icon_id": "25015720",
      "name": "settings-filled",
      "font_class": "settings-filled",
      "unicode": "e6ce",
      "unicode_decimal": 59086
    },
    {
      "icon_id": "25015434",
      "name": "shimingrenzheng-filled",
      "font_class": "auth-filled",
      "unicode": "e6cc",
      "unicode_decimal": 59084
    },
    {
      "icon_id": "24934246",
      "name": "shop-filled",
      "font_class": "shop-filled",
      "unicode": "e6cd",
      "unicode_decimal": 59085
    },
    {
      "icon_id": "24934159",
      "name": "staff-filled-01",
      "font_class": "staff-filled",
      "unicode": "e6cb",
      "unicode_decimal": 59083
    },
    {
      "icon_id": "24932461",
      "name": "VIP-filled",
      "font_class": "vip-filled",
      "unicode": "e6c6",
      "unicode_decimal": 59078
    },
    {
      "icon_id": "24932462",
      "name": "plus_circle_fill",
      "font_class": "plus-filled",
      "unicode": "e6c7",
      "unicode_decimal": 59079
    },
    {
      "icon_id": "24932463",
      "name": "folder_add-filled",
      "font_class": "folder-add-filled",
      "unicode": "e6c8",
      "unicode_decimal": 59080
    },
    {
      "icon_id": "24932464",
      "name": "yanse-filled",
      "font_class": "color-filled",
      "unicode": "e6c9",
      "unicode_decimal": 59081
    },
    {
      "icon_id": "24932465",
      "name": "tune-filled",
      "font_class": "tune-filled",
      "unicode": "e6ca",
      "unicode_decimal": 59082
    },
    {
      "icon_id": "24932455",
      "name": "a-rilidaka-filled",
      "font_class": "calendar-filled",
      "unicode": "e6c0",
      "unicode_decimal": 59072
    },
    {
      "icon_id": "24932456",
      "name": "notification-filled",
      "font_class": "notification-filled",
      "unicode": "e6c1",
      "unicode_decimal": 59073
    },
    {
      "icon_id": "24932457",
      "name": "wallet-filled",
      "font_class": "wallet-filled",
      "unicode": "e6c2",
      "unicode_decimal": 59074
    },
    {
      "icon_id": "24932458",
      "name": "paihangbang-filled",
      "font_class": "medal-filled",
      "unicode": "e6c3",
      "unicode_decimal": 59075
    },
    {
      "icon_id": "24932459",
      "name": "gift-filled",
      "font_class": "gift-filled",
      "unicode": "e6c4",
      "unicode_decimal": 59076
    },
    {
      "icon_id": "24932460",
      "name": "fire-filled",
      "font_class": "fire-filled",
      "unicode": "e6c5",
      "unicode_decimal": 59077
    },
    {
      "icon_id": "24928001",
      "name": "refreshempty",
      "font_class": "refreshempty",
      "unicode": "e6bf",
      "unicode_decimal": 59071
    },
    {
      "icon_id": "24926853",
      "name": "location-ellipse",
      "font_class": "location-filled",
      "unicode": "e6af",
      "unicode_decimal": 59055
    },
    {
      "icon_id": "24926735",
      "name": "person-filled",
      "font_class": "person-filled",
      "unicode": "e69d",
      "unicode_decimal": 59037
    },
    {
      "icon_id": "24926703",
      "name": "personadd-filled",
      "font_class": "personadd-filled",
      "unicode": "e698",
      "unicode_decimal": 59032
    },
    {
      "icon_id": "24923351",
      "name": "back",
      "font_class": "back",
      "unicode": "e6b9",
      "unicode_decimal": 59065
    },
    {
      "icon_id": "24923352",
      "name": "forward",
      "font_class": "forward",
      "unicode": "e6ba",
      "unicode_decimal": 59066
    },
    {
      "icon_id": "24923353",
      "name": "arrowthinright",
      "font_class": "arrow-right",
      "unicode": "e6bb",
      "unicode_decimal": 59067
    },
    {
      "icon_id": "24923353",
      "name": "arrowthinright",
      "font_class": "arrowthinright",
      "unicode": "e6bb",
      "unicode_decimal": 59067
    },
    {
      "icon_id": "24923354",
      "name": "arrowthinleft",
      "font_class": "arrow-left",
      "unicode": "e6bc",
      "unicode_decimal": 59068
    },
    {
      "icon_id": "24923354",
      "name": "arrowthinleft",
      "font_class": "arrowthinleft",
      "unicode": "e6bc",
      "unicode_decimal": 59068
    },
    {
      "icon_id": "24923355",
      "name": "arrowthinup",
      "font_class": "arrow-up",
      "unicode": "e6bd",
      "unicode_decimal": 59069
    },
    {
      "icon_id": "24923355",
      "name": "arrowthinup",
      "font_class": "arrowthinup",
      "unicode": "e6bd",
      "unicode_decimal": 59069
    },
    {
      "icon_id": "24923356",
      "name": "arrowthindown",
      "font_class": "arrow-down",
      "unicode": "e6be",
      "unicode_decimal": 59070
    },
    {
      "icon_id": "24923356",
      "name": "arrowthindown",
      "font_class": "arrowthindown",
      "unicode": "e6be",
      "unicode_decimal": 59070
    },
    {
      "icon_id": "24923349",
      "name": "arrowdown",
      "font_class": "bottom",
      "unicode": "e6b8",
      "unicode_decimal": 59064
    },
    {
      "icon_id": "24923349",
      "name": "arrowdown",
      "font_class": "arrowdown",
      "unicode": "e6b8",
      "unicode_decimal": 59064
    },
    {
      "icon_id": "24923346",
      "name": "arrowright",
      "font_class": "right",
      "unicode": "e6b5",
      "unicode_decimal": 59061
    },
    {
      "icon_id": "24923346",
      "name": "arrowright",
      "font_class": "arrowright",
      "unicode": "e6b5",
      "unicode_decimal": 59061
    },
    {
      "icon_id": "24923347",
      "name": "arrowup",
      "font_class": "top",
      "unicode": "e6b6",
      "unicode_decimal": 59062
    },
    {
      "icon_id": "24923347",
      "name": "arrowup",
      "font_class": "arrowup",
      "unicode": "e6b6",
      "unicode_decimal": 59062
    },
    {
      "icon_id": "24923348",
      "name": "arrowleft",
      "font_class": "left",
      "unicode": "e6b7",
      "unicode_decimal": 59063
    },
    {
      "icon_id": "24923348",
      "name": "arrowleft",
      "font_class": "arrowleft",
      "unicode": "e6b7",
      "unicode_decimal": 59063
    },
    {
      "icon_id": "24923334",
      "name": "eye",
      "font_class": "eye",
      "unicode": "e651",
      "unicode_decimal": 58961
    },
    {
      "icon_id": "24923335",
      "name": "eye-filled",
      "font_class": "eye-filled",
      "unicode": "e66a",
      "unicode_decimal": 58986
    },
    {
      "icon_id": "24923336",
      "name": "eye-slash",
      "font_class": "eye-slash",
      "unicode": "e6b3",
      "unicode_decimal": 59059
    },
    {
      "icon_id": "24923337",
      "name": "eye-slash-filled",
      "font_class": "eye-slash-filled",
      "unicode": "e6b4",
      "unicode_decimal": 59060
    },
    {
      "icon_id": "24923305",
      "name": "info-filled",
      "font_class": "info-filled",
      "unicode": "e649",
      "unicode_decimal": 58953
    },
    {
      "icon_id": "24923299",
      "name": "reload-01",
      "font_class": "reload",
      "unicode": "e6b2",
      "unicode_decimal": 59058
    },
    {
      "icon_id": "24923195",
      "name": "mic_slash_fill",
      "font_class": "micoff-filled",
      "unicode": "e6b0",
      "unicode_decimal": 59056
    },
    {
      "icon_id": "24923165",
      "name": "map-pin-ellipse",
      "font_class": "map-pin-ellipse",
      "unicode": "e6ac",
      "unicode_decimal": 59052
    },
    {
      "icon_id": "24923166",
      "name": "map-pin",
      "font_class": "map-pin",
      "unicode": "e6ad",
      "unicode_decimal": 59053
    },
    {
      "icon_id": "24923167",
      "name": "location",
      "font_class": "location",
      "unicode": "e6ae",
      "unicode_decimal": 59054
    },
    {
      "icon_id": "24923064",
      "name": "starhalf",
      "font_class": "starhalf",
      "unicode": "e683",
      "unicode_decimal": 59011
    },
    {
      "icon_id": "24923065",
      "name": "star",
      "font_class": "star",
      "unicode": "e688",
      "unicode_decimal": 59016
    },
    {
      "icon_id": "24923066",
      "name": "star-filled",
      "font_class": "star-filled",
      "unicode": "e68f",
      "unicode_decimal": 59023
    },
    {
      "icon_id": "24899646",
      "name": "a-rilidaka",
      "font_class": "calendar",
      "unicode": "e6a0",
      "unicode_decimal": 59040
    },
    {
      "icon_id": "24899647",
      "name": "fire",
      "font_class": "fire",
      "unicode": "e6a1",
      "unicode_decimal": 59041
    },
    {
      "icon_id": "24899648",
      "name": "paihangbang",
      "font_class": "medal",
      "unicode": "e6a2",
      "unicode_decimal": 59042
    },
    {
      "icon_id": "24899649",
      "name": "font",
      "font_class": "font",
      "unicode": "e6a3",
      "unicode_decimal": 59043
    },
    {
      "icon_id": "24899650",
      "name": "gift",
      "font_class": "gift",
      "unicode": "e6a4",
      "unicode_decimal": 59044
    },
    {
      "icon_id": "24899651",
      "name": "link",
      "font_class": "link",
      "unicode": "e6a5",
      "unicode_decimal": 59045
    },
    {
      "icon_id": "24899652",
      "name": "notification",
      "font_class": "notification",
      "unicode": "e6a6",
      "unicode_decimal": 59046
    },
    {
      "icon_id": "24899653",
      "name": "staff",
      "font_class": "staff",
      "unicode": "e6a7",
      "unicode_decimal": 59047
    },
    {
      "icon_id": "24899654",
      "name": "VIP",
      "font_class": "vip",
      "unicode": "e6a8",
      "unicode_decimal": 59048
    },
    {
      "icon_id": "24899655",
      "name": "folder_add",
      "font_class": "folder-add",
      "unicode": "e6a9",
      "unicode_decimal": 59049
    },
    {
      "icon_id": "24899656",
      "name": "tune",
      "font_class": "tune",
      "unicode": "e6aa",
      "unicode_decimal": 59050
    },
    {
      "icon_id": "24899657",
      "name": "shimingrenzheng",
      "font_class": "auth",
      "unicode": "e6ab",
      "unicode_decimal": 59051
    },
    {
      "icon_id": "24899565",
      "name": "person",
      "font_class": "person",
      "unicode": "e699",
      "unicode_decimal": 59033
    },
    {
      "icon_id": "24899566",
      "name": "email-filled",
      "font_class": "email-filled",
      "unicode": "e69a",
      "unicode_decimal": 59034
    },
    {
      "icon_id": "24899567",
      "name": "phone-filled",
      "font_class": "phone-filled",
      "unicode": "e69b",
      "unicode_decimal": 59035
    },
    {
      "icon_id": "24899568",
      "name": "phone",
      "font_class": "phone",
      "unicode": "e69c",
      "unicode_decimal": 59036
    },
    {
      "icon_id": "24899570",
      "name": "email",
      "font_class": "email",
      "unicode": "e69e",
      "unicode_decimal": 59038
    },
    {
      "icon_id": "24899571",
      "name": "personadd",
      "font_class": "personadd",
      "unicode": "e69f",
      "unicode_decimal": 59039
    },
    {
      "icon_id": "24899558",
      "name": "chatboxes-filled",
      "font_class": "chatboxes-filled",
      "unicode": "e692",
      "unicode_decimal": 59026
    },
    {
      "icon_id": "24899559",
      "name": "contact",
      "font_class": "contact",
      "unicode": "e693",
      "unicode_decimal": 59027
    },
    {
      "icon_id": "24899560",
      "name": "chatbubble-filled",
      "font_class": "chatbubble-filled",
      "unicode": "e694",
      "unicode_decimal": 59028
    },
    {
      "icon_id": "24899561",
      "name": "contact-filled",
      "font_class": "contact-filled",
      "unicode": "e695",
      "unicode_decimal": 59029
    },
    {
      "icon_id": "24899562",
      "name": "chatboxes",
      "font_class": "chatboxes",
      "unicode": "e696",
      "unicode_decimal": 59030
    },
    {
      "icon_id": "24899563",
      "name": "chatbubble",
      "font_class": "chatbubble",
      "unicode": "e697",
      "unicode_decimal": 59031
    },
    {
      "icon_id": "24881290",
      "name": "upload-filled",
      "font_class": "upload-filled",
      "unicode": "e68e",
      "unicode_decimal": 59022
    },
    {
      "icon_id": "24881292",
      "name": "upload",
      "font_class": "upload",
      "unicode": "e690",
      "unicode_decimal": 59024
    },
    {
      "icon_id": "24881293",
      "name": "weixin",
      "font_class": "weixin",
      "unicode": "e691",
      "unicode_decimal": 59025
    },
    {
      "icon_id": "24881274",
      "name": "compose",
      "font_class": "compose",
      "unicode": "e67f",
      "unicode_decimal": 59007
    },
    {
      "icon_id": "24881275",
      "name": "qq",
      "font_class": "qq",
      "unicode": "e680",
      "unicode_decimal": 59008
    },
    {
      "icon_id": "24881276",
      "name": "download-filled",
      "font_class": "download-filled",
      "unicode": "e681",
      "unicode_decimal": 59009
    },
    {
      "icon_id": "24881277",
      "name": "pengyouquan",
      "font_class": "pyq",
      "unicode": "e682",
      "unicode_decimal": 59010
    },
    {
      "icon_id": "24881279",
      "name": "sound",
      "font_class": "sound",
      "unicode": "e684",
      "unicode_decimal": 59012
    },
    {
      "icon_id": "24881280",
      "name": "trash-filled",
      "font_class": "trash-filled",
      "unicode": "e685",
      "unicode_decimal": 59013
    },
    {
      "icon_id": "24881281",
      "name": "sound-filled",
      "font_class": "sound-filled",
      "unicode": "e686",
      "unicode_decimal": 59014
    },
    {
      "icon_id": "24881282",
      "name": "trash",
      "font_class": "trash",
      "unicode": "e687",
      "unicode_decimal": 59015
    },
    {
      "icon_id": "24881284",
      "name": "videocam-filled",
      "font_class": "videocam-filled",
      "unicode": "e689",
      "unicode_decimal": 59017
    },
    {
      "icon_id": "24881285",
      "name": "spinner-cycle",
      "font_class": "spinner-cycle",
      "unicode": "e68a",
      "unicode_decimal": 59018
    },
    {
      "icon_id": "24881286",
      "name": "weibo",
      "font_class": "weibo",
      "unicode": "e68b",
      "unicode_decimal": 59019
    },
    {
      "icon_id": "24881288",
      "name": "videocam",
      "font_class": "videocam",
      "unicode": "e68c",
      "unicode_decimal": 59020
    },
    {
      "icon_id": "24881289",
      "name": "download",
      "font_class": "download",
      "unicode": "e68d",
      "unicode_decimal": 59021
    },
    {
      "icon_id": "24879601",
      "name": "help",
      "font_class": "help",
      "unicode": "e679",
      "unicode_decimal": 59001
    },
    {
      "icon_id": "24879602",
      "name": "navigate-filled",
      "font_class": "navigate-filled",
      "unicode": "e67a",
      "unicode_decimal": 59002
    },
    {
      "icon_id": "24879603",
      "name": "plusempty",
      "font_class": "plusempty",
      "unicode": "e67b",
      "unicode_decimal": 59003
    },
    {
      "icon_id": "24879604",
      "name": "smallcircle",
      "font_class": "smallcircle",
      "unicode": "e67c",
      "unicode_decimal": 59004
    },
    {
      "icon_id": "24879605",
      "name": "minus-filled",
      "font_class": "minus-filled",
      "unicode": "e67d",
      "unicode_decimal": 59005
    },
    {
      "icon_id": "24879606",
      "name": "micoff",
      "font_class": "micoff",
      "unicode": "e67e",
      "unicode_decimal": 59006
    },
    {
      "icon_id": "24879588",
      "name": "closeempty",
      "font_class": "closeempty",
      "unicode": "e66c",
      "unicode_decimal": 58988
    },
    {
      "icon_id": "24879589",
      "name": "clear",
      "font_class": "clear",
      "unicode": "e66d",
      "unicode_decimal": 58989
    },
    {
      "icon_id": "24879590",
      "name": "navigate",
      "font_class": "navigate",
      "unicode": "e66e",
      "unicode_decimal": 58990
    },
    {
      "icon_id": "24879591",
      "name": "minus",
      "font_class": "minus",
      "unicode": "e66f",
      "unicode_decimal": 58991
    },
    {
      "icon_id": "24879592",
      "name": "image",
      "font_class": "image",
      "unicode": "e670",
      "unicode_decimal": 58992
    },
    {
      "icon_id": "24879593",
      "name": "mic",
      "font_class": "mic",
      "unicode": "e671",
      "unicode_decimal": 58993
    },
    {
      "icon_id": "24879594",
      "name": "paperplane",
      "font_class": "paperplane",
      "unicode": "e672",
      "unicode_decimal": 58994
    },
    {
      "icon_id": "24879595",
      "name": "close",
      "font_class": "close",
      "unicode": "e673",
      "unicode_decimal": 58995
    },
    {
      "icon_id": "24879596",
      "name": "help-filled",
      "font_class": "help-filled",
      "unicode": "e674",
      "unicode_decimal": 58996
    },
    {
      "icon_id": "24879597",
      "name": "plus-filled",
      "font_class": "paperplane-filled",
      "unicode": "e675",
      "unicode_decimal": 58997
    },
    {
      "icon_id": "24879598",
      "name": "plus",
      "font_class": "plus",
      "unicode": "e676",
      "unicode_decimal": 58998
    },
    {
      "icon_id": "24879599",
      "name": "mic-filled",
      "font_class": "mic-filled",
      "unicode": "e677",
      "unicode_decimal": 58999
    },
    {
      "icon_id": "24879600",
      "name": "image-filled",
      "font_class": "image-filled",
      "unicode": "e678",
      "unicode_decimal": 59e3
    },
    {
      "icon_id": "24855900",
      "name": "locked-filled",
      "font_class": "locked-filled",
      "unicode": "e668",
      "unicode_decimal": 58984
    },
    {
      "icon_id": "24855901",
      "name": "info",
      "font_class": "info",
      "unicode": "e669",
      "unicode_decimal": 58985
    },
    {
      "icon_id": "24855903",
      "name": "locked",
      "font_class": "locked",
      "unicode": "e66b",
      "unicode_decimal": 58987
    },
    {
      "icon_id": "24855884",
      "name": "camera-filled",
      "font_class": "camera-filled",
      "unicode": "e658",
      "unicode_decimal": 58968
    },
    {
      "icon_id": "24855885",
      "name": "chat-filled",
      "font_class": "chat-filled",
      "unicode": "e659",
      "unicode_decimal": 58969
    },
    {
      "icon_id": "24855886",
      "name": "camera",
      "font_class": "camera",
      "unicode": "e65a",
      "unicode_decimal": 58970
    },
    {
      "icon_id": "24855887",
      "name": "circle",
      "font_class": "circle",
      "unicode": "e65b",
      "unicode_decimal": 58971
    },
    {
      "icon_id": "24855888",
      "name": "checkmarkempty",
      "font_class": "checkmarkempty",
      "unicode": "e65c",
      "unicode_decimal": 58972
    },
    {
      "icon_id": "24855889",
      "name": "chat",
      "font_class": "chat",
      "unicode": "e65d",
      "unicode_decimal": 58973
    },
    {
      "icon_id": "24855890",
      "name": "circle-filled",
      "font_class": "circle-filled",
      "unicode": "e65e",
      "unicode_decimal": 58974
    },
    {
      "icon_id": "24855891",
      "name": "flag",
      "font_class": "flag",
      "unicode": "e65f",
      "unicode_decimal": 58975
    },
    {
      "icon_id": "24855892",
      "name": "flag-filled",
      "font_class": "flag-filled",
      "unicode": "e660",
      "unicode_decimal": 58976
    },
    {
      "icon_id": "24855893",
      "name": "gear-filled",
      "font_class": "gear-filled",
      "unicode": "e661",
      "unicode_decimal": 58977
    },
    {
      "icon_id": "24855894",
      "name": "home",
      "font_class": "home",
      "unicode": "e662",
      "unicode_decimal": 58978
    },
    {
      "icon_id": "24855895",
      "name": "home-filled",
      "font_class": "home-filled",
      "unicode": "e663",
      "unicode_decimal": 58979
    },
    {
      "icon_id": "24855896",
      "name": "gear",
      "font_class": "gear",
      "unicode": "e664",
      "unicode_decimal": 58980
    },
    {
      "icon_id": "24855897",
      "name": "smallcircle-filled",
      "font_class": "smallcircle-filled",
      "unicode": "e665",
      "unicode_decimal": 58981
    },
    {
      "icon_id": "24855898",
      "name": "map-filled",
      "font_class": "map-filled",
      "unicode": "e666",
      "unicode_decimal": 58982
    },
    {
      "icon_id": "24855899",
      "name": "map",
      "font_class": "map",
      "unicode": "e667",
      "unicode_decimal": 58983
    },
    {
      "icon_id": "24855825",
      "name": "refresh-filled",
      "font_class": "refresh-filled",
      "unicode": "e656",
      "unicode_decimal": 58966
    },
    {
      "icon_id": "24855826",
      "name": "refresh",
      "font_class": "refresh",
      "unicode": "e657",
      "unicode_decimal": 58967
    },
    {
      "icon_id": "24855808",
      "name": "cloud-upload",
      "font_class": "cloud-upload",
      "unicode": "e645",
      "unicode_decimal": 58949
    },
    {
      "icon_id": "24855809",
      "name": "cloud-download-filled",
      "font_class": "cloud-download-filled",
      "unicode": "e646",
      "unicode_decimal": 58950
    },
    {
      "icon_id": "24855810",
      "name": "cloud-download",
      "font_class": "cloud-download",
      "unicode": "e647",
      "unicode_decimal": 58951
    },
    {
      "icon_id": "24855811",
      "name": "cloud-upload-filled",
      "font_class": "cloud-upload-filled",
      "unicode": "e648",
      "unicode_decimal": 58952
    },
    {
      "icon_id": "24855813",
      "name": "redo",
      "font_class": "redo",
      "unicode": "e64a",
      "unicode_decimal": 58954
    },
    {
      "icon_id": "24855814",
      "name": "images-filled",
      "font_class": "images-filled",
      "unicode": "e64b",
      "unicode_decimal": 58955
    },
    {
      "icon_id": "24855815",
      "name": "undo-filled",
      "font_class": "undo-filled",
      "unicode": "e64c",
      "unicode_decimal": 58956
    },
    {
      "icon_id": "24855816",
      "name": "more",
      "font_class": "more",
      "unicode": "e64d",
      "unicode_decimal": 58957
    },
    {
      "icon_id": "24855817",
      "name": "more-filled",
      "font_class": "more-filled",
      "unicode": "e64e",
      "unicode_decimal": 58958
    },
    {
      "icon_id": "24855818",
      "name": "undo",
      "font_class": "undo",
      "unicode": "e64f",
      "unicode_decimal": 58959
    },
    {
      "icon_id": "24855819",
      "name": "images",
      "font_class": "images",
      "unicode": "e650",
      "unicode_decimal": 58960
    },
    {
      "icon_id": "24855821",
      "name": "paperclip",
      "font_class": "paperclip",
      "unicode": "e652",
      "unicode_decimal": 58962
    },
    {
      "icon_id": "24855822",
      "name": "settings",
      "font_class": "settings",
      "unicode": "e653",
      "unicode_decimal": 58963
    },
    {
      "icon_id": "24855823",
      "name": "search",
      "font_class": "search",
      "unicode": "e654",
      "unicode_decimal": 58964
    },
    {
      "icon_id": "24855824",
      "name": "redo-filled",
      "font_class": "redo-filled",
      "unicode": "e655",
      "unicode_decimal": 58965
    },
    {
      "icon_id": "24841702",
      "name": "list",
      "font_class": "list",
      "unicode": "e644",
      "unicode_decimal": 58948
    },
    {
      "icon_id": "24841489",
      "name": "mail-open-filled",
      "font_class": "mail-open-filled",
      "unicode": "e63a",
      "unicode_decimal": 58938
    },
    {
      "icon_id": "24841491",
      "name": "hand-thumbsdown-filled",
      "font_class": "hand-down-filled",
      "unicode": "e63c",
      "unicode_decimal": 58940
    },
    {
      "icon_id": "24841492",
      "name": "hand-thumbsdown",
      "font_class": "hand-down",
      "unicode": "e63d",
      "unicode_decimal": 58941
    },
    {
      "icon_id": "24841493",
      "name": "hand-thumbsup-filled",
      "font_class": "hand-up-filled",
      "unicode": "e63e",
      "unicode_decimal": 58942
    },
    {
      "icon_id": "24841494",
      "name": "hand-thumbsup",
      "font_class": "hand-up",
      "unicode": "e63f",
      "unicode_decimal": 58943
    },
    {
      "icon_id": "24841496",
      "name": "heart-filled",
      "font_class": "heart-filled",
      "unicode": "e641",
      "unicode_decimal": 58945
    },
    {
      "icon_id": "24841498",
      "name": "mail-open",
      "font_class": "mail-open",
      "unicode": "e643",
      "unicode_decimal": 58947
    },
    {
      "icon_id": "24841488",
      "name": "heart",
      "font_class": "heart",
      "unicode": "e639",
      "unicode_decimal": 58937
    },
    {
      "icon_id": "24839963",
      "name": "loop",
      "font_class": "loop",
      "unicode": "e633",
      "unicode_decimal": 58931
    },
    {
      "icon_id": "24839866",
      "name": "pulldown",
      "font_class": "pulldown",
      "unicode": "e632",
      "unicode_decimal": 58930
    },
    {
      "icon_id": "24813798",
      "name": "scan",
      "font_class": "scan",
      "unicode": "e62a",
      "unicode_decimal": 58922
    },
    {
      "icon_id": "24813786",
      "name": "bars",
      "font_class": "bars",
      "unicode": "e627",
      "unicode_decimal": 58919
    },
    {
      "icon_id": "24813788",
      "name": "cart-filled",
      "font_class": "cart-filled",
      "unicode": "e629",
      "unicode_decimal": 58921
    },
    {
      "icon_id": "24813790",
      "name": "checkbox",
      "font_class": "checkbox",
      "unicode": "e62b",
      "unicode_decimal": 58923
    },
    {
      "icon_id": "24813791",
      "name": "checkbox-filled",
      "font_class": "checkbox-filled",
      "unicode": "e62c",
      "unicode_decimal": 58924
    },
    {
      "icon_id": "24813794",
      "name": "shop",
      "font_class": "shop",
      "unicode": "e62f",
      "unicode_decimal": 58927
    },
    {
      "icon_id": "24813795",
      "name": "headphones",
      "font_class": "headphones",
      "unicode": "e630",
      "unicode_decimal": 58928
    },
    {
      "icon_id": "24813796",
      "name": "cart",
      "font_class": "cart",
      "unicode": "e631",
      "unicode_decimal": 58929
    }
  ]
};
const iconUrl = "/assets/uniicons.89ed7d6d.ttf";
const _style_0$2 = { "uni-icons": { "": { "fontFamily": "uniicons", "textDecoration": "none", "textAlign": "center" } } };
const getVal = (val) => {
  const reg = /^[0-9]*$/g;
  return typeof val === "number" || reg.test(val) ? val + "px" : val;
};
var domModule = weex.requireModule("dom");
domModule.addRule("fontFace", {
  "fontFamily": "uniicons",
  "src": "url('" + iconUrl + "')"
});
const _sfc_main$2 = {
  name: "UniIcons",
  emits: ["click"],
  props: {
    type: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#333333"
    },
    size: {
      type: [Number, String],
      default: 16
    },
    customPrefix: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      icons: icons.glyphs
    };
  },
  computed: {
    unicode() {
      let code = this.icons.find((v) => v.font_class === this.type);
      if (code) {
        return unescape(`%u${code.unicode}`);
      }
      return "";
    },
    iconSize() {
      return getVal(this.size);
    }
  },
  methods: {
    _onClick() {
      this.$emit("click");
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("u-text", {
    style: normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
    class: "uni-icons",
    onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
  }, toDisplayString($options.unicode), 5);
}
const UniIcons = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["styles", [_style_0$2]], ["__file", "E:/work/kviewui/src/packages/components/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
const { create } = createComponent("cell");
const _sfc_main$1 = create({
  props: cellProps,
  components: {
    KuiIcons,
    UniIcons
  },
  emits: ["click"],
  setup(props, context) {
    const elId = `kUI_${Math.ceil(new Date().getTime() * 1e6).toString(36)}`;
    const theme = uni["$kView"].theme;
    const colorGreys = (dark = false) => colorBuilder.generate("grey", {
      dark,
      list: true
    });
    const data = reactive({
      id: elId,
      topRadius: props.radius,
      bottomRadius: props.radius,
      isBorder: false,
      marginBottom: 0,
      titleSize: props.titleSize ? props.titleSize : 30,
      titleWeight: props.titleWeight,
      color: props.color ? props.color : colorGreys[8],
      subTitleColor: props.subTitleColor ? props.subTitleColor : colorGreys[7],
      descColor: props.descColor ? props.descColor : colorGreys[8],
      mode: props.mode,
      backgroundColor: "#FFFFFF"
    });
    const getCellGroup = () => {
      return inject("cell-group");
    };
    const cellGroup = getCellGroup();
    const changeMode = (steep = 0) => {
      data.color = data.mode === "light" ? props.color ? props.color : colorGreys[8] : props.color ? colorBuilder.generate(props.color, {
        dark: true,
        list: false,
        index: 6
      }) : colorGreys(true)[9];
      data.backgroundColor = data.mode === "light" ? "#FFFFFF" : colorGreys(true)[2];
      data.subTitleColor = data.mode === "light" ? props.color ? props.color : colorGreys[7] : props.color ? colorBuilder.generate(props.color, {
        dark: true,
        list: false,
        index: 7
      }) : colorGreys(true)[7];
      data.descColor = data.mode === "light" ? props.descColor ? props.descColor : colorGreys[4] : props.descColor ? `hsl(${theme.colors.darken(props.descColor).color[0]},${theme.colors.darken(props.descColor).color[1]}%,${theme.colors.darken(props.descColor).color[2]}%)` : colorGreys(true)[4];
    };
    onMounted(() => {
      if (cellGroup && cellGroup.childrens.indexOf(data) === -1) {
        cellGroup.childrens.push(data);
      }
      changeMode();
      uni.$on("changeMode", (e) => {
        data.mode = e;
        changeMode();
      });
    });
    const tapstart = () => {
      if (props.clickStatus) {
        data.backgroundColor = data.mode == "light" ? colorGreys(false)[2] : colorGreys(true)[3];
      }
    };
    const tapend = () => {
      changeMode();
    };
    const onClick = () => {
      if (props.url) {
        if (props.url.indexOf("http") > -1) {
          uni.setClipboardData({
            data: props.url,
            showToast: true,
            success() {
              uni.showToast({
                title: "\u5DF2\u590D\u5236\u5230\u7C98\u8D34\u677F"
              });
            }
          });
        } else {
          console.log(props.url);
          console.log(444444);
          uni.navigateTo({
            url: props.url,
            fail: (fil) => {
              console.warn(`Cell Debug Info: ${fil.errMsg}`);
            }
          });
        }
      } else {
        context.emit("click");
      }
    };
    return {
      theme,
      data,
      tapstart,
      tapend,
      onClick
    };
  }
});
const _style_0$1 = {};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_kui_icons = resolveComponent("kui-icons");
  return openBlock(), createElementBlock("view", {
    class: "kui-cell kui-pt-2 kui-px-3",
    id: _ctx.data.id,
    style: normalizeStyle({
      borderTopLeftRadius: `${_ctx.data.topRadius}rpx`,
      borderTopRightRadius: `${_ctx.data.topRadius}rpx`,
      borderBottomLeftRadius: `${_ctx.data.isBorder ? 0 : _ctx.data.bottomRadius}rpx`,
      borderBottomRightRadius: `${_ctx.data.isBorder ? 0 : _ctx.data.bottomRadius}rpx`,
      backgroundColor: _ctx.data.backgroundColor,
      marginBottom: `${_ctx.data.marginBottom}rpx`
    }),
    onTouchstart: _cache[0] || (_cache[0] = (...args) => _ctx.tapstart && _ctx.tapstart(...args)),
    onTouchend: _cache[1] || (_cache[1] = (...args) => _ctx.tapend && _ctx.tapend(...args)),
    onClick: _cache[2] || (_cache[2] = (...args) => _ctx.onClick && _ctx.onClick(...args)),
    renderWhole: true
  }, [
    createElementVNode("view", {
      class: normalizeClass(["kui-flex kui-justify-between kui-w-full1", _ctx.center ? "kui-items-center" : ""])
    }, [
      createElementVNode("view", { class: "kui-flex kui-items-center kui-w-full1" }, [
        renderSlot(_ctx.$slots, "left-icon", {}, () => [
          _ctx.icon ? (openBlock(), createElementBlock("view", {
            key: 0,
            class: "kui-mr-1"
          }, [
            createCommentVNode(' <kui-icons :type="icon" :size="50" color="#999"></kui-icons> ')
          ])) : createCommentVNode("v-if", true)
        ]),
        renderSlot(_ctx.$slots, "content", {}, () => [
          createElementVNode("view", { class: "kui-flex" }, [
            createElementVNode("u-text", {
              class: "",
              style: normalizeStyle({
                fontSize: `${_ctx.data.titleSize}${_ctx.theme.size.fontUnit}`,
                fontWeight: _ctx.data.titleWeight,
                lineHeight: `${_ctx.theme.size.fonts["lg"] + _ctx.theme.size.lineBase}${_ctx.theme.size.fontUnit}`,
                color: _ctx.data.color
              })
            }, toDisplayString(_ctx.title), 5),
            _ctx.subTitle ? (openBlock(), createElementBlock("u-text", {
              key: 0,
              class: "kui-mt-1",
              style: normalizeStyle({
                fontSize: `${_ctx.theme.size.fonts["base"]}${_ctx.theme.size.fontUnit}`,
                lineHeight: `${_ctx.theme.size.fonts["base"] + _ctx.theme.size.lineBase}${_ctx.theme.size.fontUnit}`,
                color: _ctx.data.subTitleColor
              })
            }, toDisplayString(_ctx.subTitle), 5)) : createCommentVNode("v-if", true)
          ])
        ])
      ]),
      createElementVNode("view", {
        class: normalizeClass(["kui-h-auto kui-leading-none kui-flex kui-flex kui-justify-end", _ctx.center ? "kui-items-center" : ""])
      }, [
        createElementVNode("u-text", {
          class: "kui-mr-1",
          style: normalizeStyle({
            fontSize: `${_ctx.theme.size.fonts["lg"]}${_ctx.theme.size.fontUnit}`,
            color: _ctx.data.descColor
          })
        }, toDisplayString(_ctx.desc), 5),
        _ctx.showRightIcon ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "kui-flex kui-flex-col kui-justify-center"
        }, [
          renderSlot(_ctx.$slots, "right-icon", {}, () => [
            createVNode(_component_kui_icons, {
              name: "right",
              size: 16,
              color: "#999",
              weight: 100
            })
          ])
        ])) : createCommentVNode("v-if", true)
      ], 2)
    ], 2),
    createElementVNode("view", { class: "kui-pt-2" }, [
      _ctx.data.isBorder ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "kui-border-0 kui-border-solid kui-border-b-rpx kui-border-grey-2"
      })) : createCommentVNode("v-if", true)
    ])
  ], 44, ["id"]);
}
const KuiCell = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["styles", [_style_0$1]], ["__file", "E:/work/kviewui/src/packages/components/src/cell/index.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    ref("Hello");
    uni.$kView.theme;
    const pageRef = ref(null);
    ref(false);
    let sysinfo = reactive({});
    const systemInfo = reactive({ windowHeight: "" });
    let style = reactive({});
    const contentHeight = ref("");
    watch(
      () => systemInfo.windowHeight,
      (height, preHeight) => {
        formatAppLog("log", "at pages/index/index.nvue:112", height);
        contentHeight.value = height;
      }
    );
    onMounted(() => {
      if (pageRef.value) {
        sysinfo = pageRef.value.getApp();
        style.height = `${sysinfo.windowHeight}px`;
        systemInfo.windowHeight = style.height;
        formatAppLog("log", "at pages/index/index.nvue:122", style);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("scroll-view", {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true",
        style: { flexDirection: "column" }
      }, [
        createVNode(KuiPage, {
          ref_key: "pageRef",
          ref: pageRef,
          "padding-x": 0,
          "padding-y": 0,
          "bg-color": "#FFFFFF"
        }, {
          body: withCtx(() => [
            createElementVNode("view", { class: "kui-flex-col kui-items-center kui-pt-6" }, [
              createVNode(KuiImage, {
                src: "/static/kviewui.png",
                radius: 10,
                width: "440rpx",
                height: "110rpx",
                "disable-fit": ""
              }),
              createElementVNode("view", { class: "kui-px-6 kui-mt-5" }, [
                createCommentVNode(' <kui-text size="16px" :color="theme.colors.light.grey[6]"\r\n                        content="\u57FA\u4E8EUNI-APP\u6846\u67B6\u7684\u591A\u7AEF\u5F00\u53D1UI\u7EC4\u4EF6\u5E93\uFF0C\u8BA9\u60A8\u7684\u5F00\u53D1\u6548\u7387\u52A0\u500D\u63D0\u5347" /> ')
              ]),
              createVNode(KuiContainer, {
                width: "750rpx",
                "background-color": "#F8F8F8",
                "top-left-radius": "60rpx",
                "top-right-radius": "60rpx",
                "custom-style": {
                  padding: "0 20px",
                  marginTop: "30px"
                },
                "custom-class": " kui-flex kui-flex-1"
              }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "kui-mt-6 kui-items-start kui-flex" }, [
                    createCommentVNode(' <kui-text size="16px" content="\u6697\u9ED1\u6A21\u5F0F\uFF1A" /> '),
                    createCommentVNode(' <kui-switch v-model="checked" /> ')
                  ]),
                  createElementVNode("view", { class: "kui-mt-3" }, [
                    createVNode(KuiCellGroup, {
                      title: "\u57FA\u7840\u7EC4\u4EF6",
                      type: "space",
                      "cell-title-weight": 600,
                      "cell-radius": 100
                    }, {
                      default: withCtx(() => [
                        createVNode(KuiCell, {
                          title: "Button \u6309\u94AE",
                          url: "/pages/components/button/index"
                        }),
                        createVNode(KuiCell, {
                          title: "Cell \u5355\u5143\u683C",
                          url: "/pages/components/cell/cell"
                        }),
                        createVNode(KuiCell, {
                          title: "Image \u56FE\u7247",
                          url: "/pages/components/image/image"
                        }),
                        createVNode(KuiCell, {
                          title: "Icon \u56FE\u6807",
                          url: "/pages/components/icon/icon"
                        }),
                        createVNode(KuiCell, {
                          title: "Tag \u6807\u7B7E",
                          url: "/pages/components/tag/tag"
                        }),
                        createVNode(KuiCell, {
                          title: "Badge \u5FBD\u6807",
                          url: "/pages/components/badge/badge"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(KuiCellGroup, {
                      title: "\u5E03\u5C40\u7EC4\u4EF6",
                      type: "space",
                      "cell-title-weight": 600,
                      "cell-radius": 100
                    }, {
                      default: withCtx(() => [
                        createVNode(KuiCell, {
                          title: "Layout \u5E03\u5C40",
                          url: "/pages/components/layout/layout"
                        }),
                        createVNode(KuiCell, {
                          title: "Grid \u5BAB\u683C",
                          url: "/pages/components/grid/grid"
                        }),
                        createVNode(KuiCell, {
                          title: "Divider \u5206\u5272\u7EBF",
                          url: "/pages/components/divider/divider"
                        }),
                        createVNode(KuiCell, {
                          title: "Space \u95F4\u9694",
                          url: "/pages/components/space/space"
                        }),
                        createVNode(KuiCell, {
                          title: "Sticky \u7C98\u6027\u5E03\u5C40",
                          url: "/pages/components/sticky/sticky"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(KuiCellGroup, {
                      title: "\u5C55\u793A\u7EC4\u4EF6",
                      type: "space",
                      "cell-title-weight": 600,
                      "cell-radius": 100
                    }, {
                      default: withCtx(() => [
                        createVNode(KuiCell, {
                          title: "Spin \u52A0\u8F7D\u52A8\u753B",
                          url: "/pages/components/spin/spin"
                        }),
                        createVNode(KuiCell, {
                          title: "Overlay \u906E\u7F69",
                          url: "/pages/components/overlay/overlay"
                        }),
                        createVNode(KuiCell, {
                          title: "Animation \u52A8\u6548",
                          url: "/pages/components/animation/animation"
                        }),
                        createVNode(KuiCell, {
                          title: "Collapse \u6298\u53E0\u9762\u677F",
                          url: "/pages/components/collapse/collapse"
                        }),
                        createVNode(KuiCell, {
                          title: "Skeleton \u9AA8\u67B6\u5C4F",
                          url: "/pages/components/skeleton/skeleton"
                        }),
                        createVNode(KuiCell, {
                          title: "Progress \u8FDB\u5EA6\u6761",
                          url: "/pages/components/progress/progress"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(KuiCellGroup, {
                      title: "\u53CD\u9988\u7EC4\u4EF6",
                      type: "space",
                      "cell-title-weight": 600,
                      "cell-radius": 100
                    }, {
                      default: withCtx(() => [
                        createVNode(KuiCell, {
                          title: "Popup \u5F39\u51FA\u5C42",
                          url: "/pages/components/popup/popup"
                        }),
                        createVNode(KuiCell, {
                          title: "Snackbar \u6D88\u606F\u6761",
                          url: "/pages/components/snackbar/snackbar"
                        }),
                        createVNode(KuiCell, {
                          title: "Actionsheet \u52A8\u4F5C\u9762\u677F",
                          url: "/pages/components/actionsheet/actionsheet"
                        }),
                        createVNode(KuiCell, {
                          title: "Dialog \u5BF9\u8BDD\u6846",
                          url: "/pages/components/dialog/dialog"
                        }),
                        createVNode(KuiCell, {
                          title: "Toast \u5410\u53F8",
                          url: "/pages/components/toast/toast"
                        }),
                        createVNode(KuiCell, {
                          title: "DatePicker \u65E5\u671F\u9009\u62E9\u5668",
                          url: "/pages/components/datepicker/datepicker"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(KuiCellGroup, {
                      title: "\u8868\u5355\u7EC4\u4EF6",
                      type: "space",
                      "cell-title-weight": 600,
                      "cell-radius": 100
                    }, {
                      default: withCtx(() => [
                        createVNode(KuiCell, {
                          title: "Switch \u5F00\u5173",
                          url: "/pages/components/switch/switch"
                        }),
                        createVNode(KuiCell, {
                          title: "Radio \u5355\u9009\u6309\u94AE",
                          url: "/pages/components/radio/radio"
                        }),
                        createVNode(KuiCell, {
                          title: "Checkbox \u590D\u9009\u6309\u94AE",
                          url: "/pages/components/checkbox/checkbox"
                        }),
                        createVNode(KuiCell, {
                          title: "Input \u8F93\u5165\u6846",
                          url: "/pages/components/input/input"
                        }),
                        createVNode(KuiCell, {
                          title: "Stepper \u6B65\u8FDB\u5668",
                          url: "/pages/components/stepper/stepper"
                        }),
                        createVNode(KuiCell, {
                          title: "Numberkeyboard \u6570\u5B57\u952E\u76D8",
                          url: "/pages/components/numberkeyboard/numberkeyboard"
                        }),
                        createVNode(KuiCell, {
                          title: "Picker \u9009\u62E9\u5668",
                          url: "/pages/components/picker/picker"
                        }),
                        createVNode(KuiCell, {
                          title: "Rate \u8BC4\u5206",
                          url: "/pages/components/rate/rate"
                        }),
                        createVNode(KuiCell, {
                          title: "Slider \u6ED1\u5757",
                          url: "/pages/components/slider/slider"
                        }),
                        createVNode(KuiCell, {
                          title: "SearchBar \u641C\u7D22\u680F",
                          url: "/pages/components/searchbar/searchbar"
                        }),
                        createVNode(KuiCell, {
                          title: "ShortPassword \u77ED\u5BC6\u7801",
                          url: "/pages/components/shortpassword/shortpassword"
                        }),
                        createVNode(KuiCell, {
                          title: "Uploader \u4E0A\u4F20",
                          url: "/pages/components/uploader/uploader"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(KuiCellGroup, {
                      title: "\u7279\u8272\u7EC4\u4EF6",
                      type: "space",
                      "cell-title-weight": 600,
                      "cell-radius": 100
                    }, {
                      default: withCtx(() => [
                        createVNode(KuiCell, {
                          title: "ConfigProvider \u5168\u5C40\u914D\u7F6E",
                          url: "/pages/components/config-provider/config-provider"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(KuiCellGroup, {
                      title: "",
                      type: "space",
                      "cell-title-weight": 600,
                      "cell-radius": 100
                    }, {
                      default: withCtx(() => [
                        createVNode(KuiCell, {
                          title: "\u6D4B\u8BD5",
                          url: "/pages/test/index"
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(KuiSpace)
            ])
          ]),
          _: 1
        }, 512)
      ]);
    };
  }
});
const _style_0 = { "content": { "": { "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center" } }, "logo": { "": { "height": "200rpx", "width": "200rpx", "marginTop": "200rpx", "marginBottom": "50rpx" } }, "text-area": { "": { "display": "flex", "justifyContent": "center" } }, "title": { "": { "fontSize": "36rpx" } }, "kui-iconfont": { "": { "fontFamily": "kview-icons", "fontSize": 120, "color": "#0000FF" } } };
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]], ["__file", "E:/work/kviewui/src/examples/mobile-uni-cli/src/pages/index/index.nvue"]]);
export {
  index as default
};

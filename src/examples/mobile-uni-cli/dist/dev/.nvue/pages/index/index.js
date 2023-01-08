var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u;
import { defineComponent, inject, getCurrentInstance, reactive, computed, resolveComponent, openBlock, createElementBlock, createVNode, normalizeClass, normalizeStyle, withCtx, createElementVNode, createCommentVNode, renderSlot, useSlots, toDisplayString, withModifiers, ref } from "vue";
Object.freeze({});
Object.freeze([]);
function formatAppLog(type, filename, ...args) {
  if (uni.__log__) {
    uni.__log__(type, filename, ...args);
  } else {
    console[type].apply(console, [...args, filename]);
  }
}
function createCommonjsModule$1(fn, module) {
  return module = { exports: {} }, fn(module, module.exports), module.exports;
}
var colorName$1$1 = {
  "aliceblue": [240, 248, 255],
  "antiquewhite": [250, 235, 215],
  "aqua": [0, 255, 255],
  "aquamarine": [127, 255, 212],
  "azure": [240, 255, 255],
  "beige": [245, 245, 220],
  "bisque": [255, 228, 196],
  "black": [0, 0, 0],
  "blanchedalmond": [255, 235, 205],
  "blue": [0, 0, 255],
  "blueviolet": [138, 43, 226],
  "brown": [165, 42, 42],
  "burlywood": [222, 184, 135],
  "cadetblue": [95, 158, 160],
  "chartreuse": [127, 255, 0],
  "chocolate": [210, 105, 30],
  "coral": [255, 127, 80],
  "cornflowerblue": [100, 149, 237],
  "cornsilk": [255, 248, 220],
  "crimson": [220, 20, 60],
  "cyan": [0, 255, 255],
  "darkblue": [0, 0, 139],
  "darkcyan": [0, 139, 139],
  "darkgoldenrod": [184, 134, 11],
  "darkgray": [169, 169, 169],
  "darkgreen": [0, 100, 0],
  "darkgrey": [169, 169, 169],
  "darkkhaki": [189, 183, 107],
  "darkmagenta": [139, 0, 139],
  "darkolivegreen": [85, 107, 47],
  "darkorange": [255, 140, 0],
  "darkorchid": [153, 50, 204],
  "darkred": [139, 0, 0],
  "darksalmon": [233, 150, 122],
  "darkseagreen": [143, 188, 143],
  "darkslateblue": [72, 61, 139],
  "darkslategray": [47, 79, 79],
  "darkslategrey": [47, 79, 79],
  "darkturquoise": [0, 206, 209],
  "darkviolet": [148, 0, 211],
  "deeppink": [255, 20, 147],
  "deepskyblue": [0, 191, 255],
  "dimgray": [105, 105, 105],
  "dimgrey": [105, 105, 105],
  "dodgerblue": [30, 144, 255],
  "firebrick": [178, 34, 34],
  "floralwhite": [255, 250, 240],
  "forestgreen": [34, 139, 34],
  "fuchsia": [255, 0, 255],
  "gainsboro": [220, 220, 220],
  "ghostwhite": [248, 248, 255],
  "gold": [255, 215, 0],
  "goldenrod": [218, 165, 32],
  "gray": [128, 128, 128],
  "green": [0, 128, 0],
  "greenyellow": [173, 255, 47],
  "grey": [128, 128, 128],
  "honeydew": [240, 255, 240],
  "hotpink": [255, 105, 180],
  "indianred": [205, 92, 92],
  "indigo": [75, 0, 130],
  "ivory": [255, 255, 240],
  "khaki": [240, 230, 140],
  "lavender": [230, 230, 250],
  "lavenderblush": [255, 240, 245],
  "lawngreen": [124, 252, 0],
  "lemonchiffon": [255, 250, 205],
  "lightblue": [173, 216, 230],
  "lightcoral": [240, 128, 128],
  "lightcyan": [224, 255, 255],
  "lightgoldenrodyellow": [250, 250, 210],
  "lightgray": [211, 211, 211],
  "lightgreen": [144, 238, 144],
  "lightgrey": [211, 211, 211],
  "lightpink": [255, 182, 193],
  "lightsalmon": [255, 160, 122],
  "lightseagreen": [32, 178, 170],
  "lightskyblue": [135, 206, 250],
  "lightslategray": [119, 136, 153],
  "lightslategrey": [119, 136, 153],
  "lightsteelblue": [176, 196, 222],
  "lightyellow": [255, 255, 224],
  "lime": [0, 255, 0],
  "limegreen": [50, 205, 50],
  "linen": [250, 240, 230],
  "magenta": [255, 0, 255],
  "maroon": [128, 0, 0],
  "mediumaquamarine": [102, 205, 170],
  "mediumblue": [0, 0, 205],
  "mediumorchid": [186, 85, 211],
  "mediumpurple": [147, 112, 219],
  "mediumseagreen": [60, 179, 113],
  "mediumslateblue": [123, 104, 238],
  "mediumspringgreen": [0, 250, 154],
  "mediumturquoise": [72, 209, 204],
  "mediumvioletred": [199, 21, 133],
  "midnightblue": [25, 25, 112],
  "mintcream": [245, 255, 250],
  "mistyrose": [255, 228, 225],
  "moccasin": [255, 228, 181],
  "navajowhite": [255, 222, 173],
  "navy": [0, 0, 128],
  "oldlace": [253, 245, 230],
  "olive": [128, 128, 0],
  "olivedrab": [107, 142, 35],
  "orange": [255, 165, 0],
  "orangered": [255, 69, 0],
  "orchid": [218, 112, 214],
  "palegoldenrod": [238, 232, 170],
  "palegreen": [152, 251, 152],
  "paleturquoise": [175, 238, 238],
  "palevioletred": [219, 112, 147],
  "papayawhip": [255, 239, 213],
  "peachpuff": [255, 218, 185],
  "peru": [205, 133, 63],
  "pink": [255, 192, 203],
  "plum": [221, 160, 221],
  "powderblue": [176, 224, 230],
  "purple": [128, 0, 128],
  "rebeccapurple": [102, 51, 153],
  "red": [255, 0, 0],
  "rosybrown": [188, 143, 143],
  "royalblue": [65, 105, 225],
  "saddlebrown": [139, 69, 19],
  "salmon": [250, 128, 114],
  "sandybrown": [244, 164, 96],
  "seagreen": [46, 139, 87],
  "seashell": [255, 245, 238],
  "sienna": [160, 82, 45],
  "silver": [192, 192, 192],
  "skyblue": [135, 206, 235],
  "slateblue": [106, 90, 205],
  "slategray": [112, 128, 144],
  "slategrey": [112, 128, 144],
  "snow": [255, 250, 250],
  "springgreen": [0, 255, 127],
  "steelblue": [70, 130, 180],
  "tan": [210, 180, 140],
  "teal": [0, 128, 128],
  "thistle": [216, 191, 216],
  "tomato": [255, 99, 71],
  "turquoise": [64, 224, 208],
  "violet": [238, 130, 238],
  "wheat": [245, 222, 179],
  "white": [255, 255, 255],
  "whitesmoke": [245, 245, 245],
  "yellow": [255, 255, 0],
  "yellowgreen": [154, 205, 50]
};
var isArrayish$3 = function isArrayish(obj) {
  if (!obj || typeof obj === "string") {
    return false;
  }
  return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== "String");
};
var simpleSwizzle$2 = createCommonjsModule$1(function(module) {
  var concat2 = Array.prototype.concat;
  var slice2 = Array.prototype.slice;
  var swizzle3 = module.exports = function swizzle4(args) {
    var results = [];
    for (var i = 0, len = args.length; i < len; i++) {
      var arg = args[i];
      if (isArrayish$3(arg)) {
        results = concat2.call(results, slice2.call(arg));
      } else {
        results.push(arg);
      }
    }
    return results;
  };
  swizzle3.wrap = function(fn) {
    return function() {
      return fn(swizzle3(arguments));
    };
  };
});
var colorString$3 = createCommonjsModule$1(function(module) {
  var hasOwnProperty2 = Object.hasOwnProperty;
  var reverseNames2 = /* @__PURE__ */ Object.create(null);
  for (var name in colorName$1$1) {
    if (hasOwnProperty2.call(colorName$1$1, name)) {
      reverseNames2[colorName$1$1[name]] = name;
    }
  }
  var cs2 = module.exports = {
    to: {},
    get: {}
  };
  cs2.get = function(string) {
    var prefix = string.substring(0, 3).toLowerCase();
    var val;
    var model;
    switch (prefix) {
      case "hsl":
        val = cs2.get.hsl(string);
        model = "hsl";
        break;
      case "hwb":
        val = cs2.get.hwb(string);
        model = "hwb";
        break;
      default:
        val = cs2.get.rgb(string);
        model = "rgb";
        break;
    }
    if (!val) {
      return null;
    }
    return { model, value: val };
  };
  cs2.get.rgb = function(string) {
    if (!string) {
      return null;
    }
    var abbr = /^#([a-f0-9]{3,4})$/i;
    var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
    var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
    var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
    var keyword = /^(\w+)$/;
    var rgb = [0, 0, 0, 1];
    var match;
    var i;
    var hexAlpha;
    if (match = string.match(hex)) {
      hexAlpha = match[2];
      match = match[1];
      for (i = 0; i < 3; i++) {
        var i2 = i * 2;
        rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
      }
      if (hexAlpha) {
        rgb[3] = parseInt(hexAlpha, 16) / 255;
      }
    } else if (match = string.match(abbr)) {
      match = match[1];
      hexAlpha = match[3];
      for (i = 0; i < 3; i++) {
        rgb[i] = parseInt(match[i] + match[i], 16);
      }
      if (hexAlpha) {
        rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
      }
    } else if (match = string.match(rgba)) {
      for (i = 0; i < 3; i++) {
        rgb[i] = parseInt(match[i + 1], 0);
      }
      if (match[4]) {
        if (match[5]) {
          rgb[3] = parseFloat(match[4]) * 0.01;
        } else {
          rgb[3] = parseFloat(match[4]);
        }
      }
    } else if (match = string.match(per)) {
      for (i = 0; i < 3; i++) {
        rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
      }
      if (match[4]) {
        if (match[5]) {
          rgb[3] = parseFloat(match[4]) * 0.01;
        } else {
          rgb[3] = parseFloat(match[4]);
        }
      }
    } else if (match = string.match(keyword)) {
      if (match[1] === "transparent") {
        return [0, 0, 0, 0];
      }
      if (!hasOwnProperty2.call(colorName$1$1, match[1])) {
        return null;
      }
      rgb = colorName$1$1[match[1]];
      rgb[3] = 1;
      return rgb;
    } else {
      return null;
    }
    for (i = 0; i < 3; i++) {
      rgb[i] = clamp2(rgb[i], 0, 255);
    }
    rgb[3] = clamp2(rgb[3], 0, 1);
    return rgb;
  };
  cs2.get.hsl = function(string) {
    if (!string) {
      return null;
    }
    var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
    var match = string.match(hsl);
    if (match) {
      var alpha = parseFloat(match[4]);
      var h = (parseFloat(match[1]) % 360 + 360) % 360;
      var s = clamp2(parseFloat(match[2]), 0, 100);
      var l = clamp2(parseFloat(match[3]), 0, 100);
      var a = clamp2(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
    }
    return null;
  };
  cs2.get.hwb = function(string) {
    if (!string) {
      return null;
    }
    var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
    var match = string.match(hwb);
    if (match) {
      var alpha = parseFloat(match[4]);
      var h = (parseFloat(match[1]) % 360 + 360) % 360;
      var w = clamp2(parseFloat(match[2]), 0, 100);
      var b = clamp2(parseFloat(match[3]), 0, 100);
      var a = clamp2(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w, b, a];
    }
    return null;
  };
  cs2.to.hex = function() {
    var rgba = simpleSwizzle$2(arguments);
    return "#" + hexDouble2(rgba[0]) + hexDouble2(rgba[1]) + hexDouble2(rgba[2]) + (rgba[3] < 1 ? hexDouble2(Math.round(rgba[3] * 255)) : "");
  };
  cs2.to.rgb = function() {
    var rgba = simpleSwizzle$2(arguments);
    return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ")" : "rgba(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ", " + rgba[3] + ")";
  };
  cs2.to.rgb.percent = function() {
    var rgba = simpleSwizzle$2(arguments);
    var r = Math.round(rgba[0] / 255 * 100);
    var g = Math.round(rgba[1] / 255 * 100);
    var b = Math.round(rgba[2] / 255 * 100);
    return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + r + "%, " + g + "%, " + b + "%)" : "rgba(" + r + "%, " + g + "%, " + b + "%, " + rgba[3] + ")";
  };
  cs2.to.hsl = function() {
    var hsla = simpleSwizzle$2(arguments);
    return hsla.length < 4 || hsla[3] === 1 ? "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)" : "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + hsla[3] + ")";
  };
  cs2.to.hwb = function() {
    var hwba = simpleSwizzle$2(arguments);
    var a = "";
    if (hwba.length >= 4 && hwba[3] !== 1) {
      a = ", " + hwba[3];
    }
    return "hwb(" + hwba[0] + ", " + hwba[1] + "%, " + hwba[2] + "%" + a + ")";
  };
  cs2.to.keyword = function(rgb) {
    return reverseNames2[rgb.slice(0, 3)];
  };
  function clamp2(num, min, max) {
    return Math.min(Math.max(min, num), max);
  }
  function hexDouble2(num) {
    var str = Math.round(num).toString(16).toUpperCase();
    return str.length < 2 ? "0" + str : str;
  }
});
colorString$3.to;
colorString$3.get;
var colorName$3 = {
  "aliceblue": [240, 248, 255],
  "antiquewhite": [250, 235, 215],
  "aqua": [0, 255, 255],
  "aquamarine": [127, 255, 212],
  "azure": [240, 255, 255],
  "beige": [245, 245, 220],
  "bisque": [255, 228, 196],
  "black": [0, 0, 0],
  "blanchedalmond": [255, 235, 205],
  "blue": [0, 0, 255],
  "blueviolet": [138, 43, 226],
  "brown": [165, 42, 42],
  "burlywood": [222, 184, 135],
  "cadetblue": [95, 158, 160],
  "chartreuse": [127, 255, 0],
  "chocolate": [210, 105, 30],
  "coral": [255, 127, 80],
  "cornflowerblue": [100, 149, 237],
  "cornsilk": [255, 248, 220],
  "crimson": [220, 20, 60],
  "cyan": [0, 255, 255],
  "darkblue": [0, 0, 139],
  "darkcyan": [0, 139, 139],
  "darkgoldenrod": [184, 134, 11],
  "darkgray": [169, 169, 169],
  "darkgreen": [0, 100, 0],
  "darkgrey": [169, 169, 169],
  "darkkhaki": [189, 183, 107],
  "darkmagenta": [139, 0, 139],
  "darkolivegreen": [85, 107, 47],
  "darkorange": [255, 140, 0],
  "darkorchid": [153, 50, 204],
  "darkred": [139, 0, 0],
  "darksalmon": [233, 150, 122],
  "darkseagreen": [143, 188, 143],
  "darkslateblue": [72, 61, 139],
  "darkslategray": [47, 79, 79],
  "darkslategrey": [47, 79, 79],
  "darkturquoise": [0, 206, 209],
  "darkviolet": [148, 0, 211],
  "deeppink": [255, 20, 147],
  "deepskyblue": [0, 191, 255],
  "dimgray": [105, 105, 105],
  "dimgrey": [105, 105, 105],
  "dodgerblue": [30, 144, 255],
  "firebrick": [178, 34, 34],
  "floralwhite": [255, 250, 240],
  "forestgreen": [34, 139, 34],
  "fuchsia": [255, 0, 255],
  "gainsboro": [220, 220, 220],
  "ghostwhite": [248, 248, 255],
  "gold": [255, 215, 0],
  "goldenrod": [218, 165, 32],
  "gray": [128, 128, 128],
  "green": [0, 128, 0],
  "greenyellow": [173, 255, 47],
  "grey": [128, 128, 128],
  "honeydew": [240, 255, 240],
  "hotpink": [255, 105, 180],
  "indianred": [205, 92, 92],
  "indigo": [75, 0, 130],
  "ivory": [255, 255, 240],
  "khaki": [240, 230, 140],
  "lavender": [230, 230, 250],
  "lavenderblush": [255, 240, 245],
  "lawngreen": [124, 252, 0],
  "lemonchiffon": [255, 250, 205],
  "lightblue": [173, 216, 230],
  "lightcoral": [240, 128, 128],
  "lightcyan": [224, 255, 255],
  "lightgoldenrodyellow": [250, 250, 210],
  "lightgray": [211, 211, 211],
  "lightgreen": [144, 238, 144],
  "lightgrey": [211, 211, 211],
  "lightpink": [255, 182, 193],
  "lightsalmon": [255, 160, 122],
  "lightseagreen": [32, 178, 170],
  "lightskyblue": [135, 206, 250],
  "lightslategray": [119, 136, 153],
  "lightslategrey": [119, 136, 153],
  "lightsteelblue": [176, 196, 222],
  "lightyellow": [255, 255, 224],
  "lime": [0, 255, 0],
  "limegreen": [50, 205, 50],
  "linen": [250, 240, 230],
  "magenta": [255, 0, 255],
  "maroon": [128, 0, 0],
  "mediumaquamarine": [102, 205, 170],
  "mediumblue": [0, 0, 205],
  "mediumorchid": [186, 85, 211],
  "mediumpurple": [147, 112, 219],
  "mediumseagreen": [60, 179, 113],
  "mediumslateblue": [123, 104, 238],
  "mediumspringgreen": [0, 250, 154],
  "mediumturquoise": [72, 209, 204],
  "mediumvioletred": [199, 21, 133],
  "midnightblue": [25, 25, 112],
  "mintcream": [245, 255, 250],
  "mistyrose": [255, 228, 225],
  "moccasin": [255, 228, 181],
  "navajowhite": [255, 222, 173],
  "navy": [0, 0, 128],
  "oldlace": [253, 245, 230],
  "olive": [128, 128, 0],
  "olivedrab": [107, 142, 35],
  "orange": [255, 165, 0],
  "orangered": [255, 69, 0],
  "orchid": [218, 112, 214],
  "palegoldenrod": [238, 232, 170],
  "palegreen": [152, 251, 152],
  "paleturquoise": [175, 238, 238],
  "palevioletred": [219, 112, 147],
  "papayawhip": [255, 239, 213],
  "peachpuff": [255, 218, 185],
  "peru": [205, 133, 63],
  "pink": [255, 192, 203],
  "plum": [221, 160, 221],
  "powderblue": [176, 224, 230],
  "purple": [128, 0, 128],
  "rebeccapurple": [102, 51, 153],
  "red": [255, 0, 0],
  "rosybrown": [188, 143, 143],
  "royalblue": [65, 105, 225],
  "saddlebrown": [139, 69, 19],
  "salmon": [250, 128, 114],
  "sandybrown": [244, 164, 96],
  "seagreen": [46, 139, 87],
  "seashell": [255, 245, 238],
  "sienna": [160, 82, 45],
  "silver": [192, 192, 192],
  "skyblue": [135, 206, 235],
  "slateblue": [106, 90, 205],
  "slategray": [112, 128, 144],
  "slategrey": [112, 128, 144],
  "snow": [255, 250, 250],
  "springgreen": [0, 255, 127],
  "steelblue": [70, 130, 180],
  "tan": [210, 180, 140],
  "teal": [0, 128, 128],
  "thistle": [216, 191, 216],
  "tomato": [255, 99, 71],
  "turquoise": [64, 224, 208],
  "violet": [238, 130, 238],
  "wheat": [245, 222, 179],
  "white": [255, 255, 255],
  "whitesmoke": [245, 245, 245],
  "yellow": [255, 255, 0],
  "yellowgreen": [154, 205, 50]
};
const reverseKeywords$2 = {};
for (const key of Object.keys(colorName$3)) {
  reverseKeywords$2[colorName$3[key]] = key;
}
const convert$1$2 = {
  rgb: { channels: 3, labels: "rgb" },
  hsl: { channels: 3, labels: "hsl" },
  hsv: { channels: 3, labels: "hsv" },
  hwb: { channels: 3, labels: "hwb" },
  cmyk: { channels: 4, labels: "cmyk" },
  xyz: { channels: 3, labels: "xyz" },
  lab: { channels: 3, labels: "lab" },
  lch: { channels: 3, labels: "lch" },
  hex: { channels: 1, labels: ["hex"] },
  keyword: { channels: 1, labels: ["keyword"] },
  ansi16: { channels: 1, labels: ["ansi16"] },
  ansi256: { channels: 1, labels: ["ansi256"] },
  hcg: { channels: 3, labels: ["h", "c", "g"] },
  apple: { channels: 3, labels: ["r16", "g16", "b16"] },
  gray: { channels: 1, labels: ["gray"] }
};
var conversions$4 = convert$1$2;
for (const model of Object.keys(convert$1$2)) {
  if (!("channels" in convert$1$2[model])) {
    throw new Error("missing channels property: " + model);
  }
  if (!("labels" in convert$1$2[model])) {
    throw new Error("missing channel labels property: " + model);
  }
  if (convert$1$2[model].labels.length !== convert$1$2[model].channels) {
    throw new Error("channel and label counts mismatch: " + model);
  }
  const { channels, labels } = convert$1$2[model];
  delete convert$1$2[model].channels;
  delete convert$1$2[model].labels;
  Object.defineProperty(convert$1$2[model], "channels", { value: channels });
  Object.defineProperty(convert$1$2[model], "labels", { value: labels });
}
convert$1$2.rgb.hsl = function(rgb) {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const delta = max - min;
  let h;
  let s;
  if (max === min) {
    h = 0;
  } else if (r === max) {
    h = (g - b) / delta;
  } else if (g === max) {
    h = 2 + (b - r) / delta;
  } else if (b === max) {
    h = 4 + (r - g) / delta;
  }
  h = Math.min(h * 60, 360);
  if (h < 0) {
    h += 360;
  }
  const l = (min + max) / 2;
  if (max === min) {
    s = 0;
  } else if (l <= 0.5) {
    s = delta / (max + min);
  } else {
    s = delta / (2 - max - min);
  }
  return [h, s * 100, l * 100];
};
convert$1$2.rgb.hsv = function(rgb) {
  let rdif;
  let gdif;
  let bdif;
  let h;
  let s;
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const v = Math.max(r, g, b);
  const diff = v - Math.min(r, g, b);
  const diffc = function(c) {
    return (v - c) / 6 / diff + 1 / 2;
  };
  if (diff === 0) {
    h = 0;
    s = 0;
  } else {
    s = diff / v;
    rdif = diffc(r);
    gdif = diffc(g);
    bdif = diffc(b);
    if (r === v) {
      h = bdif - gdif;
    } else if (g === v) {
      h = 1 / 3 + rdif - bdif;
    } else if (b === v) {
      h = 2 / 3 + gdif - rdif;
    }
    if (h < 0) {
      h += 1;
    } else if (h > 1) {
      h -= 1;
    }
  }
  return [
    h * 360,
    s * 100,
    v * 100
  ];
};
convert$1$2.rgb.hwb = function(rgb) {
  const r = rgb[0];
  const g = rgb[1];
  let b = rgb[2];
  const h = convert$1$2.rgb.hsl(rgb)[0];
  const w = 1 / 255 * Math.min(r, Math.min(g, b));
  b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
  return [h, w * 100, b * 100];
};
convert$1$2.rgb.cmyk = function(rgb) {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const k = Math.min(1 - r, 1 - g, 1 - b);
  const c = (1 - r - k) / (1 - k) || 0;
  const m = (1 - g - k) / (1 - k) || 0;
  const y = (1 - b - k) / (1 - k) || 0;
  return [c * 100, m * 100, y * 100, k * 100];
};
function comparativeDistance$2(x, y) {
  return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
}
convert$1$2.rgb.keyword = function(rgb) {
  const reversed = reverseKeywords$2[rgb];
  if (reversed) {
    return reversed;
  }
  let currentClosestDistance = Infinity;
  let currentClosestKeyword;
  for (const keyword of Object.keys(colorName$3)) {
    const value = colorName$3[keyword];
    const distance = comparativeDistance$2(rgb, value);
    if (distance < currentClosestDistance) {
      currentClosestDistance = distance;
      currentClosestKeyword = keyword;
    }
  }
  return currentClosestKeyword;
};
convert$1$2.keyword.rgb = function(keyword) {
  return colorName$3[keyword];
};
convert$1$2.rgb.xyz = function(rgb) {
  let r = rgb[0] / 255;
  let g = rgb[1] / 255;
  let b = rgb[2] / 255;
  r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
  g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
  b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
  const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
  const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
  const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
  return [x * 100, y * 100, z * 100];
};
convert$1$2.rgb.lab = function(rgb) {
  const xyz = convert$1$2.rgb.xyz(rgb);
  let x = xyz[0];
  let y = xyz[1];
  let z = xyz[2];
  x /= 95.047;
  y /= 100;
  z /= 108.883;
  x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
  y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
  z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
  const l = 116 * y - 16;
  const a = 500 * (x - y);
  const b = 200 * (y - z);
  return [l, a, b];
};
convert$1$2.hsl.rgb = function(hsl) {
  const h = hsl[0] / 360;
  const s = hsl[1] / 100;
  const l = hsl[2] / 100;
  let t2;
  let t3;
  let val;
  if (s === 0) {
    val = l * 255;
    return [val, val, val];
  }
  if (l < 0.5) {
    t2 = l * (1 + s);
  } else {
    t2 = l + s - l * s;
  }
  const t1 = 2 * l - t2;
  const rgb = [0, 0, 0];
  for (let i = 0; i < 3; i++) {
    t3 = h + 1 / 3 * -(i - 1);
    if (t3 < 0) {
      t3++;
    }
    if (t3 > 1) {
      t3--;
    }
    if (6 * t3 < 1) {
      val = t1 + (t2 - t1) * 6 * t3;
    } else if (2 * t3 < 1) {
      val = t2;
    } else if (3 * t3 < 2) {
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    } else {
      val = t1;
    }
    rgb[i] = val * 255;
  }
  return rgb;
};
convert$1$2.hsl.hsv = function(hsl) {
  const h = hsl[0];
  let s = hsl[1] / 100;
  let l = hsl[2] / 100;
  let smin = s;
  const lmin = Math.max(l, 0.01);
  l *= 2;
  s *= l <= 1 ? l : 2 - l;
  smin *= lmin <= 1 ? lmin : 2 - lmin;
  const v = (l + s) / 2;
  const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
  return [h, sv * 100, v * 100];
};
convert$1$2.hsv.rgb = function(hsv) {
  const h = hsv[0] / 60;
  const s = hsv[1] / 100;
  let v = hsv[2] / 100;
  const hi = Math.floor(h) % 6;
  const f = h - Math.floor(h);
  const p = 255 * v * (1 - s);
  const q = 255 * v * (1 - s * f);
  const t = 255 * v * (1 - s * (1 - f));
  v *= 255;
  switch (hi) {
    case 0:
      return [v, t, p];
    case 1:
      return [q, v, p];
    case 2:
      return [p, v, t];
    case 3:
      return [p, q, v];
    case 4:
      return [t, p, v];
    case 5:
      return [v, p, q];
  }
};
convert$1$2.hsv.hsl = function(hsv) {
  const h = hsv[0];
  const s = hsv[1] / 100;
  const v = hsv[2] / 100;
  const vmin = Math.max(v, 0.01);
  let sl;
  let l;
  l = (2 - s) * v;
  const lmin = (2 - s) * vmin;
  sl = s * vmin;
  sl /= lmin <= 1 ? lmin : 2 - lmin;
  sl = sl || 0;
  l /= 2;
  return [h, sl * 100, l * 100];
};
convert$1$2.hwb.rgb = function(hwb) {
  const h = hwb[0] / 360;
  let wh = hwb[1] / 100;
  let bl = hwb[2] / 100;
  const ratio = wh + bl;
  let f;
  if (ratio > 1) {
    wh /= ratio;
    bl /= ratio;
  }
  const i = Math.floor(6 * h);
  const v = 1 - bl;
  f = 6 * h - i;
  if ((i & 1) !== 0) {
    f = 1 - f;
  }
  const n = wh + f * (v - wh);
  let r;
  let g;
  let b;
  switch (i) {
    default:
    case 6:
    case 0:
      r = v;
      g = n;
      b = wh;
      break;
    case 1:
      r = n;
      g = v;
      b = wh;
      break;
    case 2:
      r = wh;
      g = v;
      b = n;
      break;
    case 3:
      r = wh;
      g = n;
      b = v;
      break;
    case 4:
      r = n;
      g = wh;
      b = v;
      break;
    case 5:
      r = v;
      g = wh;
      b = n;
      break;
  }
  return [r * 255, g * 255, b * 255];
};
convert$1$2.cmyk.rgb = function(cmyk) {
  const c = cmyk[0] / 100;
  const m = cmyk[1] / 100;
  const y = cmyk[2] / 100;
  const k = cmyk[3] / 100;
  const r = 1 - Math.min(1, c * (1 - k) + k);
  const g = 1 - Math.min(1, m * (1 - k) + k);
  const b = 1 - Math.min(1, y * (1 - k) + k);
  return [r * 255, g * 255, b * 255];
};
convert$1$2.xyz.rgb = function(xyz) {
  const x = xyz[0] / 100;
  const y = xyz[1] / 100;
  const z = xyz[2] / 100;
  let r;
  let g;
  let b;
  r = x * 3.2406 + y * -1.5372 + z * -0.4986;
  g = x * -0.9689 + y * 1.8758 + z * 0.0415;
  b = x * 0.0557 + y * -0.204 + z * 1.057;
  r = r > 31308e-7 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92;
  g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92;
  b = b > 31308e-7 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92;
  r = Math.min(Math.max(0, r), 1);
  g = Math.min(Math.max(0, g), 1);
  b = Math.min(Math.max(0, b), 1);
  return [r * 255, g * 255, b * 255];
};
convert$1$2.xyz.lab = function(xyz) {
  let x = xyz[0];
  let y = xyz[1];
  let z = xyz[2];
  x /= 95.047;
  y /= 100;
  z /= 108.883;
  x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
  y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
  z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
  const l = 116 * y - 16;
  const a = 500 * (x - y);
  const b = 200 * (y - z);
  return [l, a, b];
};
convert$1$2.lab.xyz = function(lab) {
  const l = lab[0];
  const a = lab[1];
  const b = lab[2];
  let x;
  let y;
  let z;
  y = (l + 16) / 116;
  x = a / 500 + y;
  z = y - b / 200;
  const y2 = y ** 3;
  const x2 = x ** 3;
  const z2 = z ** 3;
  y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
  x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
  z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
  x *= 95.047;
  y *= 100;
  z *= 108.883;
  return [x, y, z];
};
convert$1$2.lab.lch = function(lab) {
  const l = lab[0];
  const a = lab[1];
  const b = lab[2];
  let h;
  const hr = Math.atan2(b, a);
  h = hr * 360 / 2 / Math.PI;
  if (h < 0) {
    h += 360;
  }
  const c = Math.sqrt(a * a + b * b);
  return [l, c, h];
};
convert$1$2.lch.lab = function(lch) {
  const l = lch[0];
  const c = lch[1];
  const h = lch[2];
  const hr = h / 360 * 2 * Math.PI;
  const a = c * Math.cos(hr);
  const b = c * Math.sin(hr);
  return [l, a, b];
};
convert$1$2.rgb.ansi16 = function(args, saturation = null) {
  const [r, g, b] = args;
  let value = saturation === null ? convert$1$2.rgb.hsv(args)[2] : saturation;
  value = Math.round(value / 50);
  if (value === 0) {
    return 30;
  }
  let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
  if (value === 2) {
    ansi += 60;
  }
  return ansi;
};
convert$1$2.hsv.ansi16 = function(args) {
  return convert$1$2.rgb.ansi16(convert$1$2.hsv.rgb(args), args[2]);
};
convert$1$2.rgb.ansi256 = function(args) {
  const r = args[0];
  const g = args[1];
  const b = args[2];
  if (r === g && g === b) {
    if (r < 8) {
      return 16;
    }
    if (r > 248) {
      return 231;
    }
    return Math.round((r - 8) / 247 * 24) + 232;
  }
  const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
  return ansi;
};
convert$1$2.ansi16.rgb = function(args) {
  let color2 = args % 10;
  if (color2 === 0 || color2 === 7) {
    if (args > 50) {
      color2 += 3.5;
    }
    color2 = color2 / 10.5 * 255;
    return [color2, color2, color2];
  }
  const mult = (~~(args > 50) + 1) * 0.5;
  const r = (color2 & 1) * mult * 255;
  const g = (color2 >> 1 & 1) * mult * 255;
  const b = (color2 >> 2 & 1) * mult * 255;
  return [r, g, b];
};
convert$1$2.ansi256.rgb = function(args) {
  if (args >= 232) {
    const c = (args - 232) * 10 + 8;
    return [c, c, c];
  }
  args -= 16;
  let rem;
  const r = Math.floor(args / 36) / 5 * 255;
  const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
  const b = rem % 6 / 5 * 255;
  return [r, g, b];
};
convert$1$2.rgb.hex = function(args) {
  const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
  const string = integer.toString(16).toUpperCase();
  return "000000".substring(string.length) + string;
};
convert$1$2.hex.rgb = function(args) {
  const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (!match) {
    return [0, 0, 0];
  }
  let colorString2 = match[0];
  if (match[0].length === 3) {
    colorString2 = colorString2.split("").map((char) => {
      return char + char;
    }).join("");
  }
  const integer = parseInt(colorString2, 16);
  const r = integer >> 16 & 255;
  const g = integer >> 8 & 255;
  const b = integer & 255;
  return [r, g, b];
};
convert$1$2.rgb.hcg = function(rgb) {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const max = Math.max(Math.max(r, g), b);
  const min = Math.min(Math.min(r, g), b);
  const chroma = max - min;
  let grayscale;
  let hue;
  if (chroma < 1) {
    grayscale = min / (1 - chroma);
  } else {
    grayscale = 0;
  }
  if (chroma <= 0) {
    hue = 0;
  } else if (max === r) {
    hue = (g - b) / chroma % 6;
  } else if (max === g) {
    hue = 2 + (b - r) / chroma;
  } else {
    hue = 4 + (r - g) / chroma;
  }
  hue /= 6;
  hue %= 1;
  return [hue * 360, chroma * 100, grayscale * 100];
};
convert$1$2.hsl.hcg = function(hsl) {
  const s = hsl[1] / 100;
  const l = hsl[2] / 100;
  const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
  let f = 0;
  if (c < 1) {
    f = (l - 0.5 * c) / (1 - c);
  }
  return [hsl[0], c * 100, f * 100];
};
convert$1$2.hsv.hcg = function(hsv) {
  const s = hsv[1] / 100;
  const v = hsv[2] / 100;
  const c = s * v;
  let f = 0;
  if (c < 1) {
    f = (v - c) / (1 - c);
  }
  return [hsv[0], c * 100, f * 100];
};
convert$1$2.hcg.rgb = function(hcg) {
  const h = hcg[0] / 360;
  const c = hcg[1] / 100;
  const g = hcg[2] / 100;
  if (c === 0) {
    return [g * 255, g * 255, g * 255];
  }
  const pure = [0, 0, 0];
  const hi = h % 1 * 6;
  const v = hi % 1;
  const w = 1 - v;
  let mg = 0;
  switch (Math.floor(hi)) {
    case 0:
      pure[0] = 1;
      pure[1] = v;
      pure[2] = 0;
      break;
    case 1:
      pure[0] = w;
      pure[1] = 1;
      pure[2] = 0;
      break;
    case 2:
      pure[0] = 0;
      pure[1] = 1;
      pure[2] = v;
      break;
    case 3:
      pure[0] = 0;
      pure[1] = w;
      pure[2] = 1;
      break;
    case 4:
      pure[0] = v;
      pure[1] = 0;
      pure[2] = 1;
      break;
    default:
      pure[0] = 1;
      pure[1] = 0;
      pure[2] = w;
  }
  mg = (1 - c) * g;
  return [
    (c * pure[0] + mg) * 255,
    (c * pure[1] + mg) * 255,
    (c * pure[2] + mg) * 255
  ];
};
convert$1$2.hcg.hsv = function(hcg) {
  const c = hcg[1] / 100;
  const g = hcg[2] / 100;
  const v = c + g * (1 - c);
  let f = 0;
  if (v > 0) {
    f = c / v;
  }
  return [hcg[0], f * 100, v * 100];
};
convert$1$2.hcg.hsl = function(hcg) {
  const c = hcg[1] / 100;
  const g = hcg[2] / 100;
  const l = g * (1 - c) + 0.5 * c;
  let s = 0;
  if (l > 0 && l < 0.5) {
    s = c / (2 * l);
  } else if (l >= 0.5 && l < 1) {
    s = c / (2 * (1 - l));
  }
  return [hcg[0], s * 100, l * 100];
};
convert$1$2.hcg.hwb = function(hcg) {
  const c = hcg[1] / 100;
  const g = hcg[2] / 100;
  const v = c + g * (1 - c);
  return [hcg[0], (v - c) * 100, (1 - v) * 100];
};
convert$1$2.hwb.hcg = function(hwb) {
  const w = hwb[1] / 100;
  const b = hwb[2] / 100;
  const v = 1 - b;
  const c = v - w;
  let g = 0;
  if (c < 1) {
    g = (v - c) / (1 - c);
  }
  return [hwb[0], c * 100, g * 100];
};
convert$1$2.apple.rgb = function(apple) {
  return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
};
convert$1$2.rgb.apple = function(rgb) {
  return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
};
convert$1$2.gray.rgb = function(args) {
  return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};
convert$1$2.gray.hsl = function(args) {
  return [0, 0, args[0]];
};
convert$1$2.gray.hsv = convert$1$2.gray.hsl;
convert$1$2.gray.hwb = function(gray) {
  return [0, 100, gray[0]];
};
convert$1$2.gray.cmyk = function(gray) {
  return [0, 0, 0, gray[0]];
};
convert$1$2.gray.lab = function(gray) {
  return [gray[0], 0, 0];
};
convert$1$2.gray.hex = function(gray) {
  const val = Math.round(gray[0] / 100 * 255) & 255;
  const integer = (val << 16) + (val << 8) + val;
  const string = integer.toString(16).toUpperCase();
  return "000000".substring(string.length) + string;
};
convert$1$2.rgb.gray = function(rgb) {
  const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
  return [val / 255 * 100];
};
function buildGraph$2() {
  const graph = {};
  const models2 = Object.keys(conversions$4);
  for (let len = models2.length, i = 0; i < len; i++) {
    graph[models2[i]] = {
      distance: -1,
      parent: null
    };
  }
  return graph;
}
function deriveBFS$2(fromModel) {
  const graph = buildGraph$2();
  const queue = [fromModel];
  graph[fromModel].distance = 0;
  while (queue.length) {
    const current = queue.pop();
    const adjacents = Object.keys(conversions$4[current]);
    for (let len = adjacents.length, i = 0; i < len; i++) {
      const adjacent = adjacents[i];
      const node = graph[adjacent];
      if (node.distance === -1) {
        node.distance = graph[current].distance + 1;
        node.parent = current;
        queue.unshift(adjacent);
      }
    }
  }
  return graph;
}
function link$2(from, to) {
  return function(args) {
    return to(from(args));
  };
}
function wrapConversion$2(toModel, graph) {
  const path = [graph[toModel].parent, toModel];
  let fn = conversions$4[graph[toModel].parent][toModel];
  let cur = graph[toModel].parent;
  while (graph[cur].parent) {
    path.unshift(graph[cur].parent);
    fn = link$2(conversions$4[graph[cur].parent][cur], fn);
    cur = graph[cur].parent;
  }
  fn.conversion = path;
  return fn;
}
var route$3 = function(fromModel) {
  const graph = deriveBFS$2(fromModel);
  const conversion = {};
  const models2 = Object.keys(graph);
  for (let len = models2.length, i = 0; i < len; i++) {
    const toModel = models2[i];
    const node = graph[toModel];
    if (node.parent === null) {
      continue;
    }
    conversion[toModel] = wrapConversion$2(toModel, graph);
  }
  return conversion;
};
const convert$4 = {};
const models$2 = Object.keys(conversions$4);
function wrapRaw$2(fn) {
  const wrappedFn = function(...args) {
    const arg0 = args[0];
    if (arg0 === void 0 || arg0 === null) {
      return arg0;
    }
    if (arg0.length > 1) {
      args = arg0;
    }
    return fn(args);
  };
  if ("conversion" in fn) {
    wrappedFn.conversion = fn.conversion;
  }
  return wrappedFn;
}
function wrapRounded$2(fn) {
  const wrappedFn = function(...args) {
    const arg0 = args[0];
    if (arg0 === void 0 || arg0 === null) {
      return arg0;
    }
    if (arg0.length > 1) {
      args = arg0;
    }
    const result = fn(args);
    if (typeof result === "object") {
      for (let len = result.length, i = 0; i < len; i++) {
        result[i] = Math.round(result[i]);
      }
    }
    return result;
  };
  if ("conversion" in fn) {
    wrappedFn.conversion = fn.conversion;
  }
  return wrappedFn;
}
models$2.forEach((fromModel) => {
  convert$4[fromModel] = {};
  Object.defineProperty(convert$4[fromModel], "channels", { value: conversions$4[fromModel].channels });
  Object.defineProperty(convert$4[fromModel], "labels", { value: conversions$4[fromModel].labels });
  const routes = route$3(fromModel);
  const routeModels = Object.keys(routes);
  routeModels.forEach((toModel) => {
    const fn = routes[toModel];
    convert$4[fromModel][toModel] = wrapRounded$2(fn);
    convert$4[fromModel][toModel].raw = wrapRaw$2(fn);
  });
});
var colorConvert$2 = convert$4;
const skippedModels$2 = [
  "keyword",
  "gray",
  "hex"
];
const hashedModelKeys$2 = {};
for (const model of Object.keys(colorConvert$2)) {
  hashedModelKeys$2[[...colorConvert$2[model].labels].sort().join("")] = model;
}
const limiters$2 = {};
function Color$3(object, model) {
  if (!(this instanceof Color$3)) {
    return new Color$3(object, model);
  }
  if (model && model in skippedModels$2) {
    model = null;
  }
  if (model && !(model in colorConvert$2)) {
    throw new Error("Unknown model: " + model);
  }
  let i;
  let channels;
  if (object == null) {
    this.model = "rgb";
    this.color = [0, 0, 0];
    this.valpha = 1;
  } else if (object instanceof Color$3) {
    this.model = object.model;
    this.color = [...object.color];
    this.valpha = object.valpha;
  } else if (typeof object === "string") {
    const result = colorString$3.get(object);
    if (result === null) {
      throw new Error("Unable to parse color from string: " + object);
    }
    this.model = result.model;
    channels = colorConvert$2[this.model].channels;
    this.color = result.value.slice(0, channels);
    this.valpha = typeof result.value[channels] === "number" ? result.value[channels] : 1;
  } else if (object.length > 0) {
    this.model = model || "rgb";
    channels = colorConvert$2[this.model].channels;
    const newArray = Array.prototype.slice.call(object, 0, channels);
    this.color = zeroArray$2(newArray, channels);
    this.valpha = typeof object[channels] === "number" ? object[channels] : 1;
  } else if (typeof object === "number") {
    this.model = "rgb";
    this.color = [
      object >> 16 & 255,
      object >> 8 & 255,
      object & 255
    ];
    this.valpha = 1;
  } else {
    this.valpha = 1;
    const keys = Object.keys(object);
    if ("alpha" in object) {
      keys.splice(keys.indexOf("alpha"), 1);
      this.valpha = typeof object.alpha === "number" ? object.alpha : 0;
    }
    const hashedKeys = keys.sort().join("");
    if (!(hashedKeys in hashedModelKeys$2)) {
      throw new Error("Unable to parse color from object: " + JSON.stringify(object));
    }
    this.model = hashedModelKeys$2[hashedKeys];
    const { labels } = colorConvert$2[this.model];
    const color2 = [];
    for (i = 0; i < labels.length; i++) {
      color2.push(object[labels[i]]);
    }
    this.color = zeroArray$2(color2);
  }
  if (limiters$2[this.model]) {
    channels = colorConvert$2[this.model].channels;
    for (i = 0; i < channels; i++) {
      const limit = limiters$2[this.model][i];
      if (limit) {
        this.color[i] = limit(this.color[i]);
      }
    }
  }
  this.valpha = Math.max(0, Math.min(1, this.valpha));
  if (Object.freeze) {
    Object.freeze(this);
  }
}
Color$3.prototype = {
  toString() {
    return this.string();
  },
  toJSON() {
    return this[this.model]();
  },
  string(places) {
    let self = this.model in colorString$3.to ? this : this.rgb();
    self = self.round(typeof places === "number" ? places : 1);
    const args = self.valpha === 1 ? self.color : [...self.color, this.valpha];
    return colorString$3.to[self.model](args);
  },
  percentString(places) {
    const self = this.rgb().round(typeof places === "number" ? places : 1);
    const args = self.valpha === 1 ? self.color : [...self.color, this.valpha];
    return colorString$3.to.rgb.percent(args);
  },
  array() {
    return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
  },
  object() {
    const result = {};
    const { channels } = colorConvert$2[this.model];
    const { labels } = colorConvert$2[this.model];
    for (let i = 0; i < channels; i++) {
      result[labels[i]] = this.color[i];
    }
    if (this.valpha !== 1) {
      result.alpha = this.valpha;
    }
    return result;
  },
  unitArray() {
    const rgb = this.rgb().color;
    rgb[0] /= 255;
    rgb[1] /= 255;
    rgb[2] /= 255;
    if (this.valpha !== 1) {
      rgb.push(this.valpha);
    }
    return rgb;
  },
  unitObject() {
    const rgb = this.rgb().object();
    rgb.r /= 255;
    rgb.g /= 255;
    rgb.b /= 255;
    if (this.valpha !== 1) {
      rgb.alpha = this.valpha;
    }
    return rgb;
  },
  round(places) {
    places = Math.max(places || 0, 0);
    return new Color$3([...this.color.map(roundToPlace$2(places)), this.valpha], this.model);
  },
  alpha(value) {
    if (value !== void 0) {
      return new Color$3([...this.color, Math.max(0, Math.min(1, value))], this.model);
    }
    return this.valpha;
  },
  red: getset$2("rgb", 0, maxfn$2(255)),
  green: getset$2("rgb", 1, maxfn$2(255)),
  blue: getset$2("rgb", 2, maxfn$2(255)),
  hue: getset$2(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (value) => (value % 360 + 360) % 360),
  saturationl: getset$2("hsl", 1, maxfn$2(100)),
  lightness: getset$2("hsl", 2, maxfn$2(100)),
  saturationv: getset$2("hsv", 1, maxfn$2(100)),
  value: getset$2("hsv", 2, maxfn$2(100)),
  chroma: getset$2("hcg", 1, maxfn$2(100)),
  gray: getset$2("hcg", 2, maxfn$2(100)),
  white: getset$2("hwb", 1, maxfn$2(100)),
  wblack: getset$2("hwb", 2, maxfn$2(100)),
  cyan: getset$2("cmyk", 0, maxfn$2(100)),
  magenta: getset$2("cmyk", 1, maxfn$2(100)),
  yellow: getset$2("cmyk", 2, maxfn$2(100)),
  black: getset$2("cmyk", 3, maxfn$2(100)),
  x: getset$2("xyz", 0, maxfn$2(95.047)),
  y: getset$2("xyz", 1, maxfn$2(100)),
  z: getset$2("xyz", 2, maxfn$2(108.833)),
  l: getset$2("lab", 0, maxfn$2(100)),
  a: getset$2("lab", 1),
  b: getset$2("lab", 2),
  keyword(value) {
    if (value !== void 0) {
      return new Color$3(value);
    }
    return colorConvert$2[this.model].keyword(this.color);
  },
  hex(value) {
    if (value !== void 0) {
      return new Color$3(value);
    }
    return colorString$3.to.hex(this.rgb().round().color);
  },
  hexa(value) {
    if (value !== void 0) {
      return new Color$3(value);
    }
    const rgbArray = this.rgb().round().color;
    let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
    if (alphaHex.length === 1) {
      alphaHex = "0" + alphaHex;
    }
    return colorString$3.to.hex(rgbArray) + alphaHex;
  },
  rgbNumber() {
    const rgb = this.rgb().color;
    return (rgb[0] & 255) << 16 | (rgb[1] & 255) << 8 | rgb[2] & 255;
  },
  luminosity() {
    const rgb = this.rgb().color;
    const lum = [];
    for (const [i, element] of rgb.entries()) {
      const chan = element / 255;
      lum[i] = chan <= 0.04045 ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
    }
    return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
  },
  contrast(color2) {
    const lum1 = this.luminosity();
    const lum2 = color2.luminosity();
    if (lum1 > lum2) {
      return (lum1 + 0.05) / (lum2 + 0.05);
    }
    return (lum2 + 0.05) / (lum1 + 0.05);
  },
  level(color2) {
    const contrastRatio = this.contrast(color2);
    if (contrastRatio >= 7) {
      return "AAA";
    }
    return contrastRatio >= 4.5 ? "AA" : "";
  },
  isDark() {
    const rgb = this.rgb().color;
    const yiq = (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 1e4;
    return yiq < 128;
  },
  isLight() {
    return !this.isDark();
  },
  negate() {
    const rgb = this.rgb();
    for (let i = 0; i < 3; i++) {
      rgb.color[i] = 255 - rgb.color[i];
    }
    return rgb;
  },
  lighten(ratio) {
    const hsl = this.hsl();
    hsl.color[2] += hsl.color[2] * ratio;
    return hsl;
  },
  darken(ratio) {
    const hsl = this.hsl();
    hsl.color[2] -= hsl.color[2] * ratio;
    return hsl;
  },
  saturate(ratio) {
    const hsl = this.hsl();
    hsl.color[1] += hsl.color[1] * ratio;
    return hsl;
  },
  desaturate(ratio) {
    const hsl = this.hsl();
    hsl.color[1] -= hsl.color[1] * ratio;
    return hsl;
  },
  whiten(ratio) {
    const hwb = this.hwb();
    hwb.color[1] += hwb.color[1] * ratio;
    return hwb;
  },
  blacken(ratio) {
    const hwb = this.hwb();
    hwb.color[2] += hwb.color[2] * ratio;
    return hwb;
  },
  grayscale() {
    const rgb = this.rgb().color;
    const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
    return Color$3.rgb(value, value, value);
  },
  fade(ratio) {
    return this.alpha(this.valpha - this.valpha * ratio);
  },
  opaquer(ratio) {
    return this.alpha(this.valpha + this.valpha * ratio);
  },
  rotate(degrees) {
    const hsl = this.hsl();
    let hue = hsl.color[0];
    hue = (hue + degrees) % 360;
    hue = hue < 0 ? 360 + hue : hue;
    hsl.color[0] = hue;
    return hsl;
  },
  mix(mixinColor, weight) {
    if (!mixinColor || !mixinColor.rgb) {
      throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
    }
    const color1 = mixinColor.rgb();
    const color2 = this.rgb();
    const p = weight === void 0 ? 0.5 : weight;
    const w = 2 * p - 1;
    const a = color1.alpha() - color2.alpha();
    const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
    const w2 = 1 - w1;
    return Color$3.rgb(
      w1 * color1.red() + w2 * color2.red(),
      w1 * color1.green() + w2 * color2.green(),
      w1 * color1.blue() + w2 * color2.blue(),
      color1.alpha() * p + color2.alpha() * (1 - p)
    );
  }
};
for (const model of Object.keys(colorConvert$2)) {
  if (skippedModels$2.includes(model)) {
    continue;
  }
  const { channels } = colorConvert$2[model];
  Color$3.prototype[model] = function(...args) {
    if (this.model === model) {
      return new Color$3(this);
    }
    if (args.length > 0) {
      return new Color$3(args, model);
    }
    return new Color$3([...assertArray$2(colorConvert$2[this.model][model].raw(this.color)), this.valpha], model);
  };
  Color$3[model] = function(...args) {
    let color2 = args[0];
    if (typeof color2 === "number") {
      color2 = zeroArray$2(args, channels);
    }
    return new Color$3(color2, model);
  };
}
function roundTo$2(number, places) {
  return Number(number.toFixed(places));
}
function roundToPlace$2(places) {
  return function(number) {
    return roundTo$2(number, places);
  };
}
function getset$2(model, channel, modifier) {
  model = Array.isArray(model) ? model : [model];
  for (const m of model) {
    (limiters$2[m] || (limiters$2[m] = []))[channel] = modifier;
  }
  model = model[0];
  return function(value) {
    let result;
    if (value !== void 0) {
      if (modifier) {
        value = modifier(value);
      }
      result = this[model]();
      result.color[channel] = value;
      return result;
    }
    result = this[model]().color[channel];
    if (modifier) {
      result = modifier(result);
    }
    return result;
  };
}
function maxfn$2(max) {
  return function(v) {
    return Math.max(0, Math.min(max, v));
  };
}
function assertArray$2(value) {
  return Array.isArray(value) ? value : [value];
}
function zeroArray$2(array, length) {
  for (let i = 0; i < length; i++) {
    if (typeof array[i] !== "number") {
      array[i] = 0;
    }
  }
  return array;
}
var color$2 = Color$3;
var Color$1$2 = color$2;
const getRgbStr$1 = (color2) => {
  return Color$1$2(color2).rgb().round().array().join(",");
};
const formats$1 = ["hex", "rgb", "hsl"];
function getFormat$1(format) {
  if (!format || formats$1.indexOf(format) < 0) {
    return "hex";
  }
  return format;
}
const getColorString$1 = (color2, format) => {
  const innerFormat = getFormat$1(format);
  if (innerFormat === "hex") {
    return color2[innerFormat]();
  }
  return color2[innerFormat]().round().string();
};
const colorPalette$2 = (originColor, i, format) => {
  const color2 = Color$1$2(originColor);
  const h = color2.hue();
  const s = color2.saturationv();
  const v = color2.value();
  const hueStep = 2;
  const maxSaturationStep = 100;
  const minSaturationStep = 9;
  const maxValue = 100;
  const minValue = 30;
  function getNewHue(isLight2, i2) {
    let hue;
    if (h >= 60 && h <= 240) {
      hue = isLight2 ? h - hueStep * i2 : h + hueStep * i2;
    } else {
      hue = isLight2 ? h + hueStep * i2 : h - hueStep * i2;
    }
    if (hue < 0) {
      hue += 360;
    } else if (hue >= 360) {
      hue -= 360;
    }
    return Math.round(hue);
  }
  function getNewSaturation(isLight2, i2) {
    let newSaturation;
    if (isLight2) {
      newSaturation = s <= minSaturationStep ? s : s - (s - minSaturationStep) / 5 * i2;
    } else {
      newSaturation = s + (maxSaturationStep - s) / 4 * i2;
    }
    return newSaturation;
  }
  function getNewValue(isLight2, i2) {
    return isLight2 ? v + (maxValue - v) / 5 * i2 : v <= minValue ? v : v - (v - minValue) / 4 * i2;
  }
  const isLight = i < 6;
  const index2 = isLight ? 6 - i : i - 6;
  const retColor = i === 6 ? color2 : Color$1$2({
    h: getNewHue(isLight, index2),
    s: getNewSaturation(isLight, index2),
    v: getNewValue(isLight, index2)
  });
  return getColorString$1(retColor, format);
};
const colorPaletteDark$1 = (originColor, i, format) => {
  const lightColor = Color$1$2(colorPalette$2(originColor, 10 - i + 1, null));
  const originBaseColor = Color$1$2(originColor);
  const originBaseHue = originBaseColor.hue();
  const originBaseSaturation = originBaseColor.saturationv();
  const baseColor = Color$1$2({
    h: originBaseColor.hue(),
    s: getNewSaturation(6),
    v: originBaseColor.value()
  });
  const baseSaturation = baseColor.saturationv();
  const step = Math.ceil((baseSaturation - 9) / 4);
  const step1to5 = Math.ceil((100 - baseSaturation) / 5);
  function getNewSaturation(_index) {
    if (_index < 6) {
      return baseSaturation + (6 - _index) * step1to5;
    }
    if (_index === 6) {
      if (originBaseHue >= 0 && originBaseHue < 50) {
        return originBaseSaturation - 15;
      }
      if (originBaseHue >= 50 && originBaseHue < 191) {
        return originBaseSaturation - 20;
      }
      if (originBaseHue >= 191 && originBaseHue <= 360) {
        return originBaseSaturation - 15;
      }
    }
    return baseSaturation - step * (_index - 6);
  }
  const retColor = Color$1$2({
    h: lightColor.hue(),
    s: getNewSaturation(i),
    v: lightColor.value()
  });
  return getColorString$1(retColor, format);
};
const generate$1 = (color2, options = {
  dark: false,
  list: false,
  index: 6,
  format: "hex"
}) => {
  const { dark, list, index: index2 = 6, format = "hex" } = options;
  if (list) {
    const list2 = [];
    for (let i = 1; i <= 10; i++) {
      const func = dark ? colorPaletteDark$1 : colorPalette$2;
      list2.push(func(color2, i, format));
    }
    return list2;
  }
  return dark ? colorPaletteDark$1(color2, index2, format) : colorPalette$2(color2, index2, format);
};
const colorList$1 = {
  red: "#F53F3F",
  orangered: "#F77234",
  orange: "#FF7D00",
  gold: "#F7BA1E",
  yellow: "#FADC19",
  lime: "#9FDB1D",
  green: "#00BC79",
  cyan: "#14C9C9",
  blue: "#3491FA",
  arcoblue: "#165DFF",
  purple: "#722ED1",
  pinkpurple: "#D91AD9",
  magenta: "#F5319D"
};
const getPresetColors$1 = () => {
  const presetColors = [];
  Object.keys(colorList$1).forEach((key) => {
    presetColors[key] = [];
    presetColors[key]["light"] = generate$1(colorList$1[key], {
      list: true,
      dark: false,
      index: 0
    });
    presetColors[key]["dark"] = generate$1(colorList$1[key], {
      list: true,
      dark: true,
      index: 0
    });
    presetColors[key]["primary"] = colorList$1[key];
  });
  presetColors["gray"] = [];
  presetColors["gray"]["light"] = [
    "#f7f8fa",
    "#f2f3f5",
    "#e5e6eb",
    "#c9cdd4",
    "#a9aeb8",
    "#86909c",
    "#6b7785",
    "#4e5969",
    "#272e3b",
    "#1d2129"
  ];
  presetColors["gray"]["dark"] = [
    "#17171a",
    "#2e2e30",
    "#484849",
    "#5f5f60",
    "#78787a",
    "#929293",
    "#ababac",
    "#c5c5c5",
    "#dfdfdf",
    "#f6f6f6"
  ];
  presetColors["gray"]["primary"] = presetColors["gray"]["light"][6];
  return presetColors;
};
const colorBuilder$1 = {
  getPresetColors: getPresetColors$1,
  generate: generate$1,
  getRgbStr: getRgbStr$1,
  getColorString: getColorString$1
};
function useThrottle(func, wait, isTimer = false) {
}
const createComponent = (name) => {
  const componentName2 = `kui-${name}`;
  return {
    componentName: componentName2,
    create: function(componentOptions) {
      componentOptions.name = componentName2;
      componentOptions.install = (vue) => {
        vue.component(componentOptions.name, componentOptions);
      };
      return defineComponent(componentOptions);
    }
  };
};
const config$1 = {
  debug: true
};
console.log(config$1.debug);
if (!config$1) {
  console.error("kview config: \u8BF7\u5728\u9879\u76EE\u6839\u76EE\u5F55\u521B\u5EFAkview.config.ts\u914D\u7F6E\u6587\u4EF6");
}
function createCommonjsModule(fn, module) {
  return module = { exports: {} }, fn(module, module.exports), module.exports;
}
var colorName$1 = {
  "aliceblue": [240, 248, 255],
  "antiquewhite": [250, 235, 215],
  "aqua": [0, 255, 255],
  "aquamarine": [127, 255, 212],
  "azure": [240, 255, 255],
  "beige": [245, 245, 220],
  "bisque": [255, 228, 196],
  "black": [0, 0, 0],
  "blanchedalmond": [255, 235, 205],
  "blue": [0, 0, 255],
  "blueviolet": [138, 43, 226],
  "brown": [165, 42, 42],
  "burlywood": [222, 184, 135],
  "cadetblue": [95, 158, 160],
  "chartreuse": [127, 255, 0],
  "chocolate": [210, 105, 30],
  "coral": [255, 127, 80],
  "cornflowerblue": [100, 149, 237],
  "cornsilk": [255, 248, 220],
  "crimson": [220, 20, 60],
  "cyan": [0, 255, 255],
  "darkblue": [0, 0, 139],
  "darkcyan": [0, 139, 139],
  "darkgoldenrod": [184, 134, 11],
  "darkgray": [169, 169, 169],
  "darkgreen": [0, 100, 0],
  "darkgrey": [169, 169, 169],
  "darkkhaki": [189, 183, 107],
  "darkmagenta": [139, 0, 139],
  "darkolivegreen": [85, 107, 47],
  "darkorange": [255, 140, 0],
  "darkorchid": [153, 50, 204],
  "darkred": [139, 0, 0],
  "darksalmon": [233, 150, 122],
  "darkseagreen": [143, 188, 143],
  "darkslateblue": [72, 61, 139],
  "darkslategray": [47, 79, 79],
  "darkslategrey": [47, 79, 79],
  "darkturquoise": [0, 206, 209],
  "darkviolet": [148, 0, 211],
  "deeppink": [255, 20, 147],
  "deepskyblue": [0, 191, 255],
  "dimgray": [105, 105, 105],
  "dimgrey": [105, 105, 105],
  "dodgerblue": [30, 144, 255],
  "firebrick": [178, 34, 34],
  "floralwhite": [255, 250, 240],
  "forestgreen": [34, 139, 34],
  "fuchsia": [255, 0, 255],
  "gainsboro": [220, 220, 220],
  "ghostwhite": [248, 248, 255],
  "gold": [255, 215, 0],
  "goldenrod": [218, 165, 32],
  "gray": [128, 128, 128],
  "green": [0, 128, 0],
  "greenyellow": [173, 255, 47],
  "grey": [128, 128, 128],
  "honeydew": [240, 255, 240],
  "hotpink": [255, 105, 180],
  "indianred": [205, 92, 92],
  "indigo": [75, 0, 130],
  "ivory": [255, 255, 240],
  "khaki": [240, 230, 140],
  "lavender": [230, 230, 250],
  "lavenderblush": [255, 240, 245],
  "lawngreen": [124, 252, 0],
  "lemonchiffon": [255, 250, 205],
  "lightblue": [173, 216, 230],
  "lightcoral": [240, 128, 128],
  "lightcyan": [224, 255, 255],
  "lightgoldenrodyellow": [250, 250, 210],
  "lightgray": [211, 211, 211],
  "lightgreen": [144, 238, 144],
  "lightgrey": [211, 211, 211],
  "lightpink": [255, 182, 193],
  "lightsalmon": [255, 160, 122],
  "lightseagreen": [32, 178, 170],
  "lightskyblue": [135, 206, 250],
  "lightslategray": [119, 136, 153],
  "lightslategrey": [119, 136, 153],
  "lightsteelblue": [176, 196, 222],
  "lightyellow": [255, 255, 224],
  "lime": [0, 255, 0],
  "limegreen": [50, 205, 50],
  "linen": [250, 240, 230],
  "magenta": [255, 0, 255],
  "maroon": [128, 0, 0],
  "mediumaquamarine": [102, 205, 170],
  "mediumblue": [0, 0, 205],
  "mediumorchid": [186, 85, 211],
  "mediumpurple": [147, 112, 219],
  "mediumseagreen": [60, 179, 113],
  "mediumslateblue": [123, 104, 238],
  "mediumspringgreen": [0, 250, 154],
  "mediumturquoise": [72, 209, 204],
  "mediumvioletred": [199, 21, 133],
  "midnightblue": [25, 25, 112],
  "mintcream": [245, 255, 250],
  "mistyrose": [255, 228, 225],
  "moccasin": [255, 228, 181],
  "navajowhite": [255, 222, 173],
  "navy": [0, 0, 128],
  "oldlace": [253, 245, 230],
  "olive": [128, 128, 0],
  "olivedrab": [107, 142, 35],
  "orange": [255, 165, 0],
  "orangered": [255, 69, 0],
  "orchid": [218, 112, 214],
  "palegoldenrod": [238, 232, 170],
  "palegreen": [152, 251, 152],
  "paleturquoise": [175, 238, 238],
  "palevioletred": [219, 112, 147],
  "papayawhip": [255, 239, 213],
  "peachpuff": [255, 218, 185],
  "peru": [205, 133, 63],
  "pink": [255, 192, 203],
  "plum": [221, 160, 221],
  "powderblue": [176, 224, 230],
  "purple": [128, 0, 128],
  "rebeccapurple": [102, 51, 153],
  "red": [255, 0, 0],
  "rosybrown": [188, 143, 143],
  "royalblue": [65, 105, 225],
  "saddlebrown": [139, 69, 19],
  "salmon": [250, 128, 114],
  "sandybrown": [244, 164, 96],
  "seagreen": [46, 139, 87],
  "seashell": [255, 245, 238],
  "sienna": [160, 82, 45],
  "silver": [192, 192, 192],
  "skyblue": [135, 206, 235],
  "slateblue": [106, 90, 205],
  "slategray": [112, 128, 144],
  "slategrey": [112, 128, 144],
  "snow": [255, 250, 250],
  "springgreen": [0, 255, 127],
  "steelblue": [70, 130, 180],
  "tan": [210, 180, 140],
  "teal": [0, 128, 128],
  "thistle": [216, 191, 216],
  "tomato": [255, 99, 71],
  "turquoise": [64, 224, 208],
  "violet": [238, 130, 238],
  "wheat": [245, 222, 179],
  "white": [255, 255, 255],
  "whitesmoke": [245, 245, 245],
  "yellow": [255, 255, 0],
  "yellowgreen": [154, 205, 50]
};
var isArrayish$2 = function isArrayish2(obj) {
  if (!obj || typeof obj === "string") {
    return false;
  }
  return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== "String");
};
var simpleSwizzle$1 = createCommonjsModule(function(module) {
  var concat2 = Array.prototype.concat;
  var slice2 = Array.prototype.slice;
  var swizzle3 = module.exports = function swizzle4(args) {
    var results = [];
    for (var i = 0, len = args.length; i < len; i++) {
      var arg = args[i];
      if (isArrayish$2(arg)) {
        results = concat2.call(results, slice2.call(arg));
      } else {
        results.push(arg);
      }
    }
    return results;
  };
  swizzle3.wrap = function(fn) {
    return function() {
      return fn(swizzle3(arguments));
    };
  };
});
var colorString$2 = createCommonjsModule(function(module) {
  var hasOwnProperty2 = Object.hasOwnProperty;
  var reverseNames2 = /* @__PURE__ */ Object.create(null);
  for (var name in colorName$1) {
    if (hasOwnProperty2.call(colorName$1, name)) {
      reverseNames2[colorName$1[name]] = name;
    }
  }
  var cs2 = module.exports = {
    to: {},
    get: {}
  };
  cs2.get = function(string) {
    var prefix = string.substring(0, 3).toLowerCase();
    var val;
    var model;
    switch (prefix) {
      case "hsl":
        val = cs2.get.hsl(string);
        model = "hsl";
        break;
      case "hwb":
        val = cs2.get.hwb(string);
        model = "hwb";
        break;
      default:
        val = cs2.get.rgb(string);
        model = "rgb";
        break;
    }
    if (!val) {
      return null;
    }
    return { model, value: val };
  };
  cs2.get.rgb = function(string) {
    if (!string) {
      return null;
    }
    var abbr = /^#([a-f0-9]{3,4})$/i;
    var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
    var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
    var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
    var keyword = /^(\w+)$/;
    var rgb = [0, 0, 0, 1];
    var match;
    var i;
    var hexAlpha;
    if (match = string.match(hex)) {
      hexAlpha = match[2];
      match = match[1];
      for (i = 0; i < 3; i++) {
        var i2 = i * 2;
        rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
      }
      if (hexAlpha) {
        rgb[3] = parseInt(hexAlpha, 16) / 255;
      }
    } else if (match = string.match(abbr)) {
      match = match[1];
      hexAlpha = match[3];
      for (i = 0; i < 3; i++) {
        rgb[i] = parseInt(match[i] + match[i], 16);
      }
      if (hexAlpha) {
        rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
      }
    } else if (match = string.match(rgba)) {
      for (i = 0; i < 3; i++) {
        rgb[i] = parseInt(match[i + 1], 0);
      }
      if (match[4]) {
        if (match[5]) {
          rgb[3] = parseFloat(match[4]) * 0.01;
        } else {
          rgb[3] = parseFloat(match[4]);
        }
      }
    } else if (match = string.match(per)) {
      for (i = 0; i < 3; i++) {
        rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
      }
      if (match[4]) {
        if (match[5]) {
          rgb[3] = parseFloat(match[4]) * 0.01;
        } else {
          rgb[3] = parseFloat(match[4]);
        }
      }
    } else if (match = string.match(keyword)) {
      if (match[1] === "transparent") {
        return [0, 0, 0, 0];
      }
      if (!hasOwnProperty2.call(colorName$1, match[1])) {
        return null;
      }
      rgb = colorName$1[match[1]];
      rgb[3] = 1;
      return rgb;
    } else {
      return null;
    }
    for (i = 0; i < 3; i++) {
      rgb[i] = clamp2(rgb[i], 0, 255);
    }
    rgb[3] = clamp2(rgb[3], 0, 1);
    return rgb;
  };
  cs2.get.hsl = function(string) {
    if (!string) {
      return null;
    }
    var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
    var match = string.match(hsl);
    if (match) {
      var alpha = parseFloat(match[4]);
      var h = (parseFloat(match[1]) % 360 + 360) % 360;
      var s = clamp2(parseFloat(match[2]), 0, 100);
      var l = clamp2(parseFloat(match[3]), 0, 100);
      var a = clamp2(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
    }
    return null;
  };
  cs2.get.hwb = function(string) {
    if (!string) {
      return null;
    }
    var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
    var match = string.match(hwb);
    if (match) {
      var alpha = parseFloat(match[4]);
      var h = (parseFloat(match[1]) % 360 + 360) % 360;
      var w = clamp2(parseFloat(match[2]), 0, 100);
      var b = clamp2(parseFloat(match[3]), 0, 100);
      var a = clamp2(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w, b, a];
    }
    return null;
  };
  cs2.to.hex = function() {
    var rgba = simpleSwizzle$1(arguments);
    return "#" + hexDouble2(rgba[0]) + hexDouble2(rgba[1]) + hexDouble2(rgba[2]) + (rgba[3] < 1 ? hexDouble2(Math.round(rgba[3] * 255)) : "");
  };
  cs2.to.rgb = function() {
    var rgba = simpleSwizzle$1(arguments);
    return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ")" : "rgba(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ", " + rgba[3] + ")";
  };
  cs2.to.rgb.percent = function() {
    var rgba = simpleSwizzle$1(arguments);
    var r = Math.round(rgba[0] / 255 * 100);
    var g = Math.round(rgba[1] / 255 * 100);
    var b = Math.round(rgba[2] / 255 * 100);
    return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + r + "%, " + g + "%, " + b + "%)" : "rgba(" + r + "%, " + g + "%, " + b + "%, " + rgba[3] + ")";
  };
  cs2.to.hsl = function() {
    var hsla = simpleSwizzle$1(arguments);
    return hsla.length < 4 || hsla[3] === 1 ? "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)" : "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + hsla[3] + ")";
  };
  cs2.to.hwb = function() {
    var hwba = simpleSwizzle$1(arguments);
    var a = "";
    if (hwba.length >= 4 && hwba[3] !== 1) {
      a = ", " + hwba[3];
    }
    return "hwb(" + hwba[0] + ", " + hwba[1] + "%, " + hwba[2] + "%" + a + ")";
  };
  cs2.to.keyword = function(rgb) {
    return reverseNames2[rgb.slice(0, 3)];
  };
  function clamp2(num, min, max) {
    return Math.min(Math.max(min, num), max);
  }
  function hexDouble2(num) {
    var str = Math.round(num).toString(16).toUpperCase();
    return str.length < 2 ? "0" + str : str;
  }
});
colorString$2.to;
colorString$2.get;
var colorName$2 = {
  "aliceblue": [240, 248, 255],
  "antiquewhite": [250, 235, 215],
  "aqua": [0, 255, 255],
  "aquamarine": [127, 255, 212],
  "azure": [240, 255, 255],
  "beige": [245, 245, 220],
  "bisque": [255, 228, 196],
  "black": [0, 0, 0],
  "blanchedalmond": [255, 235, 205],
  "blue": [0, 0, 255],
  "blueviolet": [138, 43, 226],
  "brown": [165, 42, 42],
  "burlywood": [222, 184, 135],
  "cadetblue": [95, 158, 160],
  "chartreuse": [127, 255, 0],
  "chocolate": [210, 105, 30],
  "coral": [255, 127, 80],
  "cornflowerblue": [100, 149, 237],
  "cornsilk": [255, 248, 220],
  "crimson": [220, 20, 60],
  "cyan": [0, 255, 255],
  "darkblue": [0, 0, 139],
  "darkcyan": [0, 139, 139],
  "darkgoldenrod": [184, 134, 11],
  "darkgray": [169, 169, 169],
  "darkgreen": [0, 100, 0],
  "darkgrey": [169, 169, 169],
  "darkkhaki": [189, 183, 107],
  "darkmagenta": [139, 0, 139],
  "darkolivegreen": [85, 107, 47],
  "darkorange": [255, 140, 0],
  "darkorchid": [153, 50, 204],
  "darkred": [139, 0, 0],
  "darksalmon": [233, 150, 122],
  "darkseagreen": [143, 188, 143],
  "darkslateblue": [72, 61, 139],
  "darkslategray": [47, 79, 79],
  "darkslategrey": [47, 79, 79],
  "darkturquoise": [0, 206, 209],
  "darkviolet": [148, 0, 211],
  "deeppink": [255, 20, 147],
  "deepskyblue": [0, 191, 255],
  "dimgray": [105, 105, 105],
  "dimgrey": [105, 105, 105],
  "dodgerblue": [30, 144, 255],
  "firebrick": [178, 34, 34],
  "floralwhite": [255, 250, 240],
  "forestgreen": [34, 139, 34],
  "fuchsia": [255, 0, 255],
  "gainsboro": [220, 220, 220],
  "ghostwhite": [248, 248, 255],
  "gold": [255, 215, 0],
  "goldenrod": [218, 165, 32],
  "gray": [128, 128, 128],
  "green": [0, 128, 0],
  "greenyellow": [173, 255, 47],
  "grey": [128, 128, 128],
  "honeydew": [240, 255, 240],
  "hotpink": [255, 105, 180],
  "indianred": [205, 92, 92],
  "indigo": [75, 0, 130],
  "ivory": [255, 255, 240],
  "khaki": [240, 230, 140],
  "lavender": [230, 230, 250],
  "lavenderblush": [255, 240, 245],
  "lawngreen": [124, 252, 0],
  "lemonchiffon": [255, 250, 205],
  "lightblue": [173, 216, 230],
  "lightcoral": [240, 128, 128],
  "lightcyan": [224, 255, 255],
  "lightgoldenrodyellow": [250, 250, 210],
  "lightgray": [211, 211, 211],
  "lightgreen": [144, 238, 144],
  "lightgrey": [211, 211, 211],
  "lightpink": [255, 182, 193],
  "lightsalmon": [255, 160, 122],
  "lightseagreen": [32, 178, 170],
  "lightskyblue": [135, 206, 250],
  "lightslategray": [119, 136, 153],
  "lightslategrey": [119, 136, 153],
  "lightsteelblue": [176, 196, 222],
  "lightyellow": [255, 255, 224],
  "lime": [0, 255, 0],
  "limegreen": [50, 205, 50],
  "linen": [250, 240, 230],
  "magenta": [255, 0, 255],
  "maroon": [128, 0, 0],
  "mediumaquamarine": [102, 205, 170],
  "mediumblue": [0, 0, 205],
  "mediumorchid": [186, 85, 211],
  "mediumpurple": [147, 112, 219],
  "mediumseagreen": [60, 179, 113],
  "mediumslateblue": [123, 104, 238],
  "mediumspringgreen": [0, 250, 154],
  "mediumturquoise": [72, 209, 204],
  "mediumvioletred": [199, 21, 133],
  "midnightblue": [25, 25, 112],
  "mintcream": [245, 255, 250],
  "mistyrose": [255, 228, 225],
  "moccasin": [255, 228, 181],
  "navajowhite": [255, 222, 173],
  "navy": [0, 0, 128],
  "oldlace": [253, 245, 230],
  "olive": [128, 128, 0],
  "olivedrab": [107, 142, 35],
  "orange": [255, 165, 0],
  "orangered": [255, 69, 0],
  "orchid": [218, 112, 214],
  "palegoldenrod": [238, 232, 170],
  "palegreen": [152, 251, 152],
  "paleturquoise": [175, 238, 238],
  "palevioletred": [219, 112, 147],
  "papayawhip": [255, 239, 213],
  "peachpuff": [255, 218, 185],
  "peru": [205, 133, 63],
  "pink": [255, 192, 203],
  "plum": [221, 160, 221],
  "powderblue": [176, 224, 230],
  "purple": [128, 0, 128],
  "rebeccapurple": [102, 51, 153],
  "red": [255, 0, 0],
  "rosybrown": [188, 143, 143],
  "royalblue": [65, 105, 225],
  "saddlebrown": [139, 69, 19],
  "salmon": [250, 128, 114],
  "sandybrown": [244, 164, 96],
  "seagreen": [46, 139, 87],
  "seashell": [255, 245, 238],
  "sienna": [160, 82, 45],
  "silver": [192, 192, 192],
  "skyblue": [135, 206, 235],
  "slateblue": [106, 90, 205],
  "slategray": [112, 128, 144],
  "slategrey": [112, 128, 144],
  "snow": [255, 250, 250],
  "springgreen": [0, 255, 127],
  "steelblue": [70, 130, 180],
  "tan": [210, 180, 140],
  "teal": [0, 128, 128],
  "thistle": [216, 191, 216],
  "tomato": [255, 99, 71],
  "turquoise": [64, 224, 208],
  "violet": [238, 130, 238],
  "wheat": [245, 222, 179],
  "white": [255, 255, 255],
  "whitesmoke": [245, 245, 245],
  "yellow": [255, 255, 0],
  "yellowgreen": [154, 205, 50]
};
const reverseKeywords$1 = {};
for (const key of Object.keys(colorName$2)) {
  reverseKeywords$1[colorName$2[key]] = key;
}
const convert$1$1 = {
  rgb: { channels: 3, labels: "rgb" },
  hsl: { channels: 3, labels: "hsl" },
  hsv: { channels: 3, labels: "hsv" },
  hwb: { channels: 3, labels: "hwb" },
  cmyk: { channels: 4, labels: "cmyk" },
  xyz: { channels: 3, labels: "xyz" },
  lab: { channels: 3, labels: "lab" },
  lch: { channels: 3, labels: "lch" },
  hex: { channels: 1, labels: ["hex"] },
  keyword: { channels: 1, labels: ["keyword"] },
  ansi16: { channels: 1, labels: ["ansi16"] },
  ansi256: { channels: 1, labels: ["ansi256"] },
  hcg: { channels: 3, labels: ["h", "c", "g"] },
  apple: { channels: 3, labels: ["r16", "g16", "b16"] },
  gray: { channels: 1, labels: ["gray"] }
};
var conversions$3 = convert$1$1;
for (const model of Object.keys(convert$1$1)) {
  if (!("channels" in convert$1$1[model])) {
    throw new Error("missing channels property: " + model);
  }
  if (!("labels" in convert$1$1[model])) {
    throw new Error("missing channel labels property: " + model);
  }
  if (convert$1$1[model].labels.length !== convert$1$1[model].channels) {
    throw new Error("channel and label counts mismatch: " + model);
  }
  const { channels, labels } = convert$1$1[model];
  delete convert$1$1[model].channels;
  delete convert$1$1[model].labels;
  Object.defineProperty(convert$1$1[model], "channels", { value: channels });
  Object.defineProperty(convert$1$1[model], "labels", { value: labels });
}
convert$1$1.rgb.hsl = function(rgb) {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const delta = max - min;
  let h;
  let s;
  if (max === min) {
    h = 0;
  } else if (r === max) {
    h = (g - b) / delta;
  } else if (g === max) {
    h = 2 + (b - r) / delta;
  } else if (b === max) {
    h = 4 + (r - g) / delta;
  }
  h = Math.min(h * 60, 360);
  if (h < 0) {
    h += 360;
  }
  const l = (min + max) / 2;
  if (max === min) {
    s = 0;
  } else if (l <= 0.5) {
    s = delta / (max + min);
  } else {
    s = delta / (2 - max - min);
  }
  return [h, s * 100, l * 100];
};
convert$1$1.rgb.hsv = function(rgb) {
  let rdif;
  let gdif;
  let bdif;
  let h;
  let s;
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const v = Math.max(r, g, b);
  const diff = v - Math.min(r, g, b);
  const diffc = function(c) {
    return (v - c) / 6 / diff + 1 / 2;
  };
  if (diff === 0) {
    h = 0;
    s = 0;
  } else {
    s = diff / v;
    rdif = diffc(r);
    gdif = diffc(g);
    bdif = diffc(b);
    if (r === v) {
      h = bdif - gdif;
    } else if (g === v) {
      h = 1 / 3 + rdif - bdif;
    } else if (b === v) {
      h = 2 / 3 + gdif - rdif;
    }
    if (h < 0) {
      h += 1;
    } else if (h > 1) {
      h -= 1;
    }
  }
  return [
    h * 360,
    s * 100,
    v * 100
  ];
};
convert$1$1.rgb.hwb = function(rgb) {
  const r = rgb[0];
  const g = rgb[1];
  let b = rgb[2];
  const h = convert$1$1.rgb.hsl(rgb)[0];
  const w = 1 / 255 * Math.min(r, Math.min(g, b));
  b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
  return [h, w * 100, b * 100];
};
convert$1$1.rgb.cmyk = function(rgb) {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const k = Math.min(1 - r, 1 - g, 1 - b);
  const c = (1 - r - k) / (1 - k) || 0;
  const m = (1 - g - k) / (1 - k) || 0;
  const y = (1 - b - k) / (1 - k) || 0;
  return [c * 100, m * 100, y * 100, k * 100];
};
function comparativeDistance$1(x, y) {
  return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
}
convert$1$1.rgb.keyword = function(rgb) {
  const reversed = reverseKeywords$1[rgb];
  if (reversed) {
    return reversed;
  }
  let currentClosestDistance = Infinity;
  let currentClosestKeyword;
  for (const keyword of Object.keys(colorName$2)) {
    const value = colorName$2[keyword];
    const distance = comparativeDistance$1(rgb, value);
    if (distance < currentClosestDistance) {
      currentClosestDistance = distance;
      currentClosestKeyword = keyword;
    }
  }
  return currentClosestKeyword;
};
convert$1$1.keyword.rgb = function(keyword) {
  return colorName$2[keyword];
};
convert$1$1.rgb.xyz = function(rgb) {
  let r = rgb[0] / 255;
  let g = rgb[1] / 255;
  let b = rgb[2] / 255;
  r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
  g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
  b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
  const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
  const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
  const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
  return [x * 100, y * 100, z * 100];
};
convert$1$1.rgb.lab = function(rgb) {
  const xyz = convert$1$1.rgb.xyz(rgb);
  let x = xyz[0];
  let y = xyz[1];
  let z = xyz[2];
  x /= 95.047;
  y /= 100;
  z /= 108.883;
  x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
  y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
  z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
  const l = 116 * y - 16;
  const a = 500 * (x - y);
  const b = 200 * (y - z);
  return [l, a, b];
};
convert$1$1.hsl.rgb = function(hsl) {
  const h = hsl[0] / 360;
  const s = hsl[1] / 100;
  const l = hsl[2] / 100;
  let t2;
  let t3;
  let val;
  if (s === 0) {
    val = l * 255;
    return [val, val, val];
  }
  if (l < 0.5) {
    t2 = l * (1 + s);
  } else {
    t2 = l + s - l * s;
  }
  const t1 = 2 * l - t2;
  const rgb = [0, 0, 0];
  for (let i = 0; i < 3; i++) {
    t3 = h + 1 / 3 * -(i - 1);
    if (t3 < 0) {
      t3++;
    }
    if (t3 > 1) {
      t3--;
    }
    if (6 * t3 < 1) {
      val = t1 + (t2 - t1) * 6 * t3;
    } else if (2 * t3 < 1) {
      val = t2;
    } else if (3 * t3 < 2) {
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    } else {
      val = t1;
    }
    rgb[i] = val * 255;
  }
  return rgb;
};
convert$1$1.hsl.hsv = function(hsl) {
  const h = hsl[0];
  let s = hsl[1] / 100;
  let l = hsl[2] / 100;
  let smin = s;
  const lmin = Math.max(l, 0.01);
  l *= 2;
  s *= l <= 1 ? l : 2 - l;
  smin *= lmin <= 1 ? lmin : 2 - lmin;
  const v = (l + s) / 2;
  const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
  return [h, sv * 100, v * 100];
};
convert$1$1.hsv.rgb = function(hsv) {
  const h = hsv[0] / 60;
  const s = hsv[1] / 100;
  let v = hsv[2] / 100;
  const hi = Math.floor(h) % 6;
  const f = h - Math.floor(h);
  const p = 255 * v * (1 - s);
  const q = 255 * v * (1 - s * f);
  const t = 255 * v * (1 - s * (1 - f));
  v *= 255;
  switch (hi) {
    case 0:
      return [v, t, p];
    case 1:
      return [q, v, p];
    case 2:
      return [p, v, t];
    case 3:
      return [p, q, v];
    case 4:
      return [t, p, v];
    case 5:
      return [v, p, q];
  }
};
convert$1$1.hsv.hsl = function(hsv) {
  const h = hsv[0];
  const s = hsv[1] / 100;
  const v = hsv[2] / 100;
  const vmin = Math.max(v, 0.01);
  let sl;
  let l;
  l = (2 - s) * v;
  const lmin = (2 - s) * vmin;
  sl = s * vmin;
  sl /= lmin <= 1 ? lmin : 2 - lmin;
  sl = sl || 0;
  l /= 2;
  return [h, sl * 100, l * 100];
};
convert$1$1.hwb.rgb = function(hwb) {
  const h = hwb[0] / 360;
  let wh = hwb[1] / 100;
  let bl = hwb[2] / 100;
  const ratio = wh + bl;
  let f;
  if (ratio > 1) {
    wh /= ratio;
    bl /= ratio;
  }
  const i = Math.floor(6 * h);
  const v = 1 - bl;
  f = 6 * h - i;
  if ((i & 1) !== 0) {
    f = 1 - f;
  }
  const n = wh + f * (v - wh);
  let r;
  let g;
  let b;
  switch (i) {
    default:
    case 6:
    case 0:
      r = v;
      g = n;
      b = wh;
      break;
    case 1:
      r = n;
      g = v;
      b = wh;
      break;
    case 2:
      r = wh;
      g = v;
      b = n;
      break;
    case 3:
      r = wh;
      g = n;
      b = v;
      break;
    case 4:
      r = n;
      g = wh;
      b = v;
      break;
    case 5:
      r = v;
      g = wh;
      b = n;
      break;
  }
  return [r * 255, g * 255, b * 255];
};
convert$1$1.cmyk.rgb = function(cmyk) {
  const c = cmyk[0] / 100;
  const m = cmyk[1] / 100;
  const y = cmyk[2] / 100;
  const k = cmyk[3] / 100;
  const r = 1 - Math.min(1, c * (1 - k) + k);
  const g = 1 - Math.min(1, m * (1 - k) + k);
  const b = 1 - Math.min(1, y * (1 - k) + k);
  return [r * 255, g * 255, b * 255];
};
convert$1$1.xyz.rgb = function(xyz) {
  const x = xyz[0] / 100;
  const y = xyz[1] / 100;
  const z = xyz[2] / 100;
  let r;
  let g;
  let b;
  r = x * 3.2406 + y * -1.5372 + z * -0.4986;
  g = x * -0.9689 + y * 1.8758 + z * 0.0415;
  b = x * 0.0557 + y * -0.204 + z * 1.057;
  r = r > 31308e-7 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92;
  g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92;
  b = b > 31308e-7 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92;
  r = Math.min(Math.max(0, r), 1);
  g = Math.min(Math.max(0, g), 1);
  b = Math.min(Math.max(0, b), 1);
  return [r * 255, g * 255, b * 255];
};
convert$1$1.xyz.lab = function(xyz) {
  let x = xyz[0];
  let y = xyz[1];
  let z = xyz[2];
  x /= 95.047;
  y /= 100;
  z /= 108.883;
  x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
  y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
  z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
  const l = 116 * y - 16;
  const a = 500 * (x - y);
  const b = 200 * (y - z);
  return [l, a, b];
};
convert$1$1.lab.xyz = function(lab) {
  const l = lab[0];
  const a = lab[1];
  const b = lab[2];
  let x;
  let y;
  let z;
  y = (l + 16) / 116;
  x = a / 500 + y;
  z = y - b / 200;
  const y2 = y ** 3;
  const x2 = x ** 3;
  const z2 = z ** 3;
  y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
  x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
  z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
  x *= 95.047;
  y *= 100;
  z *= 108.883;
  return [x, y, z];
};
convert$1$1.lab.lch = function(lab) {
  const l = lab[0];
  const a = lab[1];
  const b = lab[2];
  let h;
  const hr = Math.atan2(b, a);
  h = hr * 360 / 2 / Math.PI;
  if (h < 0) {
    h += 360;
  }
  const c = Math.sqrt(a * a + b * b);
  return [l, c, h];
};
convert$1$1.lch.lab = function(lch) {
  const l = lch[0];
  const c = lch[1];
  const h = lch[2];
  const hr = h / 360 * 2 * Math.PI;
  const a = c * Math.cos(hr);
  const b = c * Math.sin(hr);
  return [l, a, b];
};
convert$1$1.rgb.ansi16 = function(args, saturation = null) {
  const [r, g, b] = args;
  let value = saturation === null ? convert$1$1.rgb.hsv(args)[2] : saturation;
  value = Math.round(value / 50);
  if (value === 0) {
    return 30;
  }
  let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
  if (value === 2) {
    ansi += 60;
  }
  return ansi;
};
convert$1$1.hsv.ansi16 = function(args) {
  return convert$1$1.rgb.ansi16(convert$1$1.hsv.rgb(args), args[2]);
};
convert$1$1.rgb.ansi256 = function(args) {
  const r = args[0];
  const g = args[1];
  const b = args[2];
  if (r === g && g === b) {
    if (r < 8) {
      return 16;
    }
    if (r > 248) {
      return 231;
    }
    return Math.round((r - 8) / 247 * 24) + 232;
  }
  const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
  return ansi;
};
convert$1$1.ansi16.rgb = function(args) {
  let color2 = args % 10;
  if (color2 === 0 || color2 === 7) {
    if (args > 50) {
      color2 += 3.5;
    }
    color2 = color2 / 10.5 * 255;
    return [color2, color2, color2];
  }
  const mult = (~~(args > 50) + 1) * 0.5;
  const r = (color2 & 1) * mult * 255;
  const g = (color2 >> 1 & 1) * mult * 255;
  const b = (color2 >> 2 & 1) * mult * 255;
  return [r, g, b];
};
convert$1$1.ansi256.rgb = function(args) {
  if (args >= 232) {
    const c = (args - 232) * 10 + 8;
    return [c, c, c];
  }
  args -= 16;
  let rem;
  const r = Math.floor(args / 36) / 5 * 255;
  const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
  const b = rem % 6 / 5 * 255;
  return [r, g, b];
};
convert$1$1.rgb.hex = function(args) {
  const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
  const string = integer.toString(16).toUpperCase();
  return "000000".substring(string.length) + string;
};
convert$1$1.hex.rgb = function(args) {
  const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (!match) {
    return [0, 0, 0];
  }
  let colorString2 = match[0];
  if (match[0].length === 3) {
    colorString2 = colorString2.split("").map((char) => {
      return char + char;
    }).join("");
  }
  const integer = parseInt(colorString2, 16);
  const r = integer >> 16 & 255;
  const g = integer >> 8 & 255;
  const b = integer & 255;
  return [r, g, b];
};
convert$1$1.rgb.hcg = function(rgb) {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const max = Math.max(Math.max(r, g), b);
  const min = Math.min(Math.min(r, g), b);
  const chroma = max - min;
  let grayscale;
  let hue;
  if (chroma < 1) {
    grayscale = min / (1 - chroma);
  } else {
    grayscale = 0;
  }
  if (chroma <= 0) {
    hue = 0;
  } else if (max === r) {
    hue = (g - b) / chroma % 6;
  } else if (max === g) {
    hue = 2 + (b - r) / chroma;
  } else {
    hue = 4 + (r - g) / chroma;
  }
  hue /= 6;
  hue %= 1;
  return [hue * 360, chroma * 100, grayscale * 100];
};
convert$1$1.hsl.hcg = function(hsl) {
  const s = hsl[1] / 100;
  const l = hsl[2] / 100;
  const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
  let f = 0;
  if (c < 1) {
    f = (l - 0.5 * c) / (1 - c);
  }
  return [hsl[0], c * 100, f * 100];
};
convert$1$1.hsv.hcg = function(hsv) {
  const s = hsv[1] / 100;
  const v = hsv[2] / 100;
  const c = s * v;
  let f = 0;
  if (c < 1) {
    f = (v - c) / (1 - c);
  }
  return [hsv[0], c * 100, f * 100];
};
convert$1$1.hcg.rgb = function(hcg) {
  const h = hcg[0] / 360;
  const c = hcg[1] / 100;
  const g = hcg[2] / 100;
  if (c === 0) {
    return [g * 255, g * 255, g * 255];
  }
  const pure = [0, 0, 0];
  const hi = h % 1 * 6;
  const v = hi % 1;
  const w = 1 - v;
  let mg = 0;
  switch (Math.floor(hi)) {
    case 0:
      pure[0] = 1;
      pure[1] = v;
      pure[2] = 0;
      break;
    case 1:
      pure[0] = w;
      pure[1] = 1;
      pure[2] = 0;
      break;
    case 2:
      pure[0] = 0;
      pure[1] = 1;
      pure[2] = v;
      break;
    case 3:
      pure[0] = 0;
      pure[1] = w;
      pure[2] = 1;
      break;
    case 4:
      pure[0] = v;
      pure[1] = 0;
      pure[2] = 1;
      break;
    default:
      pure[0] = 1;
      pure[1] = 0;
      pure[2] = w;
  }
  mg = (1 - c) * g;
  return [
    (c * pure[0] + mg) * 255,
    (c * pure[1] + mg) * 255,
    (c * pure[2] + mg) * 255
  ];
};
convert$1$1.hcg.hsv = function(hcg) {
  const c = hcg[1] / 100;
  const g = hcg[2] / 100;
  const v = c + g * (1 - c);
  let f = 0;
  if (v > 0) {
    f = c / v;
  }
  return [hcg[0], f * 100, v * 100];
};
convert$1$1.hcg.hsl = function(hcg) {
  const c = hcg[1] / 100;
  const g = hcg[2] / 100;
  const l = g * (1 - c) + 0.5 * c;
  let s = 0;
  if (l > 0 && l < 0.5) {
    s = c / (2 * l);
  } else if (l >= 0.5 && l < 1) {
    s = c / (2 * (1 - l));
  }
  return [hcg[0], s * 100, l * 100];
};
convert$1$1.hcg.hwb = function(hcg) {
  const c = hcg[1] / 100;
  const g = hcg[2] / 100;
  const v = c + g * (1 - c);
  return [hcg[0], (v - c) * 100, (1 - v) * 100];
};
convert$1$1.hwb.hcg = function(hwb) {
  const w = hwb[1] / 100;
  const b = hwb[2] / 100;
  const v = 1 - b;
  const c = v - w;
  let g = 0;
  if (c < 1) {
    g = (v - c) / (1 - c);
  }
  return [hwb[0], c * 100, g * 100];
};
convert$1$1.apple.rgb = function(apple) {
  return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
};
convert$1$1.rgb.apple = function(rgb) {
  return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
};
convert$1$1.gray.rgb = function(args) {
  return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};
convert$1$1.gray.hsl = function(args) {
  return [0, 0, args[0]];
};
convert$1$1.gray.hsv = convert$1$1.gray.hsl;
convert$1$1.gray.hwb = function(gray) {
  return [0, 100, gray[0]];
};
convert$1$1.gray.cmyk = function(gray) {
  return [0, 0, 0, gray[0]];
};
convert$1$1.gray.lab = function(gray) {
  return [gray[0], 0, 0];
};
convert$1$1.gray.hex = function(gray) {
  const val = Math.round(gray[0] / 100 * 255) & 255;
  const integer = (val << 16) + (val << 8) + val;
  const string = integer.toString(16).toUpperCase();
  return "000000".substring(string.length) + string;
};
convert$1$1.rgb.gray = function(rgb) {
  const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
  return [val / 255 * 100];
};
function buildGraph$1() {
  const graph = {};
  const models2 = Object.keys(conversions$3);
  for (let len = models2.length, i = 0; i < len; i++) {
    graph[models2[i]] = {
      distance: -1,
      parent: null
    };
  }
  return graph;
}
function deriveBFS$1(fromModel) {
  const graph = buildGraph$1();
  const queue = [fromModel];
  graph[fromModel].distance = 0;
  while (queue.length) {
    const current = queue.pop();
    const adjacents = Object.keys(conversions$3[current]);
    for (let len = adjacents.length, i = 0; i < len; i++) {
      const adjacent = adjacents[i];
      const node = graph[adjacent];
      if (node.distance === -1) {
        node.distance = graph[current].distance + 1;
        node.parent = current;
        queue.unshift(adjacent);
      }
    }
  }
  return graph;
}
function link$1(from, to) {
  return function(args) {
    return to(from(args));
  };
}
function wrapConversion$1(toModel, graph) {
  const path = [graph[toModel].parent, toModel];
  let fn = conversions$3[graph[toModel].parent][toModel];
  let cur = graph[toModel].parent;
  while (graph[cur].parent) {
    path.unshift(graph[cur].parent);
    fn = link$1(conversions$3[graph[cur].parent][cur], fn);
    cur = graph[cur].parent;
  }
  fn.conversion = path;
  return fn;
}
var route$2 = function(fromModel) {
  const graph = deriveBFS$1(fromModel);
  const conversion = {};
  const models2 = Object.keys(graph);
  for (let len = models2.length, i = 0; i < len; i++) {
    const toModel = models2[i];
    const node = graph[toModel];
    if (node.parent === null) {
      continue;
    }
    conversion[toModel] = wrapConversion$1(toModel, graph);
  }
  return conversion;
};
const convert$3 = {};
const models$1 = Object.keys(conversions$3);
function wrapRaw$1(fn) {
  const wrappedFn = function(...args) {
    const arg0 = args[0];
    if (arg0 === void 0 || arg0 === null) {
      return arg0;
    }
    if (arg0.length > 1) {
      args = arg0;
    }
    return fn(args);
  };
  if ("conversion" in fn) {
    wrappedFn.conversion = fn.conversion;
  }
  return wrappedFn;
}
function wrapRounded$1(fn) {
  const wrappedFn = function(...args) {
    const arg0 = args[0];
    if (arg0 === void 0 || arg0 === null) {
      return arg0;
    }
    if (arg0.length > 1) {
      args = arg0;
    }
    const result = fn(args);
    if (typeof result === "object") {
      for (let len = result.length, i = 0; i < len; i++) {
        result[i] = Math.round(result[i]);
      }
    }
    return result;
  };
  if ("conversion" in fn) {
    wrappedFn.conversion = fn.conversion;
  }
  return wrappedFn;
}
models$1.forEach((fromModel) => {
  convert$3[fromModel] = {};
  Object.defineProperty(convert$3[fromModel], "channels", { value: conversions$3[fromModel].channels });
  Object.defineProperty(convert$3[fromModel], "labels", { value: conversions$3[fromModel].labels });
  const routes = route$2(fromModel);
  const routeModels = Object.keys(routes);
  routeModels.forEach((toModel) => {
    const fn = routes[toModel];
    convert$3[fromModel][toModel] = wrapRounded$1(fn);
    convert$3[fromModel][toModel].raw = wrapRaw$1(fn);
  });
});
var colorConvert$1 = convert$3;
const skippedModels$1 = [
  "keyword",
  "gray",
  "hex"
];
const hashedModelKeys$1 = {};
for (const model of Object.keys(colorConvert$1)) {
  hashedModelKeys$1[[...colorConvert$1[model].labels].sort().join("")] = model;
}
const limiters$1 = {};
function Color$2(object, model) {
  if (!(this instanceof Color$2)) {
    return new Color$2(object, model);
  }
  if (model && model in skippedModels$1) {
    model = null;
  }
  if (model && !(model in colorConvert$1)) {
    throw new Error("Unknown model: " + model);
  }
  let i;
  let channels;
  if (object == null) {
    this.model = "rgb";
    this.color = [0, 0, 0];
    this.valpha = 1;
  } else if (object instanceof Color$2) {
    this.model = object.model;
    this.color = [...object.color];
    this.valpha = object.valpha;
  } else if (typeof object === "string") {
    const result = colorString$2.get(object);
    if (result === null) {
      throw new Error("Unable to parse color from string: " + object);
    }
    this.model = result.model;
    channels = colorConvert$1[this.model].channels;
    this.color = result.value.slice(0, channels);
    this.valpha = typeof result.value[channels] === "number" ? result.value[channels] : 1;
  } else if (object.length > 0) {
    this.model = model || "rgb";
    channels = colorConvert$1[this.model].channels;
    const newArray = Array.prototype.slice.call(object, 0, channels);
    this.color = zeroArray$1(newArray, channels);
    this.valpha = typeof object[channels] === "number" ? object[channels] : 1;
  } else if (typeof object === "number") {
    this.model = "rgb";
    this.color = [
      object >> 16 & 255,
      object >> 8 & 255,
      object & 255
    ];
    this.valpha = 1;
  } else {
    this.valpha = 1;
    const keys = Object.keys(object);
    if ("alpha" in object) {
      keys.splice(keys.indexOf("alpha"), 1);
      this.valpha = typeof object.alpha === "number" ? object.alpha : 0;
    }
    const hashedKeys = keys.sort().join("");
    if (!(hashedKeys in hashedModelKeys$1)) {
      throw new Error("Unable to parse color from object: " + JSON.stringify(object));
    }
    this.model = hashedModelKeys$1[hashedKeys];
    const { labels } = colorConvert$1[this.model];
    const color2 = [];
    for (i = 0; i < labels.length; i++) {
      color2.push(object[labels[i]]);
    }
    this.color = zeroArray$1(color2);
  }
  if (limiters$1[this.model]) {
    channels = colorConvert$1[this.model].channels;
    for (i = 0; i < channels; i++) {
      const limit = limiters$1[this.model][i];
      if (limit) {
        this.color[i] = limit(this.color[i]);
      }
    }
  }
  this.valpha = Math.max(0, Math.min(1, this.valpha));
  if (Object.freeze) {
    Object.freeze(this);
  }
}
Color$2.prototype = {
  toString() {
    return this.string();
  },
  toJSON() {
    return this[this.model]();
  },
  string(places) {
    let self = this.model in colorString$2.to ? this : this.rgb();
    self = self.round(typeof places === "number" ? places : 1);
    const args = self.valpha === 1 ? self.color : [...self.color, this.valpha];
    return colorString$2.to[self.model](args);
  },
  percentString(places) {
    const self = this.rgb().round(typeof places === "number" ? places : 1);
    const args = self.valpha === 1 ? self.color : [...self.color, this.valpha];
    return colorString$2.to.rgb.percent(args);
  },
  array() {
    return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
  },
  object() {
    const result = {};
    const { channels } = colorConvert$1[this.model];
    const { labels } = colorConvert$1[this.model];
    for (let i = 0; i < channels; i++) {
      result[labels[i]] = this.color[i];
    }
    if (this.valpha !== 1) {
      result.alpha = this.valpha;
    }
    return result;
  },
  unitArray() {
    const rgb = this.rgb().color;
    rgb[0] /= 255;
    rgb[1] /= 255;
    rgb[2] /= 255;
    if (this.valpha !== 1) {
      rgb.push(this.valpha);
    }
    return rgb;
  },
  unitObject() {
    const rgb = this.rgb().object();
    rgb.r /= 255;
    rgb.g /= 255;
    rgb.b /= 255;
    if (this.valpha !== 1) {
      rgb.alpha = this.valpha;
    }
    return rgb;
  },
  round(places) {
    places = Math.max(places || 0, 0);
    return new Color$2([...this.color.map(roundToPlace$1(places)), this.valpha], this.model);
  },
  alpha(value) {
    if (value !== void 0) {
      return new Color$2([...this.color, Math.max(0, Math.min(1, value))], this.model);
    }
    return this.valpha;
  },
  red: getset$1("rgb", 0, maxfn$1(255)),
  green: getset$1("rgb", 1, maxfn$1(255)),
  blue: getset$1("rgb", 2, maxfn$1(255)),
  hue: getset$1(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (value) => (value % 360 + 360) % 360),
  saturationl: getset$1("hsl", 1, maxfn$1(100)),
  lightness: getset$1("hsl", 2, maxfn$1(100)),
  saturationv: getset$1("hsv", 1, maxfn$1(100)),
  value: getset$1("hsv", 2, maxfn$1(100)),
  chroma: getset$1("hcg", 1, maxfn$1(100)),
  gray: getset$1("hcg", 2, maxfn$1(100)),
  white: getset$1("hwb", 1, maxfn$1(100)),
  wblack: getset$1("hwb", 2, maxfn$1(100)),
  cyan: getset$1("cmyk", 0, maxfn$1(100)),
  magenta: getset$1("cmyk", 1, maxfn$1(100)),
  yellow: getset$1("cmyk", 2, maxfn$1(100)),
  black: getset$1("cmyk", 3, maxfn$1(100)),
  x: getset$1("xyz", 0, maxfn$1(95.047)),
  y: getset$1("xyz", 1, maxfn$1(100)),
  z: getset$1("xyz", 2, maxfn$1(108.833)),
  l: getset$1("lab", 0, maxfn$1(100)),
  a: getset$1("lab", 1),
  b: getset$1("lab", 2),
  keyword(value) {
    if (value !== void 0) {
      return new Color$2(value);
    }
    return colorConvert$1[this.model].keyword(this.color);
  },
  hex(value) {
    if (value !== void 0) {
      return new Color$2(value);
    }
    return colorString$2.to.hex(this.rgb().round().color);
  },
  hexa(value) {
    if (value !== void 0) {
      return new Color$2(value);
    }
    const rgbArray = this.rgb().round().color;
    let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
    if (alphaHex.length === 1) {
      alphaHex = "0" + alphaHex;
    }
    return colorString$2.to.hex(rgbArray) + alphaHex;
  },
  rgbNumber() {
    const rgb = this.rgb().color;
    return (rgb[0] & 255) << 16 | (rgb[1] & 255) << 8 | rgb[2] & 255;
  },
  luminosity() {
    const rgb = this.rgb().color;
    const lum = [];
    for (const [i, element] of rgb.entries()) {
      const chan = element / 255;
      lum[i] = chan <= 0.04045 ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
    }
    return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
  },
  contrast(color2) {
    const lum1 = this.luminosity();
    const lum2 = color2.luminosity();
    if (lum1 > lum2) {
      return (lum1 + 0.05) / (lum2 + 0.05);
    }
    return (lum2 + 0.05) / (lum1 + 0.05);
  },
  level(color2) {
    const contrastRatio = this.contrast(color2);
    if (contrastRatio >= 7) {
      return "AAA";
    }
    return contrastRatio >= 4.5 ? "AA" : "";
  },
  isDark() {
    const rgb = this.rgb().color;
    const yiq = (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 1e4;
    return yiq < 128;
  },
  isLight() {
    return !this.isDark();
  },
  negate() {
    const rgb = this.rgb();
    for (let i = 0; i < 3; i++) {
      rgb.color[i] = 255 - rgb.color[i];
    }
    return rgb;
  },
  lighten(ratio) {
    const hsl = this.hsl();
    hsl.color[2] += hsl.color[2] * ratio;
    return hsl;
  },
  darken(ratio) {
    const hsl = this.hsl();
    hsl.color[2] -= hsl.color[2] * ratio;
    return hsl;
  },
  saturate(ratio) {
    const hsl = this.hsl();
    hsl.color[1] += hsl.color[1] * ratio;
    return hsl;
  },
  desaturate(ratio) {
    const hsl = this.hsl();
    hsl.color[1] -= hsl.color[1] * ratio;
    return hsl;
  },
  whiten(ratio) {
    const hwb = this.hwb();
    hwb.color[1] += hwb.color[1] * ratio;
    return hwb;
  },
  blacken(ratio) {
    const hwb = this.hwb();
    hwb.color[2] += hwb.color[2] * ratio;
    return hwb;
  },
  grayscale() {
    const rgb = this.rgb().color;
    const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
    return Color$2.rgb(value, value, value);
  },
  fade(ratio) {
    return this.alpha(this.valpha - this.valpha * ratio);
  },
  opaquer(ratio) {
    return this.alpha(this.valpha + this.valpha * ratio);
  },
  rotate(degrees) {
    const hsl = this.hsl();
    let hue = hsl.color[0];
    hue = (hue + degrees) % 360;
    hue = hue < 0 ? 360 + hue : hue;
    hsl.color[0] = hue;
    return hsl;
  },
  mix(mixinColor, weight) {
    if (!mixinColor || !mixinColor.rgb) {
      throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
    }
    const color1 = mixinColor.rgb();
    const color2 = this.rgb();
    const p = weight === void 0 ? 0.5 : weight;
    const w = 2 * p - 1;
    const a = color1.alpha() - color2.alpha();
    const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
    const w2 = 1 - w1;
    return Color$2.rgb(
      w1 * color1.red() + w2 * color2.red(),
      w1 * color1.green() + w2 * color2.green(),
      w1 * color1.blue() + w2 * color2.blue(),
      color1.alpha() * p + color2.alpha() * (1 - p)
    );
  }
};
for (const model of Object.keys(colorConvert$1)) {
  if (skippedModels$1.includes(model)) {
    continue;
  }
  const { channels } = colorConvert$1[model];
  Color$2.prototype[model] = function(...args) {
    if (this.model === model) {
      return new Color$2(this);
    }
    if (args.length > 0) {
      return new Color$2(args, model);
    }
    return new Color$2([...assertArray$1(colorConvert$1[this.model][model].raw(this.color)), this.valpha], model);
  };
  Color$2[model] = function(...args) {
    let color2 = args[0];
    if (typeof color2 === "number") {
      color2 = zeroArray$1(args, channels);
    }
    return new Color$2(color2, model);
  };
}
function roundTo$1(number, places) {
  return Number(number.toFixed(places));
}
function roundToPlace$1(places) {
  return function(number) {
    return roundTo$1(number, places);
  };
}
function getset$1(model, channel, modifier) {
  model = Array.isArray(model) ? model : [model];
  for (const m of model) {
    (limiters$1[m] || (limiters$1[m] = []))[channel] = modifier;
  }
  model = model[0];
  return function(value) {
    let result;
    if (value !== void 0) {
      if (modifier) {
        value = modifier(value);
      }
      result = this[model]();
      result.color[channel] = value;
      return result;
    }
    result = this[model]().color[channel];
    if (modifier) {
      result = modifier(result);
    }
    return result;
  };
}
function maxfn$1(max) {
  return function(v) {
    return Math.max(0, Math.min(max, v));
  };
}
function assertArray$1(value) {
  return Array.isArray(value) ? value : [value];
}
function zeroArray$1(array, length) {
  for (let i = 0; i < length; i++) {
    if (typeof array[i] !== "number") {
      array[i] = 0;
    }
  }
  return array;
}
var color$1 = Color$2;
var Color$1$1 = color$1;
const getRgbStr = (color2) => {
  return Color$1$1(color2).rgb().round().array().join(",");
};
const formats = ["hex", "rgb", "hsl"];
function getFormat(format) {
  if (!format || formats.indexOf(format) < 0) {
    return "hex";
  }
  return format;
}
const getColorString = (color2, format) => {
  const innerFormat = getFormat(format);
  if (innerFormat === "hex") {
    return color2[innerFormat]();
  }
  return color2[innerFormat]().round().string();
};
const colorPalette$1 = (originColor, i, format) => {
  const color2 = Color$1$1(originColor);
  const h = color2.hue();
  const s = color2.saturationv();
  const v = color2.value();
  const hueStep = 2;
  const maxSaturationStep = 100;
  const minSaturationStep = 9;
  const maxValue = 100;
  const minValue = 30;
  function getNewHue(isLight2, i2) {
    let hue;
    if (h >= 60 && h <= 240) {
      hue = isLight2 ? h - hueStep * i2 : h + hueStep * i2;
    } else {
      hue = isLight2 ? h + hueStep * i2 : h - hueStep * i2;
    }
    if (hue < 0) {
      hue += 360;
    } else if (hue >= 360) {
      hue -= 360;
    }
    return Math.round(hue);
  }
  function getNewSaturation(isLight2, i2) {
    let newSaturation;
    if (isLight2) {
      newSaturation = s <= minSaturationStep ? s : s - (s - minSaturationStep) / 5 * i2;
    } else {
      newSaturation = s + (maxSaturationStep - s) / 4 * i2;
    }
    return newSaturation;
  }
  function getNewValue(isLight2, i2) {
    return isLight2 ? v + (maxValue - v) / 5 * i2 : v <= minValue ? v : v - (v - minValue) / 4 * i2;
  }
  const isLight = i < 6;
  const index2 = isLight ? 6 - i : i - 6;
  const retColor = i === 6 ? color2 : Color$1$1({
    h: getNewHue(isLight, index2),
    s: getNewSaturation(isLight, index2),
    v: getNewValue(isLight, index2)
  });
  return getColorString(retColor, format);
};
const colorPaletteDark = (originColor, i, format) => {
  const lightColor = Color$1$1(colorPalette$1(originColor, 10 - i + 1, null));
  const originBaseColor = Color$1$1(originColor);
  const originBaseHue = originBaseColor.hue();
  const originBaseSaturation = originBaseColor.saturationv();
  const baseColor = Color$1$1({
    h: originBaseColor.hue(),
    s: getNewSaturation(6),
    v: originBaseColor.value()
  });
  const baseSaturation = baseColor.saturationv();
  const step = Math.ceil((baseSaturation - 9) / 4);
  const step1to5 = Math.ceil((100 - baseSaturation) / 5);
  function getNewSaturation(_index) {
    if (_index < 6) {
      return baseSaturation + (6 - _index) * step1to5;
    }
    if (_index === 6) {
      if (originBaseHue >= 0 && originBaseHue < 50) {
        return originBaseSaturation - 15;
      }
      if (originBaseHue >= 50 && originBaseHue < 191) {
        return originBaseSaturation - 20;
      }
      if (originBaseHue >= 191 && originBaseHue <= 360) {
        return originBaseSaturation - 15;
      }
    }
    return baseSaturation - step * (_index - 6);
  }
  const retColor = Color$1$1({
    h: lightColor.hue(),
    s: getNewSaturation(i),
    v: lightColor.value()
  });
  return getColorString(retColor, format);
};
const generate = (color2, options = {
  dark: false,
  list: false,
  index: 6,
  format: "hex"
}) => {
  const { dark, list, index: index2 = 6, format = "hex" } = options;
  if (list) {
    const list2 = [];
    for (let i = 1; i <= 10; i++) {
      const func = dark ? colorPaletteDark : colorPalette$1;
      list2.push(func(color2, i, format));
    }
    return list2;
  }
  return dark ? colorPaletteDark(color2, index2, format) : colorPalette$1(color2, index2, format);
};
const colorList = {
  red: "#F53F3F",
  orangered: "#F77234",
  orange: "#FF7D00",
  gold: "#F7BA1E",
  yellow: "#FADC19",
  lime: "#9FDB1D",
  green: "#00BC79",
  cyan: "#14C9C9",
  blue: "#3491FA",
  arcoblue: "#165DFF",
  purple: "#722ED1",
  pinkpurple: "#D91AD9",
  magenta: "#F5319D"
};
const getPresetColors = () => {
  const presetColors = [];
  Object.keys(colorList).forEach((key) => {
    presetColors[key] = [];
    presetColors[key]["light"] = generate(colorList[key], {
      list: true,
      dark: false,
      index: 0
    });
    presetColors[key]["dark"] = generate(colorList[key], {
      list: true,
      dark: true,
      index: 0
    });
    presetColors[key]["primary"] = colorList[key];
  });
  presetColors["gray"] = [];
  presetColors["gray"]["light"] = [
    "#f7f8fa",
    "#f2f3f5",
    "#e5e6eb",
    "#c9cdd4",
    "#a9aeb8",
    "#86909c",
    "#6b7785",
    "#4e5969",
    "#272e3b",
    "#1d2129"
  ];
  presetColors["gray"]["dark"] = [
    "#17171a",
    "#2e2e30",
    "#484849",
    "#5f5f60",
    "#78787a",
    "#929293",
    "#ababac",
    "#c5c5c5",
    "#dfdfdf",
    "#f6f6f6"
  ];
  presetColors["gray"]["primary"] = presetColors["gray"]["light"][6];
  return presetColors;
};
const colorBuilder = {
  getPresetColors,
  generate,
  getRgbStr,
  getColorString
};
var colorString$1 = { exports: {} };
var colorName = {
  "aliceblue": [240, 248, 255],
  "antiquewhite": [250, 235, 215],
  "aqua": [0, 255, 255],
  "aquamarine": [127, 255, 212],
  "azure": [240, 255, 255],
  "beige": [245, 245, 220],
  "bisque": [255, 228, 196],
  "black": [0, 0, 0],
  "blanchedalmond": [255, 235, 205],
  "blue": [0, 0, 255],
  "blueviolet": [138, 43, 226],
  "brown": [165, 42, 42],
  "burlywood": [222, 184, 135],
  "cadetblue": [95, 158, 160],
  "chartreuse": [127, 255, 0],
  "chocolate": [210, 105, 30],
  "coral": [255, 127, 80],
  "cornflowerblue": [100, 149, 237],
  "cornsilk": [255, 248, 220],
  "crimson": [220, 20, 60],
  "cyan": [0, 255, 255],
  "darkblue": [0, 0, 139],
  "darkcyan": [0, 139, 139],
  "darkgoldenrod": [184, 134, 11],
  "darkgray": [169, 169, 169],
  "darkgreen": [0, 100, 0],
  "darkgrey": [169, 169, 169],
  "darkkhaki": [189, 183, 107],
  "darkmagenta": [139, 0, 139],
  "darkolivegreen": [85, 107, 47],
  "darkorange": [255, 140, 0],
  "darkorchid": [153, 50, 204],
  "darkred": [139, 0, 0],
  "darksalmon": [233, 150, 122],
  "darkseagreen": [143, 188, 143],
  "darkslateblue": [72, 61, 139],
  "darkslategray": [47, 79, 79],
  "darkslategrey": [47, 79, 79],
  "darkturquoise": [0, 206, 209],
  "darkviolet": [148, 0, 211],
  "deeppink": [255, 20, 147],
  "deepskyblue": [0, 191, 255],
  "dimgray": [105, 105, 105],
  "dimgrey": [105, 105, 105],
  "dodgerblue": [30, 144, 255],
  "firebrick": [178, 34, 34],
  "floralwhite": [255, 250, 240],
  "forestgreen": [34, 139, 34],
  "fuchsia": [255, 0, 255],
  "gainsboro": [220, 220, 220],
  "ghostwhite": [248, 248, 255],
  "gold": [255, 215, 0],
  "goldenrod": [218, 165, 32],
  "gray": [128, 128, 128],
  "green": [0, 128, 0],
  "greenyellow": [173, 255, 47],
  "grey": [128, 128, 128],
  "honeydew": [240, 255, 240],
  "hotpink": [255, 105, 180],
  "indianred": [205, 92, 92],
  "indigo": [75, 0, 130],
  "ivory": [255, 255, 240],
  "khaki": [240, 230, 140],
  "lavender": [230, 230, 250],
  "lavenderblush": [255, 240, 245],
  "lawngreen": [124, 252, 0],
  "lemonchiffon": [255, 250, 205],
  "lightblue": [173, 216, 230],
  "lightcoral": [240, 128, 128],
  "lightcyan": [224, 255, 255],
  "lightgoldenrodyellow": [250, 250, 210],
  "lightgray": [211, 211, 211],
  "lightgreen": [144, 238, 144],
  "lightgrey": [211, 211, 211],
  "lightpink": [255, 182, 193],
  "lightsalmon": [255, 160, 122],
  "lightseagreen": [32, 178, 170],
  "lightskyblue": [135, 206, 250],
  "lightslategray": [119, 136, 153],
  "lightslategrey": [119, 136, 153],
  "lightsteelblue": [176, 196, 222],
  "lightyellow": [255, 255, 224],
  "lime": [0, 255, 0],
  "limegreen": [50, 205, 50],
  "linen": [250, 240, 230],
  "magenta": [255, 0, 255],
  "maroon": [128, 0, 0],
  "mediumaquamarine": [102, 205, 170],
  "mediumblue": [0, 0, 205],
  "mediumorchid": [186, 85, 211],
  "mediumpurple": [147, 112, 219],
  "mediumseagreen": [60, 179, 113],
  "mediumslateblue": [123, 104, 238],
  "mediumspringgreen": [0, 250, 154],
  "mediumturquoise": [72, 209, 204],
  "mediumvioletred": [199, 21, 133],
  "midnightblue": [25, 25, 112],
  "mintcream": [245, 255, 250],
  "mistyrose": [255, 228, 225],
  "moccasin": [255, 228, 181],
  "navajowhite": [255, 222, 173],
  "navy": [0, 0, 128],
  "oldlace": [253, 245, 230],
  "olive": [128, 128, 0],
  "olivedrab": [107, 142, 35],
  "orange": [255, 165, 0],
  "orangered": [255, 69, 0],
  "orchid": [218, 112, 214],
  "palegoldenrod": [238, 232, 170],
  "palegreen": [152, 251, 152],
  "paleturquoise": [175, 238, 238],
  "palevioletred": [219, 112, 147],
  "papayawhip": [255, 239, 213],
  "peachpuff": [255, 218, 185],
  "peru": [205, 133, 63],
  "pink": [255, 192, 203],
  "plum": [221, 160, 221],
  "powderblue": [176, 224, 230],
  "purple": [128, 0, 128],
  "rebeccapurple": [102, 51, 153],
  "red": [255, 0, 0],
  "rosybrown": [188, 143, 143],
  "royalblue": [65, 105, 225],
  "saddlebrown": [139, 69, 19],
  "salmon": [250, 128, 114],
  "sandybrown": [244, 164, 96],
  "seagreen": [46, 139, 87],
  "seashell": [255, 245, 238],
  "sienna": [160, 82, 45],
  "silver": [192, 192, 192],
  "skyblue": [135, 206, 235],
  "slateblue": [106, 90, 205],
  "slategray": [112, 128, 144],
  "slategrey": [112, 128, 144],
  "snow": [255, 250, 250],
  "springgreen": [0, 255, 127],
  "steelblue": [70, 130, 180],
  "tan": [210, 180, 140],
  "teal": [0, 128, 128],
  "thistle": [216, 191, 216],
  "tomato": [255, 99, 71],
  "turquoise": [64, 224, 208],
  "violet": [238, 130, 238],
  "wheat": [245, 222, 179],
  "white": [255, 255, 255],
  "whitesmoke": [245, 245, 245],
  "yellow": [255, 255, 0],
  "yellowgreen": [154, 205, 50]
};
var simpleSwizzle = { exports: {} };
var isArrayish$1 = function isArrayish3(obj) {
  if (!obj || typeof obj === "string") {
    return false;
  }
  return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== "String");
};
var isArrayish4 = isArrayish$1;
var concat = Array.prototype.concat;
var slice = Array.prototype.slice;
var swizzle$1 = simpleSwizzle.exports = function swizzle(args) {
  var results = [];
  for (var i = 0, len = args.length; i < len; i++) {
    var arg = args[i];
    if (isArrayish4(arg)) {
      results = concat.call(results, slice.call(arg));
    } else {
      results.push(arg);
    }
  }
  return results;
};
swizzle$1.wrap = function(fn) {
  return function() {
    return fn(swizzle$1(arguments));
  };
};
var colorNames = colorName;
var swizzle2 = simpleSwizzle.exports;
var hasOwnProperty = Object.hasOwnProperty;
var reverseNames = /* @__PURE__ */ Object.create(null);
for (var name in colorNames) {
  if (hasOwnProperty.call(colorNames, name)) {
    reverseNames[colorNames[name]] = name;
  }
}
var cs = colorString$1.exports = {
  to: {},
  get: {}
};
cs.get = function(string) {
  var prefix = string.substring(0, 3).toLowerCase();
  var val;
  var model;
  switch (prefix) {
    case "hsl":
      val = cs.get.hsl(string);
      model = "hsl";
      break;
    case "hwb":
      val = cs.get.hwb(string);
      model = "hwb";
      break;
    default:
      val = cs.get.rgb(string);
      model = "rgb";
      break;
  }
  if (!val) {
    return null;
  }
  return { model, value: val };
};
cs.get.rgb = function(string) {
  if (!string) {
    return null;
  }
  var abbr = /^#([a-f0-9]{3,4})$/i;
  var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
  var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
  var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
  var keyword = /^(\w+)$/;
  var rgb = [0, 0, 0, 1];
  var match;
  var i;
  var hexAlpha;
  if (match = string.match(hex)) {
    hexAlpha = match[2];
    match = match[1];
    for (i = 0; i < 3; i++) {
      var i2 = i * 2;
      rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
    }
    if (hexAlpha) {
      rgb[3] = parseInt(hexAlpha, 16) / 255;
    }
  } else if (match = string.match(abbr)) {
    match = match[1];
    hexAlpha = match[3];
    for (i = 0; i < 3; i++) {
      rgb[i] = parseInt(match[i] + match[i], 16);
    }
    if (hexAlpha) {
      rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
    }
  } else if (match = string.match(rgba)) {
    for (i = 0; i < 3; i++) {
      rgb[i] = parseInt(match[i + 1], 0);
    }
    if (match[4]) {
      if (match[5]) {
        rgb[3] = parseFloat(match[4]) * 0.01;
      } else {
        rgb[3] = parseFloat(match[4]);
      }
    }
  } else if (match = string.match(per)) {
    for (i = 0; i < 3; i++) {
      rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
    }
    if (match[4]) {
      if (match[5]) {
        rgb[3] = parseFloat(match[4]) * 0.01;
      } else {
        rgb[3] = parseFloat(match[4]);
      }
    }
  } else if (match = string.match(keyword)) {
    if (match[1] === "transparent") {
      return [0, 0, 0, 0];
    }
    if (!hasOwnProperty.call(colorNames, match[1])) {
      return null;
    }
    rgb = colorNames[match[1]];
    rgb[3] = 1;
    return rgb;
  } else {
    return null;
  }
  for (i = 0; i < 3; i++) {
    rgb[i] = clamp(rgb[i], 0, 255);
  }
  rgb[3] = clamp(rgb[3], 0, 1);
  return rgb;
};
cs.get.hsl = function(string) {
  if (!string) {
    return null;
  }
  var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
  var match = string.match(hsl);
  if (match) {
    var alpha = parseFloat(match[4]);
    var h = (parseFloat(match[1]) % 360 + 360) % 360;
    var s = clamp(parseFloat(match[2]), 0, 100);
    var l = clamp(parseFloat(match[3]), 0, 100);
    var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
    return [h, s, l, a];
  }
  return null;
};
cs.get.hwb = function(string) {
  if (!string) {
    return null;
  }
  var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
  var match = string.match(hwb);
  if (match) {
    var alpha = parseFloat(match[4]);
    var h = (parseFloat(match[1]) % 360 + 360) % 360;
    var w = clamp(parseFloat(match[2]), 0, 100);
    var b = clamp(parseFloat(match[3]), 0, 100);
    var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
    return [h, w, b, a];
  }
  return null;
};
cs.to.hex = function() {
  var rgba = swizzle2(arguments);
  return "#" + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : "");
};
cs.to.rgb = function() {
  var rgba = swizzle2(arguments);
  return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ")" : "rgba(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ", " + rgba[3] + ")";
};
cs.to.rgb.percent = function() {
  var rgba = swizzle2(arguments);
  var r = Math.round(rgba[0] / 255 * 100);
  var g = Math.round(rgba[1] / 255 * 100);
  var b = Math.round(rgba[2] / 255 * 100);
  return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + r + "%, " + g + "%, " + b + "%)" : "rgba(" + r + "%, " + g + "%, " + b + "%, " + rgba[3] + ")";
};
cs.to.hsl = function() {
  var hsla = swizzle2(arguments);
  return hsla.length < 4 || hsla[3] === 1 ? "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)" : "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + hsla[3] + ")";
};
cs.to.hwb = function() {
  var hwba = swizzle2(arguments);
  var a = "";
  if (hwba.length >= 4 && hwba[3] !== 1) {
    a = ", " + hwba[3];
  }
  return "hwb(" + hwba[0] + ", " + hwba[1] + "%, " + hwba[2] + "%" + a + ")";
};
cs.to.keyword = function(rgb) {
  return reverseNames[rgb.slice(0, 3)];
};
function clamp(num, min, max) {
  return Math.min(Math.max(min, num), max);
}
function hexDouble(num) {
  var str = Math.round(num).toString(16).toUpperCase();
  return str.length < 2 ? "0" + str : str;
}
const cssKeywords = colorName;
const reverseKeywords = {};
for (const key of Object.keys(cssKeywords)) {
  reverseKeywords[cssKeywords[key]] = key;
}
const convert$2 = {
  rgb: { channels: 3, labels: "rgb" },
  hsl: { channels: 3, labels: "hsl" },
  hsv: { channels: 3, labels: "hsv" },
  hwb: { channels: 3, labels: "hwb" },
  cmyk: { channels: 4, labels: "cmyk" },
  xyz: { channels: 3, labels: "xyz" },
  lab: { channels: 3, labels: "lab" },
  lch: { channels: 3, labels: "lch" },
  hex: { channels: 1, labels: ["hex"] },
  keyword: { channels: 1, labels: ["keyword"] },
  ansi16: { channels: 1, labels: ["ansi16"] },
  ansi256: { channels: 1, labels: ["ansi256"] },
  hcg: { channels: 3, labels: ["h", "c", "g"] },
  apple: { channels: 3, labels: ["r16", "g16", "b16"] },
  gray: { channels: 1, labels: ["gray"] }
};
var conversions$2 = convert$2;
for (const model of Object.keys(convert$2)) {
  if (!("channels" in convert$2[model])) {
    throw new Error("missing channels property: " + model);
  }
  if (!("labels" in convert$2[model])) {
    throw new Error("missing channel labels property: " + model);
  }
  if (convert$2[model].labels.length !== convert$2[model].channels) {
    throw new Error("channel and label counts mismatch: " + model);
  }
  const { channels, labels } = convert$2[model];
  delete convert$2[model].channels;
  delete convert$2[model].labels;
  Object.defineProperty(convert$2[model], "channels", { value: channels });
  Object.defineProperty(convert$2[model], "labels", { value: labels });
}
convert$2.rgb.hsl = function(rgb) {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const delta = max - min;
  let h;
  let s;
  if (max === min) {
    h = 0;
  } else if (r === max) {
    h = (g - b) / delta;
  } else if (g === max) {
    h = 2 + (b - r) / delta;
  } else if (b === max) {
    h = 4 + (r - g) / delta;
  }
  h = Math.min(h * 60, 360);
  if (h < 0) {
    h += 360;
  }
  const l = (min + max) / 2;
  if (max === min) {
    s = 0;
  } else if (l <= 0.5) {
    s = delta / (max + min);
  } else {
    s = delta / (2 - max - min);
  }
  return [h, s * 100, l * 100];
};
convert$2.rgb.hsv = function(rgb) {
  let rdif;
  let gdif;
  let bdif;
  let h;
  let s;
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const v = Math.max(r, g, b);
  const diff = v - Math.min(r, g, b);
  const diffc = function(c) {
    return (v - c) / 6 / diff + 1 / 2;
  };
  if (diff === 0) {
    h = 0;
    s = 0;
  } else {
    s = diff / v;
    rdif = diffc(r);
    gdif = diffc(g);
    bdif = diffc(b);
    if (r === v) {
      h = bdif - gdif;
    } else if (g === v) {
      h = 1 / 3 + rdif - bdif;
    } else if (b === v) {
      h = 2 / 3 + gdif - rdif;
    }
    if (h < 0) {
      h += 1;
    } else if (h > 1) {
      h -= 1;
    }
  }
  return [
    h * 360,
    s * 100,
    v * 100
  ];
};
convert$2.rgb.hwb = function(rgb) {
  const r = rgb[0];
  const g = rgb[1];
  let b = rgb[2];
  const h = convert$2.rgb.hsl(rgb)[0];
  const w = 1 / 255 * Math.min(r, Math.min(g, b));
  b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
  return [h, w * 100, b * 100];
};
convert$2.rgb.cmyk = function(rgb) {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const k = Math.min(1 - r, 1 - g, 1 - b);
  const c = (1 - r - k) / (1 - k) || 0;
  const m = (1 - g - k) / (1 - k) || 0;
  const y = (1 - b - k) / (1 - k) || 0;
  return [c * 100, m * 100, y * 100, k * 100];
};
function comparativeDistance(x, y) {
  return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
}
convert$2.rgb.keyword = function(rgb) {
  const reversed = reverseKeywords[rgb];
  if (reversed) {
    return reversed;
  }
  let currentClosestDistance = Infinity;
  let currentClosestKeyword;
  for (const keyword of Object.keys(cssKeywords)) {
    const value = cssKeywords[keyword];
    const distance = comparativeDistance(rgb, value);
    if (distance < currentClosestDistance) {
      currentClosestDistance = distance;
      currentClosestKeyword = keyword;
    }
  }
  return currentClosestKeyword;
};
convert$2.keyword.rgb = function(keyword) {
  return cssKeywords[keyword];
};
convert$2.rgb.xyz = function(rgb) {
  let r = rgb[0] / 255;
  let g = rgb[1] / 255;
  let b = rgb[2] / 255;
  r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
  g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
  b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
  const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
  const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
  const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
  return [x * 100, y * 100, z * 100];
};
convert$2.rgb.lab = function(rgb) {
  const xyz = convert$2.rgb.xyz(rgb);
  let x = xyz[0];
  let y = xyz[1];
  let z = xyz[2];
  x /= 95.047;
  y /= 100;
  z /= 108.883;
  x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
  y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
  z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
  const l = 116 * y - 16;
  const a = 500 * (x - y);
  const b = 200 * (y - z);
  return [l, a, b];
};
convert$2.hsl.rgb = function(hsl) {
  const h = hsl[0] / 360;
  const s = hsl[1] / 100;
  const l = hsl[2] / 100;
  let t2;
  let t3;
  let val;
  if (s === 0) {
    val = l * 255;
    return [val, val, val];
  }
  if (l < 0.5) {
    t2 = l * (1 + s);
  } else {
    t2 = l + s - l * s;
  }
  const t1 = 2 * l - t2;
  const rgb = [0, 0, 0];
  for (let i = 0; i < 3; i++) {
    t3 = h + 1 / 3 * -(i - 1);
    if (t3 < 0) {
      t3++;
    }
    if (t3 > 1) {
      t3--;
    }
    if (6 * t3 < 1) {
      val = t1 + (t2 - t1) * 6 * t3;
    } else if (2 * t3 < 1) {
      val = t2;
    } else if (3 * t3 < 2) {
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    } else {
      val = t1;
    }
    rgb[i] = val * 255;
  }
  return rgb;
};
convert$2.hsl.hsv = function(hsl) {
  const h = hsl[0];
  let s = hsl[1] / 100;
  let l = hsl[2] / 100;
  let smin = s;
  const lmin = Math.max(l, 0.01);
  l *= 2;
  s *= l <= 1 ? l : 2 - l;
  smin *= lmin <= 1 ? lmin : 2 - lmin;
  const v = (l + s) / 2;
  const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
  return [h, sv * 100, v * 100];
};
convert$2.hsv.rgb = function(hsv) {
  const h = hsv[0] / 60;
  const s = hsv[1] / 100;
  let v = hsv[2] / 100;
  const hi = Math.floor(h) % 6;
  const f = h - Math.floor(h);
  const p = 255 * v * (1 - s);
  const q = 255 * v * (1 - s * f);
  const t = 255 * v * (1 - s * (1 - f));
  v *= 255;
  switch (hi) {
    case 0:
      return [v, t, p];
    case 1:
      return [q, v, p];
    case 2:
      return [p, v, t];
    case 3:
      return [p, q, v];
    case 4:
      return [t, p, v];
    case 5:
      return [v, p, q];
  }
};
convert$2.hsv.hsl = function(hsv) {
  const h = hsv[0];
  const s = hsv[1] / 100;
  const v = hsv[2] / 100;
  const vmin = Math.max(v, 0.01);
  let sl;
  let l;
  l = (2 - s) * v;
  const lmin = (2 - s) * vmin;
  sl = s * vmin;
  sl /= lmin <= 1 ? lmin : 2 - lmin;
  sl = sl || 0;
  l /= 2;
  return [h, sl * 100, l * 100];
};
convert$2.hwb.rgb = function(hwb) {
  const h = hwb[0] / 360;
  let wh = hwb[1] / 100;
  let bl = hwb[2] / 100;
  const ratio = wh + bl;
  let f;
  if (ratio > 1) {
    wh /= ratio;
    bl /= ratio;
  }
  const i = Math.floor(6 * h);
  const v = 1 - bl;
  f = 6 * h - i;
  if ((i & 1) !== 0) {
    f = 1 - f;
  }
  const n = wh + f * (v - wh);
  let r;
  let g;
  let b;
  switch (i) {
    default:
    case 6:
    case 0:
      r = v;
      g = n;
      b = wh;
      break;
    case 1:
      r = n;
      g = v;
      b = wh;
      break;
    case 2:
      r = wh;
      g = v;
      b = n;
      break;
    case 3:
      r = wh;
      g = n;
      b = v;
      break;
    case 4:
      r = n;
      g = wh;
      b = v;
      break;
    case 5:
      r = v;
      g = wh;
      b = n;
      break;
  }
  return [r * 255, g * 255, b * 255];
};
convert$2.cmyk.rgb = function(cmyk) {
  const c = cmyk[0] / 100;
  const m = cmyk[1] / 100;
  const y = cmyk[2] / 100;
  const k = cmyk[3] / 100;
  const r = 1 - Math.min(1, c * (1 - k) + k);
  const g = 1 - Math.min(1, m * (1 - k) + k);
  const b = 1 - Math.min(1, y * (1 - k) + k);
  return [r * 255, g * 255, b * 255];
};
convert$2.xyz.rgb = function(xyz) {
  const x = xyz[0] / 100;
  const y = xyz[1] / 100;
  const z = xyz[2] / 100;
  let r;
  let g;
  let b;
  r = x * 3.2406 + y * -1.5372 + z * -0.4986;
  g = x * -0.9689 + y * 1.8758 + z * 0.0415;
  b = x * 0.0557 + y * -0.204 + z * 1.057;
  r = r > 31308e-7 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92;
  g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92;
  b = b > 31308e-7 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92;
  r = Math.min(Math.max(0, r), 1);
  g = Math.min(Math.max(0, g), 1);
  b = Math.min(Math.max(0, b), 1);
  return [r * 255, g * 255, b * 255];
};
convert$2.xyz.lab = function(xyz) {
  let x = xyz[0];
  let y = xyz[1];
  let z = xyz[2];
  x /= 95.047;
  y /= 100;
  z /= 108.883;
  x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
  y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
  z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
  const l = 116 * y - 16;
  const a = 500 * (x - y);
  const b = 200 * (y - z);
  return [l, a, b];
};
convert$2.lab.xyz = function(lab) {
  const l = lab[0];
  const a = lab[1];
  const b = lab[2];
  let x;
  let y;
  let z;
  y = (l + 16) / 116;
  x = a / 500 + y;
  z = y - b / 200;
  const y2 = y ** 3;
  const x2 = x ** 3;
  const z2 = z ** 3;
  y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
  x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
  z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
  x *= 95.047;
  y *= 100;
  z *= 108.883;
  return [x, y, z];
};
convert$2.lab.lch = function(lab) {
  const l = lab[0];
  const a = lab[1];
  const b = lab[2];
  let h;
  const hr = Math.atan2(b, a);
  h = hr * 360 / 2 / Math.PI;
  if (h < 0) {
    h += 360;
  }
  const c = Math.sqrt(a * a + b * b);
  return [l, c, h];
};
convert$2.lch.lab = function(lch) {
  const l = lch[0];
  const c = lch[1];
  const h = lch[2];
  const hr = h / 360 * 2 * Math.PI;
  const a = c * Math.cos(hr);
  const b = c * Math.sin(hr);
  return [l, a, b];
};
convert$2.rgb.ansi16 = function(args, saturation = null) {
  const [r, g, b] = args;
  let value = saturation === null ? convert$2.rgb.hsv(args)[2] : saturation;
  value = Math.round(value / 50);
  if (value === 0) {
    return 30;
  }
  let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
  if (value === 2) {
    ansi += 60;
  }
  return ansi;
};
convert$2.hsv.ansi16 = function(args) {
  return convert$2.rgb.ansi16(convert$2.hsv.rgb(args), args[2]);
};
convert$2.rgb.ansi256 = function(args) {
  const r = args[0];
  const g = args[1];
  const b = args[2];
  if (r === g && g === b) {
    if (r < 8) {
      return 16;
    }
    if (r > 248) {
      return 231;
    }
    return Math.round((r - 8) / 247 * 24) + 232;
  }
  const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
  return ansi;
};
convert$2.ansi16.rgb = function(args) {
  let color2 = args % 10;
  if (color2 === 0 || color2 === 7) {
    if (args > 50) {
      color2 += 3.5;
    }
    color2 = color2 / 10.5 * 255;
    return [color2, color2, color2];
  }
  const mult = (~~(args > 50) + 1) * 0.5;
  const r = (color2 & 1) * mult * 255;
  const g = (color2 >> 1 & 1) * mult * 255;
  const b = (color2 >> 2 & 1) * mult * 255;
  return [r, g, b];
};
convert$2.ansi256.rgb = function(args) {
  if (args >= 232) {
    const c = (args - 232) * 10 + 8;
    return [c, c, c];
  }
  args -= 16;
  let rem;
  const r = Math.floor(args / 36) / 5 * 255;
  const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
  const b = rem % 6 / 5 * 255;
  return [r, g, b];
};
convert$2.rgb.hex = function(args) {
  const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
  const string = integer.toString(16).toUpperCase();
  return "000000".substring(string.length) + string;
};
convert$2.hex.rgb = function(args) {
  const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (!match) {
    return [0, 0, 0];
  }
  let colorString2 = match[0];
  if (match[0].length === 3) {
    colorString2 = colorString2.split("").map((char) => {
      return char + char;
    }).join("");
  }
  const integer = parseInt(colorString2, 16);
  const r = integer >> 16 & 255;
  const g = integer >> 8 & 255;
  const b = integer & 255;
  return [r, g, b];
};
convert$2.rgb.hcg = function(rgb) {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const max = Math.max(Math.max(r, g), b);
  const min = Math.min(Math.min(r, g), b);
  const chroma = max - min;
  let grayscale;
  let hue;
  if (chroma < 1) {
    grayscale = min / (1 - chroma);
  } else {
    grayscale = 0;
  }
  if (chroma <= 0) {
    hue = 0;
  } else if (max === r) {
    hue = (g - b) / chroma % 6;
  } else if (max === g) {
    hue = 2 + (b - r) / chroma;
  } else {
    hue = 4 + (r - g) / chroma;
  }
  hue /= 6;
  hue %= 1;
  return [hue * 360, chroma * 100, grayscale * 100];
};
convert$2.hsl.hcg = function(hsl) {
  const s = hsl[1] / 100;
  const l = hsl[2] / 100;
  const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
  let f = 0;
  if (c < 1) {
    f = (l - 0.5 * c) / (1 - c);
  }
  return [hsl[0], c * 100, f * 100];
};
convert$2.hsv.hcg = function(hsv) {
  const s = hsv[1] / 100;
  const v = hsv[2] / 100;
  const c = s * v;
  let f = 0;
  if (c < 1) {
    f = (v - c) / (1 - c);
  }
  return [hsv[0], c * 100, f * 100];
};
convert$2.hcg.rgb = function(hcg) {
  const h = hcg[0] / 360;
  const c = hcg[1] / 100;
  const g = hcg[2] / 100;
  if (c === 0) {
    return [g * 255, g * 255, g * 255];
  }
  const pure = [0, 0, 0];
  const hi = h % 1 * 6;
  const v = hi % 1;
  const w = 1 - v;
  let mg = 0;
  switch (Math.floor(hi)) {
    case 0:
      pure[0] = 1;
      pure[1] = v;
      pure[2] = 0;
      break;
    case 1:
      pure[0] = w;
      pure[1] = 1;
      pure[2] = 0;
      break;
    case 2:
      pure[0] = 0;
      pure[1] = 1;
      pure[2] = v;
      break;
    case 3:
      pure[0] = 0;
      pure[1] = w;
      pure[2] = 1;
      break;
    case 4:
      pure[0] = v;
      pure[1] = 0;
      pure[2] = 1;
      break;
    default:
      pure[0] = 1;
      pure[1] = 0;
      pure[2] = w;
  }
  mg = (1 - c) * g;
  return [
    (c * pure[0] + mg) * 255,
    (c * pure[1] + mg) * 255,
    (c * pure[2] + mg) * 255
  ];
};
convert$2.hcg.hsv = function(hcg) {
  const c = hcg[1] / 100;
  const g = hcg[2] / 100;
  const v = c + g * (1 - c);
  let f = 0;
  if (v > 0) {
    f = c / v;
  }
  return [hcg[0], f * 100, v * 100];
};
convert$2.hcg.hsl = function(hcg) {
  const c = hcg[1] / 100;
  const g = hcg[2] / 100;
  const l = g * (1 - c) + 0.5 * c;
  let s = 0;
  if (l > 0 && l < 0.5) {
    s = c / (2 * l);
  } else if (l >= 0.5 && l < 1) {
    s = c / (2 * (1 - l));
  }
  return [hcg[0], s * 100, l * 100];
};
convert$2.hcg.hwb = function(hcg) {
  const c = hcg[1] / 100;
  const g = hcg[2] / 100;
  const v = c + g * (1 - c);
  return [hcg[0], (v - c) * 100, (1 - v) * 100];
};
convert$2.hwb.hcg = function(hwb) {
  const w = hwb[1] / 100;
  const b = hwb[2] / 100;
  const v = 1 - b;
  const c = v - w;
  let g = 0;
  if (c < 1) {
    g = (v - c) / (1 - c);
  }
  return [hwb[0], c * 100, g * 100];
};
convert$2.apple.rgb = function(apple) {
  return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
};
convert$2.rgb.apple = function(rgb) {
  return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
};
convert$2.gray.rgb = function(args) {
  return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};
convert$2.gray.hsl = function(args) {
  return [0, 0, args[0]];
};
convert$2.gray.hsv = convert$2.gray.hsl;
convert$2.gray.hwb = function(gray) {
  return [0, 100, gray[0]];
};
convert$2.gray.cmyk = function(gray) {
  return [0, 0, 0, gray[0]];
};
convert$2.gray.lab = function(gray) {
  return [gray[0], 0, 0];
};
convert$2.gray.hex = function(gray) {
  const val = Math.round(gray[0] / 100 * 255) & 255;
  const integer = (val << 16) + (val << 8) + val;
  const string = integer.toString(16).toUpperCase();
  return "000000".substring(string.length) + string;
};
convert$2.rgb.gray = function(rgb) {
  const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
  return [val / 255 * 100];
};
const conversions$1 = conversions$2;
function buildGraph() {
  const graph = {};
  const models2 = Object.keys(conversions$1);
  for (let len = models2.length, i = 0; i < len; i++) {
    graph[models2[i]] = {
      distance: -1,
      parent: null
    };
  }
  return graph;
}
function deriveBFS(fromModel) {
  const graph = buildGraph();
  const queue = [fromModel];
  graph[fromModel].distance = 0;
  while (queue.length) {
    const current = queue.pop();
    const adjacents = Object.keys(conversions$1[current]);
    for (let len = adjacents.length, i = 0; i < len; i++) {
      const adjacent = adjacents[i];
      const node = graph[adjacent];
      if (node.distance === -1) {
        node.distance = graph[current].distance + 1;
        node.parent = current;
        queue.unshift(adjacent);
      }
    }
  }
  return graph;
}
function link(from, to) {
  return function(args) {
    return to(from(args));
  };
}
function wrapConversion(toModel, graph) {
  const path = [graph[toModel].parent, toModel];
  let fn = conversions$1[graph[toModel].parent][toModel];
  let cur = graph[toModel].parent;
  while (graph[cur].parent) {
    path.unshift(graph[cur].parent);
    fn = link(conversions$1[graph[cur].parent][cur], fn);
    cur = graph[cur].parent;
  }
  fn.conversion = path;
  return fn;
}
var route$1 = function(fromModel) {
  const graph = deriveBFS(fromModel);
  const conversion = {};
  const models2 = Object.keys(graph);
  for (let len = models2.length, i = 0; i < len; i++) {
    const toModel = models2[i];
    const node = graph[toModel];
    if (node.parent === null) {
      continue;
    }
    conversion[toModel] = wrapConversion(toModel, graph);
  }
  return conversion;
};
const conversions = conversions$2;
const route = route$1;
const convert$1 = {};
const models = Object.keys(conversions);
function wrapRaw(fn) {
  const wrappedFn = function(...args) {
    const arg0 = args[0];
    if (arg0 === void 0 || arg0 === null) {
      return arg0;
    }
    if (arg0.length > 1) {
      args = arg0;
    }
    return fn(args);
  };
  if ("conversion" in fn) {
    wrappedFn.conversion = fn.conversion;
  }
  return wrappedFn;
}
function wrapRounded(fn) {
  const wrappedFn = function(...args) {
    const arg0 = args[0];
    if (arg0 === void 0 || arg0 === null) {
      return arg0;
    }
    if (arg0.length > 1) {
      args = arg0;
    }
    const result = fn(args);
    if (typeof result === "object") {
      for (let len = result.length, i = 0; i < len; i++) {
        result[i] = Math.round(result[i]);
      }
    }
    return result;
  };
  if ("conversion" in fn) {
    wrappedFn.conversion = fn.conversion;
  }
  return wrappedFn;
}
models.forEach((fromModel) => {
  convert$1[fromModel] = {};
  Object.defineProperty(convert$1[fromModel], "channels", { value: conversions[fromModel].channels });
  Object.defineProperty(convert$1[fromModel], "labels", { value: conversions[fromModel].labels });
  const routes = route(fromModel);
  const routeModels = Object.keys(routes);
  routeModels.forEach((toModel) => {
    const fn = routes[toModel];
    convert$1[fromModel][toModel] = wrapRounded(fn);
    convert$1[fromModel][toModel].raw = wrapRaw(fn);
  });
});
var colorConvert = convert$1;
const colorString = colorString$1.exports;
const convert = colorConvert;
const skippedModels = [
  "keyword",
  "gray",
  "hex"
];
const hashedModelKeys = {};
for (const model of Object.keys(convert)) {
  hashedModelKeys[[...convert[model].labels].sort().join("")] = model;
}
const limiters = {};
function Color(object, model) {
  if (!(this instanceof Color)) {
    return new Color(object, model);
  }
  if (model && model in skippedModels) {
    model = null;
  }
  if (model && !(model in convert)) {
    throw new Error("Unknown model: " + model);
  }
  let i;
  let channels;
  if (object == null) {
    this.model = "rgb";
    this.color = [0, 0, 0];
    this.valpha = 1;
  } else if (object instanceof Color) {
    this.model = object.model;
    this.color = [...object.color];
    this.valpha = object.valpha;
  } else if (typeof object === "string") {
    const result = colorString.get(object);
    if (result === null) {
      throw new Error("Unable to parse color from string: " + object);
    }
    this.model = result.model;
    channels = convert[this.model].channels;
    this.color = result.value.slice(0, channels);
    this.valpha = typeof result.value[channels] === "number" ? result.value[channels] : 1;
  } else if (object.length > 0) {
    this.model = model || "rgb";
    channels = convert[this.model].channels;
    const newArray = Array.prototype.slice.call(object, 0, channels);
    this.color = zeroArray(newArray, channels);
    this.valpha = typeof object[channels] === "number" ? object[channels] : 1;
  } else if (typeof object === "number") {
    this.model = "rgb";
    this.color = [
      object >> 16 & 255,
      object >> 8 & 255,
      object & 255
    ];
    this.valpha = 1;
  } else {
    this.valpha = 1;
    const keys = Object.keys(object);
    if ("alpha" in object) {
      keys.splice(keys.indexOf("alpha"), 1);
      this.valpha = typeof object.alpha === "number" ? object.alpha : 0;
    }
    const hashedKeys = keys.sort().join("");
    if (!(hashedKeys in hashedModelKeys)) {
      throw new Error("Unable to parse color from object: " + JSON.stringify(object));
    }
    this.model = hashedModelKeys[hashedKeys];
    const { labels } = convert[this.model];
    const color2 = [];
    for (i = 0; i < labels.length; i++) {
      color2.push(object[labels[i]]);
    }
    this.color = zeroArray(color2);
  }
  if (limiters[this.model]) {
    channels = convert[this.model].channels;
    for (i = 0; i < channels; i++) {
      const limit = limiters[this.model][i];
      if (limit) {
        this.color[i] = limit(this.color[i]);
      }
    }
  }
  this.valpha = Math.max(0, Math.min(1, this.valpha));
  if (Object.freeze) {
    Object.freeze(this);
  }
}
Color.prototype = {
  toString() {
    return this.string();
  },
  toJSON() {
    return this[this.model]();
  },
  string(places) {
    let self = this.model in colorString.to ? this : this.rgb();
    self = self.round(typeof places === "number" ? places : 1);
    const args = self.valpha === 1 ? self.color : [...self.color, this.valpha];
    return colorString.to[self.model](args);
  },
  percentString(places) {
    const self = this.rgb().round(typeof places === "number" ? places : 1);
    const args = self.valpha === 1 ? self.color : [...self.color, this.valpha];
    return colorString.to.rgb.percent(args);
  },
  array() {
    return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
  },
  object() {
    const result = {};
    const { channels } = convert[this.model];
    const { labels } = convert[this.model];
    for (let i = 0; i < channels; i++) {
      result[labels[i]] = this.color[i];
    }
    if (this.valpha !== 1) {
      result.alpha = this.valpha;
    }
    return result;
  },
  unitArray() {
    const rgb = this.rgb().color;
    rgb[0] /= 255;
    rgb[1] /= 255;
    rgb[2] /= 255;
    if (this.valpha !== 1) {
      rgb.push(this.valpha);
    }
    return rgb;
  },
  unitObject() {
    const rgb = this.rgb().object();
    rgb.r /= 255;
    rgb.g /= 255;
    rgb.b /= 255;
    if (this.valpha !== 1) {
      rgb.alpha = this.valpha;
    }
    return rgb;
  },
  round(places) {
    places = Math.max(places || 0, 0);
    return new Color([...this.color.map(roundToPlace(places)), this.valpha], this.model);
  },
  alpha(value) {
    if (value !== void 0) {
      return new Color([...this.color, Math.max(0, Math.min(1, value))], this.model);
    }
    return this.valpha;
  },
  red: getset("rgb", 0, maxfn(255)),
  green: getset("rgb", 1, maxfn(255)),
  blue: getset("rgb", 2, maxfn(255)),
  hue: getset(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (value) => (value % 360 + 360) % 360),
  saturationl: getset("hsl", 1, maxfn(100)),
  lightness: getset("hsl", 2, maxfn(100)),
  saturationv: getset("hsv", 1, maxfn(100)),
  value: getset("hsv", 2, maxfn(100)),
  chroma: getset("hcg", 1, maxfn(100)),
  gray: getset("hcg", 2, maxfn(100)),
  white: getset("hwb", 1, maxfn(100)),
  wblack: getset("hwb", 2, maxfn(100)),
  cyan: getset("cmyk", 0, maxfn(100)),
  magenta: getset("cmyk", 1, maxfn(100)),
  yellow: getset("cmyk", 2, maxfn(100)),
  black: getset("cmyk", 3, maxfn(100)),
  x: getset("xyz", 0, maxfn(95.047)),
  y: getset("xyz", 1, maxfn(100)),
  z: getset("xyz", 2, maxfn(108.833)),
  l: getset("lab", 0, maxfn(100)),
  a: getset("lab", 1),
  b: getset("lab", 2),
  keyword(value) {
    if (value !== void 0) {
      return new Color(value);
    }
    return convert[this.model].keyword(this.color);
  },
  hex(value) {
    if (value !== void 0) {
      return new Color(value);
    }
    return colorString.to.hex(this.rgb().round().color);
  },
  hexa(value) {
    if (value !== void 0) {
      return new Color(value);
    }
    const rgbArray = this.rgb().round().color;
    let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
    if (alphaHex.length === 1) {
      alphaHex = "0" + alphaHex;
    }
    return colorString.to.hex(rgbArray) + alphaHex;
  },
  rgbNumber() {
    const rgb = this.rgb().color;
    return (rgb[0] & 255) << 16 | (rgb[1] & 255) << 8 | rgb[2] & 255;
  },
  luminosity() {
    const rgb = this.rgb().color;
    const lum = [];
    for (const [i, element] of rgb.entries()) {
      const chan = element / 255;
      lum[i] = chan <= 0.04045 ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
    }
    return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
  },
  contrast(color2) {
    const lum1 = this.luminosity();
    const lum2 = color2.luminosity();
    if (lum1 > lum2) {
      return (lum1 + 0.05) / (lum2 + 0.05);
    }
    return (lum2 + 0.05) / (lum1 + 0.05);
  },
  level(color2) {
    const contrastRatio = this.contrast(color2);
    if (contrastRatio >= 7) {
      return "AAA";
    }
    return contrastRatio >= 4.5 ? "AA" : "";
  },
  isDark() {
    const rgb = this.rgb().color;
    const yiq = (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 1e4;
    return yiq < 128;
  },
  isLight() {
    return !this.isDark();
  },
  negate() {
    const rgb = this.rgb();
    for (let i = 0; i < 3; i++) {
      rgb.color[i] = 255 - rgb.color[i];
    }
    return rgb;
  },
  lighten(ratio) {
    const hsl = this.hsl();
    hsl.color[2] += hsl.color[2] * ratio;
    return hsl;
  },
  darken(ratio) {
    const hsl = this.hsl();
    hsl.color[2] -= hsl.color[2] * ratio;
    return hsl;
  },
  saturate(ratio) {
    const hsl = this.hsl();
    hsl.color[1] += hsl.color[1] * ratio;
    return hsl;
  },
  desaturate(ratio) {
    const hsl = this.hsl();
    hsl.color[1] -= hsl.color[1] * ratio;
    return hsl;
  },
  whiten(ratio) {
    const hwb = this.hwb();
    hwb.color[1] += hwb.color[1] * ratio;
    return hwb;
  },
  blacken(ratio) {
    const hwb = this.hwb();
    hwb.color[2] += hwb.color[2] * ratio;
    return hwb;
  },
  grayscale() {
    const rgb = this.rgb().color;
    const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
    return Color.rgb(value, value, value);
  },
  fade(ratio) {
    return this.alpha(this.valpha - this.valpha * ratio);
  },
  opaquer(ratio) {
    return this.alpha(this.valpha + this.valpha * ratio);
  },
  rotate(degrees) {
    const hsl = this.hsl();
    let hue = hsl.color[0];
    hue = (hue + degrees) % 360;
    hue = hue < 0 ? 360 + hue : hue;
    hsl.color[0] = hue;
    return hsl;
  },
  mix(mixinColor, weight) {
    if (!mixinColor || !mixinColor.rgb) {
      throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
    }
    const color1 = mixinColor.rgb();
    const color2 = this.rgb();
    const p = weight === void 0 ? 0.5 : weight;
    const w = 2 * p - 1;
    const a = color1.alpha() - color2.alpha();
    const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
    const w2 = 1 - w1;
    return Color.rgb(
      w1 * color1.red() + w2 * color2.red(),
      w1 * color1.green() + w2 * color2.green(),
      w1 * color1.blue() + w2 * color2.blue(),
      color1.alpha() * p + color2.alpha() * (1 - p)
    );
  }
};
for (const model of Object.keys(convert)) {
  if (skippedModels.includes(model)) {
    continue;
  }
  const { channels } = convert[model];
  Color.prototype[model] = function(...args) {
    if (this.model === model) {
      return new Color(this);
    }
    if (args.length > 0) {
      return new Color(args, model);
    }
    return new Color([...assertArray(convert[this.model][model].raw(this.color)), this.valpha], model);
  };
  Color[model] = function(...args) {
    let color2 = args[0];
    if (typeof color2 === "number") {
      color2 = zeroArray(args, channels);
    }
    return new Color(color2, model);
  };
}
function roundTo(number, places) {
  return Number(number.toFixed(places));
}
function roundToPlace(places) {
  return function(number) {
    return roundTo(number, places);
  };
}
function getset(model, channel, modifier) {
  model = Array.isArray(model) ? model : [model];
  for (const m of model) {
    (limiters[m] || (limiters[m] = []))[channel] = modifier;
  }
  model = model[0];
  return function(value) {
    let result;
    if (value !== void 0) {
      if (modifier) {
        value = modifier(value);
      }
      result = this[model]();
      result.color[channel] = value;
      return result;
    }
    result = this[model]().color[channel];
    if (modifier) {
      result = modifier(result);
    }
    return result;
  };
}
function maxfn(max) {
  return function(v) {
    return Math.max(0, Math.min(max, v));
  };
}
function assertArray(value) {
  return Array.isArray(value) ? value : [value];
}
function zeroArray(array, length) {
  for (let i = 0; i < length; i++) {
    if (typeof array[i] !== "number") {
      array[i] = 0;
    }
  }
  return array;
}
var color = Color;
const Color$1 = color;
const fontUnit = "rpx";
const fonts = {
  "xs": 20,
  "sm": 24,
  "base": 28,
  "lg": 32,
  "xl": 40,
  "2xl": 48,
  "3xl": 56,
  "4xl": 72,
  "5xl": 96,
  "6xl": 128,
  "7xl": 164,
  "8xl": 208,
  "9xl": 252
};
const radiusSize = {
  none: 0,
  xs: 10,
  sm: 20,
  base: 30,
  lg: 40,
  xl: 50,
  max: 9999
};
const fontWeight = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
};
const lineBase = 16;
const spacing = 1.5;
const shadeOpenness = 0.6;
const motionTimes = {
  base: "100ms",
  lg: "120ms",
  xl: "140ms"
};
const size = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  fontUnit,
  fonts,
  radiusSize,
  fontWeight,
  lineBase,
  spacing,
  shadeOpenness,
  motionTimes
}, Symbol.toStringTag, { value: "Module" }));
const config = {
  shade: `hsla(220, 17.1%, 13.7%, ${shadeOpenness})`,
  colorPresetPanel: {
    red: null,
    orangered: null,
    orange: null,
    gold: null,
    yellow: null,
    lime: null,
    green: null,
    brandgreen: null,
    cyan: null,
    blue: null,
    deepblue: null,
    purple: null,
    pinkpurple: null,
    magenta: null,
    grey: null,
    primary: null,
    success: null,
    danger: null,
    warning: null,
    link: null,
    info: null
  }
};
const getPresetColor = (key) => {
  return colorBuilder.getPresetColors()[key]["primary"];
};
const colorPresetPanel = {
  red: getPresetColor("red"),
  orangered: getPresetColor("orangered"),
  orange: getPresetColor("orange"),
  gold: getPresetColor("gold"),
  yellow: getPresetColor("yellow"),
  lime: getPresetColor("lime"),
  green: getPresetColor("green"),
  brandgreen: getPresetColor("green"),
  cyan: getPresetColor("cyan"),
  blue: getPresetColor("blue"),
  deepblue: getPresetColor("arcoblue"),
  purple: getPresetColor("purple"),
  pinkpurple: getPresetColor("pinkpurple"),
  magenta: getPresetColor("magenta"),
  grey: getPresetColor("gray"),
  primary: getPresetColor("green"),
  success: getPresetColor("green"),
  danger: getPresetColor("red"),
  warning: getPresetColor("orange"),
  link: getPresetColor("blue"),
  info: getPresetColor("blue")
};
const colorPresetData = {
  "red": (_a = config.colorPresetPanel.red) != null ? _a : colorPresetPanel.red,
  "orangered": (_b = config.colorPresetPanel.orangered) != null ? _b : colorPresetPanel.orangered,
  "orange": (_c = config.colorPresetPanel.orange) != null ? _c : colorPresetPanel.orange,
  "gold": (_d = config.colorPresetPanel.gold) != null ? _d : colorPresetPanel.gold,
  "yellow": (_e = config.colorPresetPanel.yellow) != null ? _e : colorPresetPanel.yellow,
  "lime": (_f = config.colorPresetPanel.lime) != null ? _f : colorPresetPanel.lime,
  "green": (_g = config.colorPresetPanel.green) != null ? _g : colorPresetPanel.green,
  "brandgreen": (_h = config.colorPresetPanel.brandgreen) != null ? _h : colorPresetPanel.brandgreen,
  "cyan": (_i = config.colorPresetPanel.cyan) != null ? _i : colorPresetPanel.cyan,
  "blue": (_j = config.colorPresetPanel.blue) != null ? _j : colorPresetPanel.blue,
  "deepblue": (_k = config.colorPresetPanel.deepblue) != null ? _k : colorPresetPanel.deepblue,
  "purple": (_l = config.colorPresetPanel.purple) != null ? _l : colorPresetPanel.purple,
  "pinkpurple": (_m = config.colorPresetPanel.pinkpurple) != null ? _m : colorPresetPanel.pinkpurple,
  "magenta": (_n = config.colorPresetPanel.magenta) != null ? _n : colorPresetPanel.magenta,
  "grey": (_o = config.colorPresetPanel.grey) != null ? _o : colorPresetPanel.grey,
  "primary": (_p = config.colorPresetPanel.primary) != null ? _p : colorPresetPanel.primary,
  "success": (_q = config.colorPresetPanel.success) != null ? _q : colorPresetPanel.success,
  "danger": (_r = config.colorPresetPanel.danger) != null ? _r : colorPresetPanel.danger,
  "warning": (_s = config.colorPresetPanel.warning) != null ? _s : colorPresetPanel.warning,
  "link": (_t = config.colorPresetPanel.link) != null ? _t : colorPresetPanel.link,
  "info": (_u = config.colorPresetPanel.info) != null ? _u : colorPresetPanel.info
};
const colorPalette = (color2, index2, dark = false) => {
  return colorBuilder.generate(color2, { dark, list: false, index: index2 });
};
const makeColorByPalette = (color2, dark) => {
  const colorData = [];
  for (let i = 1; i <= 10; i++) {
    colorData.push(colorPalette(colorPresetData[color2], i, dark));
  }
  if (color2 === "grey" && dark) {
    return [
      "#17171a",
      "#2e2e30",
      "#484849",
      "#5f5f60",
      "#78787a",
      "#929293",
      "#ababac",
      "#c5c5c5",
      "#dfdfdf",
      "#f6f6f6"
    ];
  }
  if (color2 === "grey" && !dark) {
    return [
      "#f7f8fa",
      "#f2f3f5",
      "#e5e6eb",
      "#c9cdd4",
      "#a9aeb8",
      "#86909c",
      "#6b7785",
      "#4e5969",
      "#272e3b",
      "#1d2129"
    ];
  }
  return colorData;
};
const makeModeColors = (dark) => {
  const modeColors = [];
  const colorPresetKey = Object.keys(colorPresetData);
  colorPresetKey.map((item) => {
    if (!dark) {
      modeColors[item] = [];
      modeColors[item] = makeColorByPalette(item, dark);
    } else {
      modeColors[item] = makeColorByPalette(item, !!dark);
    }
  });
  return modeColors;
};
const darken = (color2, alpha = 0.2) => {
  const isDarken = new Color$1(color2).isDark();
  return isDarken ? new Color$1(color2).lighten(alpha) : new Color$1(color2).darken(alpha);
};
const colors$1 = {
  light: makeModeColors(false),
  dark: makeModeColors(true),
  darken
};
const colors = {
  light: colors$1.light,
  dark: colors$1.dark,
  darken: colors$1.darken
};
const theme = {
  colors,
  size,
  config
};
const configProviderInjectionKey = Symbol("KuiConfigProvider");
const ButtonProps = {
  type: {
    type: String,
    default: ""
  },
  mode: {
    type: String,
    default: () => {
      var _a2, _b2;
      return (_b2 = (_a2 = inject(configProviderInjectionKey, void 0)) == null ? void 0 : _a2.mode) != null ? _b2 : "light";
    }
  },
  full: {
    type: Boolean,
    default: false
  },
  marginY: {
    type: Number,
    default: 0
  },
  size: {
    type: String,
    default: "normal"
  },
  shape: {
    type: String,
    default: "capsule"
  },
  radius: {
    type: Number,
    default: 10
  },
  text: {
    type: Boolean,
    default: false
  },
  outline: {
    type: Boolean,
    default: false
  },
  backgroundColor: {
    type: String,
    default: ""
  },
  gradient: {
    type: Boolean,
    default: true
  },
  textColor: {
    type: String,
    default: ""
  },
  borderColor: {
    type: String,
    default: ""
  },
  ripple: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  loadingType: {
    type: String,
    default: "square-dot"
  },
  icon: {
    type: String,
    default: ""
  },
  block: {
    type: Boolean,
    default: false
  },
  shadow: {
    type: Boolean,
    default: false
  },
  shadowSize: {
    type: String,
    default: ""
  },
  throttle: {
    type: Number,
    default: 0
  },
  throttleWait: {
    type: Number,
    default: 500
  },
  formType: {
    type: String,
    default: ""
  },
  openType: {
    type: String,
    default: ""
  },
  hoverClass: {
    type: String,
    default: "button-hover"
  },
  hoverStartTime: {
    type: Number,
    default: 20
  },
  hoverStayTime: {
    type: Number,
    default: 70
  },
  appParameter: {
    type: String,
    default: ""
  },
  hoverStopPropagation: {
    type: Boolean,
    default: false
  },
  lang: {
    type: String,
    default: "en"
  },
  sessionFrom: {
    type: String,
    default: ""
  },
  sendMessageTitle: {
    type: String,
    default: ""
  },
  sendMessagePath: {
    type: String,
    default: ""
  },
  sendMessageImg: {
    type: String,
    default: ""
  },
  showMessageCard: {
    type: Boolean,
    default: false
  }
};
const { componentName, create: create$1 } = createComponent("button");
const _sfc_main$2 = create$1({
  props: ButtonProps,
  emits: ["click", "getphonenumber", "getuserinfo", "error", "opensetting", "launchapp"],
  options: {
    virtualHost: true
  },
  setup(props, context) {
    var _a2;
    const {
      proxy
    } = getCurrentInstance();
    const theme$1 = (_a2 = proxy.$theme) != null ? _a2 : theme;
    uni.getSystemInfoSync();
    const data = reactive({
      type: props.type,
      btnBorderWidth: "",
      backgroundColor: "",
      backgroundImage: "",
      color: "",
      width: "max-content",
      height: "",
      padding: "",
      margin: "",
      opacity: props.disabled ? 0.6 : 1,
      longClick: 0,
      timeOutEvent: 0,
      btnBorderStyle: "solid",
      btnBorderColor: "",
      setMode: props.mode,
      size: props.size,
      radius: props.shape !== "square" ? 9999 : props.radius,
      fontSize: `${theme$1.size.fonts["base"]}${theme$1.size.fontUnit}`,
      btnWidth: "",
      btnStyle: {}
    });
    const style = reactive({});
    const btnStyle = computed(() => {
      style.borderWidth = data.btnBorderWidth;
      style.borderStyle = data.btnBorderStyle;
      style.borderColor = data.btnBorderColor;
      style.backgroundColor = data.backgroundColor;
      style.backgroundImage = data.backgroundImage;
      style.color = data.color;
      style.height = data.height;
      style.padding = data.padding;
      style.margin = data.margin;
      style.marginTop = `${props.marginY}px`;
      style.borderRadius = `${data.radius}rpx`;
      style.lineHeight = 1;
      if (!props.block) {
        style.width = data.width;
      }
      if (props.block) {
        style.flex = 1;
      }
      style.justifyContent = "center";
      return style;
    });
    const init = (steep = 0) => {
      if (props.full) {
        data.btnWidth = `${uni.getSystemInfoSync().windowWidth - 30}px`;
      }
      if (!props.text) {
        data.backgroundColor = data.type ? theme$1.colors[data.setMode][data.type][5 + steep] : data.setMode === "light" ? "#FFFFFF" : theme$1.colors["dark"]["grey"][2];
        data.color = data.setMode === "light" ? "#FFFFFF" : theme$1.colors["dark"]["grey"][9];
        data.color = data.type ? "#FFFFFF" : theme$1.colors[data.setMode]["grey"][7 + steep];
        data.btnBorderColor = data.type ? "" : theme$1.colors[data.setMode]["grey"][3 + steep];
        data.btnBorderWidth = data.type ? "0rpx" : "1rpx";
        if (!data.type && steep) {
          data.backgroundColor = theme$1.colors[data.setMode]["grey"][3];
        }
        if (data.type && props.gradient) {
          data.backgroundImage = `linear-gradient(to right, ${theme$1.colors[data.setMode][data.type][5 + steep]}, ${theme$1.colors[data.setMode][data.type][4 + steep]})`;
        }
      } else {
        data.backgroundColor = steep ? theme$1.colors[data.setMode]["grey"][2 + steep] : "";
        data.color = data.type ? theme$1.colors[data.setMode][data.type][5 + steep] : data.color;
      }
      if (props.outline) {
        data.btnBorderColor = data.color = theme$1.colors[data.setMode][data.type][3];
        data.btnBorderWidth = "1rpx";
      }
      data.backgroundColor = props.backgroundColor ? props.backgroundColor : data.backgroundColor;
      data.color = props.textColor ? props.textColor : data.color;
      data.btnBorderColor = props.borderColor ? props.borderColor : data.btnBorderColor;
      switch (props.size) {
        case "normal":
          data.padding = "0 30rpx";
          data.height = "72rpx";
          break;
        case "small":
          data.padding = "0 22rpx";
          data.fontSize = `${theme$1.size.fonts["sm"]}${theme$1.size.fontUnit}`;
          data.height = "56rpx";
          break;
        case "mini":
          data.padding = "0 20rpx";
          data.fontSize = `${theme$1.size.fonts["sm"]}${theme$1.size.fontUnit}`;
          data.height = "48rpx";
          break;
        case "large":
          data.fontSize = `${theme$1.size.fonts["lg"]}${theme$1.size.fontUnit}`;
          data.padding = "0 40rpx";
          data.height = "96rpx";
      }
      data.width = props.shape === "round" ? data.height : data.width;
      console.log(props.size);
      if (props.block) {
        data.height = "72rpx";
      }
    };
    uni.$on("changeMode", (e) => {
      data.setMode = e;
      init();
    });
    init();
    const start = () => {
      if (props.disabled) {
        return;
      }
      setTimeout(() => {
        init(1);
      }, props.hoverStartTime);
      return true;
    };
    const end = () => {
      if (props.disabled) {
        return;
      }
      setTimeout(() => {
        init();
      }, props.hoverStayTime);
      return true;
    };
    let beforeStart = () => {
      if (props.disabled) {
        return;
      }
    };
    if (props.throttle !== 0) {
      useThrottle(function(e) {
        context.emit("click");
      }, props.throttleWait);
    } else {
      beforeStart = () => {
        if (props.disabled) {
          return;
        }
        context.emit("click");
      };
    }
    const onGetphonenumber = (e) => {
      context.emit("getphonenumber", e);
    };
    const onGetuserinfo = (e) => {
      context.emit("getuserinfo", e);
    };
    const onError = (e) => {
      context.emit("error", e);
    };
    const onOpensetting = (e) => {
      context.emit("opensetting", e);
    };
    const onLaunchapp = (e) => {
      context.emit("launchapp", e);
    };
    return {
      btnStyle,
      useThrottle,
      data,
      start,
      end,
      beforeStart,
      onGetphonenumber,
      onGetuserinfo,
      onError,
      onOpensetting,
      onLaunchapp
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_button = resolveComponent("button");
  return openBlock(), createElementBlock("view", {
    class: "kui-box-border kui-flex kui-items-start",
    renderWhole: true
  }, [
    createVNode(_component_button, {
      class: normalizeClass(["kui-flex", _ctx.shadow ? `kui-shadow-${_ctx.shadowSize}` : ""]),
      plain: true,
      disabled: _ctx.disabled,
      style: normalizeStyle(_ctx.btnStyle),
      "form-type": _ctx.formType,
      "open-type": _ctx.openType,
      "hover-class": _ctx.hoverClass,
      "hover-start-time": _ctx.hoverStartTime,
      "hover-stay-time": _ctx.hoverStayTime,
      "app-parameter": _ctx.appParameter,
      "hover-stop-propagation": _ctx.hoverStopPropagation,
      lang: _ctx.lang,
      "session-from": _ctx.sessionFrom,
      "send-message-title": _ctx.sendMessageTitle,
      "send-message-path": _ctx.sendMessagePath,
      "send-message-img": _ctx.sendMessageImg,
      "show-message-card": _ctx.showMessageCard,
      onTouchstart: _ctx.start,
      onTouchend: _ctx.end,
      onClick: _ctx.beforeStart,
      onGetphonenumber: _ctx.onGetphonenumber,
      onGetuserinfo: _ctx.onGetuserinfo,
      onError: _ctx.onError,
      onOpensetting: _ctx.onOpensetting,
      onLaunchapp: _ctx.onLaunchapp
    }, {
      default: withCtx(() => [
        createElementVNode("view", {
          style: normalizeStyle({
            fontSize: _ctx.data.fontSize
          }),
          class: "kui-flex kui-justify-center kui-items-center kui-h-full"
        }, [
          _ctx.loading ? (openBlock(), createElementBlock("view", {
            key: 0,
            class: "kui-relative",
            style: normalizeStyle({
              right: `${_ctx.$slots.default ? 10 : 0}rpx`
            })
          }, [
            createCommentVNode(' <kui-spin :width="55" :height="55" :type="loadingType" :scale="0.7" :background-color="data.color"></kui-spin> ')
          ], 4)) : createCommentVNode("v-if", true),
          _ctx.icon ? (openBlock(), createElementBlock("view", {
            key: 1,
            class: normalizeClass(_ctx.$slots.default ? "kui-mr-1" : "")
          }, [
            createCommentVNode(' <kui-icons :type="icon" :color="data.color" :weight="800" :size="40"></kui-icons> ')
          ], 2)) : createCommentVNode("v-if", true),
          createElementVNode("view", { class: "" }, [
            renderSlot(_ctx.$slots, "default")
          ])
        ], 4)
      ]),
      _: 3
    }, 8, ["class", "disabled", "style", "form-type", "open-type", "hover-class", "hover-start-time", "hover-stay-time", "app-parameter", "hover-stop-propagation", "lang", "session-from", "send-message-title", "send-message-path", "send-message-img", "show-message-card", "onTouchstart", "onTouchend", "onClick", "onGetphonenumber", "onGetuserinfo", "onError", "onOpensetting", "onLaunchapp"])
  ]);
}
const KuiButton = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "E:/work/kviewui/src/packages/components/src/button/index.vue"]]);
const PageProps = {
  bgColor: {
    type: String,
    default: ""
  },
  bgClass: {
    type: String,
    default: ""
  },
  disableScroll: {
    type: Boolean,
    default: false
  },
  paddingY: {
    type: Number,
    default: 44
  },
  paddingX: {
    type: Number,
    default: 24
  },
  title: {
    type: String,
    default: ""
  },
  mode: {
    type: String,
    default: () => {
      var _a2, _b2;
      return (_b2 = (_a2 = inject(configProviderInjectionKey, void 0)) == null ? void 0 : _a2.mode) != null ? _b2 : "light";
    }
  },
  customHeader: {
    type: Boolean,
    default: false
  },
  grayscale: {
    type: Boolean,
    default: false
  },
  fullscreen: {
    type: Boolean,
    default: true
  },
  useBodySlot: {
    type: Boolean,
    default: true
  }
};
const { create } = createComponent("page");
const _sfc_main$1 = create({
  props: PageProps,
  setup(props) {
    console.log(33333);
    const $theme = uni.$kView.theme;
    console.log($theme.colors);
    console.log(inject("$kView"));
    const sysinfo = uni.getSystemInfoSync();
    const data = reactive({
      width: 0,
      height: "",
      pY: `${uni.upx2px(props.paddingY)}px`,
      pX: `${uni.upx2px(props.paddingX)}px`,
      headerHeight: "",
      statusBarHeight: "",
      bgColor: props.bgColor,
      mode: props.mode
    });
    let height;
    if (props.fullscreen) {
      height = useSlots().body || props.useBodySlot ? sysinfo.screenHeight : 0;
    } else {
      height = "";
    }
    data.statusBarHeight = `${sysinfo.statusBarHeight}px`;
    data.headerHeight = "44px";
    height = +height - 80;
    data.height = height ? `${height}px` : "";
    data.bgColor = !props.bgColor ? $theme.colors[data.mode]["grey"][1] : props.bgColor;
    const touched = () => {
      return true;
    };
    const changeMode = () => {
      if (data.mode === "light") {
        data.bgColor = !props.bgColor ? $theme.colors[data.mode]["grey"][1] : props.bgColor;
      }
      if (data.mode === "dark") {
        data.bgColor = props.bgColor ? `hsl(${$theme.colors.darken(data.bgColor).color[0]}, ${$theme.colors.darken(data.bgColor).color[1]}%, ${$theme.colors.darken(data.bgColor).color[2]}%)` : $theme.colors[data.mode]["grey"][1];
      }
    };
    uni.$on("changeMode", (e) => {
      data.mode = e;
      changeMode();
    });
    return {
      data,
      touched
    };
  }
});
const _style_0$1 = {};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    ref: "kuiPage",
    id: "kuiPage",
    style: normalizeStyle({
      filter: `grayscale(${_ctx.grayscale ? 1 : 0})`
    }),
    renderWhole: true
  }, [
    _ctx.customHeader ? (openBlock(), createElementBlock("view", {
      key: 0,
      style: normalizeStyle({
        height: _ctx.data.statusBarHeight,
        backgroundColor: _ctx.data.bgColor
      })
    }, [
      renderSlot(_ctx.$slots, "statusBar")
    ], 4)) : createCommentVNode("v-if", true),
    _ctx.customHeader ? (openBlock(), createElementBlock("view", {
      key: 1,
      class: "kui-px-3 kui-flex kui-justify-center kui-items-center kui-absolute",
      style: normalizeStyle({
        height: _ctx.data.headerHeight,
        backgroundColor: _ctx.data.bgColor,
        borderWidth: "0px"
      })
    }, [
      _ctx.title ? (openBlock(), createElementBlock("u-text", { key: 0 }, toDisplayString(_ctx.title), 1)) : renderSlot(_ctx.$slots, "headerBar", { key: 1 })
    ], 4)) : createCommentVNode("v-if", true),
    !_ctx.disableScroll ? (openBlock(), createElementBlock("view", {
      key: 2,
      class: normalizeClass(["kui-page", _ctx.bgClass]),
      style: normalizeStyle({
        minHeight: `${_ctx.data.height}`,
        backgroundColor: `${_ctx.data.bgColor}`
      })
    }, [
      createElementVNode("view", {
        style: normalizeStyle({
          paddingTop: `${_ctx.data.pY}`,
          paddingBottom: `${_ctx.data.pY}`,
          paddingLeft: `${_ctx.data.pX}`,
          paddingRight: `${_ctx.data.pX}`
        })
      }, [
        renderSlot(_ctx.$slots, "body")
      ], 4)
    ], 6)) : (openBlock(), createElementBlock("view", {
      key: 3,
      class: normalizeClass(["kui-page", _ctx.bgClass]),
      style: normalizeStyle({
        height: `${_ctx.data.height}`,
        backgroundColor: `${_ctx.data.bgColor}`,
        paddingTop: `0px`,
        paddingBottom: `0px`,
        paddingLeft: `${_ctx.data.pX}`,
        paddingRight: `${_ctx.data.pX}`,
        overflow: "hidden"
      }),
      onTouchmove: _cache[0] || (_cache[0] = withModifiers(() => {
      }, ["prevent"])),
      onMousewheel: _cache[1] || (_cache[1] = withModifiers(() => {
      }, ["prevent"]))
    }, [
      renderSlot(_ctx.$slots, "body")
    ], 38)),
    renderSlot(_ctx.$slots, "default")
  ], 4);
}
const KuiPage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["styles", [_style_0$1]], ["__file", "E:/work/kviewui/src/packages/components/src/page/index.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    formatAppLog("log", "at pages/index/index.nvue:22", colorBuilder$1.generate("#F53F3F", { list: true }));
    formatAppLog("log", "at pages/index/index.nvue:23", colorBuilder$1.generate("#F53F3F", { index: 10 }));
    formatAppLog("log", "at pages/index/index.nvue:24", colorBuilder$1.getRgbStr("#00BC79"));
    ref("Hello");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("scroll-view", {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true",
        style: { flexDirection: "column" }
      }, [
        createVNode(KuiPage, { "bg-color": "#FFFFFF" }, {
          body: withCtx(() => [
            createElementVNode("div", { class: "kui-mt-3 kui-h-10" }, [
              createCommentVNode(' <kui-button type="primary" :block="false">open bindingx2</kui-button> '),
              createVNode(KuiButton, { type: "primary" }, {
                default: withCtx(() => [
                  createElementVNode("u-text", null, "\u6D4B\u8BD5\u6309\u94AE\u6D4B\u8BD5\u6309\u94AE\u6D4B\u8BD5\u6309\u94AE\u6D4B\u8BD5")
                ]),
                _: 1
              })
            ]),
            createElementVNode("div", { class: "kui-px-3" }, [
              createVNode(KuiButton, {
                type: "primary",
                block: ""
              }, {
                default: withCtx(() => [
                  createElementVNode("u-text", null, "\u6D4B\u8BD5\u6309\u94AE\u6D4B\u8BD5\u6309\u94AE\u6D4B\u8BD5\u6309\u94AE\u6D4B\u8BD5")
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
});
const _style_0 = { "content": { "": { "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center" } }, "logo": { "": { "height": "200rpx", "width": "200rpx", "marginTop": "200rpx", "marginBottom": "50rpx" } }, "text-area": { "": { "display": "flex", "justifyContent": "center" } }, "title": { "": { "fontSize": "36rpx" } } };
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]], ["__file", "E:/work/kviewui/src/examples/uni-demo-ts/src/pages/index/index.nvue"]]);
export {
  index as default
};

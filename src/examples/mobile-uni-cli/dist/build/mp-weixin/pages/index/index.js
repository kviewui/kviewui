"use strict";const e=require("../../common/vendor.js");Math||e.unref(e.Button)();const o=e.defineComponent({__name:"index",setup(o){console.log(e.colorBuilder.generate("#F53F3F",{list:!0})),console.log(e.colorBuilder.generate("#F53F3F",{index:10})),console.log(e.colorBuilder.getRgbStr("#00BC79"));const r=e.ref("Hello");return(o,n)=>({a:e.t(r.value),b:e.p({type:"primary",block:!1})})}});wx.createPage(o);
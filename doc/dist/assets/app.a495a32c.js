import{d as O,Q as w,am as x,u as M,q as _,k as U,an as q,ao as N,ap as B,aq as D,ar as z,as as L,at as V,au as W,av as $,aw as j,ax as F,ay as H,az as G,M as Q}from"./chunks/framework.426ad03f.js";import{t as J}from"./chunks/theme.af8ca9dc.js";import{i as K}from"./chunks/dark.de32cd02.js";import{c as X}from"./chunks/pinia.67ac4bfd.js";K.value?document.body.setAttribute("arco-theme","dark"):document.body.removeAttribute("arco-theme");window.addEventListener("setItemEvent",a=>{a.key==="vitepress-theme-appearance"&&(a.newValue==="dark"?document.body.setAttribute("arco-theme","dark"):document.body.removeAttribute("arco-theme"))});const Y=()=>{const a=localStorage.setItem;localStorage.setItem=function(s,t){let o=new Event("setItemEvent");o.key=s,o.newValue=t,window.dispatchEvent(o),a.apply(this,arguments)}};var Z=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(a,s){(function(t,o){a.exports=o()})(Z,function(){var t={};t.version="0.2.0";var o=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};t.configure=function(e){var n,r;for(n in e)r=e[n],r!==void 0&&e.hasOwnProperty(n)&&(o[n]=r);return this},t.status=null,t.set=function(e){var n=t.isStarted();e=f(e,o.minimum,1),t.status=e===1?null:e;var r=t.render(!n),u=r.querySelector(o.barSelector),c=o.speed,d=o.easing;return r.offsetWidth,I(function(i){o.positionUsing===""&&(o.positionUsing=t.getPositioningCSS()),y(u,R(e,c,d)),e===1?(y(r,{transition:"none",opacity:1}),r.offsetWidth,setTimeout(function(){y(r,{transition:"all "+c+"ms linear",opacity:0}),setTimeout(function(){t.remove(),i()},c)},c)):setTimeout(i,c)}),this},t.isStarted=function(){return typeof t.status=="number"},t.start=function(){t.status||t.set(0);var e=function(){setTimeout(function(){!t.status||(t.trickle(),e())},o.trickleSpeed)};return o.trickle&&e(),this},t.done=function(e){return!e&&!t.status?this:t.inc(.3+.5*Math.random()).set(1)},t.inc=function(e){var n=t.status;return n?(typeof e!="number"&&(e=(1-n)*f(Math.random()*n,.1,.95)),n=f(n+e,0,.994),t.set(n)):t.start()},t.trickle=function(){return t.inc(Math.random()*o.trickleRate)},function(){var e=0,n=0;t.promise=function(r){return!r||r.state()==="resolved"?this:(n===0&&t.start(),e++,n++,r.always(function(){n--,n===0?(e=0,t.done()):t.set((e-n)/e)}),this)}}(),t.render=function(e){if(t.isRendered())return document.getElementById("nprogress");E(document.documentElement,"nprogress-busy");var n=document.createElement("div");n.id="nprogress",n.innerHTML=o.template;var r=n.querySelector(o.barSelector),u=e?"-100":h(t.status||0),c=document.querySelector(o.parent),d;return y(r,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),o.showSpinner||(d=n.querySelector(o.spinnerSelector),d&&C(d)),c!=document.body&&E(c,"nprogress-custom-parent"),c.appendChild(n),n},t.remove=function(){k(document.documentElement,"nprogress-busy"),k(document.querySelector(o.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&C(e)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var e=document.body.style,n="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return n+"Perspective"in e?"translate3d":n+"Transform"in e?"translate":"margin"};function f(e,n,r){return e<n?n:e>r?r:e}function h(e){return(-1+e)*100}function R(e,n,r){var u;return o.positionUsing==="translate3d"?u={transform:"translate3d("+h(e)+"%,0,0)"}:o.positionUsing==="translate"?u={transform:"translate("+h(e)+"%,0)"}:u={"margin-left":h(e)+"%"},u.transition="all "+n+"ms "+r,u}var I=function(){var e=[];function n(){var r=e.shift();r&&r(n)}return function(r){e.push(r),e.length==1&&n()}}(),y=function(){var e=["Webkit","O","Moz","ms"],n={};function r(i){return i.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(l,p){return p.toUpperCase()})}function u(i){var l=document.body.style;if(i in l)return i;for(var p=e.length,g=i.charAt(0).toUpperCase()+i.slice(1),m;p--;)if(m=e[p]+g,m in l)return m;return i}function c(i){return i=r(i),n[i]||(n[i]=u(i))}function d(i,l,p){l=c(l),i.style[l]=p}return function(i,l){var p=arguments,g,m;if(p.length==2)for(g in l)m=l[g],m!==void 0&&l.hasOwnProperty(g)&&d(i,g,m);else d(i,p[1],p[2])}}();function A(e,n){var r=typeof e=="string"?e:S(e);return r.indexOf(" "+n+" ")>=0}function E(e,n){var r=S(e),u=r+n;A(r,n)||(e.className=u.substring(1))}function k(e,n){var r=S(e),u;!A(e,n)||(u=r.replace(" "+n+" "," "),e.className=u.substring(1,u.length-1))}function S(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function C(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return t})})(T);const b=T.exports,ee=a=>{if(typeof window>"u")return;const{router:s}=a;return setTimeout(()=>{b.configure({showSpinner:!1});const t=s.onBeforeRouteChange,o=s.onAfterRouteChanged;s.onBeforeRouteChange=f=>{b.start(),t==null||t(f)},s.onAfterRouteChanged=f=>{b.done(),o==null||o(f)}}),b};const te={...J,enhanceApp(a){ee(a),a.app.use(X()).use(Y)}};function P(a){if(a.extends){const s=P(a.extends);return{...s,...a,async enhanceApp(t){s.enhanceApp&&await s.enhanceApp(t),a.enhanceApp&&await a.enhanceApp(t)}}}return a}const v=P(te),ne=O({name:"VitePressApp",setup(){const{site:a}=M();return _(()=>{U(()=>{document.documentElement.lang=a.value.lang,document.documentElement.dir=a.value.dir})}),q(),N(),B(),v.setup&&v.setup(),()=>D(v.Layout)}});async function re(){const a=ae(),s=oe();s.provide(z,a);const t=L(a.route);return s.provide(V,t),s.component("Content",W),s.component("ClientOnly",$),Object.defineProperties(s.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),v.enhanceApp&&await v.enhanceApp({app:s,router:a,siteData:j}),{app:s,router:a,data:t}}function oe(){return F(ne)}function ae(){let a=w,s;return H(t=>{let o=G(t);return a&&(s=o),(a||s===o)&&(o=o.replace(/\.js$/,".lean.js")),w&&(a=!1),Q(()=>import(o),[])},v.NotFound)}w&&re().then(({app:a,router:s,data:t})=>{s.go().then(()=>{x(s.route,t.site),a.mount("#app")})});export{re as createApp};

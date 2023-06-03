import{_ as n}from"./chunks/TipsIntroduce.cf1954cf.js";import{_ as l,o as p,c as t,J as o,C as s,a as e,V as c}from"./chunks/framework.426ad03f.js";const q=JSON.parse('{"title":"Image 图片","description":"","frontmatter":{},"headers":[],"relativePath":"component/image.md","filePath":"component/image.md","lastUpdated":1678960845000}'),r={name:"component/image.md"},D=s("h1",{id:"image-图片",tabindex:"-1"},[e("Image 图片 "),s("a",{class:"header-anchor",href:"#image-图片","aria-label":'Permalink to "Image 图片"'},"​")],-1),F=s("p",null,"增强版的 img 标签，提供多种图片填充模式，支持图片加载中提示、加载失败提示。",-1),i=c(`<h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 仅仅H5环境支持</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">KuiImage</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">kviewui</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 或 跨端推荐</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> KuiImage </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">kviewui/src/image/index.vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>基础用法与原生 img 标签一致，可以设置 <code>src</code>、<code>width</code>、<code>height</code>、<code>alt</code> 等原生属性。</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-LYgWa" id="tab-o3CiIo1" checked="checked"><label for="tab-o3CiIo1">Base.vue</label></div><div class="blocks"><div class="language-vue active"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">kui-image</span><span style="color:#89DDFF;"> </span></span>
<span class="line highlighted"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://www.kviewui.com/images/squirrel.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></div></div><h2 id="填充模式" tabindex="-1">填充模式 <a class="header-anchor" href="#填充模式" aria-label="Permalink to &quot;填充模式&quot;">​</a></h2><p>通过 <code>fit</code> 属性可以设置图片填充模式，等同于 <a href="https://uniapp.dcloud.net.cn/component/image.html" target="_blank" rel="noreferrer">uniapp image</a> 组件的 <code>mode</code> 属性，可选值见下方表格。</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-LXZBG" id="tab-FhRTeGe" checked="checked"><label for="tab-FhRTeGe">Mode.vue</label></div><div class="blocks"><div class="language-vue active"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">kui-image</span><span style="color:#89DDFF;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://www.kviewui.com/images/squirrel.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>
<span class="line highlighted"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">fit</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">aspectFill</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">kui-image</span><span style="color:#89DDFF;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://www.kviewui.com/images/squirrel.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>
<span class="line highlighted"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">fit</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">heightFix</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></div></div><h2 id="设置圆角" tabindex="-1">设置圆角 <a class="header-anchor" href="#设置圆角" aria-label="Permalink to &quot;设置圆角&quot;">​</a></h2><p>通过 <code>radius</code> 属性可以设置图片圆角大小，当宽高一致时将为圆形图片。</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-COE1o" id="tab-YRtdu2Z" checked="checked"><label for="tab-YRtdu2Z">Radius.vue</label></div><div class="blocks"><div class="language-vue active"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">kui-image</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://www.kviewui.com/images/squirrel.png</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">custom-class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">kui-mr-3</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">200rpx</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">200rpx</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:radius</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">30</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">kui-image</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://www.kviewui.com/images/squirrel.png</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">200rpx</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">200rpx</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:radius</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">300</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></div></div><h2 id="加载失败" tabindex="-1">加载失败 <a class="header-anchor" href="#加载失败" aria-label="Permalink to &quot;加载失败&quot;">​</a></h2><p>通过 error 属性可以设置加载失败状态</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-CY7i5" id="tab-8GdBWZ8" checked="checked"><label for="tab-8GdBWZ8">Error.vue</label></div><div class="blocks"><div class="language-vue active"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">kui-image</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://www.kviewui.com/images/squirrel.png</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">error</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">200rpx</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:radius</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">30</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></div></div><h2 id="点击事件" tabindex="-1">点击事件 <a class="header-anchor" href="#点击事件" aria-label="Permalink to &quot;点击事件&quot;">​</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-kag3B" id="tab-gR91NB6" checked="checked"><label for="tab-gR91NB6">Click.vue</label></div><div class="blocks"><div class="language-vue active"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">kui-image</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">440rpx</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">440rpx</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:radius</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">30</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://www.kviewui.com/images/squirrel.png</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">onClick</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> onClick </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">showToast</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">图片被点击</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></div></div><h2 id="图片预览" tabindex="-1">图片预览 <a class="header-anchor" href="#图片预览" aria-label="Permalink to &quot;图片预览&quot;">​</a></h2><p>可以通过 preview 属性开启点击图片预览功能</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-dP-T-" id="tab-kvGVdOm" checked="checked"><label for="tab-kvGVdOm">Preview.vue</label></div><div class="blocks"><div class="language-vue active"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">kui-image</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://www.kviewui.com/images/squirrel.png</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">440rpx</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">440rpx</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:radius</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">30</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">preview</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">onPreview</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> onPreview </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">previewImage</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    urls</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://www.kviewui.com/images/squirrel.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">result</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">fail</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">error</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></div></div><h2 id="懒加载" tabindex="-1">懒加载 <a class="header-anchor" href="#懒加载" aria-label="Permalink to &quot;懒加载&quot;">​</a></h2><p>通过 lazyload 属性可以开启图片懒加载</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-q7QFH" id="tab-nAW5DWT" checked="checked"><label for="tab-nAW5DWT">Lazyload.vue</label></div><div class="blocks"><div class="language-vue active"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">kui-image</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://www.kviewui.com/images/squirrel.png</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">200rpx</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:radius</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">30</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">lazyload</span></span>
<span class="line"><span style="color:#89DDFF;">  /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></div></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>src</td><td>图片链接</td><td>String</td><td>-</td></tr><tr><td>fit</td><td>图片填充模式，等同于<a href="https://uniapp.dcloud.net.cn/component/image.html" target="_blank" rel="noreferrer">uniapp image</a>组件的 mode 属性</td><td>ImageFit</td><td>&#39;scaleToFill&#39;</td></tr><tr><td>width</td><td>宽度，默认单位<code>px</code></td><td>String</td><td>100%</td></tr><tr><td>height</td><td>高度，默认单位<code>px</code></td><td>String</td><td>-</td></tr><tr><td>fade-show</td><td>是否开启展示动画</td><td>Boolean</td><td>true</td></tr><tr><td>delay</td><td>动画展示时间，单位<code>ms</code></td><td>Number</td><td>1000</td></tr><tr><td>radius</td><td>圆角大小</td><td>String</td><td>Numer</td></tr><tr><td>scale</td><td>缩放比例</td><td>Number</td><td>1</td></tr><tr><td>error</td><td>是否展示图片加载失败</td><td>Boolean</td><td>false</td></tr><tr><td>loading</td><td>是否展示加载中图片</td><td>Boolean</td><td>true</td></tr><tr><td>preview</td><td>是否开启图片点击预览</td><td>Boolean</td><td>false</td></tr><tr><td>lazyload</td><td>是否开启图片懒加载</td><td>Boolean</td><td>false</td></tr><tr><td>mode <a href="#"><code>公共属性</code></a></td><td>页面模式，见 <a href="/guide/component.html#组件公共属性">组件公共属性</a></td><td>String</td><td><code>light</code></td></tr><tr><td>custom-class <a href="#"><code>公共属性</code></a></td><td>自定义class，见 <a href="/guide/component.html#组件公共属性">组件公共属性</a></td><td>String</td><td>-</td></tr><tr><td>custom-style <a href="#"><code>公共属性</code></a></td><td>自定义style，见 <a href="/guide/component.html#组件公共属性">组件公共属性</a></td><td>CSSProperties</td><td>{}</td></tr><tr><td>space-provide <a href="#"><code>公共属性</code></a></td><td>是否接收space的provide参数，见 <a href="/guide/component.html#组件公共属性">组件公共属性</a></td><td>Boolean</td><td><code>true</code></td></tr></tbody></table><h3 id="imagefit-图片填充模式" tabindex="-1">ImageFit 图片填充模式 <a class="header-anchor" href="#imagefit-图片填充模式" aria-label="Permalink to &quot;ImageFit 图片填充模式&quot;">​</a></h3><p>支持uniapp image组件的 mode 属性值，可参考 <a href="https://uniapp.dcloud.net.cn/component/image.html" target="_blank" rel="noreferrer">uniapp image</a> 组件的 mode 属性</p><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击图片时触发</td><td>--</td></tr><tr><td>preview-image-success</td><td>图片预览成功后触发</td><td>--</td></tr><tr><td>preview-image-fail</td><td>图片预览失败后触发</td><td>--</td></tr></tbody></table><h2 id="平台兼容性说明" tabindex="-1">平台兼容性说明 <a class="header-anchor" href="#平台兼容性说明" aria-label="Permalink to &quot;平台兼容性说明&quot;">​</a></h2><table><thead><tr><th>运行平台</th><th>是否兼容</th></tr></thead><tbody><tr><td>app-vue</td><td>✅</td></tr><tr><td>app-nvue</td><td>✅</td></tr><tr><td>H5</td><td>✅</td></tr><tr><td>微信小程序</td><td>✅</td></tr><tr><td>支付宝小程序</td><td>待测试</td></tr><tr><td>QQ小程序</td><td>✅</td></tr><tr><td>字节小程序</td><td>待测试</td></tr></tbody></table>`,31);function d(y,h,u,g,C,m){const a=n;return p(),t("div",null,[D,F,o(a),i])}const b=l(r,[["render",d]]);export{q as __pageData,b as default};
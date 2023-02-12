<template>
	<view ref="kuiPage" id="kuiPage" :style="{
      filter: `grayscale(${grayscale ? 1 : 0})`,
    }">
		<view :style="{
        height: data.statusBarHeight,
        backgroundColor: data.bgColor,
      }" v-if="customHeader">
			<slot name="statusBar"></slot>
		</view>
		<view class="kui-px-3 kui-flex kui-justify-center kui-items-center kui-absolute" :style="{
        height: data.headerHeight,
        backgroundColor: data.bgColor,
        borderWidth: '0px',
      }" v-if="customHeader">
			<text v-if="title">{{ title }}</text>
			<slot name="headerBar" v-else></slot>
		</view>
		<view class="kui-page" :style="{
        minHeight: `${data.height}`,
        backgroundColor: `${data.bgColor}`,
      }" :class="bgClass" v-if="!disableScroll">
			<view :style="{
          paddingTop: `${data.pY}`,
          paddingBottom: `${data.pY}`,
          paddingLeft: `${data.pX}`,
          paddingRight: `${data.pX}`,
        }">
				<slot name="body"></slot>
			</view>
		</view>
		<view class="kui-page" :style="{
        height: `${data.height}`,
        backgroundColor: `${data.bgColor}`,
        paddingTop: `0px`,
        paddingBottom: `0px`,
        paddingLeft: `${data.pX}`,
        paddingRight: `${data.pX}`,
        overflow: 'hidden',
      }" :class="bgClass" @touchmove.prevent @mousewheel.prevent v-else>
			<slot name="body"></slot>
		</view>
		<slot></slot>
	</view>
</template>

<script lang="ts">
	/**
	 * Page 页面组件
	 * @description 页面容器组件，用于快速搭建页面载体（包括状态栏区域，顶部导航区，body区，底部导航区，悬浮区）
	 * @property {String} bgColor 页面背景色
	 * @property {String} bgClass 页面附加样式表
	 * @property {Boolean} disableScroll = [true/false] 页面是否禁止滚动
	 * 	@value true 是
	 * 	@value false 否
	 * @property {Number} paddingY 页面上下内边距
	 * @property {Number} paddingX 页面左右内边距
	 * @property {String} title 页面标题
	 * @property {String} mode = [light/dark/system] 页面模式
	 * 	@value light 亮色模式
	 * 	@value dark	暗色模式
	 * 	@value system 跟随系统
	 * @example
	 * 	<kui-page title="Kview UI">
	 * 		<template v-slot:body>
	 * 			<view>Kview UI</view>
	 * 		</template>
	 * 	</kui-page>
	 */
	import {
		reactive,
		useSlots,
        inject
	} from "vue";

    import { createComponent } from '@kviewui/utils';
    const { create } = createComponent('page');
		
    import { pageProps } from "./types";
	
	export default create({
		props: pageProps,
		setup(props) {            
			// const {
			// 	proxy
			// }: any = getCurrentInstance();
			// const $theme = proxy.$theme;

            const $theme: KuiNamespace.Theme = uni['$kView'].theme;
			
			const sysinfo = uni.getSystemInfoSync();
			
			const data = reactive({
				width: 0,
				height: '',
				pY: `${uni.upx2px(props.paddingY)}px`,
				pX: `${uni.upx2px(props.paddingX)}px`,
				headerHeight: "",
				statusBarHeight: "",
				bgColor: props.bgColor,
				mode: props.mode,
			});
			
			let height: number|string;
						
			if (props.fullscreen) {
				height = (useSlots().body || props.useBodySlot) ? sysinfo.screenHeight : 0;
			} else {
				height = '';
			}
						
			data.statusBarHeight = `${sysinfo.statusBarHeight}px`;
			data.headerHeight = "44px";
			/* #ifdef MP */
			const menuButtonBoundingClientRect = uni.getMenuButtonBoundingClientRect();
			data.statusBarHeight = `${menuButtonBoundingClientRect.top}px`;
			data.headerHeight = `${menuButtonBoundingClientRect.height}px`;
			/* #endif */
			// height = height - 44;

			// height = +height - 80;
						
			data.height = height ? `${height}px` : '';
			data.bgColor = !props.bgColor ?
				$theme.colors[data.mode]["grey"][1] :
				props.bgColor;
				
			const touched = () => {
				return true;
			};
			
			const changeMode = () => {
				if (data.mode === 'light') {
					data.bgColor = !props.bgColor ? $theme.colors[data.mode]['grey'][1] : props.bgColor;
				}
				if (data.mode === 'dark') {
					data.bgColor = props.bgColor ? `hsl(${$theme.colors.darken(data.bgColor).color[0]}, ${$theme.colors.darken(data.bgColor).color[1]}%, ${$theme.colors.darken(data.bgColor).color[2]}%)` : $theme.colors[data.mode]['grey'][1];
				}
			};

			const getApp = () => {
				return uni.getSystemInfoSync();
			}
			
			uni.$on("changeMode", (e) => {
				data.mode = e;
				changeMode();
			});
			
			return {
				data,
				touched,
				getApp
			}
		}
	});
</script>

<style scoped>
	/* .kui-page1 {
		min-height: v-bind(height);
		background-color: v-bind(bgColor);
		padding-top: v-bind(pY);
		padding-bottom: v-bind(pY);
		padding-left: v-bind(pX);
		padding-right: v-bind(pX);
	} */
</style>

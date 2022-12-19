<template>
	<view :class="block ? 'kui-w-full' : ''" @touchstart="start" @touchend="end" @click="beforeStart">
		<button class="" :class="shadow ? `kui-shadow-${shadowSize}` : ''" :plain="true" :disabled="disabled" :style="{
		  borderWidth: data.btnBorderWidth,
		  borderStyle: data.btnBorderStyle,
		  borderColor: data.btnBorderColor,
		  backgroundColor: data.backgroundColor,
		  backgroundImage: data.backgroundImage,
		  color: data.color,
		  width: data.width,
		  height: data.height,
		  padding: data.padding,
		  opacity: data.opacity,
		  margin: 0,
		  marginTop: `${marginY}px`,
		  borderRadius: `${data.radius}rpx`,
		  lineHeight: 1,
		  flexGrow: (size === 'large' || block) ? 1 : '',
		}"
			:form-type="formType"
			:open-type="openType"
			:hover-class="hoverClass"
			:hover-start-time="hoverStartTime"
			:hover-stay-time="hoverStayTime"
			:app-parameter="appParameter"
			:hover-stop-propagation="hoverStopPropagation"
			:lang="lang"
			:session-from="sessionFrom"
			:send-message-title="sendMessageTitle"
			:send-message-path="sendMessagePath"
			:send-message-img="sendMessageImg"
			:show-message-card="showMessageCard"
			@getphonenumber="onGetphonenumber"
			@getuserinfo="onGetuserinfo"
			@error="onError"
			@opensetting="onOpensetting"
			@launchapp="onLaunchapp"
		>
			<view :style="{
				fontSize: data.fontSize
			}" class="kui-flex kui-justify-center kui-items-center kui-h-full">
				<view v-if="loading" class="kui-relative" :style="{
					right: `${$slots.default ? 10 : 0}rpx`
				}">
					<kui-spin :width="55" :height="55" :type="loadingType" :scale="0.7" :background-color="data.color"></kui-spin>
				</view>
				<view v-if="icon" :class="$slots.default ? 'kui-mr-1' : ''">
					<kui-icons :type="icon" :color="data.color" :weight="800" :size="40"></kui-icons>
				</view>
				<view>
					<slot></slot>
				</view>
			</view>
		</button>
	</view>
</template>

<script lang="ts">
	/**
	 * Button 按钮组件
	 * @description 用于展示自定义按钮
	 * @property {String} type = [primary/secondary/dashed/outline/text] 按钮类型
	 * 	@value primary 主要按钮
	 * 	@value secondary 次要按钮
	 * 	@value dashed 虚线按钮
	 * 	@value outline 线性按钮
	 * 	@value text 文本按钮
	 * @property {String} mode = [light/dark/system] 页面模式
	 * 	@value light 亮色模式
	 * 	@value dark 暗色模式
	 * 	@value system 跟随系统
	 * @property {String} full = [true/false] 通栏样式
	 * 	@value true 是
	 * 	@value false 否
	 * @property {Number} marginY 垂直外间距
	 * @template <kui-button type="secondary">次要按钮</kui-button>
	 */
	import {
		reactive,
		getCurrentInstance,
		defineComponent,
		SetupContext
	} from "vue";
	
	import { useThrottle } from '@kviewui/utils';
    import { theme as Theme } from '../../common/theme'
	
	const name = 'kui-button';
	
	import { ButtonProps } from './props';
	
	export default defineComponent({
		name,
		props: ButtonProps,
		emits: ['click', 'getphonenumber', 'getuserinfo', 'error', 'opensetting', 'launchapp'],
		options: {
			// 小程序虚拟节点设置
			virtualHost: true
		},
		setup(props, context: SetupContext) {
			// 获取当前实例
			const {
				proxy
			}: any = getCurrentInstance();
			const theme = proxy.$theme ?? Theme;
			
			const sysinfo: UniNamespace.GetSystemInfoResult = uni.getSystemInfoSync();
			
			const data = reactive({
				type: props.type,
				btnBorderWidth: '',
				backgroundColor: "",
				backgroundImage: '',
				color: "",
				width: "max-content",
				height: '',
				padding: '',
				opacity: props.disabled ? 0.6 : 1,
				longClick: 0,
				timeOutEvent: 0,
				btnBorderStyle: "solid",
				btnBorderColor: "",
				setMode: props.mode,
				size: props.size,
				radius: props.shape !== 'square' ? 9999 : props.radius,
				fontSize: `${theme.size.fonts['base']}${theme.size.fontUnit}`,
                btnWidth: '',
			});
			
			const init = (steep: number = 0) => {
				// console.log(steep+5);
				if (props.full) {
					data.btnWidth = `${uni.getSystemInfoSync().windowWidth - 30}px`;
				}
				if (!props.text) {
					// 设置按钮背景色和文本色
					data.backgroundColor = data.type ? theme.colors[data.setMode][data.type][5 + steep] : (data.setMode === 'light' ? '#FFFFFF' : theme.colors['dark']['grey'][2]);
					data.color = data.setMode === 'light' ? '#FFFFFF' : theme.colors['dark']['grey'][9];
					data.color = data.type ? '#FFFFFF' : theme.colors[data.setMode]['grey'][7 + steep];
					data.btnBorderColor = data.type ? '' : theme.colors[data.setMode]['grey'][3 + steep];
					data.btnBorderWidth = data.type ? '0rpx' : '1rpx';
					
					// 特殊样式处理
					if (!data.type && steep) {
						data.backgroundColor = theme.colors[data.setMode]['grey'][3];
					}
					// 主题渐变色处理
					if (data.type && props.gradient) {
						data.backgroundImage = `linear-gradient(to right, ${theme.colors[data.setMode][data.type][5 + steep]}, ${theme.colors[data.setMode][data.type][4+steep]})`;
					}
					
				} else {
					data.backgroundColor = steep ? theme.colors[data.setMode]['grey'][2 + steep] : '';
					data.color = data.type ? theme.colors[data.setMode][data.type][5 + steep] : data.color;
				}
				
				if (props.outline) {
					data.btnBorderColor = data.color = theme.colors[data.setMode][data.type][3];
					data.btnBorderWidth = '1rpx';
				}
				
				data.backgroundColor = props.backgroundColor ? props.backgroundColor : data.backgroundColor;
				data.color = props.textColor ? props.textColor : data.color;
				data.btnBorderColor = props.borderColor ? props.borderColor : data.btnBorderColor;
				switch (props.size) {
					case 'normal':
						data.padding = '0 30rpx';
						data.height = '72rpx';
						// data.width = '200rpx';
						break;
					case 'small':
						data.padding = '0 22rpx';
						data.fontSize = `${theme.size.fonts['sm']}${theme.size.fontUnit}`;
						data.height = '56rpx';
						break;
					case 'mini':
						data.padding = '0 20rpx';
						data.fontSize = `${theme.size.fonts['sm']}${theme.size.fontUnit}`;
						data.height = '48rpx';
						break;
					case 'large':
						data.fontSize = `${theme.size.fonts['lg']}${theme.size.fontUnit}`;
						data.padding = '0 40rpx';
						data.height = '96rpx';
						// data.width = `100%`;
				}
								
				data.width = props.shape === 'round' ? data.height : data.width;
				
				/**
				 * 块级按钮样式
				 */
				if (props.block) {
					// data.height = '72rpx';
					data.width = '100%';
				}
			};
			
			uni.$on("changeMode", (e) => {
				data.setMode = e;
				init();
			});
			
			init();
						
			const start = () => {
				if (props.disabled) { return }
				setTimeout(() => {
					init(1);
				}, props.hoverStartTime);
				return true;
			}
			
			const end = () => {
				if (props.disabled) { return }
				setTimeout(() => {
					init();
				}, props.hoverStayTime);
				return true;
			}
			
			const i = 0;
			
			let beforeStart = () => {
				if (props.disabled) { return }
			}
			
			if (props.throttle !== 0) {
				useThrottle(function(e) {
					context.emit('click');
				}, props.throttleWait);
			} else {
				beforeStart = () => {
					if (props.disabled) { return }
					context.emit('click');
				}
			}
			
			const onGetphonenumber = (e) => {
				context.emit('getphonenumber', e);
			}
			
			const onGetuserinfo = (e) => {
				context.emit('getuserinfo', e);
			}
			
			const onError = (e) => {
				context.emit('error', e);
			}
			
			const onOpensetting = (e) => {
				context.emit('opensetting', e);
			}
			
			const onLaunchapp = (e) => {
				context.emit('launchapp', e);
			}
			
			return {
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
			}
		}
	});
</script>

<style scoped>
	uni-button {
		margin-left: 0;
		margin-right: 0;
		box-sizing: border-box;
		width: 0;
	}
	.kui-flex-1 {
		flex: 1 !important;
	}
</style>

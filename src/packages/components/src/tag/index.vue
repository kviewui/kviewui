<template>
	<view class="kui-tag kui-flex" :class="[block ? 'kui-items-center kui-w-full kui-justify-center' : '', customClass]" :style="{
		padding: data.padding,
		height: `${data.height}rpx`,
		borderTopLeftRadius: `${data.topLeftRadius}rpx`,
		borderTopRightRadius: `${data.topRightRadius}rpx`,
		borderBottomLeftRadius: `${data.bottomLeftRadius}rpx`,
		borderBottomRightRadius: `${data.bottomRightRadius}rpx`,
		backgroundColor: data.backgroundColor,
		color: data.textColor,
		fontSize: data.fontSize,
		borderColor: data.borderColor,
		borderWidth: `${data.borderWidth}rpx`,
		lineHeight: `${data.height}rpx`,
		flexGrow: block ? 1 : 0,
		width: block ? 'auto' : 'max-content',
        ...customStyle
	}" v-if="data.show" @click="onClick">
		<view class="kui-relative" :style="{
			left: `${data.closeIconLeft}rpx`,
			fontSize: `${data.iconSize}rpx`,
			top: `${data.iconTop}`,
			lineHeight: 0
		}">
			<slot name="left-icon"></slot>
		</view>
		<view :style="{
			margin: data.textMargin
		}">
			<slot></slot>
		</view>
		<view class="kui-relative" :style="{
			left: `${data.closeIconLeft}rpx`,
			fontSize: `${data.iconSize}rpx`,
			top: `${data.iconTop}`,
			lineHeight: 0
		}">
			<slot name="right-icon"></slot>
		</view>
		<view class="kui-relative" :style="{
			left: `${data.closeIconLeft}rpx`,
			bottom: `20rpx`
		}" v-if="loading" @click="close">
			<view class="kui-leading-normal">
				<kui-animate name="spin" loop>
					<kui-icons :name="loadingIcon"></kui-icons>
				</kui-animate>
			</view>
			<!-- <kui-icons :type="loadingIcon" :size="data.iconSize" color="rgba(0,0,0,0.5)"></kui-icons> -->
		</view>
		<view class="kui-relative" :style="{
			left: `${data.closeIconLeft}rpx`
		}" v-if="closable" @click="close">
			<kui-icons :name="closeIcon" :size="data.iconSize"></kui-icons>
		</view>
	</view>
</template>

<script lang="ts">
	import {
		reactive,
		getCurrentInstance,
		SetupContext,
		watch,
		nextTick
	} from 'vue';

	import { tagProps } from './types';
    import KuiIcons from '../icons/index.vue';
    import KuiAnimate from '../animate/index.vue';

    import { createComponent } from '@kviewui/utils';
    const { create } = createComponent('tag');

	export default create({
		props: tagProps,
        components: { KuiIcons, KuiAnimate },
		emits: ['click', 'click-left-icon', 'click-right-icon', 'close', 'on-check'],
		setup(props, context: SetupContext) {
			const {
				proxy
			}: any = getCurrentInstance();
			const theme: KuiNamespace.Theme = uni['$kView']['theme'];

			const data = reactive({
				type: (props.type && theme.colors[props.mode][props.type]) ? props.type : '',
				padding: '',
				textMargin: '',
				height: 0,
				radius: props.shape !== 'square' ? 999 : 5,
				topLeftRadius: props.shape !== 'square' ? 999 : 5,
				topRightRadius: props.shape !== 'square' ? 999 : 5,
				bottomLeftRadius: props.shape !== 'square' ? 999 : 5,
				bottomRightRadius: props.shape !== 'square' ? 999 : 5,
				backgroundColor: '',
				textColor: props.textColor ? props.textColor : theme.colors[props.mode]['grey'][7],
				borderColor: '',
				borderWidth: 0,
				fontSize: '',
				mode: props.mode,
				iconTop: 0,
				closeIconLeft: 0,
				iconSize: 0,
				slotLeftIconLeft: 0,
				show: true,
				checkable: props.checkable,
				defaultChecked: props.defaultChecked,
				autoChecked: props.autoChecked
			});

			const init = (steep: number = 0) => {
				if (!props.plain) {
					// 设置标签背景色和文本色
					if (!data.type) {
						data.backgroundColor = theme.colors[data.mode]['grey'][2 + steep];
					} else {
						data.backgroundColor = theme.colors[data.mode][data.type][5 + steep];
					}
					data.textColor = (data.mode === 'light' && data.type) ? '#FFFFFF' : theme.colors['dark'][
						'grey'
					][9];
					data.textColor = data.type ? '#FFFFFF' : theme.colors[data.mode]['grey'][7 + steep];
					data.borderColor = props.type ? '' : theme.colors[data.mode]['grey'][3 + steep];
					// 特殊样式处理
					if (!props.type && steep) {
						data.backgroundColor = theme.colors[data.mode]['grey'][3];
					}

					data.backgroundColor = props.backgroundColor ? props.backgroundColor : data
					.backgroundColor;
					data.textColor = props.textColor ? props.textColor : data.textColor;
				} else {
					data.backgroundColor = 'transparent';
					data.borderColor = data.textColor = data.type ? theme.colors[data.mode][props.type][5 +
						steep
					] : theme.colors[data.mode]['grey'][7 + steep];
					data.borderColor = props.borderColor ? props.borderColor : data.textColor;
					data.textColor = props.textColor ? props.textColor : data.textColor;
					data.borderWidth = 1;
				}
				
				// 可选中标签样式
				if (props.checkable) {
					if (!data.defaultChecked) {
						data.backgroundColor = 'transparent';
						data.borderWidth = 0;
						data.textColor = data.type ? theme.colors[data.mode][data.type][5 + steep] : theme.colors[data.mode]['grey'][7 + steep];
					} else {
						data.backgroundColor = data.type ? theme.colors[data.mode][data.type][1 + steep] : theme.colors[data.mode]['grey'][2 + steep];
						data.textColor = data.type ? theme.colors[data.mode][data.type][5 + steep] : theme.colors[data.mode]['grey'][7 + steep];
					}
				}

				// 标签大小
				switch (props.size) {
					case 'mini':
						data.padding = '16rpx 8rpx';
						data.textMargin = '0 4rpx';
						data.fontSize = '10px';
						// data.height = 32;
						data.iconTop = 2;
						data.closeIconLeft = 0;
						data.iconSize = 28;
						break;
					case 'small':
						data.padding = '22rpx 12rpx';
						data.textMargin = '0 6rpx';
						data.fontSize = '12px';
						// data.height = 48;
						data.iconTop = 8;
						data.closeIconLeft = 0;
						data.iconSize = 32;
						break;
					case 'large':
						data.padding = '36rpx 36rpx';
						data.textMargin = '0 10rpx';
						data.fontSize = '16px';
						// data.height = 70;
						data.iconTop = 19;
						data.closeIconLeft = 10;
						data.iconSize = 40;
						break;
					default:
						data.padding = '30rpx 20rpx';
						data.textMargin = '0 10rpx';
						data.fontSize = '14px';
						// data.height = 64;
						data.iconTop = 15;
						data.closeIconLeft = 2;
						data.iconSize = 36;
						break;
				}
				
				// 半圆角标签
				if (props.halfRound === 'left') {
					data.topRightRadius = 5;
					data.bottomRightRadius = 5;
					data.textMargin = '0';
				}
				
				if (props.halfRound === 'right') {
					data.topLeftRadius = 5;
					data.bottomLeftRadius = 5;
					data.textMargin = '0';
				}
			}

			init();

			uni.$on("changeMode", (e) => {
				data.mode = e;
				init();
			});
			
			const clickLeftIcon = () => {
				context.emit('click-left-icon', props.name);
			}
			
			const clickRightIcon = () => {
				context.emit('click-right-icon', props.name);
			}
			
			const close = () => {
				data.show = false;
				context.emit('close', props.name);
			}
			
			const onClick = () => {
				context.emit('click');
			}
			
			const getState = () => {
				return {
					name: props.name,
					checked: data.defaultChecked
				}
			}
			
			watch(
				() => [props.defaultChecked, props.autoChecked],
				(newVal, oldVal) =>  {
					if (newVal[1]) {
						data.defaultChecked = newVal[0];
						init();
					}
				}
			);

			return {
				data,
				clickLeftIcon,
				clickRightIcon,
				close,
				onClick,
				getState
			}
		}
	});
</script>

<style lang="less">
	.kui-tag {
		margin-left: 0;
		margin-right: 0;
		box-sizing: border-box;
		width: max-content;
		border-style: solid;
	}
</style>

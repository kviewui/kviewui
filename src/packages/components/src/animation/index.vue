<template>
	<view class="kui-animation" :class="state.name" :style="{
		animationDuration: `${state.duration}${state.durationUnit}`,
		animationTimingFunction: `${timingFunctionMap[state.timingFunction]}`,
		animationDelay: `${state.delay}${state.delayUnit}`,
		animationIterationCount: state.infiniteState,
		animationDirection: state.direction,
		animationFillMode: state.fillMode,
		animationPlayState: state.runingState
	}">
		<slot></slot>
	</view>
</template>

<script lang="ts">
	import {
		reactive,
		defineComponent,
		SetupContext,
		toRefs,
		nextTick
	} from 'vue';

	const name = 'kui-animation';
	import AnimationProps from './props';

    import { createComponent } from '@kviewui/utils';

    const { create } = createComponent('animation');

	import {
		timingFunctionMap
	} from '../../common/theme/animation';

	export default create({
		props: AnimationProps,
		emits: ['changeRuningState', 'changeState', 'restart'],
		setup(props, context: SetupContext) {
			let timer = null;
			
			const state = reactive({
				name: props.name,
				duration: props.duration,
				durationUnit: props.durationUnit,
				timingFunction: props.timingFunction,
				delay: props.delay,
				delayUnit: props.delayUnit,
				infiniteState: props.infinite ? 'infinite' : props.interationCount,
				interationCount: props.interationCount,
				direction: props.direction,
				fillMode: props.fillMode,
				animationName: '',
				runingState: props.runing ? 'runing' : 'paused'
			});

			const changeRuningState = (): void => {
				nextTick(() => {
					state.runingState = state.runingState == 'runing' ? 'paused' : 'runing'
				})
				context.emit('changeRuningState');
			}
			
			const restart = (name: string = props.name): void => {
				nextTick(() => {
					state.name = '';
					state.runingState = '';
					console.log(state.runingState);
					timer = setTimeout(() => {
						state.name = name;
					})
					clearTimeout(timer);
				})
				context.emit('restart');
			}
			
			const changeState = (key: string, value: string): void => {
				nextTick(() => {
					if (key == 'interationCount') {
						state.infiniteState = state.interationCount = Number(value);
					} else {
						if (key == 'infinite') {
							state.infiniteState = (key == 'infinite' && value) ? 'infinite' : state.interationCount;
						} else {
							if (!state.hasOwnProperty(key)) {
								console.warn('animation-debug: 该属性不存在');
							} else {
								state[key] = value;
							}
						}
					}
				});
				context.emit('changeState');
			}

			return {
				timingFunctionMap,
				changeRuningState,
				changeState,
				restart,
				state
			}
		}
	});
</script>

<style lang="less" scoped>
	@import './less/index.less';
	
	.a {
		animation-iteration-count: infinite;
	}
</style>

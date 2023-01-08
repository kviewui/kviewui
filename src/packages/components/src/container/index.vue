<template>
	<view :class="[customClass]" class="kui-container kui-flex kui-flex-col kui-flex-1" :style="{
		width: width,
		height: height,
		color: data.backgroundColor,
		borderTopLeftRadius: data.topLeftRadius,
		borderTopRightRadius: data.topRightRadius,
		borderBottomLeftRadius: data.bottomLeftRadius,
		borderBottomRightRadius: data.bottomRightRadius,
		paddingLeft: `${paddingX}rpx`,
		paddingRight: `${paddingX}rpx`,
		paddingTop: `${paddingY}rpx`,
		paddingBottom: `${paddingY}rpx`,
		marginLeft: `${marginX}rpx`,
		marginRight: `${marginX}rpx`,
		marginTop: `${marginY}rpx`,
		marginBottom: `${marginY}rpx`,
        backgroundColor: data.backgroundColor,
        ...customStyle
	}">
		<slot></slot>
	</view>
</template>

<script lang="ts">
	import {
		reactive,
		defineComponent,
		getCurrentInstance,
		onMounted
	} from 'vue';

    import { createComponent } from '@kviewui/utils';

    const { create } = createComponent('container');

	import { containerProps } from './types';

	export default create({
		props: containerProps,
		setup(props) {

            const theme: KuiNamespace.Theme = uni.$kView.theme;

			const data = reactive({
				mode: props.mode,
				backgroundColor: props.backgroundColor,
				topLeftRadius: props.topLeftRadius,
				topRightRadius: props.topRightRadius,
				bottomLeftRadius: props.bottomLeftRadius,
				bottomRightRadius: props.bottomRightRadius,
				darken: props.darken
			});
						
			data.backgroundColor = !props.backgroundColor ? theme.colors[data.mode]['grey'][1] : props.backgroundColor;
			
			if (props.radius) {
				data.topLeftRadius = data.topRightRadius = data.bottomLeftRadius = data.bottomRightRadius = props.radius;
			}
			const changeMode = () => {
				if (data.mode === 'light') {
					data.backgroundColor = !props.backgroundColor ? theme.colors[data.mode]['grey'][1] : props.backgroundColor;
				}
				if (data.mode === 'dark') {
					data.backgroundColor = !props.backgroundColor ? theme.colors[data.mode]['grey'][1] : `hsl(${theme.colors.darken(props.backgroundColor, data.darken).color[0]}, ${theme.colors.darken(props.backgroundColor, data.darken).color[1]}%, ${theme.colors.darken(props.backgroundColor, data.darken).color[2]}%)`;
				}
			};

			uni.$on("changeMode", (e) => {
				data.mode = e;
				changeMode();
			});

			return {
				data
			}
		}
	});
</script>

<style lang="less" scoped>
	// .kui-container {
	// 	width: var(--width);
	// 	height: var(--height);
	// 	background-color: var(--color);
	// 	padding-left: var(--pX);
	// 	padding-right: var(--paddingX);
	// 	padding-top: var(--paddingY);
	// 	padding-bottom: var(--paddingY);
	// 	margin-left: var(--marginX);
	// 	margin-right: var(--marginX);
	// 	margin-top: var(--marginY);
	// 	margin-bottom: var(--marginY);
	// 	box-sizing: border-box;
	// 	line-height: 1;
	// }
</style>

<template>
	<view class="kui-leading-none" :class="[elId, customClass]">
		<!-- <image :src="src" style="width: 0px;height: 0px;" @load="onLoadSuccess" @error="onLoadError"></image> -->
		<view class="
        kui-bg-grey-2
        kui-flex
        kui-flex-col
        kui-justify-center
        kui-items-center
      " :class="data.animateShow ? 'kui-animate-pulse' : ''" :style="{
        width: width,
        height: height,
        borderRadius: `${radius}rpx`,
      }" v-if="data.loading || data.loadError">
			<kui-icons name="iov-pic" :size="50" class="kui-text-gray-300" v-if="data.loading" />
            <kui-icons name="rxa-image-error-filled" :size="150" class="kui-text-gray-300" v-if="data.loadError" />
		</view>
        <template v-if="!data.loading && !data.loadError">
            <image
                :src="src"
                :style="imageStyle"
                :mode="disableFit ? '' : fit"
                @click="onClick"
            />
        </template>
	</view>
</template>

<script lang="ts">
	/**
	 * Image 图片组件
	 * @description 自定义图片组件，一般用于自定义图片展示
	 * @tutorial
	 * @property {String} src 图片链接
	 * @property {Number} width 图片宽度
	 * @property {Number} height 图片高度
	 * @property {String} fit = [scaleToFill|aspectFit|aspectFill|widthFix|heightFix|top|bottom|center|left|right|top left|top right|bottom left|bottom right | none] 图片裁剪、缩放的模式
	 * 	@value scaleToFill 不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
	 * 	@value aspectFit 保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。
	 * 	@value aspectFill 保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。
	 * 	@value widthFix 宽度不变，高度自动变化，保持原图宽高比不变
	 * 	@value heightFix 高度不变，宽度自动变化，保持原图宽高比不变 App 和 H5 平台 HBuilderX 2.9.3+ 支持、微信小程序需要基础库 2.10.3
	 * 	@value top 不缩放图片，只显示图片的顶部区域
	 * 	@value bottom 不缩放图片，只显示图片的底部区域
	 * 	@value center 不缩放图片，只显示图片的中间区域
	 * 	@value left 不缩放图片，只显示图片的左边区域
	 * 	@value right 不缩放图片，只显示图片的右边区域
	 * 	@value top left 不缩放图片，只显示图片的左上边区域
	 * 	@value top right 不缩放图片，只显示图片的右上边区域
	 * 	@value bottom left 不缩放图片，只显示图片的左下边区域
	 * 	@value bottom right	 不缩放图片，只显示图片的右下边区域
	 * 	@value none 禁止自动缩放图片
	 * @property {Boolean} fadeShow = [true/false] 显示动画
	 *  @value true 是
	 *  @value false 否
	 * @property {Number} delay 图片显示延迟时间，用来定义动画时间
	 * @property {Number} radius 图片圆角
	 * @example <kui-image src="/static/a/b/c.png" width="100" mode="widthFix"></kui-image>
	 */
	import {
		reactive,
		SetupContext,
		PropType,
		watch,
		onMounted,
		onUnmounted,
		nextTick,
		useSlots,
        CSSProperties,
computed
	} from "vue";

    import KuiIcons from "../icons/index.vue";

    import { createComponent } from '@kviewui/utils';
    const { create } = createComponent('image');

	import { imageProps } from './types';
	
	import { getNumberByUnit, getUnitByUnit } from '@kviewui/utils';
    import { getElId } from '@kviewui/utils';
	
	var intersectionObserver;

	export default create({
		props: imageProps,
        components: {
            KuiIcons
        },
		emits: ['click', 'previewImageSuccess', 'previewImageFail'],
		setup(props, context: SetupContext) {
			
			const data = reactive({
				animateShow: props.fadeShow,
				loadError: props.error,
				loading: props.loading,
				iconSize: 10,
				slotLoading: useSlots().loading,
				slotError: useSlots().error,
				src: props.src,
				lazyloaded: false
			});
			
			// 随机生成元素ID
			const elId = getElId();

            const imageStyle = computed(() => {
                const style: CSSProperties = reactive({});

                style.width = props.width;
                style.height = props.height;
                style.borderRadius = `${props.radius}rpx`;
                style.transform = `scale(${props.scale})`;

                return style;
            });

			// if (props.delay) {
			// 	setTimeout(() => {
			// 		data.loadError = props.error;
			// 		data.animateShow = false;
			// 	}, props.delay);
			// }

			const onLoadSuccess = () => {
				setTimeout(() => {
					data.loadError = props.error;
                    data.loading = false;
					data.animateShow = false;
				}, props.delay);
			};

			const onLoadError = () => {
				data.loadError = true;
			};

            // 读取图片信息
            uni.getImageInfo({
                src: props.src,
                success: () => {
                    onLoadSuccess();
                },
                fail: () => {
                    onLoadError();
                }
            })
			
			const onClick = (e) => {
				if (!props.preview) {
					context.emit('click');
				} else {
					uni.previewImage({
						urls: [props.src],
						current: 0,
						success: (res) => {
							context.emit('previewImageSuccess', res);
						},
						fail: (fail) => {
							context.emit('previewImageFail', fail);
						}
					})
				}
			}
			
			let imageHeight = 0;
			
			// const getImageInfo = () => {
			// 	uni.getImageInfo({
			// 		src: props.src,
			// 		success: (res) => {
			// 			imageHeight = res.height;
			// 			data.loading = false;
			// 		}
			// 	})
			// }
			
			const getImageHeight = () => {
				const src = props.src;
				const height = props.height;
				
				if (height) {
					if (getUnitByUnit(height) === 'px') {
						data.iconSize = getNumberByUnit(height);
					} else {
						const number: any = getNumberByUnit(height);
						data.iconSize = number / 2;
					}
				} else {
					data.iconSize = imageHeight;
				}
			}
			
			// getImageInfo();
			
			setTimeout(() => {
				getImageHeight();
			}, 800);
			
			onMounted(() => {
                nextTick(() => {
                    if (props.lazyload) {
						intersectionObserver = uni.createIntersectionObserver(this);
						
						intersectionObserver.relativeToViewport({bottom: 0}).observe(`.${elId}`, (res) => {
							if (res.intersectionRatio > 0) {
								data.loading = false;
							} else if (res.intersectionRatio <= 0) {
								data.loading = true;
							}
						});
					}
                });
			});
			
			onUnmounted(() => {
                if (intersectionObserver) {
				    intersectionObserver.disconnect();
                }
			});

			return {
				props,
				data,
                imageStyle,
				elId,
				onLoadSuccess,
				onLoadError,
				onClick
			};
		},
	});
</script>

<style scoped>
    /* #ifndef APP-NVUE */
    image {
		will-change: transform;
	}
	view {
		align-items: baseline;
	}
    /* #endif */
</style>

<template>
    <view class="kui-flex kui-items-start" :style="{
        ...spaceOptions
    }">
        <view class="kui-tag kui-flex kui-items-center"
            :class="[block ? 'kui-flex-1 kui-justify-center' : '', customClass]" :style="{
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
            <view class="kui-relative kui-ml-1" :style="{
                // left: `${data.closeIconLeft}rpx`,
                fontSize: `${data.iconSize}rpx`,
                // top: `${data.iconTop}`,
                lineHeight: 0
            }">
                <slot name="left-icon"></slot>
            </view>
            <view :style="{
                margin: data.textMargin
            }">
                <slot>
                    <kui-text :content="text" :color="data.textColor" :size="data.fontSize" />
                </slot>
            </view>
            <view class="kui-relative kui-mr-1" :style="{
                // left: `${data.closeIconLeft}rpx`,
                fontSize: `${data.iconSize}rpx`,
                // top: `${data.iconTop}`,
                lineHeight: 0
            }">
                <slot name="right-icon"></slot>
            </view>
            <view class="kui-relative" :style="{
                // left: `${data.closeIconLeft}rpx`
            }" v-if="loading">
                <view class="kui-leading-normal kui-mr-1">
                    <kui-animate name="spin" loop>
                        <kui-icons :size="data.iconSize" :name="loadingIcon"></kui-icons>
                    </kui-animate>
                </view>
                <!-- <kui-icons :type="loadingIcon" :size="data.iconSize" color="rgba(0,0,0,0.5)"></kui-icons> -->
            </view>
            <view class="kui-relative kui-mr-1" :style="{
                // left: `${data.closeIconLeft}rpx`
            }" v-if="closable" @click="close">
                <kui-icons :name="closeIcon" :size="data.iconSize"></kui-icons>
            </view>
        </view>
    </view>
</template>

<script lang="ts">
import {
    reactive,
    getCurrentInstance,
    SetupContext,
    watch,
    nextTick,
    inject,
    onMounted
} from 'vue';

import { tagProps } from './types';
import KuiIcons from '../icons/index.vue';
import KuiText from '../text/index.vue';
import KuiAnimate from '../animate/index.vue';
import { spaceProviderKey } from '../../global/symbols';

import { createComponent, getUnitSize } from '@kviewui/utils';
import { SpaceProviderOptions } from '@kviewui/components/global/types';
const { create } = createComponent('tag');

export default create({
    props: tagProps,
    components: { KuiIcons, KuiAnimate, KuiText },
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
                    data.padding = '8px 4px';
                    data.textMargin = '0 2px';
                    data.fontSize = '12px';
                    // data.height = 32;
                    // data.iconTop = 2;
                    data.closeIconLeft = 0;
                    data.iconSize = 28;
                    break;
                case 'small':
                    data.padding = '10px 3px';
                    data.textMargin = '0 2px';
                    data.fontSize = '14px';
                    // data.height = 48;
                    // data.iconTop = 8;
                    data.closeIconLeft = 0;
                    data.iconSize = 32;
                    break;
                case 'large':
                    data.padding = '14px 5px';
                    data.textMargin = props.shape !== 'capsule' ? '0 6px' : '0 3px';
                    data.fontSize = '18px';
                    // data.height = 70;
                    // data.iconTop = 19;
                    data.closeIconLeft = 10;
                    data.iconSize = 40;
                    break;
                default:
                    data.padding = '12px 3px';
                    data.textMargin = props.shape !== 'capsule' ? '0 4px' : '0 2px';
                    data.fontSize = '16px';
                    // data.height = 64;
                    // data.iconTop = 15;
                    data.closeIconLeft = 2;
                    data.iconSize = 18;
                    break;
            }

            // 半圆角标签
            if (props.halfRound === 'left') {
                data.topRightRadius = 5;
                data.bottomRightRadius = 5;
                data.textMargin = '2px';
            }

            if (props.halfRound === 'right') {
                data.topLeftRadius = 5;
                data.bottomLeftRadius = 5;
                data.textMargin = '2px';
            }
        }

        init();

        uni.$on("changeMode", (e) => {
            data.mode = e;
            init();
        });

        const clickLeftIcon = (e: any) => {
            context.emit('click-left-icon', {
                eventType: 'click-left-icon',
                name: props.name
            }, e);
        }

        const clickRightIcon = (e: any) => {
            context.emit('click-right-icon', {
                eventType: 'click-right-icon',
                name: props.name
            }, e);
        }

        const close = (e: any) => {
            data.show = false;
            context.emit('close', {
                eventType: 'close',
                name: props.name
            }, e);
        }

        const onClick = (e: any) => {
            context.emit('click', {
                eventType: 'click',
                name: props.name
            }, e);
        }

        const getState = () => {
            return {
                name: props.name,
                checked: data.defaultChecked
            }
        }

        const spaceProviderOptions = inject(spaceProviderKey, reactive({
            marginRight: 0,
            marginBottom: 0
        }));

        const spaceOptions: SpaceProviderOptions = reactive({
            marginRight: getUnitSize(spaceProviderOptions.marginRight),
            marginBottom: getUnitSize(spaceProviderOptions.marginBottom)
        })

        watch(
            () => [props.defaultChecked, props.autoChecked],
            (newVal, oldVal) => {
                if (newVal[1]) {
                    data.defaultChecked = newVal[0];
                    init();
                }
            }
        );

        return {
            data,
            spaceOptions,
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
/* #ifndef APP-NVUE */
.kui-tag {
    margin-left: 0;
    margin-right: 0;
    box-sizing: border-box;
    width: max-content;
    border-style: solid;
}

/* #endif */
</style>

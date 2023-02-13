<template>
    <view :render-whole="true" class="kui-flex" :class="[(data.direction === 'column' && block) ? 'kui-w-full1' : '']" :style="{
    	justifyContent: data.justify,
    	flexDirection: data.direction,
    	alignItems: data.align,
        ...spaceStyle
    }">
        <slot></slot>
    </view>
</template>

<script lang="ts">
/**
 * Space 布局间隔组件
 * @description 用于快速页面flex布局并设置间距
 * @property {String} justify = [start/end/center/space-between/space-around/space-evenly]
 * 	@value start 文档主轴起点对齐
 * 	@value end 文档主轴终点方向对齐
 * 	@value center 文档主轴中点对齐
 * 	@value space-between 文档主轴两端对齐
 * 	@value space-evenly 文档主轴平均对齐
 * @property {String} align = [start/end/center/baseline/stretch]
 * 	@value start 文档侧轴起点对齐
 * 	@value end 文档侧轴终点对齐
 * 	@value center 文档侧轴中点对齐
 * 	@value baseline 文档文字对齐
 * 	@value stretch 如果项目未设置高度或设为auto，将占满整个容器的高度
 * @property {String} direction = [row/column]
 * 	@value row 水平排列
 * 	@value column 垂直排列
 * @property {Number} gap 元素间距
 */
import {
    defineComponent,
    reactive,
    SetupContext,
    provide,
    onMounted,
    nextTick,
    computed,
    watch,
    toRefs,
    onBeforeMount,
ref,
CSSProperties
} from 'vue';

import { spaceProviderKey } from '../../global/symbols';
import { spaceProps } from './types';
import { SpaceComponentProps, SpaceProviderOptions } from '../../global/types';

import { createComponent, isArray } from '@kviewui/utils';
const { create } = createComponent('space');

export default defineComponent({
    props: spaceProps,
    options: {
        // 小程序虚拟节点设置
        virtualHost: true
    },
    setup(props, context: SetupContext) {
        let childrens = reactive([]);

        const data = reactive({
            justify: props.justify == 'flex-end' ? 'flex-end' : props.justify,
            direction: props.direction,
            align: props.align,
            rowGap: 0,
            columnGap: 0
        });

        const spaceStyle = computed(() => {
            const style: CSSProperties = reactive({});
            
            style.flexWrap = props.wrap ? 'wrap' : 'nowrap';

            return style;
        });

        if (isArray(props.gap)) {
            if (props.gap.length === 0) {
                data.rowGap = data.columnGap = 10;
            } else if (props.gap.length === 1) {
                data.rowGap = data.columnGap = props.gap[0] as any;
            } else {
                data.rowGap = props.gap[0] as any;
                data.columnGap = props.gap[1] as any;
            }
        } else {
            data.rowGap = data.columnGap = props.gap as any;
        }

        const pushChildrens = (item: any) => {
            childrens.push(item);
        }

        // watch(childrens, (newVal) => {
        //     if (childrens.length > 0) {
        //         if (childrens) {
        //             childrens.forEach((vm: SpaceComponentProps, idx: number) => {
        //                 vm.marginRight = vm.right <= data.rowGap ? '' : `${data.rowGap}px`;
        //                 vm.marginRight = `${data.rowGap}px`;
        //                 vm.marginBottom = `${data.columnGap}px`;
        //             });
        //         }
        //     }
        // }, { immediate: true, deep: true });
        const updateDom = () => {
            // #ifdef APP-NVUE
            if (childrens.length > 0) {
                if (childrens) {
                    childrens.forEach((vm: SpaceComponentProps, idx: number) => {
                        // #ifndef APP-NVUE
                        vm.marginRight = `${data.rowGap as number}px`;
                        vm.marginBottom = `${data.columnGap as number}px`;
                        // #endif
                        // #ifdef APP-NVUE
                        vm.marginRight = `${data.columnGap as number}px`;
                        vm.marginBottom = `${data.rowGap as number}px`;
                        // #endif
                    });
                }
            }
            // #endif
        }

        const init = () => {
            switch (props.align) {
                case 'flex-start':
                    data.align = props.block ? 'center' : props.align;
                    break;
                case 'flex-end':
                    data.align = 'flex-end';
                    break;
            }
        }

        // nextTick(() => {
        //     if (childrens.length > 0) {
        //         if (childrens) {
        //             childrens.forEach((vm: SpaceComponentProps, idx: number) => {
        //                 vm.marginRight = vm.right <= data.rowGap ? '' : `${data.rowGap}px`;
        //                 vm.marginRight = `${data.rowGap}px`;
        //                 vm.marginBottom = `${data.columnGap}px`;
        //             });
        //         }
        //     }
        // })

        init();

        const providerOptions: SpaceProviderOptions = reactive({
            marginRight: data.rowGap ?? 0,
            marginBottom: data.columnGap ?? 0
        });

        provide(spaceProviderKey, providerOptions);

        // provide('spaceComponent', computed(() => childrens));

        return {
            data,
            pushChildrens,
            childrens,
            updateDom,
            spaceStyle
        }
    }
});
</script>

<style>
/* .space-container {
		width: 100%;
		height: 100%;
	} */
</style>
<template>
    <view class="kui-flex kui-flex-col" :class="getCustomClass(customClass)" :style="{...customStyle}">
        <view class="kui-flex kui-flex-col kui-w-full">
            <view class="">
                <slot name="title">
                    <text :style="{
                        color: data.color,
                        fontSize: `${theme.size.fonts['lg']}${theme.size.fontUnit}`
                    }">{{ title }}</text>
                </slot>
            </view>
            <view class="kui-mt-1" :style="{
                color: data.color,
                fontSize: `${theme.size.fonts['base']}${theme.size.fontUnit}`
            }">
                <slot name="desc">
                    <text :style="{
                        color: data.color,
                        fontSize: `${theme.size.fonts['base']}${theme.size.fontUnit}`
                    }">{{ desc }}</text>
                </slot>
            </view>
        </view>
        <view class="kui-mt-1">
            <slot></slot>
        </view>
    </view>
</template>

<script lang="ts">
/**
 * Cell Group 单元格分组组件
 * @description 单元格分组组件
 * @property {String} title 分组标题
 * @property {String} desc 分组描述内容
 * @property {String} type=[normal/space] 分组单元格类型
 * 	@value normal 常规单元格分组展示
 * 	@value space 间距单元格分组展示
 * @template
 * <kui-cell-group title="Cell 分组标题" type="space">
        <kui-cell title="测试标题1" desc="我是描述内容" desc-color="orange" @taped="test">
            <template v-slot:left-icon>
                <kui-icons type="ios-arrow-right" :top="10" :size="46" color="#999" :weight="100"></kui-icons>
            </template>
            <template v-slot:right-icon>
                <view>测试</view>
            </template>
        </kui-cell>
        <kui-cell title="测试标题1" desc="我是描述内容" desc-color="orange" @taped="test">
            <template v-slot:left-icon>
                <kui-icons type="ios-arrow-right" :top="10" :size="46" color="#999" :weight="100"></kui-icons>
            </template>
            <template v-slot:right-icon>
                <view>测试</view>
            </template>
        </kui-cell>
    </kui-cell-group>
 */
import {
    reactive,
    defineComponent,
    getCurrentInstance,
    SetupContext,
    provide,
    onMounted,
    nextTick
} from 'vue';

import { cellGroupProps } from './types';
import { createComponent } from '@kviewui/utils';
import { getCustomClass } from '../../global/tools';
import { colorBuilder } from '@kviewui/color-builder';

const { create } = createComponent('cell-group');

export default create({
    props: cellGroupProps,
    options: {
        // 小程序虚拟节点设置
        virtualHost: false
    },
    setup(props, context: SetupContext) {
        // const {
        // 	proxy
        // }: any = getCurrentInstance();
        // const theme = proxy.$theme;
        const theme: KuiNamespace.Theme = uni['$kView'].theme;

        const data = reactive({
            // color: theme.colors['light']['grey'][6]
            color: colorBuilder.generate('grey', {
                dark: props.mode === 'dark',
                list: true
            })[5]
        });

        const childrens = reactive([]);

        const init = () => {
            nextTick(() => {
                if (childrens) {
                    childrens.forEach((vm: any, idx: number) => {
                        if (props.cellTitleWeight > 0) {
                            vm.titleWeight = props.cellTitleWeight;
                        }
                        if (props.cellRadius > 0) {
                            vm.topRadius = vm.bottomRadius = props.cellRadius;
                        }
                        if (props.type == 'normal') {
                            vm.topRadius = idx > 0 ? 0 : vm.topRadius;
                            if (childrens.length > 1 && childrens.length < 3) {
                                vm.isBorder = idx == 0 ? true : false;
                            } else if (childrens.length >= 3) {
                                vm.isBorder = (idx >= 0 && idx < childrens.length - 1) ?
                                    true : false;
                            }
                        } else if (props.type == 'space') {
                            vm.marginBottom = 30;
                        }
                    })
                }
            })
        };

        onMounted(() => {
            init();
        });

        provide('cell-group', {
            childrens
        });

        return {
            theme,
            data,
            getCustomClass
        }
    }
});
</script>

<style>

</style>

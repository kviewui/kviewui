<template>
    <view class="kui-switch kui-flex kui-items-center" :id="rootState.id" :style="rootStyle" @tap="onClick">
        <view class="kui-switch-button kui-flex kui-justify-center kui-items-center" :class="[buttonState.status]"
            :style="buttonStyle">
            <!-- <kui-animation name="rotate-center" :duration="1" runing infinite v-if="rootState.loading">
				<kui-icons :size="iconState.size" :color="iconState.color" type="spinner6"></kui-icons>
			</kui-animation> -->
            <!-- #ifndef APP-NVUE -->
            <view class="open-text" v-if="activeText && modelValue">
                <kui-text :content="activeText" :size="textState.size" :color="textState.color" />
            </view>
            <view class="close-text" v-if="inactiveText && !modelValue">
                <kui-text :content="inactiveText" :size="textState.size" :color="textState.color" />
            </view>
            <!-- #endif -->
        </view>
        <!-- #ifdef APP-NVUE -->
        <view class="nvue-open-text" v-if="activeText && modelValue">
            <kui-text :content="activeText" :size="textState.size" :color="textState.color" />
        </view>
        <view class="nvue-close-text" v-if="inactiveText && !modelValue">
            <kui-text :content="inactiveText" :size="textState.size" :color="textState.color" />
        </view>
        <!-- #endif -->
    </view>
</template>

<script lang="ts">
import {
    reactive,
    getCurrentInstance,
    CSSProperties,
    watch,
    computed,
    defineComponent,
    SetupContext,
    nextTick
} from 'vue';

import KuiText from '../text/index.vue';
// import KuiAnimation from '../animation/index.vue';

import { switchProps } from './types';
import { colorBuilder } from '@kviewui/color-builder';
import { createComponent } from '@kviewui/utils';

const { create } = createComponent('switch');

const name = 'kui-switch';

export default create({
    props: switchProps,
    emits: ['update:modelValue', 'change'],
    components: {
        KuiText,
        // KuiAnimation
    },
    setup(props, { emit }) {
        // 随机生成元素ID
        const elId = `kUI_${Math.ceil(new Date().getTime() * 10e5).toString(36)}`;

        // const {
        // 	proxy
        // }: any = getCurrentInstance();
        // const theme = proxy.$theme;
        const theme: KuiNamespace.Theme = uni['$kView'].theme;

        const isActive = computed(() => props.modelValue === props.activeValue);

        const rootState = reactive({
            disabled: props.disabled,
            loading: props.loading,
            isDark: props.mode === 'dark',
            id: elId
        });

        const buttonState = reactive({
            status: isActive.value ? 'open' : 'close'
        });

        const iconState = reactive({
            size: 20,
            color: ''
        });

        console.log(theme.colors)

        const textState = reactive({
            color: theme.colors[props.mode]['grey'][0],
            size: `${theme.size.fonts.sm}rpx`
        });

        const activeIconColorMap = theme.colors[props.mode][props.iconColor] ? theme.colors[props.mode][props.iconColor] : colorBuilder.generate(props.iconColor, { dark: rootState.isDark, list: true });
        const inactiveColorMap = theme.colors[props.mode][props.inactiveColor];

        const changeStatus = () => {
            iconState.color = isActive.value ? activeIconColorMap[5] : inactiveColorMap[4];
        }

        changeStatus();

        const rootStyle = computed(() => {
            const style: CSSProperties = reactive({});

            style.width = '72rpx';
            style.height = '42rpx';
            const activeColorMap = theme.colors[props.mode][props.activeColor] ? theme.colors[props.mode][props.activeColor] : colorBuilder.generate(props.activeColor, { dark: rootState.isDark, list: true });

            style.backgroundColor = activeColorMap[5];
            if (isActive.value) {
                style.backgroundImage = `linear-gradient(to right, ${activeColorMap[5]}, ${activeColorMap[4]})`;
                buttonState.status = 'open';
            } else {
                style.backgroundColor = inactiveColorMap[2];
                buttonState.status = 'close';
            }
            style.borderRadius = '42rpx';

            if (rootState.disabled) {
                style.opacity = 0.7;
            }

            return style;
        });

        const buttonStyle = computed(() => {
            const style: CSSProperties = reactive({});

            style.width = style.height = '26rpx';
            style.fontSize = 0;
            style.lineHeight = 1;
            style.backgroundColor = theme.colors[props.mode]['grey'][0];
            style.borderRadius = '26rpx';
            // style.transform = 'translateX(144%)';
            // style.transition = 'transform 0.3s';
            style.transitionProperty = 'transform';
            // style.transitionDuration = '0.3s';

            return style;
        });

        let changeType = ''; // 标记开关状态更新类型

        const onClick = (e: Event) => {
            if (rootState.disabled || rootState.loading) { return false; }
            const value = isActive.value ? props.inactiveValue : props.activeValue;
            rootState.loading = true;
            changeType = 'click';
            emit('update:modelValue', value);
            emit('change', value, e);
        }

        watch(
            () => [props.disabled, props.loading, props.modelValue],
            (newVal) => {
                rootState.disabled = newVal[0];
                rootState.loading = newVal[1];

                if (changeType === 'click') {
                    changeType = '';
                } else {
                    emit('change', newVal[2]);
                }
                changeStatus()
            }
        );

        return {
            rootStyle,
            rootState,
            buttonStyle,
            buttonState,
            iconState,
            textState,
            onClick,
            isActive
        }
    }
});
</script>

<style lang="less">
.kui-switch {
    @duration: 300ms;

    .open {
        transform: translateX(144%);
        transition-duration: @duration;
    }

    .close {
        transform: translateX(28%);
        transition-duration: @duration;
    }

    .open-text {
    	transform: translateX(-120%);
        transition-duration: @duration;
    }
    .nvue-open-text {
        transform: translateX(-72%);
        transition-duration: @duration;
    }

    .close-text {
    	transform: translateX(120%);
        transition-duration: @duration;
    }
    .nvue-close-text {
        transform: translateX(30%);
        transition-duration: @duration;
    }
}
</style>
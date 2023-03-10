<template>
    <view class="kui-box-border kui-flex kui-items-start" ref="buttonWrap" :id="elId">
        <button :render-whole="true" class="kui-flex kui-leading-none kui-items-center"
            :elevation="data.elevationSize" :plain="true" :disabled="disabled" :style="{
                borderWidth: data.btnBorderWidth,
                borderColor: data.btnBorderColor,
                borderStyle: data.btnBorderStyle,
                width: data.width,
                height: data.height,
                borderRadius: `${data.radius}${theme.size.fontUnit}`,
                backgroundColor: data.backgroundColor,
                backgroundImage: data.backgroundImage,
                marginLeft: data.marginLeft,
                marginBottom: data.marginBottom,
                marginRight: data.marginRight,
                marginTop: data.marginTop,
                padding: data.padding,
                opacity: data.btnOpacity,
                flex: data.btnFlex,
                flexGrow: data.btnFlexGrow,
                justifyContent: 'center',
                ...customStyle
            }" :form-type="formType" :open-type="openType" :hover-class="hoverClass" :hover-start-time="hoverStartTime"
            :hover-stay-time="hoverStayTime" :app-parameter="appParameter"
            :hover-stop-propagation="hoverStopPropagation" :lang="lang" :session-from="sessionFrom"
            :send-message-title="sendMessageTitle" :send-message-path="sendMessagePath"
            :send-message-img="sendMessageImg" :show-message-card="showMessageCard" 
            :class="[data.shadowClass, customClass]"
            @touchstart="start" @touchend="end"
            @click="beforeStart" @getphonenumber="onGetphonenumber" @getuserinfo="onGetuserinfo" @error="onError"
            @opensetting="onOpensetting" @launchapp="onLaunchapp">
            <view :style="{
                height: data.height
            }" class="kui-flex kui-justify-center kui-items-center kui-h-full">
                <view v-if="loading" class="kui-relative" :class="[content ? 'kui-mr-1' : '']" :style="{
                    right: `${$slots.default ? 10 : 0}rpx`
                }">
                    <!-- <kui-spin :width="55" :height="55" :type="loadingType" :scale="0.7" :background-color="data.color"></kui-spin> -->
                    <kui-animate name="spin" loop>
                        <kui-icons :size="22" :color="data.color" name="spinner" />
                    </kui-animate>
                </view>
                <view v-if="icon">
                    <kui-icons :name="icon" :color="data.color" :weight="800" :size="26"></kui-icons>
                </view>
                <view :class="[icon ? ' kui-ml-1' : '']">
                    <slot>
                        <kui-text :color="data.color" :size="data.size" :content="content" />
                    </slot>
                </view>
            </view>
        </button>
    </view>
</template>

<script lang="ts">
/**
 * Button ????????????
 * @description ???????????????????????????
 * @property {String} type = [primary/secondary/dashed/outline/text] ????????????
 * 	@value primary ????????????
 * 	@value secondary ????????????
 * 	@value dashed ????????????
 * 	@value outline ????????????
 * 	@value text ????????????
 * @property {String} mode = [light/dark/system] ????????????
 * 	@value light ????????????
 * 	@value dark ????????????
 * 	@value system ????????????
 * @property {String} full = [true/false] ????????????
 * 	@value true ???
 * 	@value false ???
 * @property {Number} marginY ???????????????
 * @template <kui-button type="secondary">????????????</kui-button>
 */
import {
    reactive,
    getCurrentInstance,
    defineComponent,
    SetupContext,
    computed,
    CSSProperties,
    inject,
    onMounted,
    ref,
    watch,
    toRefs
} from "vue";

import { createComponent } from '@kviewui/utils'
import { useThrottle, getElId, useKviewuiRect } from '@kviewui/utils';
import { theme as Theme } from '../../common/theme';
import KuiIcons from "../icons/index.vue";
import KuiText from '../text/index.vue'
import KuiAnimate from "../animate/index.vue";

const { create } = createComponent('button');

import { buttonProps } from './types';
import { theme } from "@kviewui/theme";

export default create({
    props: buttonProps,
    components: {
        KuiIcons,
        KuiAnimate,
        KuiText
    },
    emits: ['click', 'getphonenumber', 'getuserinfo', 'error', 'opensetting', 'launchapp'],
    options: {
        // ???????????????????????????
        virtualHost: true
    },
    setup(props, context: SetupContext) {
        const {
            proxy
        }: any = getCurrentInstance();
        // const proxy = getCurrentInstance()?.proxy ?? null;
        // ??????????????????ID
        const elId = getElId();

        const buttonWrap = ref(null);
        // ??????????????????
        // const {
        // 	proxy
        // }: any = getCurrentInstance();
        // const theme = proxy.$theme ?? Theme;
        const theme: KuiNamespace.Theme = uni['$kView'].theme;

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
            // margin: '',
            marginLeft: '',
            marginBottom: '',
            marginRight: '',
            marginTop: '',
            opacity: props.disabled ? 0.6 : 1,
            longClick: 0,
            timeOutEvent: 0,
            btnBorderStyle: "solid",
            btnBorderColor: "",
            setMode: props.mode,
            size: props.size,
            radius: props.shape !== 'square' ? 9999 : props.radius,
            fontSize: `${theme.size.fonts['lg']}${theme.size.fontUnit}`,
            btnWidth: '',
            btnStyle: {},
            btnFlex: '',
            btnFlexGrow: 0,
            btnOpacity: 1,
            shadowClass: '',
            elevationSize: ''
        });

        if (props.shadow) {
            // #ifndef APP-NVUE
            data.shadowClass = `kui-shadow-${props.shadowSize}`;
            // #endif
            // #ifdef APP-NVUE
            data.elevationSize = '5px';
            // #endif
        }

        // ??????space????????????
        const getSpaceInstance = (): any => {
            return inject('spaceComponent');
        };

        let parentSpace;

        // #ifdef APP-NVUE
        // console.log(getCurrentInstance().proxy.$parent);
        parentSpace = getCurrentInstance().proxy.$parent;
        // #endif
        // #ifndef APP-NVUE
        // console.log(getCurrentInstance().proxy.$parent.$parent);
        parentSpace = getCurrentInstance().proxy.$parent.$parent;
        // #endif

        onMounted(() => {
            // console.log(proxy);
            // #ifndef APP-NVUE
            if (getSpaceInstance()) {
                const spaceIns = getSpaceInstance();

                // ??????????????????????????????????????????????????????????????????????????????
                useKviewuiRect(buttonWrap, elId, proxy).then((element: KuiNamespace.useKviewuiRectPromiseCallback) => {
                    const pushItem = {
                        ...toRefs(data),
                        // ...data,
                        ...element,
                        // proxy
                    };

                    if (spaceIns.value && spaceIns.value.indexOf(pushItem) === -1) {
                        // spaceIns.value.push(pushItem);
                        parentSpace.pushChildrens(pushItem);
                        parentSpace.updateDom();
                    }
                });
            }
            // #endif
        })

        uni.$on('spaceUpdate', (vm) => {
            // console.log(vm);
            data.marginRight = vm.marginRight;
            data.marginBottom = vm.marginBottom;
        })

        const style: CSSProperties = reactive({});

        const btnStyle = computed(() => {

            style.borderWidth = data.btnBorderWidth;
            style.borderStyle = data.btnBorderStyle;
            style.borderColor = data.btnBorderColor;
            style.backgroundColor = data.backgroundColor;
            style.backgroundImage = data.backgroundImage;
            style.color = data.color;
            style.height = data.height;
            style.padding = data.padding;
            style.marginTop = `${props.marginY}px`;
            style.borderRadius = `${data.radius}rpx`;
            style.lineHeight = 1;

            if (!props.block) {
                // ?????????????????????????????????
                style.width = data.width;
            }

            if (props.block) {
                // #ifdef APP-NVUE
                style.flex = 1;
                // #endif
                // #ifndef APP-NVUE
                style.flexGrow = 1;
                // #endif
            }

            if (props.disabled) {
                style.opacity = 0.65;
            }

            style.justifyContent = 'center';

            return style;
        })

        const init = (steep: number = 0) => {
            // console.log(steep+5);
            // if (props.full) {
            // 	data.btnWidth = `${uni.getSystemInfoSync().windowWidth - 30}px`;
            // }
            if (!props.text) {
                // ?????????????????????????????????
                data.backgroundColor = data.type ? theme.colors[data.setMode][data.type][5 + steep] : (data.setMode === 'light' ? '#FFFFFF' : theme.colors['dark']['grey'][2]);
                data.color = data.setMode === 'light' ? '#FFFFFF' : theme.colors['dark']['grey'][9];
                data.color = data.type ? '#FFFFFF' : theme.colors[data.setMode]['grey'][7 + steep];
                data.btnBorderColor = data.type ? '' : theme.colors[data.setMode]['grey'][3 + steep];
                data.btnBorderWidth = data.type ? '0rpx' : '1rpx';

                // ??????????????????
                if (!data.type && steep) {
                    data.backgroundColor = theme.colors[data.setMode]['grey'][3];
                }
                // ?????????????????????
                if (data.type && props.gradient) {
                    data.backgroundImage = `linear-gradient(to right, ${theme.colors[data.setMode][data.type][4 + steep]}, ${theme.colors[data.setMode][data.type][5 + steep]})`;
                }

            } else {
                data.backgroundColor = steep ? theme.colors[data.setMode]['grey'][2 + steep] : '';
                data.color = data.type ? theme.colors[data.setMode][data.type][5 + steep] : data.color;
                data.btnBorderWidth = '0px';
            }

            if (props.outline) {
                // data.btnBorderColor = data.color = theme.colors[data.setMode][data.type][3];
                data.btnBorderColor = data.color;
                data.btnBorderWidth = '1rpx';
            }

            data.backgroundColor = props.backgroundColor ? props.backgroundColor : data.backgroundColor;
            data.color = props.textColor ? props.textColor : data.color;
            data.btnBorderColor = props.borderColor ? props.borderColor : data.btnBorderColor;
            switch (props.size) {
                case 'normal':
                    data.padding = '0 15px';
                    data.height = '36px';
                    // data.width = '200rpx';
                    break;
                case 'small':
                    data.padding = '0 11px';
                    data.fontSize = `${theme.size.fonts['sm']}${theme.size.fontUnit}`;
                    data.height = '28px';
                    break;
                case 'mini':
                    data.padding = '0 10px';
                    data.fontSize = `${theme.size.fonts['sm']}${theme.size.fontUnit}`;
                    data.height = '24px';
                    break;
                case 'large':
                    data.fontSize = `${theme.size.fonts['lg']}${theme.size.fontUnit}`;
                    data.padding = '0 20px';
                    data.height = '48px';
                // data.width = `100%`;
            }

            data.width = props.shape === 'round' ? data.height : data.width;

            /**
             * ??????????????????
             */
            if (props.block) {
                data.height = '36px';

                // #ifdef APP-NVUE
                data.btnFlex = '1';
                // #endif
                // #ifndef APP-NVUE
                data.btnFlexGrow = 1;
                // #endif
            }

            if (!props.block) {
                // ?????????????????????????????????
                style.width = data.width;
            }

            if (props.disabled) {
                data.btnOpacity = 0.65;
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
            useThrottle(function (e) {
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
            theme,
            btnStyle,
            useThrottle,
            data,
            start,
            end,
            beforeStart,
            onGetphonenumber,
            onGetuserinfo,
            onError,
            onOpensetting,
            onLaunchapp,
            elId,
            buttonWrap
        }
    }
});
</script>

<style scoped>
/* #ifndef APP-NVUE */
/* uni-button,
	button
	{
		margin-left: 0;
		margin-right: 0;
		box-sizing: border-box;
	} */
/* #endif */
</style>

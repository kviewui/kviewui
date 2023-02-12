<template>
    <kui-page ref="pageRef" :padding-x="0" :padding-y="0" bg-color="#FFFFFF">
        <template v-slot:body>
            <view class=" kui-flex-col kui-items-center kui-pt-6">
                <kui-image src="/static/kviewui.png" :radius="10" width="440rpx" height="110rpx" disable-fit />
                <view class="kui-px-6 kui-mt-5">
                    <!-- <kui-text size="16px" :color="theme.colors.light.grey[6]"
                        content="基于UNI-APP框架的多端开发UI组件库，让您的开发效率加倍提升" /> -->
                </view>

                <kui-container width="750rpx" background-color="#F8F8F8" top-left-radius="60rpx"
                    top-right-radius="60rpx" :custom-style="{
                        padding: '0 20px',
                        marginTop: '30px'
                    }" custom-class=" kui-flex kui-flex-1">
                    <view class="kui-mt-6 kui-items-start kui-flex">
                        <!-- <kui-text size="16px" content="暗黑模式：" /> -->
                        <!-- <kui-switch v-model="checked" /> -->
                    </view>
                    <view class=" kui-mt-3">
                        <kui-cell-group title="基础组件" type="space" :cell-title-weight="600" :cell-radius="100">
                            <kui-cell title="Button 按钮" url="/pages/components/button/index" />
                            <kui-cell title="Cell 单元格" url="/pages/components/cell/cell" />
                            <kui-cell title="Image 图片" url="/pages/components/image/image" />
                            <kui-cell title="Icon 图标" url="/pages/components/icon/icon" />
                            <kui-cell title="Tag 标签" url="/pages/components/tag/tag" />
                            <kui-cell title="Badge 徽标" url="/pages/components/badge/badge" />
                        </kui-cell-group>
                        <kui-cell-group title="布局组件" type="space" :cell-title-weight="600" :cell-radius="100">
                            <kui-cell title="Layout 布局" url="/pages/components/layout/layout" />
                            <kui-cell title="Grid 宫格" url="/pages/components/grid/grid" />
                            <kui-cell title="Divider 分割线" url="/pages/components/divider/divider" />
                            <kui-cell title="Space 间隔" url="/pages/components/space/space" />
                            <kui-cell title="Sticky 粘性布局" url="/pages/components/sticky/sticky" />
                        </kui-cell-group>
                        <kui-cell-group title="展示组件" type="space" :cell-title-weight="600" :cell-radius="100">
                            <kui-cell title="Spin 加载动画" url="/pages/components/spin/spin" />
                            <kui-cell title="Overlay 遮罩" url="/pages/components/overlay/overlay" />
                            <kui-cell title="Animation 动效" url="/pages/components/animation/animation" />
                            <kui-cell title="Collapse 折叠面板" url="/pages/components/collapse/collapse" />
                            <kui-cell title="Skeleton 骨架屏" url="/pages/components/skeleton/skeleton" />
                            <kui-cell title="Progress 进度条" url="/pages/components/progress/progress" />
                        </kui-cell-group>
                        <kui-cell-group title="反馈组件" type="space" :cell-title-weight="600" :cell-radius="100">
                            <kui-cell title="Popup 弹出层" url="/pages/components/popup/popup" />
                            <kui-cell title="Snackbar 消息条" url="/pages/components/snackbar/snackbar" />
                            <kui-cell title="Actionsheet 动作面板" url="/pages/components/actionsheet/actionsheet" />
                            <kui-cell title="Dialog 对话框" url="/pages/components/dialog/dialog" />
                            <kui-cell title="Toast 吐司" url="/pages/components/toast/toast" />
                            <kui-cell title="DatePicker 日期选择器" url="/pages/components/datepicker/datepicker" />
                        </kui-cell-group>
                        <kui-cell-group title="表单组件" type="space" :cell-title-weight="600" :cell-radius="100">
                            <kui-cell title="Switch 开关" url="/pages/components/switch/switch" />
                            <kui-cell title="Radio 单选按钮" url="/pages/components/radio/radio" />
                            <kui-cell title="Checkbox 复选按钮" url="/pages/components/checkbox/checkbox" />
                            <kui-cell title="Input 输入框" url="/pages/components/input/input" />
                            <kui-cell title="Stepper 步进器" url="/pages/components/stepper/stepper" />
                            <kui-cell title="Numberkeyboard 数字键盘"
                                url="/pages/components/numberkeyboard/numberkeyboard" />
                            <kui-cell title="Picker 选择器" url="/pages/components/picker/picker" />
                            <kui-cell title="Rate 评分" url="/pages/components/rate/rate" />
                            <kui-cell title="Slider 滑块" url="/pages/components/slider/slider" />
                            <kui-cell title="SearchBar 搜索栏" url="/pages/components/searchbar/searchbar" />
                            <kui-cell title="ShortPassword 短密码" url="/pages/components/shortpassword/shortpassword" />
                            <kui-cell title="Uploader 上传" url="/pages/components/uploader/uploader" />
                        </kui-cell-group>
                        <kui-cell-group title="特色组件" type="space" :cell-title-weight="600" :cell-radius="100">
                            <kui-cell title="ConfigProvider 全局配置"
                                url="/pages/components/config-provider/config-provider" />
                        </kui-cell-group>
                        <kui-cell-group title="" type="space" :cell-title-weight="600" :cell-radius="100">
                            <kui-cell title="测试" url="/pages/test/index" />
                        </kui-cell-group>
                    </view>
                </kui-container>
                <kui-space />
            </view>
        </template>
    </kui-page>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive, CSSProperties, computed, watchEffect, watch, onBeforeMount } from 'vue';
import KuiPage from '@kviewui/kviewui/src/page/index.vue';
import KuiImage from '@kviewui/kviewui/src/image/index.vue';
import KuiText from '@kviewui/kviewui/src/text/index.vue';
import KuiContainer from '@kviewui/kviewui/src/container/index.vue';
import KuiSwitch from '@kviewui/kviewui/src/switch/index.vue';
import KuiCellGroup from '@kviewui/kviewui/src/cell-group/index.vue';
import KuiCell from '@kviewui/kviewui/src/cell/index.vue';
import KuiSpace from '@kviewui/kviewui/src/space/index.vue';
// import { default as KuiButton } from '../../kviewui/src/kui-button/kui-button.vue'
const title = ref('Hello')

const theme: KuiNamespace.Theme = uni.$kView.theme;

const pageRef = ref(null);

const checked = ref(false);

let sysinfo: UniNamespace.GetSystemInfoResult = reactive({} as any);

const systemInfo = reactive({ windowHeight: '' })

let style: CSSProperties = reactive({});

const contentHeight = ref('');

watch(
    () => systemInfo.windowHeight,
    (height, preHeight) => {
        console.log(height);
        contentHeight.value = height;
    }
);

onMounted(() => {
    if (pageRef.value) {
        sysinfo = pageRef.value.getApp();
        style.height = `${sysinfo.windowHeight}px`;
        systemInfo.windowHeight = style.height;
        console.log(style);
    }
})

const open = () => {
    uni.navigateTo({
        url: '/pages/index/bindingx'
    })
}
</script>

<style>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    /* margin-left: auto; */
    /* margin-right: auto; */
    margin-bottom: 50rpx;
}

.text-area {
    display: flex;
    justify-content: center;
}

.title {
    font-size: 36rpx;
    /* color: #8f8f94; */
}

.kui-iconfont {
    font-family: kview-icons;
    font-size: 120px;
    color: blue;
}
</style>

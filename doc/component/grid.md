# Grid 宫格

将页面区域分隔成等宽区块。

<!--@include: ./tips/introduce.md-->

<TipsIntroduce />

## 安装
```ts
// 仅仅H5环境支持
import { KuiGrid } from 'kviewui';
// 或 跨端推荐
import KuiGrid from 'kviewui/src/icons/index.vue';
```

## 基本用法

通过 `kui-grid` 组件将宫格包裹，`kui-grid-item` 组件设置每个区块的内容，通过 `icon` 属性可以设置每个区块的图标，`text` 属性可以设置每个区块的底部文字。

<!-- <show-code com-type="grid" com-show-type="base" /> -->
::: code-group

<<< @/examples/grid/Base.vue{5-6}

:::

## 方形宫格
通过 `square` 属性可以设置方形宫格。

::: code-group

<<< @/examples/grid/Square.vue{5}

:::

## 滑动视图
通过 `swiper` 基础组件和 `swiper-item` 组件可以实现滑动视图场景。

::: code-group

<<< @/examples/grid/Swiper.vue

:::

## 角标示例
可以通过 `grid-item` 组件的默认插槽实现角标示例场景。

::: code-group

<<< @/examples/grid/Badge.vue

:::

## 自定义列数

通过 `kui-grid` 组件的 `columns` 属性可以设置宫格的列数。

<!-- <show-code com-type="grid" com-show-type="columns" /> -->
::: code-group

<<< @/examples/grid/Columns.vue{4}

:::

## 列间距

通过 `kui-grid` 组件的 `gutter` 属性可以设置每列的间距。

<!-- <show-code com-type="grid" com-show-type="gutter" /> -->
::: code-group

<<< @/examples/grid/Gutter.vue{5}

:::

## 内容反向

通过 `kui-grid` 组件的 `reverse` 属性可以设置宫格图标和文字的显示顺序。

<!-- <show-code com-type="grid" com-show-type="reverse" /> -->
::: code-group

<<< @/examples/grid/Reverse.vue{5}

:::

## 内容横向

通过 `kui-grid` 组件的 `direction` 属性可以设置宫格内容的显示方式。

<!-- <show-code com-type="grid" com-show-type="direction" /> -->
::: code-group

<<< @/examples/grid/Direction.vue{5}

:::

## 图标颜色/大小

通过 `kui-grid-item` 组件的 `icon` 属性可以设置宫格的图标，`icon-color` 属性可以设置图标的颜色，`icon-size` 属性设置图标的大小，`text` 属性设置宫格的文字。

<!-- <show-code com-type="grid" com-show-type="icon-color-size" /> -->
::: code-group

<<< @/examples/grid/ColorSize.vue{5-8}

:::

## 自定义内容

通过 `kui-grid-item` 组件的默认插槽可以自定义宫格内容。

<!-- <show-code com-type="grid" com-show-type="slot" /> -->
::: code-group

<<< @/examples/grid/Custom.vue

:::

## 开启点击反馈
通过 `clickable` 属性可以开启宫格的点击响应，`change` 事件可以接收宫格被点击响应事件，具体示例如下：

::: code-group

<<< @/examples/grid/Clickable.vue{3,4}

:::

## API
### Grid Props

| 参数          | 说明                                      | 类型                    | 默认值      |
|---------------|------------------------------------------|------------------------|------------|
| columns    | 列数                                     | number         | `4`        |
| icon-size     | 图标大小，参考 <a href="/component/icons">Icons 图标</a> 组件          | number        | `56`     |
| icon-color    | 图标颜色                                  | string                 | -          |
| gutter        | 格子之间的间距，默认单位为`rpx`               | number        | `0`        |
| reverse        | 内容反向                               | boolean                | `false`     |
| direction        | 宫格内容排列的方向，可选值为 `vertical` `horizontal`               | string                | `vertical`     |
| border        | 是否显示边框                               | boolean                | `true`     |
| clickable        | 是否需要点击反馈                               | boolean                | `false`     |

### Direction 有效值
| 值 | 说明 |
|----|------|
| vertical | 垂直排列 |
| horizontal | 水平排列 |

### GridItem Props

| 参数                  | 说明                                                                                     | 类型               | 默认值      |
|----------------------|-----------------------------------------------------------------------------------------|--------------------|------------|
| text                 | 文字                                                                                     | string             | -          |
| icon                 | [图标名称](/component/icons#api)                                                             | string             | -          |
| icon-size            | 图标大小                                                | number   | `56`     |
| icon-color           | 图标颜色                                                                                  | string            | -           |
| id           | 唯一标识                                                                                  | string            | -           |
| content-margin           | 内容外间距                                                                                  | string            | -           |
| radius-size           | 圆角大小，可选值为 `none` `xs` `sm` `base` `lg` `xl` `max`                        | string            | `none`           |
| background-color           | 背景颜色                                                                                  | string            | -           |
| background-color-level           | 背景颜色色阶，可参考 <a href="/guide/palette#颜色色阶">颜色色阶</a>                                 | string            | -           |
| mode [`公共属性`](#)      | 页面模式，见 [组件公共属性](/guide/component#组件公共属性)                   | String  | `light`         |

### RadiusSize 有效值
| 值 | 说明 |
|----|------|
| none | `0rpx` |
| xs | `10rpx` |
| sm | `20rpx` |
| base | `30rpx` |
| lg | `40rpx` |
| xl | `50rpx` |
| max | `9999rpx` |

### GridItem Slots

| 名称                   | 说明                 |
|-----------------------|----------------------|
| default               | 自定义所有内容         |
| icon                  | 自定义图标            |
| text                  | 自定义文字            |

### GridItem Events

| 事件名                 | 说明                   | 回调参数               |
|-----------------------|-----------------------|-----------------------|
| click                 | 点击格子时触发          | event: Event          |
| touchstart                 | 触摸格子时触发          | event: Event          |
| touchend                 | 触摸格子结束时触发          | event: Event          |
| touchmove                 | 手指在格子上移动时触发          | event: Event          |

## 平台兼容性说明
| 运行平台 | 是否兼容
| --- | ---
| app-vue | ✅
| app-nvue | ✅
| H5 | ✅
| 微信小程序 | ✅
| 支付宝小程序 | 待测试
| QQ小程序 | ✅
| 字节小程序 | 待测试



import * as size from './size';

export const config = {
	// 定义遮罩色
	// shade: `rgba(29, 33, 41, ${size.shadeOpenness})`
	shade: `hsla(220, 17.1%, 13.7%, ${size.shadeOpenness})`,
	/**
	 * 自定义调色板，建议参考WCAG 2.0标准 (https://www.w3.org/TR/WCAG20/)
	 * 一般不需要自定义调色板，只需替换品牌色即可，极特殊情况可以完全自定义调色板
	 */
	colorPresetPanel: {
		red: null, // 红色
		orangered: null, // 橙红色
		orange: null, // 橙色
		gold: null, // 黄昏色
		yellow: null, // 黄色
		lime: null, // 新生绿
		green: null, // 绿色
		brandgreen: null, // 活力绿
		cyan: null, // 青色
		blue: null, // 蓝色
		deepblue: null, // 极致蓝
		purple: null, // 暗夜紫
		pinkpurple: null, // 青春紫
		magenta: null, // 品红
		grey: null, // 中性灰
		// 以下为功能色设置
		primary: null, // 品牌色
		success: null, // 成功色
		danger: null, // 危险色
		warning: null, // 警告色
		link: null, // 链接色
		info: null // 信息色
	}
}
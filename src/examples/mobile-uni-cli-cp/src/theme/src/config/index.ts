import * as size from '../size/index';

export const config = {
	// 定义遮罩色
	// shade: `rgba(29, 33, 41, ${size.shadeOpenness})`
	shade: `hsla(220, 17.1%, 13.7%, ${size.shadeOpenness})`,
	/**
	 * 自定义调色板，建议参考WCAG 2.0标准 (https://www.w3.org/TR/WCAG20/)
	 * 一般不需要自定义调色板，只需替换品牌色即可，极特殊情况可以完全自定义调色板
	 */
	colorPresetPanel: {
		red: '', // 红色
		orangered: '', // 橙红色
		orange: '', // 橙色
		gold: '', // 黄昏色
		yellow: '', // 黄色
		lime: '', // 新生绿
		green: '', // 绿色
		brandgreen: '', // 活力绿
		cyan: '', // 青色
		blue: '', // 蓝色
		deepblue: '', // 极致蓝
		purple: '', // 暗夜紫
		pinkpurple: '', // 青春紫
		magenta: '', // 品红
		grey: '', // 中性灰
		// 以下为功能色设置
		primary: '', // 品牌色
		success: '', // 成功色
		danger: '', // 危险色
		warning: '', // 警告色
		link: '', // 链接色
		info: '' // 信息色
	}
}
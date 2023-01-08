import { Ref, unref, getCurrentInstance } from 'vue';
import { useInject } from '@kviewui/utils/src/use';

const configInfo = {
	debug: true
};

const config = useInject() ?? configInfo;

const isWindow = (v: unknown) => {
	return v === window;
}

/**
 * @zh 随机生成元素ID
 * @return {String} elId 元素ID
 */
export const getElId = (): String => {
	// 随机生成元素ID
	const elId = `kUI_${Math.ceil(new Date().getTime() * 10e5).toString(36)}`;
	
	return elId;
}

/**
 * @zh 获取节点的大小及相对于视图窗口的位置信息
 * @param {Element | Window | any} eleRef 节点标签的ref
 * @param {String} eleId 节点的id，非H5环境下需要
 * @param {any} proxy 组件实例，非H5环境下需要
 * @return 
 * 	width 节点宽度 number
 * 	height 节点高度 number
 * 	top 节点上边界坐标
 * 	left 节点左边界坐标
 * 	right 节点右边界坐标
 * 	bottom 节点下边界坐标
 */
export const useKviewuiRect = (eleRef: (Element | Window | any) | Ref<Element | Window | any>, eleId: string = '', proxy: any): any => {
	let element = unref(eleRef);
	return new Promise((reslove) => {
		// #ifdef H5
		if (config.debug) {
			console.log(element);
		}
		if (element && element.$el) {
			element = element.$el;
		}
		if (isWindow(element)) {
			const width = element.innerWidth;
			const height = element.innerHeight;

			reslove({
				top: 0,
				left: 0,
				right: width,
				bottom: height,
				width,
				height
			});
		}
		if (config.debug) {
			console.log(element);
		}
		if (element && element.getBoundingClientRect) {
			reslove(element.getBoundingClientRect());
		}

		reslove({
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			width: 0,
			height: 0
		});
		// #endif
		// #ifndef H5
		const query = uni.createSelectorQuery().in(proxy);
		if (config.debug) {
			console.log(`element:${query}`);
		}
		query.select(`#${eleId}`) && query.select(`#${eleId}`).boundingClientRect((data) => {
			reslove(data);
		}).exec();
		// #endif
	});
}
/**
 * @zh 获取单位
 * @param e
 */
export const getUnitByUnit = (e): String => {
	if (e.endsWith('px')) {
		return 'px';
	}
	if  (e.endsWith('rpx')) {
		return 'rpx';
	}
	if (e.endsWith('rem')) {
		return 'rem';
	}
	return '';
}

/**
 * @zh 获取尺寸单位数字
 * @param e 尺寸单位
 * @return
 */
export const getNumberByUnit = (e): any => {
	const arr = e.split(getUnitByUnit(e));
	return arr[0];
}
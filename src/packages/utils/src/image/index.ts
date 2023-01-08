import { useInject } from '@kviewui/utils/src/use';

let configInfo = {
	debug: false
};

const config = useInject() ?? configInfo;

/**
 * @zh 获取图片信息
 * @param {String} src 图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径
 * @return
 */
export const getImageInfo = (src: string): any => {
	return new Promise((resolve, reject) => {
		uni.getImageInfo({
			src: src,
			success: (res) => {
				if (config.debug) {
					console.warn(`image info debug: ${res}`);
				}
				resolve(res);
			},
			fail: (fail) => {
				reject(fail);
			}
		})
	});
}

/**
* @zh 从本地file或者blob对象创建url
* @param {Blob|File} file
* @@return {string}
*/
export const fileToUrl = (file: File): string => {
	var url: string = (window.URL || window.webkitURL).createObjectURL(file);
	return url;
}

/**
* @zh 图片压缩
* @param {File} file
* @param {Number} quality 压缩质量
*/
export const compress = async (file: KuiNamespace.ImageFile, quality: number = 0.6): Promise<KuiNamespace.ImageFile> => {
	// #ifdef H5
	let fileObj = file;
	let reader = new FileReader();
	let files = '';
	const base64 = reader.readAsDataURL(fileObj as File); // 转base64
	
	const canvasToFile = (canvas: HTMLCanvasElement, type: string, quality: number): Promise<Blob | null> => {
		return new Promise((_res) => {
			canvas.toBlob((blob) => _res(blob), type, quality);
		})
	}
	
	return new Promise((resolve, reject) => {
		reader.onload = (e) => {
			let image: HTMLImageElement = new Image(); // 新建img标签
			image.src = e.target.result as any;
			image.onload = () => {
				const canvas = document.createElement('canvas'); // 新建canvas
				const context = canvas.getContext('2d');
				
				canvas.width = image.width;
				canvas.height = image.height;
				context.clearRect(0, 0, image.width, image.height);
				// 绘制前填充白色背景
				context.fillStyle = '#FFF';
				context.fillRect(0, 0, canvas.width, canvas.height);
				context.drawImage(image, 0, 0, image.width, image.height);
				
				canvasToFile(canvas, 'image/jpeg', quality).then((blob: Blob) => {
					const newFile = new File([blob], fileObj.name);
					Object.defineProperty(newFile, 'path', {
						get: () => {
							return '' || fileToUrl(newFile);
						}
					})
					resolve(newFile);
				})
			}
		}
	});
	// #endif
	// #ifndef H5
	console.warn('compress image warning：图片压缩仅支持H5环境')
	// #endif
}

/**
 * @zh 校验链接是否为图片格式
 * @param {string} url 文件地址
 * @return {boolean}
 */
export const isImage = (url: string): boolean => {
	const imageReg = /\.(png|jpeg|jpg|webp|gif)$/i;
	
	return imageReg.test(url);
}
import {ModeEnum} from '@/packages/components/global/type';

export interface PageProps {
	bgColor?: string,
	bgClass?: string,
	disableScroll?: boolean,
	paddingY?: number,
	paddingX?: number,
	title?: string,
	mode?: ModeEnum,
	customHeader?: boolean,
	grayscale?: boolean,
	fullscreen?: boolean,
	useBodySlot?: true
}
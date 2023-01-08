import { ModeEnum } from '@kviewui/components/global/type';

export interface ContainerProps {
	backgroundColor?: string,
	width?: number,
	height?: number,
	topLeftRadius?: string,
	topRightRadius?: string,
	bottomLeftRadius?: string,
	bottomRightRadius?: string,
	radius?: string,
	darken?: number,
	paddingY?: number,
	paddingX?: number,
	marginY?: number,
	marginX?: number,
	mode?: ModeEnum,
	customClass?: string
}
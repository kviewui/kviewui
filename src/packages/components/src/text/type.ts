import {ModeEnum} from '@kviewui/components/global/type';

export interface TextProps {
	mode?: ModeEnum,
	color?: string,
	size?: string,
	weight?: WeightEnum,
	selectable?: boolean,
	userSelect?: boolean,
	space?: string,
	decode?: boolean,
	richtext?: boolean
}

export type WeightEnum = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
import {ModeEnum, SpinTypeEnum, ShadowSizeEnum, TypeEnum} from '../../global/type';

export interface KuiButtonProps {
	type?: TypeEnum,
	mode?: ModeEnum,
	full?: boolean,
	marginY?: number,
	size?: SizeEnum,
	shape?: ShapeEnum,
	radius?: number,
	text?: boolean,
	outline?: boolean,
	backgroundColor?: string,
	gradient?: boolean,
	textColor?: string,
	borderColor?: string,
	ripple?: boolean,
	disabled?: boolean,
	loading?: boolean,
	loadingType?: SpinTypeEnum,
	icon?: string,
	block?: boolean,
	shadow?: boolean,
	shadowSize?: ShadowSizeEnum,
	throttle?: ThrottleEnum,
	throttleWait?: number,
	formType?: FormTypeEnum,
	openType?: OpenTypeEnum,
	hoverClass?: string,
	hoverStartTime?: number,
	hoverStayTime?: number,
	appParameter?: string,
	hoverStopPropagation?: boolean,
	lang?: LangEnum,
	sessionFrom?: string,
	sendMessageTitle?: string,
	sendMessagePath?: string,
	sendMessageImg?: string,
	showMessageCard?: boolean
}

export type SizeEnum = 'large' | 'normal' | 'small' | 'mini';
export type ShapeEnum = 'square' | 'capsule' | 'round';
export type ThrottleEnum = 1 | 2 | 0
export type FormTypeEnum = 'submit' | 'reset' | ''
export type OpenTypeEnum = 'feedback' | 'share' | 'getUserInfo' | 'contact' | 'getPhoneNumber' | 'launchApp' | 'openSetting' | 'getAuthorize' | 'contactShare' | 'lifestyle' | 'openGroupProfile' | ''
export type LangEnum = 'en' | 'zn_CN' | 'zn_TW'
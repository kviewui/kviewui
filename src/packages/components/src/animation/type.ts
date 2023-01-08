export interface AnimationProps {
	duration?: number,
	durationUnit?: DurationUnitEnum,
	timingFunction?: TimingFunctionEnum,
	delay?: number,
	delayUnit?: DelayUnitEnum,
	interationCount?: number,
	infinite?: boolean,
	direction?: DirectionEnum,
	fillMode?: FillModeEnum,
	name?: string,
	runing?: boolean
}

export type TimingFunctionEnum = 'linear' | 'ease' | 'ease-out' | 'ease-in' | 'ease-in-out' | 'ease-in-quad' | 'ease-in-cubic' | 'ease-in-quart' | 'ease-in-quint' | 'ease-in-sine' | 'ease-in-expo' | 'ease-in-circ' | 'ease-in-back' | 'ease-out-quad' | 'ease-out-cubic' | 'ease-out-quart' | 'ease-out-quint' | 'ease-out-sine' | 'ease-out-expo' | 'ease-out-circ' | 'ease-out-back' | 'ease-in-out-quad' | 'ease-in-out-cubic' | 'ease-in-out-quart' | 'ease-in-out-quint' | 'ease-in-out-sine' | 'ease-in-out-expo' | 'ease-in-out-circ' | 'ease-in-out-back';

export type DirectionEnum = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';

export type  FillModeEnum = 'none' | 'forwards' | 'backwards' | 'both';

export type DelayUnitEnum = 's' | 'ms';

export type DurationUnitEnum = 's' | 'ms';
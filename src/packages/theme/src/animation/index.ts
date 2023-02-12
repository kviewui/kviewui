/**
 * @description
 * @zh 时间缓动函数曲线
 * @source https://animista.net
 */

/**
 * @zh 时间缓动函数曲线类型定义
 */
interface TimingFunction {
	'linear'?: string,
	'ease'?: string,
	'ease-out'?: string,
	'ease-in'?: string,
	'ease-in-out'?: string,
	'ease-in-quad'?: string,
	'ease-in-cubic'?: string,
	'ease-in-quart'?: string,
	'ease-in-quint'?: string,
	'ease-in-sine'?: string,
	'ease-in-expo'?:  string,
	'ease-in-circ'?: string,
	'ease-in-back'?: string,
	'ease-out-quad'?:  string,
	'ease-out-cubic'?: string,
	'ease-out-quart'?:  string,
	'ease-out-quint'?: string,
	'ease-out-sine'?: string,
	'ease-out-expo'?: string,
	'ease-out-circ'?: string,
	'ease-out-back'?: string,
	'ease-in-out-quad'?: string,
	'ease-in-out-cubic'?: string,
	'ease-in-out-quart'?: string,
	'ease-in-out-quint'?: string,
	'ease-in-out-sine'?: string,
	'ease-in-out-expo'?: string,
	'ease-in-out-circ'?: string,
	'ease-in-out-back'?: string
}

/**
 * @zh 时间缓动函数定义
 */
export const timingFunctionMap: TimingFunction = {
	'linear': 'linear',
	'ease': 'ease',
	'ease-in': 'ease-in',
	'ease-out': 'ease-out',
	'ease-in-out': 'ease-in-out',
	'ease-in-quad': 'cubic-bezier(.55,.085,.68,.53)',
	'ease-in-cubic': 'cubic-bezier(.55,.055,.675,.19)',
	'ease-in-quart': 'cubic-bezier(.895,.03,.685,.22)',
	'ease-in-quint': 'cubic-bezier(.755,.05,.855,.06)',
	'ease-in-sine': 'cubic-bezier(.47,0.000,.745,.715)',
	'ease-in-expo': 'cubic-bezier(.95,.05,.795,.035)',
	'ease-in-circ': 'cubic-bezier(.6,.04,.98,.335)',
	'ease-in-back': 'cubic-bezier(.6,-.28,.735,.045)',
	'ease-out-quad': 'cubic-bezier(.25,.46,.45,.94)',
	'ease-out-cubic': 'cubic-bezier(.215,.61,.355,1.000)',
	'ease-out-quart': 'cubic-bezier(.165,.84,.44,1.000)',
	'ease-out-quint': 'cubic-bezier(.23,1.000,.32,1.000)',
	'ease-out-sine': 'cubic-bezier(.39,.575,.565,1.000)',
	'ease-out-expo': 'cubic-bezier(.19,1.000,.22,1.000)',
	'ease-out-circ': 'cubic-bezier(.075,.82,.165,1.000)',
	'ease-out-back': 'cubic-bezier(.175,.885,.32,1.275)',
	'ease-in-out-quad': 'cubic-bezier(.455,.03,.515,.955)',
	'ease-in-out-cubic': 'cubic-bezier(.645,.045,.355,1.000)',
	'ease-in-out-quart': 'cubic-bezier(.77,0.000,.175,1.000)',
	'ease-in-out-quint': 'cubic-bezier(.86,0.000,.07,1.000)',
	'ease-in-out-sine': 'cubic-bezier(.445,.05,.55,.95)',
	'ease-in-out-expo': 'cubic-bezier(1.000,0.000,0.000,1.000)',
	'ease-in-out-circ': 'cubic-bezier(.785,.135,.15,.86)',
	'ease-in-out-back': 'cubic-bezier(.68,-.55,.265,1.55)'
}
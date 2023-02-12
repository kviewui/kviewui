<template>
	<slot></slot>
</template>

<script lang="ts">
	import {
		provide,
		defineComponent,
		reactive,
		watch
	} from 'vue';
    
	import { configProviderInjectionKey, configProviderProps } from './types';
	
    import { createComponent } from '@kviewui/utils';
    const { create } = createComponent('config-provider');
		
	export default create({
		props: configProviderProps,
		emits: ['update:mode'],
		setup(props, { slots, emit }) {
			let config = reactive({
				mode: props.mode,
				color: props.color,
				fontSize: props.fontSize
			});
			
			provide(configProviderInjectionKey, config);
			
			uni.$on("changeMode", (e) => {
				config.mode = e;
				provide(configProviderInjectionKey, config);
			});
		}
	});
</script>

<style>

</style>
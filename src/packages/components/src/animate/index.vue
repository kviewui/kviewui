<template>
    <view style="display: inline-block;" ref="animateRef" :class="[animateClass, animateLoopClass, customClass]">
        <slot></slot>
    </view>
</template>

<script lang="ts">

import { computed, onMounted, ref, toRefs } from 'vue';
import { createComponent } from '@kviewui/utils';
import { animateProps } from './types';

const { create } = createComponent('animate');

// #ifdef APP-NVUE
import { useSpin, usePulse, useBounce, useHeartbeat, useShake } from '@kviewui/animate';
// #endif

export default create({
    props: animateProps,
    setup(props) {
        const animateRef = ref(null);

        const { name } = toRefs(props);

        const animateClass = computed(() => {
            let str = '';
            
            switch (name.value) {
                case 'spin':
                    return 'kui-animate-spin';
                case 'pulse':
                    return 'kui-animate-pulse';
                case 'bounce':
                    return 'kui-animate-bounce';
                case 'heartbeat':
                    return 'kui-animate-heartbeat';
                case 'shake':
                    return 'kui-animate-shake';
            }
        });

        const animateLoopClass = computed(() => {
            if (props.loop) return 'kui-animate-ic-loop';
            return '';
        });

        onMounted(() => {
            // #ifdef APP-NVUE
            switch (name.value) {
                case 'spin':
                    useSpin(animateRef.value.ref, props.loop);
                    break;
                case 'pulse':
                    usePulse(animateRef.value.ref, props.loop);
                    break;
                case 'bounce':
                    useBounce(animateRef.value.ref, props.loop);
                    break;
                case 'heartbeat':
                    useHeartbeat(animateRef.value.ref, props.loop);
                    break;
                case 'shake':
                    useShake(animateRef.value.ref, props.loop);
                    break;
            }
            // #endif
        })

        return { animateRef, animateClass, animateLoopClass };
    }
})
</script>
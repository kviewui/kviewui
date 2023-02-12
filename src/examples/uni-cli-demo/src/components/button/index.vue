<template>
    <button>
        {{ content }}
    </button>
</template>

<script lang="ts">
import { createComponent } from '@kviewui/utils'
import type { SetupContext } from 'vue';
const { componentName, create } = createComponent('button');
import { theme } from '@kviewui/theme';

export default create({
    props: {
        /**
     * 按钮内容
     */
        content: {
            type: String,
            default: ''
        },
    },
    setup(props, context: SetupContext) {
        
    }
})
</script>

<style scoped>

</style>
<template>
    <kui-button type="primary" 
        block 
        @click="baseOverlayVisible = true" 
        value="显示遮罩层" />
    <kui-overlay 
        ref="overlay" 
        :header-height="top" 
        v-model:visible="baseOverlayVisible" />
</template>

<script lang="ts" setup>
import {
    ref
} from 'vue';
const baseOverlayVisible = ref(false);

const top = ref(0);

// #ifdef H5
top.value = 44;
// #endif
</script>
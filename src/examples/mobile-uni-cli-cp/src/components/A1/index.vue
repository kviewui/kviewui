<template>
  <div class="A1">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue';

export default defineComponent({
    setup() {
        provide('name', '哈哈');
    }
});
</script>

<style scoped></style>
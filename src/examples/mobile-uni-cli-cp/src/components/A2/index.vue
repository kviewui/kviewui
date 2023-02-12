<template>
  <div class="A2">A2</div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';

export default defineComponent({
    setup() {
        console.log(inject('name'));
    }
})
</script>

<style scoped></style>
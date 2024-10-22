<template>
    <div class="line" :style="pointerStyle" />
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    pointerAngle: number;
}>();

const pointerStyle = computed(() => ({
    transform: `translate(-50%, -50%) rotate(${props.pointerAngle}deg)`,
}));
</script>

<style lang="scss" scoped>
.line {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 30%);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    transform-origin: center center;
}
</style>

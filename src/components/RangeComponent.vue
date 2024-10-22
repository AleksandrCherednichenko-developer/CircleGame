<template>
    <div class="range" :style="rangeStyle" />
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { useGameStore } from '@/stores/game.store.ts';

const gameStore = useGameStore();

const rangeStyle = computed(() => {
    return {
        transform: `rotate(${gameStore.rangeCenter - gameStore.rangeWidth / 2}deg)`,
        '-webkit-mask': `conic-gradient(from 0deg at 50% 50%, rgba(0, 0, 0, 1) 0deg, rgba(0, 0, 0, 1) ${gameStore.rangeWidth}deg, rgba(0, 0, 0, 0) ${gameStore.rangeWidth}deg, rgba(0, 0, 0, 0) 360deg)`,
        mask: `conic-gradient(from 0deg at 50% 50%, rgba(0, 0, 0, 1) 0deg, rgba(0, 0, 0, 1) ${gameStore.rangeWidth}deg, rgba(0, 0, 0, 0) ${gameStore.rangeWidth}deg, rgba(0, 0, 0, 0) 360deg)`,
        background: `radial-gradient(circle, rgba(255, 255, 255, 0) 30%, ${gameStore.rangeColor} 100%)`,
    };
});
</script>

<style lang="scss" scoped>
.range {
    @include transit('background');
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
</style>

<template>
    <div class="circle" :class="{ failed: gameStore.failed }">
        <div class="circle-center" />
        <LineComponent :pointer-angle="props.pointerAngle" class="circle-line" />
        <RangeComponent class="circle-range" />
    </div>
</template>

<script setup lang="ts">
import { useGameStore } from '@/stores/game.store.ts';

import LineComponent from '@/components/LineComponent.vue';
import RangeComponent from '@/components/RangeComponent.vue';

const gameStore = useGameStore();

const props = defineProps<{
    pointerAngle: number;
}>();
</script>

<style lang="scss" scoped>
.circle {
    @include size(200px);
    @include transit('border-color, background');
    position: relative;
    border-radius: 50%;
    cursor: pointer;
    outline: 4px solid rgba(0, 0, 0, 0.75);
    border: 2px solid rgba(217, 217, 217, 1);

    &-center {
        @include transit('border-color');
        @include size(80px);
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 10;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.75);
        border: 4px solid rgba(217, 217, 217, 1);
    }

    &.failed {
        border-color: rgba(255, 51, 51, 0.5);
        background: rgba(255, 51, 51, 0.1);

        .circle-center {
            border-color: rgba(255, 51, 51, 0.5);
        }
    }
}
</style>

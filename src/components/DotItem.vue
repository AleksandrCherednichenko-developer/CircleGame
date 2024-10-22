<template>
    <div class="dot" :class="{ filled: props.filled }" />
</template>

<script setup lang="ts">
const props = defineProps<{
    filled: boolean;
}>();
</script>

<style lang="scss" scoped>
.dot {
    @include size(7px);
    @include transit('background-color, border-color, box-shadow');
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.5);

    &.filled {
        border-color: rgba(0, 212, 255, 1);
        box-shadow: 0 0 8px rgba(0, 212, 255, 1);
        background-color: #fff;
    }
}
</style>

<template>
    <div class="dots-list">
        <DotItem v-for="n in props.attempts" :key="n" :filled="n <= props.hits" />
    </div>
</template>

<script setup lang="ts">
import DotItem from '@/components/DotItem.vue';

const props = withDefaults(
    defineProps<{
        attempts: number;
        hits: number;
    }>(),
    {
        attempts: 6,
        hits: 0,
    },
);
</script>

<style lang="scss" scoped>
.dots-list {
    @include display($align: center, $gap: 4px);
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 100px;
    padding: calc-rem(4px);
}
</style>

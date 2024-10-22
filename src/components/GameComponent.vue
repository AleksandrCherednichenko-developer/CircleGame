<template>
    <div class="game-container" @click="handleClick">
        <CircleComponent :pointer-angle="pointerAngle" />
        <DotsList :attempts="6" :hits="gameStore.hits" />

        <div class="lives">Lives: {{ gameStore.lives }}</div>

        <div v-if="gameStore.gameOver" class="game-over">
            Game Over!
            <button @click.stop="restartGame">Restart Game</button>
        </div>
        <div v-if="gameStore.gameWon" class="game-won">
            You Win!
            <button @click.stop="restartGame">Restart Game</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

import { useGameStore } from '@/stores/game.store';

import CircleComponent from '@/components/CircleComponent.vue';
import DotsList from '@/components/DotsList.vue';

const gameStore = useGameStore();
const pointerAngle = ref(0);
const intervalId = ref<number | null>(null);

function handleClick() {
    if (gameStore.gameOver || gameStore.gameWon) {
        alert('Game Over! Please restart the game.');
        return;
    }
    gameStore.isHit(pointerAngle.value);
}

function restartGame() {
    gameStore.startGame();
}

function updatePointer() {
    if (!gameStore.gameOver && !gameStore.gameWon) {
        pointerAngle.value = (pointerAngle.value + 360 / 1.25 / 60) % 360;
    }
}

onMounted(() => {
    gameStore.startGame();
    intervalId.value = setInterval(updatePointer, 1000 / 60);
});

onUnmounted(() => {
    if (intervalId.value) {
        clearInterval(intervalId.value);
    }
});
</script>

<style lang="scss" scoped>
.game-container {
    @include display($align: center, $content: center, $direction: column, $gap: 16px);
    width: 100%;
}

.lives {
    font-size: 1.5em;
    color: red;
}

.game-over,
.game-won {
    font-size: 2em;
    color: red;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
}

button {
    margin-top: 16px;
    padding: 8px 16px;
    font-size: 1em;
    cursor: pointer;
}
</style>

import { defineStore } from 'pinia';

import { computed, ref } from 'vue';

export const useGameStore = defineStore('gameStore', () => {
    const hits = ref(0);
    const failed = ref(false);
    const difficulty = ref('normal');
    const rangeCenter = ref(Math.random() * 60 + 150);
    const lives = ref(3);
    const gameOver = ref(false);
    const gameWon = ref(false);
    const currentColor = ref('rgba(0, 212, 255, 1)'); // Default color

    const rangeWidth = computed(() => {
        const n = hits.value;
        return difficulty.value === 'normal' ? 120 / (1 + n * 0.4) : 120 / (1 + n * 0.8);
    });

    const rangeColor = computed(() => {
        return failed.value ? 'rgba(255, 51, 51, 1)' : currentColor.value; // Red for failure
    });

    function startGame(level: string = 'normal') {
        hits.value = 0;
        failed.value = false;
        difficulty.value = level;
        rangeCenter.value = Math.random() * 60 + 150;
        lives.value = 3;
        gameOver.value = false;
        gameWon.value = false;
        currentColor.value = 'rgba(0, 212, 255, 1)'; // Reset to default color
    }

    function stopGame() {
        gameOver.value = true;
    }

    function winGame() {
        gameWon.value = true;
    }

    function isHit(pointerAngle: number) {
        if (gameOver.value || gameWon.value) return false;

        const minAngle = rangeCenter.value - rangeWidth.value / 2;
        const maxAngle = rangeCenter.value + rangeWidth.value / 2;
        if (pointerAngle >= minAngle && pointerAngle <= maxAngle) {
            hits.value++;
            failed.value = false;
            currentColor.value = 'rgba(217, 217, 217, 1)'; // Success color
            setTimeout(() => {
                currentColor.value = 'rgba(0, 212, 255, 1)'; // Revert to default color
            }, 1000); // Change back after 1 second
            if (hits.value === 6) {
                winGame();
            }
            return true;
        }
        lives.value--;
        failed.value = true;
        if (lives.value <= 0) {
            stopGame();
        }
        resetFailedState();
        return false;
    }

    function resetFailedState() {
        setTimeout(() => {
            failed.value = false;
        }, 1000);
    }

    return {
        hits,
        failed,
        difficulty,
        rangeCenter,
        startGame,
        stopGame,
        winGame,
        isHit,
        rangeWidth,
        rangeColor,
        lives,
        gameOver,
        gameWon,
    };
});

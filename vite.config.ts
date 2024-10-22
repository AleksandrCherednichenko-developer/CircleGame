import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), vueDevTools()],

    resolve: {
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '~@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },

    css: {
        preprocessorOptions: {
            scss: {
                // example : additionalData: `@import "./src/design/styles/variables";`
                // dont need include file extend .scss
                additionalData: `
                        @use 'sass:math';
                        @import "@/assets/styles/variables-sass";
                        @import "@/assets/styles/mixins";
                        @import "@/assets/styles/functions";`,
            },
        },
    },
});

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
export default defineConfig({
  base: './', // Ensures paths are relative to project root
  plugins: [vue()],
});

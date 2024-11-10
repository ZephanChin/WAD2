import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
export default defineConfig({
  root: 'public',
  base: './', // Ensures paths are relative to project root
  plugins: [vue()],
});

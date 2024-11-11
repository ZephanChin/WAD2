import { defineConfig } from 'vite';
import path from 'path';
import { sync as globSync } from 'glob';

const htmlFiles = globSync('./src/*.html');

export default defineConfig({
  base: './', // Ensures relative paths for assets in production
  build: {
    outDir: 'dist', // Output directory
    rollupOptions: {
      input: Object.fromEntries(
        htmlFiles.map((file) => [
          path.basename(file, '.html'), // Strips `src/` and keeps only the filename
          path.resolve(__dirname, file), // Resolves the absolute path for each file
        ])
      ),
      output: {
        entryFileNames: '[name].html', // Ensures HTML files go to the root of `dist`
        chunkFileNames: 'assets/js/[name].[hash].js', // JS chunks in `dist/assets/js`
        assetFileNames: 'assets/[name].[hash][extname]', // All other assets (CSS, images) in `dist/assets/`
      },
    },
  },
});

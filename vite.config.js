import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: false,
    target: 'esnext',
    terserOptions: {
      mangle: false,
      format: {
        beautify: true,
      },
    },
    rollupOptions: {
      output: {
        format: 'iife',
        entryFileNames: '[name].js',
      },
    },
  },
});

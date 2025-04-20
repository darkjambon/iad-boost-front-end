/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
import path from 'path';
import join from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
    alias: {
      '@types': path.resolve(__dirname, 'src/app/types'),
      '@elements': path.resolve(__dirname, 'src/app/lib/basic-elements'),
      '@full-component': path.resolve(__dirname, 'src/app/lib/complexe-elements'),
      '@services': path.resolve(__dirname, 'src/app/services'),
    },
  },
  plugins: [
    analog({
      ssr: false,
      static: true,
      prerender: {
        routes: [],
      },
      vite: { experimental: { supportAnalogFormat: true } },
    }),
  ],
}));

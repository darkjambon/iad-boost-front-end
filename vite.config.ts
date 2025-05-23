/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
import path from 'path';

export default defineConfig(({ mode }) => ({
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
    alias: {
      '@': path.resolve(__dirname, 'src/app'),
      '@types': path.resolve(__dirname, 'src/app/types'),
      '@elements': path.resolve(__dirname, 'src/app/lib/basic-elements'),
      '@full-component': path.resolve(__dirname, 'src/app/lib/complexe-elements'),
      '@services': path.resolve(__dirname, 'src/app/services'),
      '@guards': path.resolve(__dirname, 'src/app/guards'),
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

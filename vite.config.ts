/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
import ClosePlugin from './vite-plugin-close'
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
      '@full-component': path.resolve(
        __dirname,
        'src/app/lib/complexe-elements'
      ),
      '@services': path.resolve(__dirname, 'src/app/services'),
      '@guards': path.resolve(__dirname, 'src/app/guards'),
      '@models': path.resolve(__dirname, 'src/app/models'),
    },
  },
  plugins: [
    analog({
      ssr: true,
      static: false,
      prerender: {
        routes: [],
      },
      vite: { experimental: { supportAnalogFormat: true } },
      nitro: {
        preset: 'vercel',
      },
    }),
    ClosePlugin(),
  ],
}));

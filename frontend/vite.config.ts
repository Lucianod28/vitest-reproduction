/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    host: true,
    port: 3000,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    transformMode: {
      web: [/\.[jt]sx?$/],
    },
    setupFiles: './setupVitest.ts',
    coverage: {
      include: ['src/'],
      all: true,
      lines: 95,
      functions: 95,
      branches: 95,
      statements: 95
    }
  },
  resolve: {
    conditions: ['development', 'browser'],
  },

});

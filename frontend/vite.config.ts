/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    transformMode: {
      web: [/\.[jt]sx?$/],
    },
  },
});

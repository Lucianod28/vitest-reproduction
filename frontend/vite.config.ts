/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  test: {
    transformMode: {
      web: [/\.[jt]sx?$/],
    },
  },
});

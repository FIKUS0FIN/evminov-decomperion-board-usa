import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/out/**',
      '**/.next/**',
      '**/*.spec.ts',
    ],
    alias: {
      '@': path.resolve(__dirname, './src'),
      'server-only': path.resolve(__dirname, './src/lib/__mocks__/empty.ts'),
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
});

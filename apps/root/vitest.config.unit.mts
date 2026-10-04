import angular from '@analogjs/vite-plugin-angular';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: dirname,
  cacheDir: '../../node_modules/.vite/apps/root',
  plugins: [angular(), tailwindcss()],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    name: 'root-unit',
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.spec.ts'],
    setupFiles: ['src/test-setup.ts'],
    coverage: {
      reportsDirectory: '../../coverage/apps/root',
      provider: 'v8',
      reporter: ['text'],
      include: ['src/**/*.ts'],
      exclude: [
        'src/**/*.spec.ts',
        'src/**/*.stories.ts',
        'src/test-setup.ts',
        'src/main.ts',
      ],
    },
  },
});

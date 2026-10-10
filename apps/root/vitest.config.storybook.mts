import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import tailwindcss from '@tailwindcss/vite';
import { playwright } from '@vitest/browser-playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tailwindcss(),
    storybookTest({
      configDir: path.join(dirname, '.storybook'),
    }),
  ],
  test: {
    name: 'root-storybook',
    setupFiles: ['./.storybook/vitest.setup.ts'],
    browser: {
      enabled: true,
      headless: true,
      provider: playwright({}),
      instances: [
        {
          browser: 'chromium',
        },
      ],
    },
    coverage: {
      reportsDirectory: '../../coverage/apps/root',
      include: ['src/**/*.ts'],
      exclude: [
        'src/**/*.stories.ts',
        'src/**/*.spec.ts',
        'src/test-setup.ts',
        'src/main.ts',
        'src/environments/**',
      ],
      provider: 'v8',
      reporter: ['text'],
    },
  },
});

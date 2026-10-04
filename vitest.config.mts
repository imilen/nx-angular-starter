import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    projects: [
      '{apps,libs}/*/{vite,vitest}.config.?({unit,storybook}.){mjs,js,ts,mts}',
    ],
  },
});

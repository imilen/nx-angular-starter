import type { StorybookConfig } from '@analogjs/storybook-angular';
import { mergeConfig, type InlineConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/app/**/*.{mdx,stories.[jt]s?(x)}'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@analogjs/storybook-angular',
    options: {},
  },
  core: {
    builder: {
      name: '@storybook/builder-vite',
      options: {
        viteConfigPath: 'apps/root/vitest.config.storybook.mts',
      },
    },
  },
  staticDirs: ['../public'],
  viteFinal: async (config) => {
    return mergeConfig(config, {} as InlineConfig);
  },
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs

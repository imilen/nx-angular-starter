import { setCompodocJson } from '@storybook/addon-docs/angular';
import type { Preview } from '@storybook/angular';

// eslint-disable-next-line
// @ts-ignore
import '../src/styles/index.css';

try {
  const json = require('../documentation.json');
  setCompodocJson(json.default || json);
} catch (error) {
  console.error('Error loading documentation.json:', error);
}

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

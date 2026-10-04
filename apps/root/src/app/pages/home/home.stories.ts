import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { Home } from './home';

const meta: Meta<Home> = {
  component: Home,
  title: 'Home',
};
export default meta;

type Story = StoryObj<Home>;

export const Default: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/home/i)).toBeTruthy();
  },
};

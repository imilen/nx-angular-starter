import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { NotFound } from './not-found';

const meta: Meta<NotFound> = {
  component: NotFound,
  title: 'NotFound',
};
export default meta;

type Story = StoryObj<NotFound>;

export const Default: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/not-found/i)).toBeTruthy();
  },
};

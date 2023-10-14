import { Meta, StoryObj } from '@storybook/react';

import { ComponentDecorator } from '~/testing/decorators/ComponentDecorator';

import { SoonPill } from '../SoonPill';

const meta: Meta<typeof SoonPill> = {
  title: 'UI/Display/Pill/SoonPill',
  component: SoonPill,
  decorators: [ComponentDecorator],
};

export default meta;
type Story = StoryObj<typeof SoonPill>;

export const Default: Story = {};

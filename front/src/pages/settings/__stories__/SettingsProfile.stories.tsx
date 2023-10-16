import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

import {
  PageDecorator,
  PageDecoratorArgs,
} from '~/testing/decorators/PageDecorator';
import { graphqlMocks } from '~/testing/graphqlMocks';

import { SettingsProfile } from '../SettingsProfile';

const meta: Meta<PageDecoratorArgs> = {
  title: 'Pages/Settings/SettingsProfile',
  component: SettingsProfile,
  decorators: [PageDecorator],
  args: { routePath: '/settings/profile' },
  parameters: {
    msw: graphqlMocks,
  },
};

export default meta;

export type Story = StoryObj<typeof SettingsProfile>;

export const Default: Story = {};

export const LogOut: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const logoutButton = await canvas.findByText('Logout');
    await logoutButton.click();
  },
};

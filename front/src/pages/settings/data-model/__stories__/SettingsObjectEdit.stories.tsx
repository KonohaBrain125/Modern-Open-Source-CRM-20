import { Meta, StoryObj } from '@storybook/react';

import {
  PageDecorator,
  PageDecoratorArgs,
} from '~/testing/decorators/PageDecorator';
import { graphqlMocks } from '~/testing/graphqlMocks';
import { sleep } from '~/testing/sleep';

import { SettingsObjectEdit } from '../SettingsObjectEdit';

const meta: Meta<PageDecoratorArgs> = {
  title: 'Pages/Settings/DataModel/SettingsObjectEdit',
  component: SettingsObjectEdit,
  decorators: [PageDecorator],
  args: {
    routePath: '/settings/objects/:objectSlug/edit',
    routeParams: { ':objectSlug': 'companies' },
  },
  parameters: {
    msw: graphqlMocks,
  },
};

export default meta;

export type Story = StoryObj<typeof SettingsObjectEdit>;

export const Default: Story = {
  play: async ({}) => {
    await sleep(100);
  },
};

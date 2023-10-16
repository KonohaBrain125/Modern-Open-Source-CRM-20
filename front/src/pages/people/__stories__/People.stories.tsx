import { Meta, StoryObj } from '@storybook/react';

import { AppPath } from '@/types/AppPath';
import {
  PageDecorator,
  PageDecoratorArgs,
} from '~/testing/decorators/PageDecorator';
import { graphqlMocks } from '~/testing/graphqlMocks';

import { People } from '../People';

const meta: Meta<PageDecoratorArgs> = {
  title: 'Pages/People',
  component: People,
  decorators: [PageDecorator],
  args: { routePath: AppPath.PeoplePage },
  parameters: {
    msw: graphqlMocks,
  },
};

export default meta;

export type Story = StoryObj<typeof People>;

export const Default: Story = {};

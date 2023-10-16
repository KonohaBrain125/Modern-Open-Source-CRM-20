import { getOperationName } from '@apollo/client/utilities';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { graphql } from 'msw';

import { AppPath } from '@/types/AppPath';
import {
  PageDecorator,
  PageDecoratorArgs,
} from '~/testing/decorators/PageDecorator';
import { mockedOnboardingUsersData } from '~/testing/mock-data/users';

import { GET_CURRENT_USER } from '../../../modules/users/graphql/queries/getCurrentUser';
import { CreateWorkspace } from '../CreateWorkspace';

const meta: Meta<PageDecoratorArgs> = {
  title: 'Pages/Auth/CreateWorkspace',
  component: CreateWorkspace,
  decorators: [PageDecorator],
  args: { routePath: AppPath.CreateWorkspace },
  parameters: {
    msw: [
      graphql.query(
        getOperationName(GET_CURRENT_USER) ?? '',
        (req, res, ctx) => {
          return res(
            ctx.data({
              currentUser: mockedOnboardingUsersData[0],
            }),
          );
        },
      ),
    ],
  },
};

export default meta;

export type Story = StoryObj<typeof CreateWorkspace>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await canvas.findByText('Create your workspace');
  },
};

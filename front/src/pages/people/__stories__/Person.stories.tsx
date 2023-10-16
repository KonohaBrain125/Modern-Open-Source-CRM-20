import { Meta, StoryObj } from '@storybook/react';

import { AppPath } from '@/types/AppPath';
import {
  PageDecorator,
  PageDecoratorArgs,
} from '~/testing/decorators/PageDecorator';
import { graphqlMocks } from '~/testing/graphqlMocks';
import { mockedPeopleData } from '~/testing/mock-data/people';

import { PersonShow } from '../PersonShow';

const meta: Meta<PageDecoratorArgs> = {
  title: 'Pages/People/Person',
  component: PersonShow,
  decorators: [PageDecorator],
  args: {
    routePath: AppPath.PersonShowPage,
    routeParams: { ':personId': mockedPeopleData[0].id },
  },
  parameters: {
    msw: graphqlMocks,
  },
};

export default meta;

export type Story = StoryObj<typeof PersonShow>;

export const Default: Story = {};

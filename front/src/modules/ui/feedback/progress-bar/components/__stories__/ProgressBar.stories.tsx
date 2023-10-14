import { Meta, StoryObj } from '@storybook/react';

import { CatalogDecorator } from '~/testing/decorators/CatalogDecorator';
import { ComponentDecorator } from '~/testing/decorators/ComponentDecorator';
import { CatalogStory } from '~/testing/types';

import { ProgressBar } from '../ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'UI/Feedback/ProgressBar/ProgressBar',
  component: ProgressBar,
  args: {
    duration: 10000,
  },
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;
const args = {};
const defaultArgTypes = {
  control: false,
};
export const Default: Story = {
  args,
  decorators: [ComponentDecorator],
};

export const Catalog: CatalogStory<Story, typeof ProgressBar> = {
  args: {
    ...args,
  },
  argTypes: {
    barHeight: defaultArgTypes,
    barColor: defaultArgTypes,
    autoStart: defaultArgTypes,
  },
  parameters: {
    catalog: {
      dimensions: [
        {
          name: 'animation',
          values: [true, false],
          props: (autoStart: string) => ({ autoStart: Boolean(autoStart) }),
          labels: (autoStart: string) => `AutoStart: ${autoStart}`,
        },
        {
          name: 'colors',
          values: [undefined, 'blue'],
          props: (barColor: string) => ({ barColor }),
          labels: (color: string) => `Color: ${color ?? 'default'}`,
        },
        {
          name: 'sizes',
          values: [undefined, 10],
          props: (barHeight: number) => ({ barHeight }),
          labels: (size: number) => `Size: ${size ? size + ' px' : 'default'}`,
        },
      ],
    },
  },
  decorators: [CatalogDecorator],
};

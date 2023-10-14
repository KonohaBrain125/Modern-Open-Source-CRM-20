import { Meta, StoryObj } from '@storybook/react';

import { IconCheckbox, IconNotes, IconTimelineEvent } from '@/ui/display/icon';
import { CatalogDecorator } from '~/testing/decorators/CatalogDecorator';
import { ComponentDecorator } from '~/testing/decorators/ComponentDecorator';
import { CatalogStory } from '~/testing/types';

import { FloatingIconButtonSize } from '../FloatingIconButton';
import { FloatingIconButtonGroup } from '../FloatingIconButtonGroup';

const meta: Meta<typeof FloatingIconButtonGroup> = {
  title: 'UI/Input/Button/FloatingIconButtonGroup',
  component: FloatingIconButtonGroup,
  args: {
    iconButtons: [
      { Icon: IconNotes },
      { Icon: IconCheckbox },
      { Icon: IconTimelineEvent },
    ],
  },
  argTypes: {
    iconButtons: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof FloatingIconButtonGroup>;

export const Default: Story = {
  args: {
    size: 'small',
  },
  decorators: [ComponentDecorator],
};

export const Catalog: CatalogStory<Story, typeof FloatingIconButtonGroup> = {
  argTypes: {
    size: { control: false },
  },
  parameters: {
    pseudo: { hover: ['.hover'], active: ['.pressed'], focus: ['.focus'] },
    catalog: {
      dimensions: [
        {
          name: 'sizes',
          values: ['small', 'medium'] satisfies FloatingIconButtonSize[],
          props: (size: FloatingIconButtonSize) => ({ size }),
        },
      ],
    },
  },
  decorators: [CatalogDecorator],
};

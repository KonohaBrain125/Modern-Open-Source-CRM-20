import { Meta, StoryObj } from '@storybook/react';

import { CatalogDecorator } from '~/testing/decorators/CatalogDecorator';
import { ComponentDecorator } from '~/testing/decorators/ComponentDecorator';
import { CatalogStory } from '~/testing/types';

import {
  Checkbox,
  CheckboxShape,
  CheckboxSize,
  CheckboxVariant,
} from '../Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Input/Checkbox/Checkbox',
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    checked: false,
    indeterminate: false,
    variant: CheckboxVariant.Primary,
    size: CheckboxSize.Small,
    shape: CheckboxShape.Squared,
  },
  decorators: [ComponentDecorator],
};

export const Catalog: CatalogStory<Story, typeof Checkbox> = {
  args: {},
  argTypes: {
    variant: { control: false },
    size: { control: false },
    indeterminate: { control: false },
    checked: { control: false },
    shape: { control: false },
  },
  parameters: {
    catalog: {
      dimensions: [
        {
          name: 'state',
          values: ['unchecked', 'checked', 'indeterminate'],
          props: (state: string) => {
            if (state === 'checked') {
              return { checked: true };
            }

            if (state === 'indeterminate') {
              return { indeterminate: true };
            }
            return {};
          },
        },
        {
          name: 'shape',
          values: Object.values(CheckboxShape),
          props: (shape: CheckboxShape) => ({ shape }),
        },
        {
          name: 'variant',
          values: Object.values(CheckboxVariant),
          props: (variant: CheckboxVariant) => ({ variant }),
        },
        {
          name: 'size',
          values: Object.values(CheckboxSize),
          props: (size: CheckboxSize) => ({ size }),
        },
      ],
    },
  },
  decorators: [CatalogDecorator],
};

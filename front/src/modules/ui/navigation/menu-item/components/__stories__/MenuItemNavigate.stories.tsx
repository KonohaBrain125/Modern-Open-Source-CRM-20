import { Meta, StoryObj } from '@storybook/react';

import { IconBell } from '@/ui/display/icon';
import {
  CatalogDecorator,
  CatalogDimension,
  CatalogOptions,
} from '~/testing/decorators/CatalogDecorator';
import { ComponentDecorator } from '~/testing/decorators/ComponentDecorator';
import { CatalogStory } from '~/testing/types';

import { MenuItemNavigate } from '../MenuItemNavigate';

const meta: Meta<typeof MenuItemNavigate> = {
  title: 'UI/Navigation/MenuItem/MenuItemNavigate',
  component: MenuItemNavigate,
};

export default meta;

type Story = StoryObj<typeof MenuItemNavigate>;

export const Default: Story = {
  args: {
    text: 'First option',
  },
  decorators: [ComponentDecorator],
};

export const Catalog: CatalogStory<Story, typeof MenuItemNavigate> = {
  args: { LeftIcon: IconBell, text: 'Menu item' },
  argTypes: {
    className: { control: false },
  },
  parameters: {
    pseudo: { hover: ['.hover'], active: ['.pressed'], focus: ['.focus'] },
    catalog: {
      dimensions: [
        {
          name: 'withIcon',
          values: [true, false],
          props: (withIcon: boolean) => ({
            LeftIcon: withIcon ? IconBell : undefined,
          }),
          labels: (withIcon: boolean) =>
            withIcon ? 'With left icon' : 'Without left icon',
        },
        {
          name: 'states',
          values: ['default', 'hover'],
          props: (state: string) => {
            switch (state) {
              case 'default':
                return {};
              case 'hover':
                return { className: state };
              default:
                return {};
            }
          },
        },
      ] as CatalogDimension[],
      options: {
        elementContainer: {
          width: 200,
        },
      } as CatalogOptions,
    },
  },
  decorators: [CatalogDecorator],
};

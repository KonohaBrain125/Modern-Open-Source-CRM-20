import { expect, jest } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import { IconArrowRight } from '@/ui/display/icon';
import { ComponentDecorator } from '~/testing/decorators/ComponentDecorator';

import { RoundedIconButton } from '../RoundedIconButton';

const clickJestFn = jest.fn();

const meta: Meta<typeof RoundedIconButton> = {
  title: 'UI/Input/Button/RoundedIconButton',
  component: RoundedIconButton,
};

export default meta;
type Story = StoryObj<typeof RoundedIconButton>;

export const Default: Story = {
  decorators: [ComponentDecorator],
  argTypes: { Icon: { control: false } },
  args: { onClick: clickJestFn, Icon: IconArrowRight },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(clickJestFn).toHaveBeenCalledTimes(0);
    const button = canvas.getByRole('button');
    await userEvent.click(button);

    expect(clickJestFn).toHaveBeenCalledTimes(1);
  },
};

import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import { CellPositionDecorator } from '~/testing/decorators/CellPositionDecorator';
import { ComponentDecorator } from '~/testing/decorators/ComponentDecorator';
import { sleep } from '~/testing/sleep';

import { EditableCellText } from '../../types/EditableCellText';

const meta: Meta<typeof EditableCellText> = {
  title: 'UI/EditableCell/EditableCellText',
  component: EditableCellText,
  decorators: [ComponentDecorator, CellPositionDecorator],
  args: {
    value: 'Content',
  },
};

export default meta;
type Story = StoryObj<typeof EditableCellText>;

export const DisplayMode: Story = {
  render: EditableCellText,
};

export const SoftFocusMode: Story = {
  ...DisplayMode,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const content = await canvas.findByText('Content');

    await userEvent.click(content);
    await userEvent.keyboard('{esc}');

    await sleep(10);

    await step('Has soft focus mode', () => {
      expect(canvas.getByTestId('editable-cell-soft-focus-mode')).toBeDefined();
    });
  },
};

export const EditMode: Story = {
  ...DisplayMode,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const click = () => userEvent.click(canvas.getByText('Content'));

    await step('Click once', click);

    await step('Has edit mode', () => {
      expect(
        canvas.getByTestId('editable-cell-edit-mode-container'),
      ).toBeDefined();
    });
  },
};

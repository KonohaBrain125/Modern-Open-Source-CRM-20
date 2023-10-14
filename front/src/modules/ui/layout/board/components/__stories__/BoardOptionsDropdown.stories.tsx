import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import { BoardContext } from '@/companies/states/contexts/BoardContext';
import { CompanyBoardRecoilScopeContext } from '@/companies/states/recoil-scope-contexts/CompanyBoardRecoilScopeContext';
import { ViewBarContext } from '@/ui/data/view-bar/contexts/ViewBarContext';
import { ComponentDecorator } from '~/testing/decorators/ComponentDecorator';
import { ComponentWithRecoilScopeDecorator } from '~/testing/decorators/ComponentWithRecoilScopeDecorator';

import { BoardOptionsDropdown } from '../BoardOptionsDropdown';

const meta: Meta<typeof BoardOptionsDropdown> = {
  title: 'UI/Layout/Board/Options/BoardOptionsDropdown',
  component: BoardOptionsDropdown,
  decorators: [
    (Story, { parameters }) => (
      <BoardContext.Provider
        value={{
          BoardRecoilScopeContext: parameters.customRecoilScopeContext,
        }}
      >
        <ViewBarContext.Provider
          value={{
            ViewBarRecoilScopeContext: parameters.customRecoilScopeContext,
          }}
        >
          <Story />
        </ViewBarContext.Provider>
      </BoardContext.Provider>
    ),
    ComponentWithRecoilScopeDecorator,
    ComponentDecorator,
  ],
  parameters: {
    customRecoilScopeContext: CompanyBoardRecoilScopeContext,
  },
  args: {
    customHotkeyScope: { scope: 'scope' },
  },
};

export default meta;
type Story = StoryObj<typeof BoardOptionsDropdown>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const dropdownButton = canvas.getByText('Options');

    await userEvent.click(dropdownButton);
  },
};

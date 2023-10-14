import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import { ViewBarContext } from '@/ui/data/view-bar/contexts/ViewBarContext';
import { RecoilScope } from '@/ui/utilities/recoil-scope/components/RecoilScope';
import { ComponentDecorator } from '~/testing/decorators/ComponentDecorator';

import { TableRecoilScopeContext } from '../../../states/recoil-scope-contexts/TableRecoilScopeContext';
import { TableOptionsDropdown } from '../TableOptionsDropdown';

const meta: Meta<typeof TableOptionsDropdown> = {
  title: 'UI/Data/DataTable/Options/TableOptionsDropdown',
  component: TableOptionsDropdown,
  decorators: [
    (Story) => (
      <RecoilScope CustomRecoilScopeContext={TableRecoilScopeContext}>
        <ViewBarContext.Provider
          value={{
            ViewBarRecoilScopeContext: TableRecoilScopeContext,
          }}
        >
          <Story />
        </ViewBarContext.Provider>
      </RecoilScope>
    ),
    ComponentDecorator,
  ],
};

export default meta;
type Story = StoryObj<typeof TableOptionsDropdown>;

export const Default: Story = {
  args: {
    customHotkeyScope: { scope: 'options' },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const dropdownButton = canvas.getByText('Options');

    await userEvent.click(dropdownButton);
  },
};

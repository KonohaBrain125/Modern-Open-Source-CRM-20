import { Meta } from '@storybook/react';

import { ModalWrapper } from '@/spreadsheet-import/components/core/ModalWrapper';
import { Providers } from '@/spreadsheet-import/components/core/Providers';
import { SelectHeaderStep } from '@/spreadsheet-import/components/steps/SelectHeaderStep/SelectHeaderStep';
import {
  headerSelectionTableFields,
  mockRsiValues,
} from '@/spreadsheet-import/tests/mockRsiValues';

const meta: Meta<typeof SelectHeaderStep> = {
  title: 'Modules/SpreadsheetImport/SelectHeaderStep',
  component: SelectHeaderStep,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export function Default() {
  return (
    <Providers rsiValues={mockRsiValues}>
      <ModalWrapper isOpen={true} onClose={() => null}>
        <SelectHeaderStep
          data={headerSelectionTableFields}
          onContinue={() => Promise.resolve()}
        />
      </ModalWrapper>
    </Providers>
  );
}

import { useRecoilValue } from 'recoil';

import { NumberDisplay } from '@/ui/content-display/components/NumberDisplay';
import { ViewFieldNumberMetadata } from '@/ui/editable-field/types/ViewField';
import { EditableCell } from '@/ui/table/editable-cell/components/EditableCell';
import { useCurrentRowEntityId } from '@/ui/table/hooks/useCurrentEntityId';
import { tableEntityFieldFamilySelector } from '@/ui/table/states/selectors/tableEntityFieldFamilySelector';

import { ColumnDefinition } from '../../../types/ColumnDefinition';

import { GenericEditableNumberCellEditMode } from './GenericEditableNumberCellEditMode';

type OwnProps = {
  columnDefinition: ColumnDefinition<ViewFieldNumberMetadata>;
  editModeHorizontalAlign?: 'left' | 'right';
};

export const GenericEditableNumberCell = ({
  columnDefinition,
  editModeHorizontalAlign,
}: OwnProps) => {
  const currentRowEntityId = useCurrentRowEntityId();

  const fieldValue = useRecoilValue<string>(
    tableEntityFieldFamilySelector({
      entityId: currentRowEntityId ?? '',
      fieldName: columnDefinition.metadata.fieldName,
    }),
  );

  return (
    <EditableCell
      editModeHorizontalAlign={editModeHorizontalAlign}
      editModeContent={
        <GenericEditableNumberCellEditMode
          columnDefinition={columnDefinition}
        />
      }
      nonEditModeContent={<NumberDisplay value={fieldValue} />}
    ></EditableCell>
  );
};

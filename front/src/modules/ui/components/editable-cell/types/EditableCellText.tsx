import { ChangeEvent } from 'react';

import { InplaceInputTextDisplayMode } from '@/ui/inplace-inputs/components/InplaceInputTextDisplayMode';
import { InplaceInputTextEditMode } from '@/ui/inplace-inputs/components/InplaceInputTextEditMode';

import { EditableCell } from '../EditableCell';

type OwnProps = {
  placeholder?: string;
  value: string;
  onChange: (newValue: string) => void;
  editModeHorizontalAlign?: 'left' | 'right';
};

export function EditableCellText({
  value,
  placeholder,
  onChange,
  editModeHorizontalAlign,
}: OwnProps) {
  return (
    <EditableCell
      editModeHorizontalAlign={editModeHorizontalAlign}
      editModeContent={
        <InplaceInputTextEditMode
          placeholder={placeholder || ''}
          autoFocus
          value={value}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            onChange(event.target.value);
          }}
        />
      }
      nonEditModeContent={
        <InplaceInputTextDisplayMode>{value}</InplaceInputTextDisplayMode>
      }
    ></EditableCell>
  );
}

import { useContext } from 'react';

import { RelationPickerHotkeyScope } from '@/ui/input/relation-picker/types/RelationPickerHotkeyScope';

import { FieldDisplay } from '../../field/components/FieldDisplay';
import { FieldInput } from '../../field/components/FieldInput';
import { FieldContext } from '../../field/contexts/FieldContext';
import { useGetButtonIcon } from '../../field/hooks/useGetButtonIcon';
import { useIsFieldEmpty } from '../../field/hooks/useIsFieldEmpty';
import { useIsFieldInputOnly } from '../../field/hooks/useIsFieldInputOnly';
import { FieldInputEvent } from '../../field/types/FieldInputEvent';
import { isFieldRelation } from '../../field/types/guards/isFieldRelation';
import { useInlineCell } from '../hooks/useInlineCell';

import { InlineCellContainer } from './InlineCellContainer';

export const InlineCell = () => {
  const { fieldDefinition } = useContext(FieldContext);

  const buttonIcon = useGetButtonIcon();

  const isFieldEmpty = useIsFieldEmpty();

  const isFieldInputOnly = useIsFieldInputOnly();

  const { closeInlineCell } = useInlineCell();

  const handleEnter: FieldInputEvent = (persistField) => {
    persistField();
    closeInlineCell();
  };

  const handleSubmit: FieldInputEvent = (persistField) => {
    persistField();
    closeInlineCell();
  };

  const handleCancel = () => {
    closeInlineCell();
  };

  const handleEscape = () => {
    closeInlineCell();
  };

  const handleTab: FieldInputEvent = (persistField) => {
    persistField();
    closeInlineCell();
  };

  const handleShiftTab: FieldInputEvent = (persistField) => {
    persistField();
    closeInlineCell();
  };

  const handleClickOutside: FieldInputEvent = (persistField) => {
    persistField();
    closeInlineCell();
  };

  return (
    <InlineCellContainer
      buttonIcon={buttonIcon}
      customEditHotkeyScope={
        isFieldRelation(fieldDefinition)
          ? {
              scope: RelationPickerHotkeyScope.RelationPicker,
            }
          : undefined
      }
      IconLabel={fieldDefinition.Icon}
      editModeContent={
        <FieldInput
          onEnter={handleEnter}
          onCancel={handleCancel}
          onEscape={handleEscape}
          onSubmit={handleSubmit}
          onTab={handleTab}
          onShiftTab={handleShiftTab}
          onClickOutside={handleClickOutside}
        />
      }
      displayModeContent={<FieldDisplay />}
      isDisplayModeContentEmpty={isFieldEmpty}
      isDisplayModeFixHeight
      editModeContentOnly={isFieldInputOnly}
    />
  );
};

import { TextInput } from '@/ui/data/field/meta-types/input/components/internal/TextInput';

import { usePersistField } from '../../../hooks/usePersistField';
import { useEmailField } from '../../hooks/useEmailField';

import { FieldInputOverlay } from './internal/FieldInputOverlay';
import { FieldInputEvent } from './DateFieldInput';

export type EmailFieldInputProps = {
  onClickOutside?: FieldInputEvent;
  onEnter?: FieldInputEvent;
  onEscape?: FieldInputEvent;
  onTab?: FieldInputEvent;
  onShiftTab?: FieldInputEvent;
};

export const EmailFieldInput = ({
  onEnter,
  onEscape,
  onClickOutside,
  onTab,
  onShiftTab,
}: EmailFieldInputProps) => {
  const { fieldDefinition, fieldValue, hotkeyScope } = useEmailField();

  const persistField = usePersistField();

  const handleEnter = (newText: string) => {
    onEnter?.(() => persistField(newText));
  };

  const handleEscape = (newText: string) => {
    onEscape?.(() => persistField(newText));
  };

  const handleClickOutside = (
    event: MouseEvent | TouchEvent,
    newText: string,
  ) => {
    onClickOutside?.(() => persistField(newText));
  };

  const handleTab = (newText: string) => {
    onTab?.(() => persistField(newText));
  };

  const handleShiftTab = (newText: string) => {
    onShiftTab?.(() => persistField(newText));
  };

  return (
    <FieldInputOverlay>
      <TextInput
        placeholder={fieldDefinition.metadata.placeHolder}
        autoFocus
        value={fieldValue ?? ''}
        onClickOutside={handleClickOutside}
        onEnter={handleEnter}
        onEscape={handleEscape}
        onShiftTab={handleShiftTab}
        onTab={handleTab}
        hotkeyScope={hotkeyScope}
      />
    </FieldInputOverlay>
  );
};

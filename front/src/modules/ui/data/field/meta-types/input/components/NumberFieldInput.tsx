import { TextInput } from '@/ui/data/field/meta-types/input/components/internal/TextInput';

import { useNumberField } from '../../hooks/useNumberField';

import { FieldInputOverlay } from './internal/FieldInputOverlay';

export type FieldInputEvent = (persist: () => void) => void;

export type NumberFieldInputProps = {
  onClickOutside?: FieldInputEvent;
  onEnter?: FieldInputEvent;
  onEscape?: FieldInputEvent;
  onTab?: FieldInputEvent;
  onShiftTab?: FieldInputEvent;
};

export const NumberFieldInput = ({
  onEnter,
  onEscape,
  onClickOutside,
  onTab,
  onShiftTab,
}: NumberFieldInputProps) => {
  const { fieldDefinition, fieldValue, hotkeyScope, persistNumberField } =
    useNumberField();

  const handleEnter = (newText: string) => {
    onEnter?.(() => persistNumberField(newText));
  };

  const handleEscape = (newText: string) => {
    onEscape?.(() => persistNumberField(newText));
  };

  const handleClickOutside = (
    event: MouseEvent | TouchEvent,
    newText: string,
  ) => {
    onClickOutside?.(() => persistNumberField(newText));
  };

  const handleTab = (newText: string) => {
    onTab?.(() => persistNumberField(newText));
  };

  const handleShiftTab = (newText: string) => {
    onShiftTab?.(() => persistNumberField(newText));
  };

  return (
    <FieldInputOverlay>
      <TextInput
        placeholder={fieldDefinition.metadata.placeHolder}
        autoFocus
        value={fieldValue?.toString() ?? ''}
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

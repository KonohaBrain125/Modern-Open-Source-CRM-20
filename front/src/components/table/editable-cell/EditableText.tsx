import styled from '@emotion/styled';
import { ChangeEvent, useRef, useState } from 'react';
import EditableCellWrapper from './EditableCellWrapper';

type OwnProps = {
  placeholder?: string;
  content: string;
  changeHandler: (updated: string) => void;
  shouldAlignRight?: boolean;
};

type StyledEditModeProps = {
  isEditMode: boolean;
};

const StyledInplaceInput = styled.input<StyledEditModeProps>`
  width: 100%;
  border: none;
  outline: none;

  &::placeholder {
    font-weight: ${(props) => (props.isEditMode ? 'bold' : 'normal')};
    color: ${(props) =>
      props.isEditMode ? props.theme.text20 : 'transparent'};
  }
`;

const StyledNoEditText = styled.div`
  width: 100%;
`;

function EditableText({
  content,
  placeholder,
  changeHandler,
  shouldAlignRight,
}: OwnProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState(content);
  const [isEditMode, setIsEditMode] = useState(false);

  const onEditModeChange = (isEditMode: boolean) => {
    setIsEditMode(isEditMode);
  };

  return (
    <EditableCellWrapper
      onEditModeChange={onEditModeChange}
      shouldAlignRight={shouldAlignRight}
    >
      {isEditMode ? (
        <StyledInplaceInput
          isEditMode={isEditMode}
          placeholder={placeholder || ''}
          autoFocus
          ref={inputRef}
          value={inputValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setInputValue(event.target.value);
            changeHandler(event.target.value);
          }}
        />
      ) : (
        <StyledNoEditText>{inputValue}</StyledNoEditText>
      )}
    </EditableCellWrapper>
  );
}

export default EditableText;

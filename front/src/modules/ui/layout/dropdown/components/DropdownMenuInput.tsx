import { forwardRef, InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';

import { rgba } from '@/ui/theme/constants/colors';
import { textInputStyle } from '@/ui/theme/constants/effects';

const StyledInput = styled.input`
  ${textInputStyle}

  border: 1px solid ${({ theme }) => theme.border.color.medium};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  box-sizing: border-box;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  height: 32px;
  position: relative;
  width: 100%;

  &:focus {
    border-color: ${({ theme }) => theme.color.blue};
    box-shadow: 0px 0px 0px 3px ${({ theme }) => rgba(theme.color.blue, 0.1)};
  }
`;

const StyledInputContainer = styled.div`
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing(1)};
  width: 100%;
`;

export const DropdownMenuInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ autoFocus, defaultValue, placeholder }, ref) => {
  return (
    <StyledInputContainer>
      <StyledInput
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        placeholder={placeholder}
        ref={ref}
      />
    </StyledInputContainer>
  );
});

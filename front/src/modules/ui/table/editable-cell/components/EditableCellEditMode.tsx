import { ReactElement } from 'react';
import styled from '@emotion/styled';

import { overlayBackground } from '@/ui/theme/constants/effects';

export const EditableCellEditModeContainer = styled.div<OwnProps>`
  align-items: center;
  border: ${({ transparent, theme }) =>
    transparent ? 'none' : `1px solid ${theme.border.color.light}`};
  border-radius: ${({ transparent, theme }) =>
    transparent ? 'none' : theme.border.radius.sm};
  display: flex;
  left: ${(props) =>
    props.editModeHorizontalAlign === 'right' ? 'auto' : '0'};
  margin-left: -1px;
  margin-top: -1px;

  max-width: ${({ maxContentWidth }) =>
    maxContentWidth ? `${maxContentWidth}px` : 'none'};
  min-height: 100%;
  min-width: ${({ maxContentWidth }) => (maxContentWidth ? `none` : '100%')};

  position: absolute;
  right: ${(props) =>
    props.editModeHorizontalAlign === 'right' ? '0' : 'auto'};
  top: ${(props) => (props.editModeVerticalPosition === 'over' ? '0' : '100%')};
  ${({ transparent }) => (transparent ? '' : overlayBackground)};
  z-index: 1;
`;

type OwnProps = {
  children: ReactElement;
  transparent?: boolean;
  maxContentWidth?: number;
  editModeHorizontalAlign?: 'left' | 'right';
  editModeVerticalPosition?: 'over' | 'below';
  initialValue?: string;
};

export function EditableCellEditMode({
  editModeHorizontalAlign,
  editModeVerticalPosition,
  children,
  transparent = false,
  maxContentWidth,
}: OwnProps) {
  return (
    <EditableCellEditModeContainer
      maxContentWidth={maxContentWidth}
      transparent={transparent}
      data-testid="editable-cell-edit-mode-container"
      editModeHorizontalAlign={editModeHorizontalAlign}
      editModeVerticalPosition={editModeVerticalPosition}
    >
      {children}
    </EditableCellEditModeContainer>
  );
}

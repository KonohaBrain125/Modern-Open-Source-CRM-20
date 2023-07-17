import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { contextMenuPositionState } from '@/ui/table/states/contextMenuPositionState';

import { PositionType } from '../types/PositionType';

type OwnProps = {
  children: React.ReactNode | React.ReactNode[];
  selectedIds: string[];
};

type StyledContainerProps = {
  position: PositionType;
};

const StyledContainer = styled.div<StyledContainerProps>`
  align-items: center;
  background: ${({ theme }) => theme.background.secondary};
  border: 1px solid ${({ theme }) => theme.border.color.medium};
  border-radius: ${({ theme }) => theme.border.radius.md};
  bottom: ${(props) => (props.position.x ? 'auto' : '38px')};
  box-shadow: ${({ theme }) => theme.boxShadow.strong};
  display: flex;
  height: 48px;

  left: ${(props) => (props.position.x ? `${props.position.x}px` : '50%')};
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(2)};
  position: ${(props) => (props.position.x ? 'fixed' : 'absolute')};
  top: ${(props) => (props.position.y ? `${props.position.y}px` : 'auto')};

  transform: translateX(-50%);
  z-index: 1;
`;

export function ActionBar({ children, selectedIds }: OwnProps) {
  const position = useRecoilValue(contextMenuPositionState);
  const setContextMenuPosition = useSetRecoilState(contextMenuPositionState);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!(event.target as HTMLElement).closest('.action-bar')) {
        setContextMenuPosition({ x: null, y: null });
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setContextMenuPosition]);

  if (selectedIds.length === 0) {
    return null;
  }

  return (
    <StyledContainer className="action-bar" position={position}>
      {children}
    </StyledContainer>
  );
}

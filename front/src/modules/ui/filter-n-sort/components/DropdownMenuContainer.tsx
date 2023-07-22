import { useRef } from 'react';
import styled from '@emotion/styled';

import { DropdownMenu } from '../../dropdown/components/DropdownMenu';
import { useListenClickOutsideArrayOfRef } from '../../hooks/useListenClickOutsideArrayOfRef';

export const StyledDropdownMenuContainer = styled.ul`
  position: absolute;
  right: 0;
  top: 14px;
`;

export function DropdownMenuContainer({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose?: () => void;
}) {
  const dropdownRef = useRef(null);

  useListenClickOutsideArrayOfRef({
    refs: [dropdownRef],
    callback: () => {
      onClose?.();
    },
  });

  return (
    <StyledDropdownMenuContainer>
      <DropdownMenu ref={dropdownRef}>{children}</DropdownMenu>
    </StyledDropdownMenuContainer>
  );
}

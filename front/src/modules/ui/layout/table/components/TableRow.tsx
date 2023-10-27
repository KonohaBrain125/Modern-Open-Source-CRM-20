import styled from '@emotion/styled';

const StyledTableRow = styled.div<{
  isSelected?: boolean;
  onClick?: () => void;
}>`
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.accent.quaternary : 'transparent'};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  transition: background-color
    ${({ theme }) => theme.animation.duration.normal}s;
  width: 100%;

  &:hover {
    background-color: ${({ onClick, theme }) =>
      onClick ? theme.background.transparent.light : 'transparent'};
    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
  }
`;

export { StyledTableRow as TableRow };

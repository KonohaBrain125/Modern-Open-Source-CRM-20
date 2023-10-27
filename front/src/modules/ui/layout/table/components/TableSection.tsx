import { ReactNode, useState } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { IconChevronDown, IconChevronUp } from '@/ui/display/icon';

import { TableBody } from './TableBody';

type TableSectionProps = {
  children: ReactNode;
  isInitiallyExpanded?: boolean;
  title: string;
};

const StyledSectionHeader = styled.div<{ isExpanded: boolean }>`
  align-items: center;
  background-color: ${({ theme }) => theme.background.transparent.lighter};
  border-bottom: 1px solid ${({ theme }) => theme.border.color.light};
  color: ${({ theme }) => theme.font.color.light};
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  height: ${({ theme }) => theme.spacing(6)};
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing(2)};
  text-align: left;
  text-transform: uppercase;
`;

const StyledSection = styled.div<{ isExpanded: boolean }>`
  max-height: ${({ isExpanded }) => (isExpanded ? '1000px' : 0)};
  opacity: ${({ isExpanded }) => (isExpanded ? 1 : 0)};
  overflow: hidden;
  transition: max-height ${({ theme }) => theme.animation.duration.normal}s,
    opacity ${({ theme }) => theme.animation.duration.normal}s;
`;

const StyledSectionContent = styled(TableBody)`
  border-bottom: 1px solid ${({ theme }) => theme.border.color.light};
`;

export const TableSection = ({
  children,
  isInitiallyExpanded = true,
  title,
}: TableSectionProps) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(isInitiallyExpanded);

  const handleToggleSection = () =>
    setIsExpanded((previousIsExpanded) => !previousIsExpanded);

  return (
    <>
      <StyledSectionHeader
        isExpanded={isExpanded}
        onClick={handleToggleSection}
      >
        {title}
        {isExpanded ? (
          <IconChevronUp size={theme.icon.size.sm} />
        ) : (
          <IconChevronDown size={theme.icon.size.sm} />
        )}
      </StyledSectionHeader>
      <StyledSection isExpanded={isExpanded}>
        <StyledSectionContent>{children}</StyledSectionContent>
      </StyledSection>
    </>
  );
};

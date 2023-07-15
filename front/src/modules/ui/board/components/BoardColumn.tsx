import React from 'react';
import styled from '@emotion/styled';

export const StyledColumn = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
  display: flex;
  flex-direction: column;
  min-width: 200px;
  padding: ${({ theme }) => theme.spacing(2)};
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const StyledColumnTitle = styled.h3`
  color: ${({ color }) => color};
  font-size: ${({ theme }) => theme.font.size.md};
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: ${({ theme }) => theme.text.lineHeight};
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const StyledAmount = styled.div`
  color: ${({ theme }) => theme.font.color.light};
`;

type OwnProps = {
  colorCode?: string;
  title: string;
  children: React.ReactNode;
};

export function BoardColumn({ colorCode, title, children }: OwnProps) {
  return (
    <StyledColumn>
      <StyledHeader>
        <StyledColumnTitle color={colorCode}>• {title}</StyledColumnTitle>
      </StyledHeader>
      {children}
    </StyledColumn>
  );
}

import { JSX } from 'react';
import styled from '@emotion/styled';

const StyledSeparator = styled.div`
  background-color: ${({ theme }) => theme.border.color.medium};
  height: 1px;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  margin-top: ${({ theme }) => theme.spacing(3)};
  width: 100%;
`;

export const HorizontalSeparator = (): JSX.Element => <StyledSeparator />;

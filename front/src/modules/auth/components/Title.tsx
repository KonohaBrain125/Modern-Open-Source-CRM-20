import React from 'react';
import styled from '@emotion/styled';

import { AnimatedEaseIn } from '@/ui/utilities/animation/components/AnimatedEaseIn';

type TitleProps = React.PropsWithChildren & {
  animate?: boolean;
};

const StyledTitle = styled.div`
  color: ${({ theme }) => theme.font.color.primary};
  font-size: ${({ theme }) => theme.font.size.xl};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

export const Title = ({ children, animate = false }: TitleProps) => {
  if (animate) {
    return (
      <StyledTitle>
        <AnimatedEaseIn>{children}</AnimatedEaseIn>
      </StyledTitle>
    );
  }

  return <StyledTitle>{children}</StyledTitle>;
};

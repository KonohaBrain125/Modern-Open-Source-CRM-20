import * as React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import styled from '@emotion/styled';

import { Chip, ChipSize, ChipVariant } from '@/ui/display/chip/components/Chip';

type RoundedLinkProps = {
  href: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const StyledClickable = styled.div`
  overflow: hidden;
  white-space: nowrap;

  a {
    color: inherit;
    overflow: hidden;
    text-decoration: none;
    text-overflow: ellipsis;
  }
`;

export const RoundedLink = ({ children, href, onClick }: RoundedLinkProps) => (
  <div>
    {children !== '' ? (
      <StyledClickable>
        <ReactLink target="_blank" to={href} onClick={onClick}>
          <Chip
            label={`${children}`}
            variant={ChipVariant.Rounded}
            size={ChipSize.Small}
          />
        </ReactLink>
      </StyledClickable>
    ) : (
      <></>
    )}
  </div>
);

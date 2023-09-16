import { type MouseEvent } from 'react';
import styled from '@emotion/styled';

import { FloatingIconButtonGroup } from '@/ui/button/components/FloatingIconButtonGroup';
import { IconComponent } from '@/ui/icon/types/IconComponent';

import { MenuItemLeftContent } from '../internals/components/MenuItemLeftContent';
import { StyledMenuItemBase } from '../internals/components/StyledMenuItemBase';
import { MenuItemAccent } from '../types/MenuItemAccent';

export type MenuItemIconButton = {
  Icon: IconComponent;
  onClick?: (event: MouseEvent<any>) => void;
};

export type MenuItemProps = {
  LeftIcon?: IconComponent | null;
  accent?: MenuItemAccent;
  text: string;
  iconButtons?: MenuItemIconButton[];
  className?: string;
  testId?: string;
  onClick?: () => void;
};

const StyledHoverableMenuItemBase = styled(StyledMenuItemBase)`
  & .hoverable-buttons {
    display: none;
  }
  &:hover {
    & .hoverable-buttons {
      display: block;
    }
  }
`;

export const MenuItem = ({
  LeftIcon,
  accent = 'default',
  text,
  iconButtons,
  className,
  testId,
  onClick,
}: MenuItemProps) => {
  const showIconButtons = Array.isArray(iconButtons) && iconButtons.length > 0;

  return (
    <StyledHoverableMenuItemBase
      data-testid={testId ?? undefined}
      onClick={onClick}
      className={className}
      accent={accent}
    >
      <MenuItemLeftContent LeftIcon={LeftIcon ?? undefined} text={text} />
      <div className="hoverable-buttons">
        {showIconButtons && (
          <FloatingIconButtonGroup iconButtons={iconButtons} />
        )}
      </div>
    </StyledHoverableMenuItemBase>
  );
};

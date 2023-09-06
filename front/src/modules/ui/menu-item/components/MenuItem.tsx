import { MouseEvent } from 'react';
import { useTheme } from '@emotion/react';

import { FloatingIconButton } from '@/ui/button/components/FloatingIconButton';
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

export function MenuItem({
  LeftIcon,
  accent = 'default',
  text,
  iconButtons,
  className,
  testId,
  onClick,
}: MenuItemProps) {
  const theme = useTheme();

  const showIconButtons = Array.isArray(iconButtons) && iconButtons.length > 0;

  return (
    <StyledMenuItemBase
      data-testid={testId ?? undefined}
      onClick={onClick}
      className={className}
      accent={accent}
    >
      <MenuItemLeftContent LeftIcon={LeftIcon ?? undefined} text={text} />
      {showIconButtons && (
        <FloatingIconButtonGroup>
          {iconButtons?.map(({ Icon, onClick }, index) => (
            <FloatingIconButton
              icon={<Icon size={theme.icon.size.sm} />}
              key={index}
              onClick={onClick}
            />
          ))}
        </FloatingIconButtonGroup>
      )}
    </StyledMenuItemBase>
  );
}

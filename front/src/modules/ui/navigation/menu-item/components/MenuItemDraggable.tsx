import { IconComponent } from '@/ui/display/icon/types/IconComponent';
import { FloatingIconButtonGroup } from '@/ui/input/button/components/FloatingIconButtonGroup';

import { MenuItemLeftContent } from '../internals/components/MenuItemLeftContent';
import { StyledHoverableMenuItemBase } from '../internals/components/StyledMenuItemBase';
import { MenuItemAccent } from '../types/MenuItemAccent';

import { MenuItemIconButton } from './MenuItem';

export type MenuItemDraggableProps = {
  LeftIcon: IconComponent | undefined;
  accent?: MenuItemAccent;
  iconButtons?: MenuItemIconButton[];
  isTooltipOpen?: boolean;
  onClick?: () => void;
  text: string;
  isDragDisabled?: boolean;
  className?: string;
};
export const MenuItemDraggable = ({
  LeftIcon,
  accent = 'default',
  iconButtons,
  isTooltipOpen,
  onClick,
  text,
  isDragDisabled = false,
  className,
}: MenuItemDraggableProps) => {
  const showIconButtons = Array.isArray(iconButtons) && iconButtons.length > 0;

  return (
    <StyledHoverableMenuItemBase
      onClick={onClick}
      accent={accent}
      className={className}
      isMenuOpen={!!isTooltipOpen}
    >
      <MenuItemLeftContent
        LeftIcon={LeftIcon}
        text={text}
        showGrip={!isDragDisabled}
      />
      {showIconButtons && (
        <FloatingIconButtonGroup
          className="hoverable-buttons"
          iconButtons={iconButtons}
        />
      )}
    </StyledHoverableMenuItemBase>
  );
};

import { ReactNode } from 'react';
import { useTheme } from '@emotion/react';

import { IconCheck } from '@/ui/display/icon';
import { OverflowingTextWithTooltip } from '@/ui/display/tooltip/OverflowingTextWithTooltip';

import {
  StyledMenuItemLabel,
  StyledMenuItemLeftContent,
} from '../internals/components/StyledMenuItemBase';

import { StyledMenuItemSelect } from './MenuItemSelect';

type MenuItemSelectAvatarProps = {
  avatar: ReactNode;
  selected: boolean;
  text: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  hovered?: boolean;
  testId?: string;
};

export const MenuItemSelectAvatar = ({
  avatar,
  text,
  selected,
  className,
  onClick,
  disabled,
  hovered,
  testId,
}: MenuItemSelectAvatarProps) => {
  const theme = useTheme();

  return (
    <StyledMenuItemSelect
      onClick={onClick}
      className={className}
      selected={selected}
      disabled={disabled}
      hovered={hovered}
      data-testid={testId}
    >
      <StyledMenuItemLeftContent>
        {avatar}
        <StyledMenuItemLabel hasLeftIcon={!!avatar}>
          <OverflowingTextWithTooltip text={text} />
        </StyledMenuItemLabel>
      </StyledMenuItemLeftContent>
      {selected && <IconCheck size={theme.icon.size.sm} />}
    </StyledMenuItemSelect>
  );
};

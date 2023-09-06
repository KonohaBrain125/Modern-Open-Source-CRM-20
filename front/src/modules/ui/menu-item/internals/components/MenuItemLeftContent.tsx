import { useTheme } from '@emotion/react';

import { IconComponent } from '@/ui/icon/types/IconComponent';
import { OverflowingTextWithTooltip } from '@/ui/tooltip/OverflowingTextWithTooltip';

import {
  StyledMenuItemLabel,
  StyledMenuItemLeftContent,
} from './StyledMenuItemBase';

type OwnProps = {
  LeftIcon: IconComponent | null | undefined;
  text: string;
};

export function MenuItemLeftContent({ LeftIcon, text }: OwnProps) {
  const theme = useTheme();

  return (
    <StyledMenuItemLeftContent>
      {LeftIcon && <LeftIcon size={theme.icon.size.md} />}
      <StyledMenuItemLabel hasLeftIcon={!!LeftIcon}>
        <OverflowingTextWithTooltip text={text} />
      </StyledMenuItemLabel>
    </StyledMenuItemLeftContent>
  );
}

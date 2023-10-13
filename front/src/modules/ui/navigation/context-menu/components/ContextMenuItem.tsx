import { IconComponent } from '@/ui/display/icon/types/IconComponent';
import { MenuItem } from '@/ui/navigation/menu-item/components/MenuItem';

import { ContextMenuItemAccent } from '../types/ContextMenuItemAccent';

type ContextMenuItemProps = {
  Icon: IconComponent;
  label: string;
  accent?: ContextMenuItemAccent;
  onClick: () => void;
};

export const ContextMenuItem = ({
  label,
  Icon,
  accent = 'default',
  onClick,
}: ContextMenuItemProps) => (
  <MenuItem LeftIcon={Icon} onClick={onClick} accent={accent} text={label} />
);

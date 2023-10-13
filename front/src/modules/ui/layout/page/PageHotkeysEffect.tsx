import { TableHotkeyScope } from '@/ui/data/data-table/types/TableHotkeyScope';
import { useScopedHotkeys } from '@/ui/utilities/hotkey/hooks/useScopedHotkeys';

type PageHotkeysEffectProps = {
  onAddButtonClick?: () => void;
};

export const PageHotkeysEffect = ({
  onAddButtonClick,
}: PageHotkeysEffectProps) => {
  useScopedHotkeys('c', () => onAddButtonClick?.(), TableHotkeyScope.Table, [
    onAddButtonClick,
  ]);

  return <></>;
};

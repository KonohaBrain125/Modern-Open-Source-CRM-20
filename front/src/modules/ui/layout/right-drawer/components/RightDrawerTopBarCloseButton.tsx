import { IconChevronsRight } from '@/ui/display/icon/index';
import { LightIconButton } from '@/ui/input/button/components/LightIconButton';

import { useRightDrawer } from '../hooks/useRightDrawer';

export const RightDrawerTopBarCloseButton = () => {
  const { closeRightDrawer } = useRightDrawer();

  const handleButtonClick = () => {
    closeRightDrawer();
  };

  return (
    <LightIconButton
      Icon={IconChevronsRight}
      onClick={handleButtonClick}
      size="medium"
      accent="tertiary"
    />
  );
};

import { useResetRecoilState } from 'recoil';

import { ViewBarDropdownButton } from '@/ui/data/view-bar/components/ViewBarDropdownButton';
import { viewEditModeState } from '@/ui/data/view-bar/states/viewEditModeState';

import { BoardScopeIds } from '../types/enums/BoardScopeIds';

import { BoardOptionsDropdownButton } from './BoardOptionsDropdownButton';
import {
  BoardOptionsDropdownContent,
  BoardOptionsDropdownContentProps,
} from './BoardOptionsDropdownContent';

type BoardOptionsDropdownProps = Pick<
  BoardOptionsDropdownContentProps,
  'customHotkeyScope' | 'onStageAdd'
>;

export const BoardOptionsDropdown = ({
  customHotkeyScope,
  onStageAdd,
}: BoardOptionsDropdownProps) => {
  const resetViewEditMode = useResetRecoilState(viewEditModeState);

  return (
    <ViewBarDropdownButton
      buttonComponent={<BoardOptionsDropdownButton />}
      dropdownComponents={
        <BoardOptionsDropdownContent
          customHotkeyScope={customHotkeyScope}
          onStageAdd={onStageAdd}
        />
      }
      dropdownHotkeyScope={customHotkeyScope}
      dropdownId={BoardScopeIds.OptionsDropdown}
      onClickOutside={resetViewEditMode}
    />
  );
};

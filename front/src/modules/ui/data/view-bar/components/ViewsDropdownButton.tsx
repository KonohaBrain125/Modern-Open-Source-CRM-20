import { MouseEvent, useContext } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import {
  RecoilValueReadOnly,
  useRecoilCallback,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';

import { currentViewIdScopedState } from '@/ui/data/view-bar/states/currentViewIdScopedState';
import { entityCountInCurrentViewState } from '@/ui/data/view-bar/states/entityCountInCurrentViewState';
import { filtersScopedState } from '@/ui/data/view-bar/states/filtersScopedState';
import { savedFiltersFamilyState } from '@/ui/data/view-bar/states/savedFiltersFamilyState';
import { savedSortsFamilyState } from '@/ui/data/view-bar/states/savedSortsFamilyState';
import { currentViewScopedSelector } from '@/ui/data/view-bar/states/selectors/currentViewScopedSelector';
import { sortsScopedState } from '@/ui/data/view-bar/states/sortsScopedState';
import { viewEditModeState } from '@/ui/data/view-bar/states/viewEditModeState';
import { viewsScopedState } from '@/ui/data/view-bar/states/viewsScopedState';
import {
  IconChevronDown,
  IconList,
  IconPencil,
  IconPlus,
  IconTrash,
} from '@/ui/display/icon';
import { DropdownMenuItemsContainer } from '@/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { StyledDropdownButtonContainer } from '@/ui/layout/dropdown/components/StyledDropdownButtonContainer';
import { StyledDropdownMenu } from '@/ui/layout/dropdown/components/StyledDropdownMenu';
import { StyledDropdownMenuSeparator } from '@/ui/layout/dropdown/components/StyledDropdownMenuSeparator';
import { useDropdown } from '@/ui/layout/dropdown/hooks/useDropdown';
import { MenuItem } from '@/ui/navigation/menu-item/components/MenuItem';
import { MOBILE_VIEWPORT } from '@/ui/theme/constants/theme';
import { HotkeyScope } from '@/ui/utilities/hotkey/types/HotkeyScope';
import { useRecoilScopedState } from '@/ui/utilities/recoil-scope/hooks/useRecoilScopedState';
import { useRecoilScopedValue } from '@/ui/utilities/recoil-scope/hooks/useRecoilScopedValue';
import { useRecoilScopeId } from '@/ui/utilities/recoil-scope/hooks/useRecoilScopeId';
import { assertNotNull } from '~/utils/assert';

import { ViewsDropdownId } from '../constants/ViewsDropdownId';
import { ViewBarContext } from '../contexts/ViewBarContext';
import { useRemoveView } from '../hooks/useRemoveView';

import { ViewBarDropdownButton } from './ViewBarDropdownButton';

const StyledBoldDropdownMenuItemsContainer = styled(DropdownMenuItemsContainer)`
  font-weight: ${({ theme }) => theme.font.weight.regular};
`;

const StyledDropdownLabelAdornments = styled.span`
  align-items: center;
  color: ${({ theme }) => theme.grayScale.gray35};
  display: inline-flex;
  gap: ${({ theme }) => theme.spacing(1)};
  margin-left: ${({ theme }) => theme.spacing(1)};
`;

const StyledViewIcon = styled(IconList)`
  margin-right: ${({ theme }) => theme.spacing(1)};
`;

const StyledViewName = styled.span`
  display: inline-block;
  max-width: 130px;
  @media (max-width: 375px) {
    max-width: 90px;
  }
  @media (min-width: 376px) and (max-width: ${MOBILE_VIEWPORT}px) {
    max-width: 110px;
  }
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
  white-space: nowrap;
`;

export type ViewsDropdownButtonProps = {
  hotkeyScope: HotkeyScope;
  onViewEditModeChange?: () => void;
};

export const ViewsDropdownButton = ({
  hotkeyScope,
  onViewEditModeChange,
}: ViewsDropdownButtonProps) => {
  const theme = useTheme();

  const { defaultViewName, onViewSelect, ViewBarRecoilScopeContext } =
    useContext(ViewBarContext);

  const recoilScopeId = useRecoilScopeId(ViewBarRecoilScopeContext);

  const currentView = useRecoilScopedValue(
    currentViewScopedSelector,
    ViewBarRecoilScopeContext,
  );

  const [views] = useRecoilScopedState(
    viewsScopedState,
    ViewBarRecoilScopeContext,
  );

  const entityCount = useRecoilValue(
    entityCountInCurrentViewState as RecoilValueReadOnly<number>,
  );

  const { isDropdownOpen, closeDropdown } = useDropdown({
    dropdownScopeId: ViewsDropdownId,
  });

  const setViewEditMode = useSetRecoilState(viewEditModeState);

  const handleViewSelect = useRecoilCallback(
    ({ set, snapshot }) =>
      async (viewId: string) => {
        await onViewSelect?.(viewId);

        const savedFilters = await snapshot.getPromise(
          savedFiltersFamilyState(viewId),
        );
        const savedSorts = await snapshot.getPromise(
          savedSortsFamilyState(viewId),
        );

        set(filtersScopedState(recoilScopeId), savedFilters);
        set(sortsScopedState(recoilScopeId), savedSorts);
        set(currentViewIdScopedState(recoilScopeId), viewId);
        closeDropdown();
      },
    [onViewSelect, recoilScopeId, closeDropdown],
  );

  const handleAddViewButtonClick = () => {
    setViewEditMode({ mode: 'create', viewId: undefined });
    onViewEditModeChange?.();
    closeDropdown();
  };

  const handleEditViewButtonClick = (
    event: MouseEvent<HTMLButtonElement>,
    viewId: string,
  ) => {
    event.stopPropagation();
    setViewEditMode({ mode: 'edit', viewId });
    onViewEditModeChange?.();
    closeDropdown();
  };

  const { removeView } = useRemoveView();

  const handleDeleteViewButtonClick = async (
    event: MouseEvent<HTMLButtonElement>,
    viewId: string,
  ) => {
    event.stopPropagation();

    await removeView(viewId);
    closeDropdown();
  };

  return (
    <ViewBarDropdownButton
      dropdownId={ViewsDropdownId}
      dropdownHotkeyScope={hotkeyScope}
      buttonComponent={
        <StyledDropdownButtonContainer isUnfolded={isDropdownOpen}>
          <StyledViewIcon size={theme.icon.size.md} />
          <StyledViewName>
            {currentView?.name || defaultViewName}
          </StyledViewName>
          <StyledDropdownLabelAdornments>
            · {entityCount} <IconChevronDown size={theme.icon.size.sm} />
          </StyledDropdownLabelAdornments>
        </StyledDropdownButtonContainer>
      }
      dropdownComponents={
        <StyledDropdownMenu width={200}>
          <DropdownMenuItemsContainer>
            {views.map((view) => (
              <MenuItem
                key={view.id}
                iconButtons={[
                  {
                    Icon: IconPencil,
                    onClick: (event: MouseEvent<HTMLButtonElement>) =>
                      handleEditViewButtonClick(event, view.id),
                  },
                  views.length > 1
                    ? {
                        Icon: IconTrash,
                        onClick: (event: MouseEvent<HTMLButtonElement>) =>
                          handleDeleteViewButtonClick(event, view.id),
                      }
                    : null,
                ].filter(assertNotNull)}
                onClick={() => handleViewSelect(view.id)}
                LeftIcon={IconList}
                text={view.name}
              />
            ))}
          </DropdownMenuItemsContainer>
          <StyledDropdownMenuSeparator />
          <StyledBoldDropdownMenuItemsContainer>
            <MenuItem
              onClick={handleAddViewButtonClick}
              LeftIcon={IconPlus}
              text="Add view"
            />
          </StyledBoldDropdownMenuItemsContainer>
        </StyledDropdownMenu>
      }
    />
  );
};

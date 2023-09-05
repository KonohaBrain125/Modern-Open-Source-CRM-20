import { useCallback, useState } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Key } from 'ts-key-enum';

import { Button } from '@/ui/button/components/Button';
import { ButtonGroup } from '@/ui/button/components/ButtonGroup';
import { DropdownMenuItem } from '@/ui/dropdown/components/DropdownMenuItem';
import { StyledDropdownMenuItemsContainer } from '@/ui/dropdown/components/StyledDropdownMenuItemsContainer';
import { useDropdownButton } from '@/ui/dropdown/hooks/useDropdownButton';
import { DropdownMenuContainer } from '@/ui/filter-n-sort/components/DropdownMenuContainer';
import { filtersScopedState } from '@/ui/filter-n-sort/states/filtersScopedState';
import { savedFiltersScopedState } from '@/ui/filter-n-sort/states/savedFiltersScopedState';
import { savedSortsScopedState } from '@/ui/filter-n-sort/states/savedSortsScopedState';
import { canPersistFiltersScopedSelector } from '@/ui/filter-n-sort/states/selectors/canPersistFiltersScopedSelector';
import { canPersistSortsScopedSelector } from '@/ui/filter-n-sort/states/selectors/canPersistSortsScopedSelector';
import { sortsScopedState } from '@/ui/filter-n-sort/states/sortsScopedState';
import { IconChevronDown, IconPlus } from '@/ui/icon';
import { useScopedHotkeys } from '@/ui/utilities/hotkey/hooks/useScopedHotkeys';
import { useContextScopeId } from '@/ui/utilities/recoil-scope/hooks/useContextScopeId';
import { useRecoilScopedValue } from '@/ui/utilities/recoil-scope/hooks/useRecoilScopedValue';

import { TableRecoilScopeContext } from '../../states/recoil-scope-contexts/TableRecoilScopeContext';
import { savedTableColumnsScopedState } from '../../states/savedTableColumnsScopedState';
import { canPersistTableColumnsScopedSelector } from '../../states/selectors/canPersistTableColumnsScopedSelector';
import { tableColumnsScopedState } from '../../states/tableColumnsScopedState';
import {
  currentTableViewIdState,
  tableViewEditModeState,
} from '../../states/tableViewsState';

const StyledContainer = styled.div`
  display: inline-flex;
  margin-right: ${({ theme }) => theme.spacing(2)};
  position: relative;
`;

type TableUpdateViewButtonGroupProps = {
  onViewSubmit?: () => void;
  HotkeyScope: string;
};

export const TableUpdateViewButtonGroup = ({
  onViewSubmit,
  HotkeyScope,
}: TableUpdateViewButtonGroupProps) => {
  const theme = useTheme();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const tableScopeId = useContextScopeId(TableRecoilScopeContext);

  const currentTableViewId = useRecoilScopedValue(
    currentTableViewIdState,
    TableRecoilScopeContext,
  );

  const tableColumns = useRecoilScopedValue(
    tableColumnsScopedState,
    TableRecoilScopeContext,
  );
  const setSavedColumns = useSetRecoilState(
    savedTableColumnsScopedState(currentTableViewId),
  );
  const canPersistColumns = useRecoilValue(
    canPersistTableColumnsScopedSelector([tableScopeId, currentTableViewId]),
  );

  const filters = useRecoilScopedValue(
    filtersScopedState,
    TableRecoilScopeContext,
  );
  const setSavedFilters = useSetRecoilState(
    savedFiltersScopedState(currentTableViewId),
  );
  const canPersistFilters = useRecoilValue(
    canPersistFiltersScopedSelector([tableScopeId, currentTableViewId]),
  );

  const sorts = useRecoilScopedValue(sortsScopedState, TableRecoilScopeContext);
  const setSavedSorts = useSetRecoilState(
    savedSortsScopedState(currentTableViewId),
  );
  const canPersistSorts = useRecoilValue(
    canPersistSortsScopedSelector([tableScopeId, currentTableViewId]),
  );

  const setViewEditMode = useSetRecoilState(tableViewEditModeState);

  const { openDropdownButton: openOptionsDropdownButton } = useDropdownButton({
    key: 'options',
  });

  const handleArrowDownButtonClick = useCallback(() => {
    setIsDropdownOpen((previousIsOpen) => !previousIsOpen);
  }, []);

  const handleCreateViewButtonClick = useCallback(() => {
    setViewEditMode({ mode: 'create', viewId: undefined });
    openOptionsDropdownButton();
    setIsDropdownOpen(false);
  }, [setViewEditMode, openOptionsDropdownButton]);

  const handleDropdownClose = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  const handleViewSubmit = useCallback(async () => {
    if (canPersistColumns) setSavedColumns(tableColumns);
    if (canPersistFilters) setSavedFilters(filters);
    if (canPersistSorts) setSavedSorts(sorts);

    await Promise.resolve(onViewSubmit?.());
  }, [
    canPersistColumns,
    canPersistFilters,
    canPersistSorts,
    filters,
    onViewSubmit,
    setSavedColumns,
    setSavedFilters,
    setSavedSorts,
    sorts,
    tableColumns,
  ]);

  useScopedHotkeys(
    [Key.Enter, Key.Escape],
    handleDropdownClose,
    HotkeyScope,
    [],
  );

  return (
    <StyledContainer>
      <ButtonGroup size="small" accent="blue">
        <Button
          title="Update view"
          disabled={
            !currentTableViewId ||
            (!canPersistColumns && !canPersistFilters && !canPersistSorts)
          }
          onClick={handleViewSubmit}
        />
        <Button
          size="small"
          icon={<IconChevronDown />}
          onClick={handleArrowDownButtonClick}
        />
      </ButtonGroup>

      {isDropdownOpen && (
        <DropdownMenuContainer onClose={handleDropdownClose}>
          <StyledDropdownMenuItemsContainer>
            <DropdownMenuItem onClick={handleCreateViewButtonClick}>
              <IconPlus size={theme.icon.size.md} />
              Create view
            </DropdownMenuItem>
          </StyledDropdownMenuItemsContainer>
        </DropdownMenuContainer>
      )}
    </StyledContainer>
  );
};

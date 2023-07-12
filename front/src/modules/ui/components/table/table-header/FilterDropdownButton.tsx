import { useCallback, useState } from 'react';
import { Key } from 'ts-key-enum';

import { useScopedHotkeys } from '@/hotkeys/hooks/useScopedHotkeys';
import { useSetHotkeysScope } from '@/hotkeys/hooks/useSetHotkeysScope';
import { InternalHotkeysScope } from '@/hotkeys/types/internal/InternalHotkeysScope';
import { filterDefinitionUsedInDropdownScopedState } from '@/lib/filters-and-sorts/states/filterDefinitionUsedInDropdownScopedState';
import { filterDropdownSearchInputScopedState } from '@/lib/filters-and-sorts/states/filterDropdownSearchInputScopedState';
import { filtersScopedState } from '@/lib/filters-and-sorts/states/filtersScopedState';
import { isFilterDropdownOperandSelectUnfoldedScopedState } from '@/lib/filters-and-sorts/states/isFilterDropdownOperandSelectUnfoldedScopedState';
import { selectedOperandInDropdownScopedState } from '@/lib/filters-and-sorts/states/selectedOperandInDropdownScopedState';
import { useRecoilScopedState } from '@/recoil-scope/hooks/useRecoilScopedState';
import { TableContext } from '@/ui/tables/states/TableContext';

import DropdownButton from './DropdownButton';
import { FilterDropdownDateSearchInput } from './FilterDropdownDateSearchInput';
import { FilterDropdownEntitySearchInput } from './FilterDropdownEntitySearchInput';
import { FilterDropdownEntitySelect } from './FilterDropdownEntitySelect';
import { FilterDropdownFilterSelect } from './FilterDropdownFilterSelect';
import { FilterDropdownNumberSearchInput } from './FilterDropdownNumberSearchInput';
import { FilterDropdownOperandButton } from './FilterDropdownOperandButton';
import { FilterDropdownOperandSelect } from './FilterDropdownOperandSelect';
import { FilterDropdownTextSearchInput } from './FilterDropdownTextSearchInput';

export function FilterDropdownButton() {
  const [isUnfolded, setIsUnfolded] = useState(false);

  const [
    isFilterDropdownOperandSelectUnfolded,
    setIsFilterDropdownOperandSelectUnfolded,
  ] = useRecoilScopedState(
    isFilterDropdownOperandSelectUnfoldedScopedState,
    TableContext,
  );

  const [
    tableFilterDefinitionUsedInDropdown,
    setTableFilterDefinitionUsedInDropdown,
  ] = useRecoilScopedState(
    filterDefinitionUsedInDropdownScopedState,
    TableContext,
  );

  const [, setFilterDropdownSearchInput] = useRecoilScopedState(
    filterDropdownSearchInputScopedState,
    TableContext,
  );

  const [activeTableFilters] = useRecoilScopedState(
    filtersScopedState,
    TableContext,
  );

  const [selectedOperandInDropdown, setSelectedOperandInDropdown] =
    useRecoilScopedState(selectedOperandInDropdownScopedState, TableContext);

  const resetState = useCallback(() => {
    setIsFilterDropdownOperandSelectUnfolded(false);
    setTableFilterDefinitionUsedInDropdown(null);
    setSelectedOperandInDropdown(null);
    setFilterDropdownSearchInput('');
  }, [
    setTableFilterDefinitionUsedInDropdown,
    setSelectedOperandInDropdown,
    setFilterDropdownSearchInput,
    setIsFilterDropdownOperandSelectUnfolded,
  ]);

  const isFilterSelected = (activeTableFilters?.length ?? 0) > 0;

  const setHotkeysScope = useSetHotkeysScope();

  function handleIsUnfoldedChange(newIsUnfolded: boolean) {
    if (newIsUnfolded) {
      setIsUnfolded(true);
    } else {
      if (tableFilterDefinitionUsedInDropdown?.type === 'entity') {
        setHotkeysScope(InternalHotkeysScope.Table);
      }
      setIsUnfolded(false);
      resetState();
    }
  }

  useScopedHotkeys(
    [Key.Escape],
    () => {
      handleIsUnfoldedChange(false);
    },
    InternalHotkeysScope.RelationPicker,
    [handleIsUnfoldedChange],
  );

  return (
    <DropdownButton
      label="Filter"
      isActive={isFilterSelected}
      isUnfolded={isUnfolded}
      onIsUnfoldedChange={handleIsUnfoldedChange}
    >
      {!tableFilterDefinitionUsedInDropdown ? (
        <FilterDropdownFilterSelect />
      ) : isFilterDropdownOperandSelectUnfolded ? (
        <FilterDropdownOperandSelect />
      ) : (
        selectedOperandInDropdown && (
          <>
            <FilterDropdownOperandButton />
            <DropdownButton.StyledSearchField autoFocus key={'search-filter'}>
              {tableFilterDefinitionUsedInDropdown.type === 'text' && (
                <FilterDropdownTextSearchInput />
              )}
              {tableFilterDefinitionUsedInDropdown.type === 'number' && (
                <FilterDropdownNumberSearchInput />
              )}
              {tableFilterDefinitionUsedInDropdown.type === 'date' && (
                <FilterDropdownDateSearchInput />
              )}
              {tableFilterDefinitionUsedInDropdown.type === 'entity' && (
                <FilterDropdownEntitySearchInput />
              )}
            </DropdownButton.StyledSearchField>
            {tableFilterDefinitionUsedInDropdown.type === 'entity' && (
              <FilterDropdownEntitySelect />
            )}
          </>
        )
      )}
    </DropdownButton>
  );
}

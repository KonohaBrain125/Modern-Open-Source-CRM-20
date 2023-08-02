import { Context, useState } from 'react';
import React from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { IconChevronDown } from '@tabler/icons-react';

import { filterDefinitionUsedInDropdownScopedState } from '@/ui/filter-n-sort/states/filterDefinitionUsedInDropdownScopedState';
import { filterDropdownSearchInputScopedState } from '@/ui/filter-n-sort/states/filterDropdownSearchInputScopedState';
import { selectedOperandInDropdownScopedState } from '@/ui/filter-n-sort/states/selectedOperandInDropdownScopedState';
import { useSetHotkeyScope } from '@/ui/utilities/hotkey/hooks/useSetHotkeyScope';
import { useRecoilScopedState } from '@/ui/utilities/recoil-scope/hooks/useRecoilScopedState';

import { availableFiltersScopedState } from '../states/availableFiltersScopedState';
import { filtersScopedState } from '../states/filtersScopedState';
import { FiltersHotkeyScope } from '../types/FiltersHotkeyScope';
import { getOperandsForFilterType } from '../utils/getOperandsForFilterType';

import { DropdownMenuContainer } from './DropdownMenuContainer';
import { FilterDropdownEntitySearchInput } from './FilterDropdownEntitySearchInput';
import { FilterDropdownEntitySelect } from './FilterDropdownEntitySelect';
import { GenericEntityFilterChip } from './GenericEntityFilterChip';

const StyledDropdownButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

type StyledDropdownButtonProps = {
  isUnfolded: boolean;
};

const StyledDropdownButton = styled.div<StyledDropdownButtonProps>`
  align-items: center;
  background: ${({ theme }) => theme.background.primary};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  cursor: pointer;
  display: flex;

  filter: ${(props) => (props.isUnfolded ? 'brightness(0.95)' : 'none')};
  padding: ${({ theme }) => theme.spacing(1)};

  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(2)};

  &:hover {
    filter: brightness(0.95);
  }
  user-select: none;
`;

export function SingleEntityFilterDropdownButton({
  context,
  HotkeyScope,
}: {
  context: Context<string | null>;
  HotkeyScope: FiltersHotkeyScope;
}) {
  const theme = useTheme();

  const [availableFilters] = useRecoilScopedState(
    availableFiltersScopedState,
    context,
  );
  const availableFilter = availableFilters[0];

  const [isUnfolded, setIsUnfolded] = useState(false);

  const [filters] = useRecoilScopedState(filtersScopedState, context);

  const [, setFilterDefinitionUsedInDropdown] = useRecoilScopedState(
    filterDefinitionUsedInDropdownScopedState,
    context,
  );

  const [, setFilterDropdownSearchInput] = useRecoilScopedState(
    filterDropdownSearchInputScopedState,
    context,
  );

  const [, setSelectedOperandInDropdown] = useRecoilScopedState(
    selectedOperandInDropdownScopedState,
    context,
  );

  React.useEffect(() => {
    setFilterDefinitionUsedInDropdown(availableFilter);
    const defaultOperand = getOperandsForFilterType(availableFilter?.type)[0];
    setSelectedOperandInDropdown(defaultOperand);
  }, [
    availableFilter,
    setFilterDefinitionUsedInDropdown,
    setSelectedOperandInDropdown,
  ]);

  const setHotkeyScope = useSetHotkeyScope();

  function handleIsUnfoldedChange(newIsUnfolded: boolean) {
    if (newIsUnfolded) {
      setHotkeyScope(HotkeyScope);
      setIsUnfolded(true);
    } else {
      setHotkeyScope(HotkeyScope);
      setIsUnfolded(false);
      setFilterDropdownSearchInput('');
    }
  }

  return (
    <StyledDropdownButtonContainer>
      <StyledDropdownButton
        isUnfolded={isUnfolded}
        onClick={() => handleIsUnfoldedChange(!isUnfolded)}
      >
        {filters[0] ? (
          <GenericEntityFilterChip filter={filters[0]} />
        ) : (
          'Filter'
        )}
        <IconChevronDown size={theme.icon.size.md} />
      </StyledDropdownButton>
      {isUnfolded && (
        <DropdownMenuContainer onClose={() => handleIsUnfoldedChange(false)}>
          <FilterDropdownEntitySearchInput context={context} />
          <FilterDropdownEntitySelect context={context} />
        </DropdownMenuContainer>
      )}
    </StyledDropdownButtonContainer>
  );
}

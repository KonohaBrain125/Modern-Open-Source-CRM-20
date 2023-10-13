import { IconChevronDown } from '@/ui/display/icon';
import { DropdownMenuHeader } from '@/ui/layout/dropdown/components/DropdownMenuHeader';
import { useRecoilScopedState } from '@/ui/utilities/recoil-scope/hooks/useRecoilScopedState';

import { useViewBarContext } from '../hooks/useViewBarContext';
import { isFilterDropdownOperandSelectUnfoldedScopedState } from '../states/isFilterDropdownOperandSelectUnfoldedScopedState';
import { selectedOperandInDropdownScopedState } from '../states/selectedOperandInDropdownScopedState';
import { getOperandLabel } from '../utils/getOperandLabel';

export const FilterDropdownOperandButton = () => {
  const { ViewBarRecoilScopeContext } = useViewBarContext();

  const [selectedOperandInDropdown] = useRecoilScopedState(
    selectedOperandInDropdownScopedState,
    ViewBarRecoilScopeContext,
  );

  const [
    isFilterDropdownOperandSelectUnfolded,
    setIsFilterDropdownOperandSelectUnfolded,
  ] = useRecoilScopedState(
    isFilterDropdownOperandSelectUnfoldedScopedState,
    ViewBarRecoilScopeContext,
  );

  if (isFilterDropdownOperandSelectUnfolded) {
    return null;
  }

  return (
    <DropdownMenuHeader
      key={'selected-filter-operand'}
      EndIcon={IconChevronDown}
      onClick={() => setIsFilterDropdownOperandSelectUnfolded(true)}
    >
      {getOperandLabel(selectedOperandInDropdown)}
    </DropdownMenuHeader>
  );
};

import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil';

import { DropdownRecoilScopeContext } from '@/ui/dropdown/states/recoil-scope-contexts/DropdownRecoilScopeContext';
import { RecoilScope } from '@/ui/utilities/recoil-scope/components/RecoilScope';
import { useContextScopeId } from '@/ui/utilities/recoil-scope/hooks/useContextScopeId';
import { useRecoilScopedState } from '@/ui/utilities/recoil-scope/hooks/useRecoilScopedState';
import { useRecoilScopedValue } from '@/ui/utilities/recoil-scope/hooks/useRecoilScopedValue';
import { ViewBar, ViewBarProps } from '@/ui/view-bar/components/ViewBar';
import { currentViewIdScopedState } from '@/ui/view-bar/states/currentViewIdScopedState';

import { TableOptionsDropdownId } from '../../constants/TableOptionsDropdownId';
import { TableOptionsDropdown } from '../../options/components/TableOptionsDropdown';
import { TableRecoilScopeContext } from '../../states/recoil-scope-contexts/TableRecoilScopeContext';
import { savedTableColumnsFamilyState } from '../../states/savedTableColumnsFamilyState';
import { canPersistTableColumnsScopedFamilySelector } from '../../states/selectors/canPersistTableColumnsScopedFamilySelector';
import { tableColumnsScopedState } from '../../states/tableColumnsScopedState';
import { TableOptionsHotkeyScope } from '../../types/TableOptionsHotkeyScope';

export type TableHeaderProps = {
  onImport?: () => void;
} & Pick<ViewBarProps, 'defaultViewName' | 'onViewsChange' | 'onViewSubmit'>;

export function TableHeader({
  onImport,
  onViewsChange,
  onViewSubmit,
  ...props
}: TableHeaderProps) {
  const tableScopeId = useContextScopeId(TableRecoilScopeContext);

  const currentViewId = useRecoilScopedValue(
    currentViewIdScopedState,
    TableRecoilScopeContext,
  );
  const canPersistTableColumns = useRecoilValue(
    canPersistTableColumnsScopedFamilySelector([tableScopeId, currentViewId]),
  );
  const [tableColumns, setTableColumns] = useRecoilScopedState(
    tableColumnsScopedState,
    TableRecoilScopeContext,
  );
  const [savedTableColumns, setSavedTableColumns] = useRecoilState(
    savedTableColumnsFamilyState(currentViewId),
  );

  function handleViewBarReset() {
    setTableColumns(savedTableColumns);
  }

  const handleViewSelect = useRecoilCallback(
    ({ set, snapshot }) =>
      async (viewId: string) => {
        const savedTableColumns = await snapshot.getPromise(
          savedTableColumnsFamilyState(viewId),
        );
        set(tableColumnsScopedState(tableScopeId), savedTableColumns);
      },
    [tableScopeId],
  );

  async function handleViewSubmit() {
    if (canPersistTableColumns) {
      setSavedTableColumns(tableColumns);
    }

    await onViewSubmit?.();
  }

  return (
    <RecoilScope SpecificContext={DropdownRecoilScopeContext}>
      <ViewBar
        {...props}
        canPersistViewFields={canPersistTableColumns}
        onReset={handleViewBarReset}
        onViewSelect={handleViewSelect}
        onViewSubmit={handleViewSubmit}
        optionsDropdownButton={
          <TableOptionsDropdown
            onImport={onImport}
            onViewsChange={onViewsChange}
            customHotkeyScope={{ scope: TableOptionsHotkeyScope.Dropdown }}
          />
        }
        optionsDropdownKey={TableOptionsDropdownId}
        scopeContext={TableRecoilScopeContext}
      />
    </RecoilScope>
  );
}

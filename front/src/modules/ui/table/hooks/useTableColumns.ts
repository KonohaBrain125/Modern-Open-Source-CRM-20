import { useCallback } from 'react';

import type { ViewFieldMetadata } from '@/ui/editable-field/types/ViewField';
import { useRecoilScopedState } from '@/ui/utilities/recoil-scope/hooks/useRecoilScopedState';
import { useRecoilScopedValue } from '@/ui/utilities/recoil-scope/hooks/useRecoilScopedValue';

import { TableRecoilScopeContext } from '../states/recoil-scope-contexts/TableRecoilScopeContext';
import { tableColumnsByKeyScopedSelector } from '../states/selectors/tableColumnsByKeyScopedSelector';
import { tableColumnsScopedState } from '../states/tableColumnsScopedState';
import type { ColumnDefinition } from '../types/ColumnDefinition';

export const useTableColumns = () => {
  const [tableColumns, setTableColumns] = useRecoilScopedState(
    tableColumnsScopedState,
    TableRecoilScopeContext,
  );
  const tableColumnsByKey = useRecoilScopedValue(
    tableColumnsByKeyScopedSelector,
    TableRecoilScopeContext,
  );

  const handleColumnVisibilityChange = useCallback(
    (column: ColumnDefinition<ViewFieldMetadata>) => {
      const nextColumns = tableColumnsByKey[column.key]
        ? tableColumns.map((previousColumn) =>
            previousColumn.key === column.key
              ? { ...previousColumn, isVisible: !column.isVisible }
              : previousColumn,
          )
        : [...tableColumns, { ...column, isVisible: true }].sort(
            (columnA, columnB) => columnA.index - columnB.index,
          );

      setTableColumns(nextColumns);
    },
    [tableColumnsByKey, tableColumns, setTableColumns],
  );

  return { handleColumnVisibilityChange };
};

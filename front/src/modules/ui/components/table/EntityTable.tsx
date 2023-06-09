import * as React from 'react';
import styled from '@emotion/styled';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useRecoilState, useSetRecoilState } from 'recoil';

import {
  FilterConfigType,
  SelectedFilterType,
} from '@/filters-and-sorts/interfaces/filters/interface';
import {
  SelectedSortType,
  SortType,
} from '@/filters-and-sorts/interfaces/sorts/interface';
import { contextMenuPositionState } from '@/ui/tables/states/contextMenuPositionState';

import { useResetTableRowSelection } from '../../tables/hooks/useResetTableRowSelection';
import { currentRowSelectionState } from '../../tables/states/rowSelectionState';

import { TableHeader } from './table-header/TableHeader';

type OwnProps<
  TData extends { id: string; __typename: 'companies' | 'people' },
  SortField,
> = {
  data: Array<TData>;
  columns: Array<ColumnDef<TData, any>>;
  viewName: string;
  viewIcon?: React.ReactNode;
  availableSorts?: Array<SortType<SortField>>;
  availableFilters?: FilterConfigType<TData>[];
  onSortsUpdate?: (sorts: Array<SelectedSortType<SortField>>) => void;
  onFiltersUpdate?: (filters: Array<SelectedFilterType<TData>>) => void;
  onRowSelectionChange?: (rowSelection: string[]) => void;
};

const StyledTable = styled.table`
  min-width: 1000px;
  width: calc(100% - 2 * ${(props) => props.theme.table.horizontalCellMargin});
  border-radius: 4px;
  border-spacing: 0;
  border-collapse: collapse;
  margin-left: ${(props) => props.theme.table.horizontalCellMargin};
  margin-right: ${(props) => props.theme.table.horizontalCellMargin};
  table-layout: fixed;

  th {
    border-collapse: collapse;
    color: ${(props) => props.theme.text40};
    padding: 0;
    border: 1px solid ${(props) => props.theme.tertiaryBackground};
    text-align: left;
    :last-child {
      border-right-color: transparent;
    }
    :first-of-type {
      border-left-color: transparent;
    }
  }

  td {
    border-collapse: collapse;
    color: ${(props) => props.theme.text80};
    padding: 0;
    border: 1px solid ${(props) => props.theme.tertiaryBackground};
    text-align: left;
    :last-child {
      border-right-color: transparent;
    }
    :first-of-type {
      border-left-color: transparent;
    }
  }
`;

const StyledTableWithHeader = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

const StyledTableScrollableContainer = styled.div`
  overflow: auto;
  height: 100%;
  flex: 1;
`;

const StyledRow = styled.tr<{ selected: boolean }>`
  background: ${(props) =>
    props.selected ? props.theme.secondaryBackground : 'none'};
`;

export function EntityTable<
  TData extends { id: string; __typename: 'companies' | 'people' },
  SortField,
>({
  data,
  columns,
  viewName,
  viewIcon,
  availableSorts,
  availableFilters,
  onSortsUpdate,
  onFiltersUpdate,
}: OwnProps<TData, SortField>) {
  const [currentRowSelection, setCurrentRowSelection] = useRecoilState(
    currentRowSelectionState,
  );
  const setContextMenuPosition = useSetRecoilState(contextMenuPositionState);

  const resetTableRowSelection = useResetTableRowSelection();

  React.useEffect(() => {
    resetTableRowSelection();
  }, [resetTableRowSelection]);

  const table = useReactTable<TData>({
    data,
    columns,
    state: {
      rowSelection: currentRowSelection,
    },
    getCoreRowModel: getCoreRowModel(),
    enableRowSelection: true,
    onRowSelectionChange: setCurrentRowSelection,
    getRowId: (row) => row.id,
  });

  function handleContextMenu(event: React.MouseEvent, id: string) {
    event.preventDefault();
    setCurrentRowSelection((prev) => ({ ...prev, [id]: true }));

    setContextMenuPosition({
      x: event.clientX,
      y: event.clientY,
    });
  }

  return (
    <StyledTableWithHeader>
      <TableHeader
        viewName={viewName}
        viewIcon={viewIcon}
        availableSorts={availableSorts}
        availableFilters={availableFilters}
        onSortsUpdate={onSortsUpdate}
        onFiltersUpdate={onFiltersUpdate}
      />
      <StyledTableScrollableContainer>
        <StyledTable>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    style={{
                      width: `${header.getSize()}px`,
                    }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row, index) => (
              <StyledRow
                key={row.id}
                data-testid={`row-id-${row.index}`}
                selected={!!currentRowSelection[row.id]}
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      key={cell.id + row.original.id}
                      onContextMenu={(event) =>
                        handleContextMenu(event, row.original.id)
                      }
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  );
                })}
              </StyledRow>
            ))}
          </tbody>
        </StyledTable>
      </StyledTableScrollableContainer>
    </StyledTableWithHeader>
  );
}

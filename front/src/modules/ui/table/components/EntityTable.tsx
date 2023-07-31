import * as React from 'react';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

import { SelectedSortType, SortType } from '@/ui/filter-n-sort/types/interface';
import { useListenClickOutside } from '@/ui/utilities/click-outside/hooks/useListenClickOutside';

import { useLeaveTableFocus } from '../hooks/useLeaveTableFocus';
import { useMapKeyboardToSoftFocus } from '../hooks/useMapKeyboardToSoftFocus';
import { EntityUpdateMutationHookContext } from '../states/EntityUpdateMutationHookContext';
import { viewFieldsFamilyState } from '../states/viewFieldsState';
import { TableHeader } from '../table-header/components/TableHeader';

import { EntityTableBody } from './EntityTableBody';
import { EntityTableHeader } from './EntityTableHeader';

const StyledTable = styled.table`
  border-collapse: collapse;

  border-radius: ${({ theme }) => theme.border.radius.sm};
  border-spacing: 0;
  margin-left: ${({ theme }) => theme.table.horizontalCellMargin};
  margin-right: ${({ theme }) => theme.table.horizontalCellMargin};
  table-layout: fixed;
  width: calc(100% - ${({ theme }) => theme.table.horizontalCellMargin} * 2);

  th {
    border: 1px solid ${({ theme }) => theme.border.color.light};
    border-collapse: collapse;
    color: ${({ theme }) => theme.font.color.tertiary};
    padding: 0;
    text-align: left;

    :last-child {
      border-right-color: transparent;
    }
    :first-of-type {
      border-left-color: transparent;
      border-right-color: transparent;
    }
    :last-of-type {
      min-width: 0;
      width: 100%;
    }
  }

  td {
    border: 1px solid ${({ theme }) => theme.border.color.light};
    border-collapse: collapse;
    color: ${({ theme }) => theme.font.color.primary};
    padding: 0;

    text-align: left;

    :last-child {
      border-right-color: transparent;
    }
    :first-of-type {
      border-left-color: transparent;
      border-right-color: transparent;
    }
    :last-of-type {
      min-width: 0;
      width: 100%;
    }
  }
`;

const StyledTableWithHeader = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
`;

const StyledTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
`;

const StyledTableWrapper = styled.div`
  flex: 1;
  overflow: auto;
`;

type OwnProps<SortField> = {
  viewName: string;
  viewIcon?: React.ReactNode;
  availableSorts?: Array<SortType<SortField>>;
  onSortsUpdate?: (sorts: Array<SelectedSortType<SortField>>) => void;
  onRowSelectionChange?: (rowSelection: string[]) => void;
  useUpdateEntityMutation: any;
};

export function EntityTable<SortField>({
  viewName,
  viewIcon,
  availableSorts,
  onSortsUpdate,
  useUpdateEntityMutation,
}: OwnProps<SortField>) {
  const viewFields = useRecoilValue(viewFieldsFamilyState);

  const tableBodyRef = React.useRef<HTMLDivElement>(null);

  useMapKeyboardToSoftFocus();

  const leaveTableFocus = useLeaveTableFocus();

  useListenClickOutside({
    refs: [tableBodyRef],
    callback: () => {
      leaveTableFocus();
    },
  });

  return (
    <EntityUpdateMutationHookContext.Provider value={useUpdateEntityMutation}>
      <StyledTableWithHeader>
        <StyledTableContainer ref={tableBodyRef}>
          <TableHeader
            viewName={viewName}
            viewIcon={viewIcon}
            availableSorts={availableSorts}
            onSortsUpdate={onSortsUpdate}
          />
          <StyledTableWrapper>
            {viewFields.length > 0 && (
              <StyledTable>
                <EntityTableHeader viewFields={viewFields} />
                <EntityTableBody />
              </StyledTable>
            )}
          </StyledTableWrapper>
        </StyledTableContainer>
      </StyledTableWithHeader>
    </EntityUpdateMutationHookContext.Provider>
  );
}

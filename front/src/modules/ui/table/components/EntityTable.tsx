import { useRef } from 'react';
import styled from '@emotion/styled';

import { DragSelect } from '@/ui/utilities/drag-select/components/DragSelect';
import { useScopedHotkeys } from '@/ui/utilities/hotkey/hooks/useScopedHotkeys';
import {
  useListenClickOutside,
  useListenClickOutsideByClassName,
} from '@/ui/utilities/pointer-event/hooks/useListenClickOutside';
import { ScrollWrapper } from '@/ui/utilities/scroll/components/ScrollWrapper';

import { EntityUpdateMutationContext } from '../contexts/EntityUpdateMutationHookContext';
import { useLeaveTableFocus } from '../hooks/useLeaveTableFocus';
import { useMapKeyboardToSoftFocus } from '../hooks/useMapKeyboardToSoftFocus';
import { useResetTableRowSelection } from '../hooks/useResetTableRowSelection';
import { useSetRowSelectedState } from '../hooks/useSetRowSelectedState';
import { TableHeader } from '../table-header/components/TableHeader';
import { TableHotkeyScope } from '../types/TableHotkeyScope';

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

type OwnProps = {
  updateEntityMutation: any;
};

export function EntityTable({ updateEntityMutation }: OwnProps) {
  const tableBodyRef = useRef<HTMLDivElement>(null);

  const setRowSelectedState = useSetRowSelectedState();
  const resetTableRowSelection = useResetTableRowSelection();

  useMapKeyboardToSoftFocus();

  const leaveTableFocus = useLeaveTableFocus();

  useListenClickOutside({
    refs: [tableBodyRef],
    callback: () => {
      leaveTableFocus();
    },
  });

  useScopedHotkeys(
    'escape',
    () => {
      resetTableRowSelection();
    },
    TableHotkeyScope.Table,
  );

  useListenClickOutsideByClassName({
    classNames: ['entity-table-cell'],
    excludeClassNames: ['action-bar', 'context-menu'],
    callback: () => {
      resetTableRowSelection();
    },
  });

  return (
    <EntityUpdateMutationContext.Provider value={updateEntityMutation}>
      <StyledTableWithHeader>
        <StyledTableContainer ref={tableBodyRef}>
          <TableHeader />
          <ScrollWrapper>
            <div>
              <StyledTable className="entity-table-cell">
                <EntityTableHeader />
                <EntityTableBody />
              </StyledTable>
            </div>
          </ScrollWrapper>
          <DragSelect
            dragSelectable={tableBodyRef}
            onDragSelectionStart={resetTableRowSelection}
            onDragSelectionChange={setRowSelectedState}
          />
        </StyledTableContainer>
      </StyledTableWithHeader>
    </EntityUpdateMutationContext.Provider>
  );
}

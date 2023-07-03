import { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DroppableProvided,
  OnDragEndResponder,
} from '@hello-pangea/dnd'; // Atlassian dnd does not support StrictMode from RN 18, so we use a fork @hello-pangea/dnd https://github.com/atlassian/react-beautiful-dnd/issues/2350
import { useRecoilState } from 'recoil';

import { BoardColumn } from '@/ui/components/board/BoardColumn';
import { Company } from '~/generated/graphql';

import {
  Column,
  getOptimisticlyUpdatedBoard,
  StyledBoard,
} from '../../ui/components/board/Board';
import { boardColumnsState } from '../states/boardColumnsState';
import { boardItemsState } from '../states/boardItemsState';
import { selectedBoardItemsState } from '../states/selectedBoardItemsState';

import { CompanyBoardCard } from './CompanyBoardCard';
import { NewButton } from './NewButton';

export type CompanyProgress = Pick<
  Company,
  'id' | 'name' | 'domainName' | 'createdAt'
>;
export type CompanyProgressDict = {
  [key: string]: CompanyProgress;
};

type BoardProps = {
  pipelineId: string;
  columns: Omit<Column, 'itemKeys'>[];
  initialBoard: Column[];
  initialItems: CompanyProgressDict;
  onUpdate?: (itemKey: string, columnId: Column['id']) => Promise<void>;
};

const StyledPlaceholder = styled.div`
  min-height: 1px;
`;

const BoardColumnCardsContainer = ({
  children,
  droppableProvided,
}: {
  children: React.ReactNode;
  droppableProvided: DroppableProvided;
}) => {
  return (
    <div
      ref={droppableProvided?.innerRef}
      {...droppableProvided?.droppableProps}
    >
      {children}
      <StyledPlaceholder>{droppableProvided?.placeholder}</StyledPlaceholder>
    </div>
  );
};

export function Board({
  columns,
  initialBoard,
  initialItems,
  onUpdate,
  pipelineId,
}: BoardProps) {
  const [board, setBoard] = useRecoilState(boardColumnsState);
  const [boardItems, setBoardItems] = useRecoilState(boardItemsState);
  const [selectedBoardItems, setSelectedBoardItems] = useRecoilState(
    selectedBoardItemsState,
  );
  const [isInitialBoardLoaded, setIsInitialBoardLoaded] = useState(false);

  useEffect(() => {
    if (isInitialBoardLoaded) return;
    setBoard(initialBoard);
    setBoardItems(initialItems);
    setIsInitialBoardLoaded(true);
  }, [
    initialBoard,
    setBoard,
    initialItems,
    setBoardItems,
    setIsInitialBoardLoaded,
    isInitialBoardLoaded,
  ]);

  const onDragEnd: OnDragEndResponder = useCallback(
    async (result) => {
      const newBoard = getOptimisticlyUpdatedBoard(board, result);
      if (!newBoard) return;
      setBoard(newBoard);
      try {
        const draggedEntityId = result.draggableId;
        const destinationColumnId = result.destination?.droppableId;
        draggedEntityId &&
          destinationColumnId &&
          onUpdate &&
          (await onUpdate(draggedEntityId, destinationColumnId));
      } catch (e) {
        console.error(e);
      }
    },
    [board, onUpdate, setBoard],
  );

  function handleSelect(itemKey: string) {
    if (selectedBoardItems.includes(itemKey)) {
      setSelectedBoardItems(
        selectedBoardItems.filter((key) => key !== itemKey),
      );
    } else {
      setSelectedBoardItems([...selectedBoardItems, itemKey]);
    }
  }

  return board.length > 0 ? (
    <StyledBoard>
      <DragDropContext onDragEnd={onDragEnd}>
        {columns.map((column, columnIndex) => (
          <Droppable key={column.id} droppableId={column.id}>
            {(droppableProvided) => (
              <BoardColumn title={column.title} colorCode={column.colorCode}>
                <BoardColumnCardsContainer
                  droppableProvided={droppableProvided}
                >
                  {board[columnIndex].itemKeys.map(
                    (itemKey, index) =>
                      boardItems[itemKey] && (
                        <Draggable
                          key={itemKey}
                          draggableId={itemKey}
                          index={index}
                        >
                          {(draggableProvided) => (
                            <div
                              ref={draggableProvided?.innerRef}
                              {...draggableProvided?.dragHandleProps}
                              {...draggableProvided?.draggableProps}
                            >
                              <CompanyBoardCard
                                company={boardItems[itemKey]}
                                selected={selectedBoardItems.includes(itemKey)}
                                onSelect={() => handleSelect(itemKey)}
                              />
                            </div>
                          )}
                        </Draggable>
                      ),
                  )}
                </BoardColumnCardsContainer>
                <NewButton pipelineId={pipelineId} columnId={column.id} />
              </BoardColumn>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </StyledBoard>
  ) : (
    <></>
  );
}

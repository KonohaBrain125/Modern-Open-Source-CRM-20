import { BoardContext } from '@/companies/states/contexts/BoardContext';
import { pipelineAvailableFieldDefinitions } from '@/pipeline/constants/pipelineAvailableFieldDefinitions';
import {
  EntityBoard,
  EntityBoardProps,
} from '@/ui/board/components/EntityBoard';
import { EntityBoardActionBar } from '@/ui/board/components/EntityBoardActionBar';
import { EntityBoardContextMenu } from '@/ui/board/components/EntityBoardContextMenu';
import { ViewBarContext } from '@/ui/view-bar/contexts/ViewBarContext';
import { useBoardViews } from '@/views/hooks/useBoardViews';
import { opportunitiesBoardOptions } from '~/pages/opportunities/opportunitiesBoardOptions';

import { HooksCompanyBoardEffect } from '../../components/HooksCompanyBoardEffect';
import { CompanyBoardRecoilScopeContext } from '../../states/recoil-scope-contexts/CompanyBoardRecoilScopeContext';

type CompanyBoardProps = Pick<
  EntityBoardProps,
  'onColumnAdd' | 'onColumnDelete' | 'onEditColumnTitle'
>;

export const CompanyBoard = ({
  onColumnAdd,
  onColumnDelete,
  onEditColumnTitle,
}: CompanyBoardProps) => {
  // TODO: we can store objectId and fieldDefinitions in the ViewBarContext
  // And then use the useBoardViews hook wherever we need it in the board
  const { createView, deleteView, submitCurrentView, updateView } =
    useBoardViews({
      objectId: 'company',
      RecoilScopeContext: CompanyBoardRecoilScopeContext,
      fieldDefinitions: pipelineAvailableFieldDefinitions,
    });

  return (
    <>
      <BoardContext.Provider
        value={{
          BoardRecoilScopeContext: CompanyBoardRecoilScopeContext,
        }}
      >
        <HooksCompanyBoardEffect />
        <ViewBarContext.Provider
          value={{
            defaultViewName: 'All Opportunities',
            onCurrentViewSubmit: submitCurrentView,
            onViewCreate: createView,
            onViewEdit: updateView,
            onViewRemove: deleteView,
            ViewBarRecoilScopeContext: CompanyBoardRecoilScopeContext,
          }}
        >
          <EntityBoard
            boardOptions={opportunitiesBoardOptions}
            onColumnAdd={onColumnAdd}
            onColumnDelete={onColumnDelete}
            onEditColumnTitle={onEditColumnTitle}
          />
        </ViewBarContext.Provider>
        <EntityBoardActionBar />
        <EntityBoardContextMenu />
      </BoardContext.Provider>
    </>
  );
};

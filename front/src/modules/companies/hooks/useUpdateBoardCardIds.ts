import { useRecoilCallback } from 'recoil';

import { boardCardIdsByColumnIdFamilyState } from '@/ui/layout/board/states/boardCardIdsByColumnIdFamilyState';
import { boardColumnsState } from '@/ui/layout/board/states/boardColumnsState';
import { GetPipelineProgressQuery } from '~/generated/graphql';

export const useUpdateCompanyBoardCardIds = () =>
  useRecoilCallback(
    ({ snapshot, set }) =>
      (
        pipelineProgresses: GetPipelineProgressQuery['findManyPipelineProgress'],
      ) => {
        const boardColumns = snapshot
          .getLoadable(boardColumnsState)
          .valueOrThrow();

        for (const boardColumn of boardColumns) {
          const boardCardIds = pipelineProgresses
            .filter(
              (pipelineProgressToFilter) =>
                pipelineProgressToFilter.pipelineStageId === boardColumn.id,
            )
            .map((pipelineProgress) => pipelineProgress.id);

          set(boardCardIdsByColumnIdFamilyState(boardColumn.id), boardCardIds);
        }
      },
    [],
  );

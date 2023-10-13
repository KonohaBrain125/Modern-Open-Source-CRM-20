import React from 'react';
import { useRecoilValue } from 'recoil';

import { ContextMenu } from '@/ui/navigation/context-menu/components/ContextMenu';

import { selectedCardIdsSelector } from '../states/selectors/selectedCardIdsSelector';

export const EntityBoardContextMenu = () => {
  const selectedCardIds = useRecoilValue(selectedCardIdsSelector);
  return <ContextMenu selectedIds={selectedCardIds}></ContextMenu>;
};

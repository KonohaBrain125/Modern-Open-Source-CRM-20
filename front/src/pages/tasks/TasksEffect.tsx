import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { TasksRecoilScopeContext } from '@/activities/states/recoil-scope-contexts/TasksRecoilScopeContext';
import { currentUserState } from '@/auth/states/currentUserState';
import { availableFiltersScopedState } from '@/ui/data/view-bar/states/availableFiltersScopedState';
import { filtersScopedState } from '@/ui/data/view-bar/states/filtersScopedState';
import { useRecoilScopedState } from '@/ui/utilities/recoil-scope/hooks/useRecoilScopedState';
import { ViewFilterOperand } from '~/generated/graphql';

import { tasksFilters } from './tasks-filters';

export const TasksEffect = () => {
  const [currentUser] = useRecoilState(currentUserState);
  const [, setFilters] = useRecoilScopedState(
    filtersScopedState,
    TasksRecoilScopeContext,
  );

  const [, setAvailableFilters] = useRecoilScopedState(
    availableFiltersScopedState,
    TasksRecoilScopeContext,
  );

  useEffect(() => {
    setAvailableFilters(tasksFilters);
  }, [setAvailableFilters]);

  useEffect(() => {
    if (currentUser) {
      setFilters([
        {
          key: 'assigneeId',
          type: 'entity',
          value: currentUser.id,
          operand: ViewFilterOperand.Is,
          displayValue: currentUser.displayName,
          displayAvatarUrl: currentUser.avatarUrl ?? undefined,
        },
      ]);
    }
  }, [currentUser, setFilters]);
  return <></>;
};

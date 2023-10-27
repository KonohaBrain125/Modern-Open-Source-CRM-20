import { DateTime } from 'luxon';

import { ActivityTargetableEntity } from '@/activities/types/ActivityTargetableEntity';
import { useFilter } from '@/ui/data/filter/hooks/useFilter';
import { turnFilterIntoWhereClause } from '@/ui/data/filter/utils/turnFilterIntoWhereClause';
import { ActivityType, useGetActivitiesQuery } from '~/generated/graphql';
import { parseDate } from '~/utils/date-utils';

export const useTasks = (entity?: ActivityTargetableEntity) => {
  const { selectedFilters } = useFilter();

  const whereFilters = entity
    ? {
        activityTargets: {
          some: {
            OR: [
              { companyId: { equals: entity.id } },
              { personId: { equals: entity.id } },
            ],
          },
        },
      }
    : Object.assign(
        {},
        ...selectedFilters.map((filter) => {
          return turnFilterIntoWhereClause(filter);
        }),
      );

  const { data: completeTasksData } = useGetActivitiesQuery({
    variables: {
      where: {
        type: { equals: ActivityType.Task },
        completedAt: { not: { equals: null } },
        ...whereFilters,
      },
    },
    skip: !entity && selectedFilters.length === 0,
  });

  const { data: incompleteTaskData } = useGetActivitiesQuery({
    variables: {
      where: {
        type: { equals: ActivityType.Task },
        completedAt: { equals: null },
        ...whereFilters,
      },
    },
    skip: !entity && selectedFilters.length === 0,
  });

  const todayOrPreviousTasks = incompleteTaskData?.findManyActivities.filter(
    (task) => {
      if (!task.dueAt) {
        return false;
      }
      const dueDate = parseDate(task.dueAt).toJSDate();
      const today = DateTime.now().endOf('day').toJSDate();
      return dueDate <= today;
    },
  );

  const upcomingTasks = incompleteTaskData?.findManyActivities.filter(
    (task) => {
      if (!task.dueAt) {
        return false;
      }
      const dueDate = parseDate(task.dueAt).toJSDate();
      const today = DateTime.now().endOf('day').toJSDate();
      return dueDate > today;
    },
  );

  const unscheduledTasks = incompleteTaskData?.findManyActivities.filter(
    (task) => {
      return !task.dueAt;
    },
  );

  const completedTasks = completeTasksData?.findManyActivities;

  return {
    todayOrPreviousTasks: todayOrPreviousTasks ?? [],
    upcomingTasks: upcomingTasks ?? [],
    unscheduledTasks: unscheduledTasks ?? [],
    completedTasks: completedTasks ?? [],
  };
};

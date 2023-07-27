import { useCallback, useMemo, useState } from 'react';

import { defaultOrderBy } from '@/companies/queries';
import { GenericEntityTableData } from '@/people/components/GenericEntityTableData';
import { peopleFieldMetadataArray } from '@/people/constants/peopleFieldMetadataArray';
import { PeopleSelectedSortType } from '@/people/queries';
import { reduceSortsToOrderBy } from '@/ui/filter-n-sort/helpers';
import { filtersScopedState } from '@/ui/filter-n-sort/states/filtersScopedState';
import { turnFilterIntoWhereClause } from '@/ui/filter-n-sort/utils/turnFilterIntoWhereClause';
import { IconList } from '@/ui/icon';
import { useRecoilScopedValue } from '@/ui/recoil-scope/hooks/useRecoilScopedValue';
import { EntityTable } from '@/ui/table/components/EntityTableV2';
import { TableContext } from '@/ui/table/states/TableContext';
import {
  PersonOrderByWithRelationInput,
  useGetPeopleQuery,
  useUpdateOnePersonMutation,
} from '~/generated/graphql';
import { availableSorts } from '~/pages/people/people-sorts';

export function PeopleTable() {
  const [orderBy, setOrderBy] =
    useState<PersonOrderByWithRelationInput[]>(defaultOrderBy);

  const updateSorts = useCallback((sorts: Array<PeopleSelectedSortType>) => {
    setOrderBy(sorts.length ? reduceSortsToOrderBy(sorts) : defaultOrderBy);
  }, []);

  const filters = useRecoilScopedValue(filtersScopedState, TableContext);

  const whereFilters = useMemo(() => {
    return { AND: filters.map(turnFilterIntoWhereClause) };
  }, [filters]) as any;

  return (
    <>
      <GenericEntityTableData
        getRequestResultKey="people"
        useGetRequest={useGetPeopleQuery}
        orderBy={orderBy}
        whereFilters={whereFilters}
        fieldMetadataArray={peopleFieldMetadataArray}
      />
      <EntityTable
        viewName="All People"
        viewIcon={<IconList size={16} />}
        availableSorts={availableSorts}
        onSortsUpdate={updateSorts}
        useUpdateEntityMutation={useUpdateOnePersonMutation}
      />
    </>
  );
}

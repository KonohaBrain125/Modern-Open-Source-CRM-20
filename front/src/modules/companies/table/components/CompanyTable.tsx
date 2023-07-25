import { useCallback, useMemo, useState } from 'react';

import { CompaniesSelectedSortType, defaultOrderBy } from '@/companies/queries';
import { companyColumns } from '@/companies/table/components/companyColumns';
import { CompanyEntityTableData } from '@/companies/table/components/CompanyEntityTableData';
import { reduceSortsToOrderBy } from '@/ui/filter-n-sort/helpers';
import { filtersScopedState } from '@/ui/filter-n-sort/states/filtersScopedState';
import { turnFilterIntoWhereClause } from '@/ui/filter-n-sort/utils/turnFilterIntoWhereClause';
import { IconList } from '@/ui/icon';
import { useRecoilScopedValue } from '@/ui/recoil-scope/hooks/useRecoilScopedValue';
import { EntityTable } from '@/ui/table/components/EntityTable';
import { TableContext } from '@/ui/table/states/TableContext';
import { CompanyOrderByWithRelationInput } from '~/generated/graphql';
import { availableSorts } from '~/pages/companies/companies-sorts';

export function CompanyTable() {
  const [orderBy, setOrderBy] =
    useState<CompanyOrderByWithRelationInput[]>(defaultOrderBy);

  const updateSorts = useCallback((sorts: Array<CompaniesSelectedSortType>) => {
    setOrderBy(sorts.length ? reduceSortsToOrderBy(sorts) : defaultOrderBy);
  }, []);

  const filters = useRecoilScopedValue(filtersScopedState, TableContext);

  const whereFilters = useMemo(() => {
    return { AND: filters.map(turnFilterIntoWhereClause) };
  }, [filters]) as any;

  return (
    <>
      <CompanyEntityTableData orderBy={orderBy} whereFilters={whereFilters} />
      <EntityTable
        columns={companyColumns}
        viewName="All Companies"
        viewIcon={<IconList size={16} />}
        availableSorts={availableSorts}
        onSortsUpdate={updateSorts}
      />
    </>
  );
}

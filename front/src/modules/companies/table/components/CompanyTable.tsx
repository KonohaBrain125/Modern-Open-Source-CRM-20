import { companiesAvailableColumnDefinitions } from '@/companies/constants/companiesAvailableColumnDefinitions';
import { getCompaniesOptimisticEffectDefinition } from '@/companies/graphql/optimistic-effect-definitions/getCompaniesOptimisticEffectDefinition';
import { useCompanyTableActionBarEntries } from '@/companies/hooks/useCompanyTableActionBarEntries';
import { useCompanyTableContextMenuEntries } from '@/companies/hooks/useCompanyTableContextMenuEntries';
import { useSpreadsheetCompanyImport } from '@/companies/hooks/useSpreadsheetCompanyImport';
import { EntityTable } from '@/ui/table/components/EntityTable';
import { EntityTableEffect } from '@/ui/table/components/EntityTableEffect';
import { useUpsertEntityTableItem } from '@/ui/table/hooks/useUpsertEntityTableItem';
import { TableRecoilScopeContext } from '@/ui/table/states/recoil-scope-contexts/TableRecoilScopeContext';
import { useRecoilScopedValue } from '@/ui/utilities/recoil-scope/hooks/useRecoilScopedValue';
import { filtersWhereScopedSelector } from '@/ui/view-bar/states/selectors/filtersWhereScopedSelector';
import { sortsOrderByScopedSelector } from '@/ui/view-bar/states/selectors/sortsOrderByScopedSelector';
import { useTableViews } from '@/views/hooks/useTableViews';
import {
  UpdateOneCompanyMutationVariables,
  useGetCompaniesQuery,
  useUpdateOneCompanyMutation,
} from '~/generated/graphql';
import { companiesFilters } from '~/pages/companies/companies-filters';
import { companyAvailableSorts } from '~/pages/companies/companies-sorts';

export function CompanyTable() {
  const sortsOrderBy = useRecoilScopedValue(
    sortsOrderByScopedSelector,
    TableRecoilScopeContext,
  );
  const filtersWhere = useRecoilScopedValue(
    filtersWhereScopedSelector,
    TableRecoilScopeContext,
  );

  const [updateEntityMutation] = useUpdateOneCompanyMutation();
  const upsertEntityTableItem = useUpsertEntityTableItem();

  const { handleViewsChange, handleViewSubmit } = useTableViews({
    objectId: 'company',
    columnDefinitions: companiesAvailableColumnDefinitions,
  });

  const { openCompanySpreadsheetImport } = useSpreadsheetCompanyImport();

  const { setContextMenuEntries } = useCompanyTableContextMenuEntries();
  const { setActionBarEntries } = useCompanyTableActionBarEntries();

  function handleImport() {
    openCompanySpreadsheetImport();
  }

  return (
    <>
      <EntityTableEffect
        getRequestResultKey="companies"
        useGetRequest={useGetCompaniesQuery}
        getRequestOptimisticEffectDefinition={
          getCompaniesOptimisticEffectDefinition
        }
        orderBy={sortsOrderBy}
        whereFilters={filtersWhere}
        filterDefinitionArray={companiesFilters}
        sortDefinitionArray={companyAvailableSorts}
        setContextMenuEntries={setContextMenuEntries}
        setActionBarEntries={setActionBarEntries}
      />
      <EntityTable
        defaultViewName="All Companies"
        onViewsChange={handleViewsChange}
        onViewSubmit={handleViewSubmit}
        onImport={handleImport}
        updateEntityMutation={({
          variables,
        }: {
          variables: UpdateOneCompanyMutationVariables;
        }) =>
          updateEntityMutation({
            variables,
            onCompleted: (data) => {
              if (!data.updateOneCompany) {
                return;
              }
              upsertEntityTableItem(data.updateOneCompany);
            },
          })
        }
      />
    </>
  );
}

import { peopleAvailableColumnDefinitions } from '@/people/constants/peopleAvailableColumnDefinitions';
import { getPeopleOptimisticEffectDefinition } from '@/people/graphql/optimistic-effect-definitions/getPeopleOptimisticEffectDefinition';
import { usePersonTableContextMenuEntries } from '@/people/hooks/usePeopleTableContextMenuEntries';
import { usePersonTableActionBarEntries } from '@/people/hooks/usePersonTableActionBarEntries';
import { useSpreadsheetPersonImport } from '@/people/hooks/useSpreadsheetPersonImport';
import { DataTable } from '@/ui/data/data-table/components/DataTable';
import { DataTableEffect } from '@/ui/data/data-table/components/DataTableEffect';
import { TableContext } from '@/ui/data/data-table/contexts/TableContext';
import { useUpsertDataTableItem } from '@/ui/data/data-table/hooks/useUpsertDataTableItem';
import { TableRecoilScopeContext } from '@/ui/data/data-table/states/recoil-scope-contexts/TableRecoilScopeContext';
import { ViewBarContext } from '@/ui/data/view-bar/contexts/ViewBarContext';
import { useTableViews } from '@/views/hooks/useTableViews';
import {
  UpdateOnePersonMutationVariables,
  useGetPeopleQuery,
  useUpdateOnePersonMutation,
} from '~/generated/graphql';
import { peopleFilters } from '~/pages/people/people-filters';
import { peopleAvailableSorts } from '~/pages/people/people-sorts';

export const PeopleTable = () => {
  const [updateEntityMutation] = useUpdateOnePersonMutation();
  const upsertDataTableItem = useUpsertDataTableItem();
  const { openPersonSpreadsheetImport } = useSpreadsheetPersonImport();

  const {
    createView,
    deleteView,
    persistColumns,
    submitCurrentView,
    updateView,
  } = useTableViews({
    objectId: 'person',
    columnDefinitions: peopleAvailableColumnDefinitions,
  });

  const { setContextMenuEntries } = usePersonTableContextMenuEntries();
  const { setActionBarEntries } = usePersonTableActionBarEntries();

  const handleImport = () => {
    openPersonSpreadsheetImport();
  };

  return (
    <TableContext.Provider value={{ onColumnsChange: persistColumns }}>
      <DataTableEffect
        getRequestResultKey="people"
        useGetRequest={useGetPeopleQuery}
        getRequestOptimisticEffectDefinition={
          getPeopleOptimisticEffectDefinition
        }
        filterDefinitionArray={peopleFilters}
        setContextMenuEntries={setContextMenuEntries}
        setActionBarEntries={setActionBarEntries}
        sortDefinitionArray={peopleAvailableSorts}
      />
      <ViewBarContext.Provider
        value={{
          defaultViewName: 'All People',
          onCurrentViewSubmit: submitCurrentView,
          onViewCreate: createView,
          onViewEdit: updateView,
          onViewRemove: deleteView,
          onImport: handleImport,
          ViewBarRecoilScopeContext: TableRecoilScopeContext,
        }}
      >
        <DataTable
          updateEntityMutation={({
            variables,
          }: {
            variables: UpdateOnePersonMutationVariables;
          }) =>
            updateEntityMutation({
              variables,
              onCompleted: (data) => {
                if (!data.updateOnePerson) {
                  return;
                }
                upsertDataTableItem(data.updateOnePerson);
              },
            })
          }
        />
      </ViewBarContext.Provider>
    </TableContext.Provider>
  );
};

import { FilterDefinition } from '@/ui/filter-n-sort/types/FilterDefinition';
import { ViewFieldDefinition } from '@/ui/table/types/ViewField';

import { useSetEntityTableData } from '../hooks/useSetEntityTableData';
import { defaultOrderBy } from '../queries';

export function GenericEntityTableData({
  useGetRequest,
  getRequestResultKey,
  orderBy = defaultOrderBy,
  whereFilters,
  viewFields,
  filterDefinitionArray,
}: {
  useGetRequest: any;
  getRequestResultKey: string;
  orderBy?: any;
  whereFilters?: any;
  viewFields: ViewFieldDefinition<unknown>[];
  filterDefinitionArray: FilterDefinition[];
}) {
  const setEntityTableData = useSetEntityTableData();

  useGetRequest({
    variables: { orderBy, where: whereFilters },
    onCompleted: (data: any) => {
      const entities = data[getRequestResultKey] ?? [];

      setEntityTableData(entities, viewFields, filterDefinitionArray);
    },
  });

  return <></>;
}

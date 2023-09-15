import { EntityTable } from '@/ui/table/components/EntityTable';
import { ViewBarContext } from '@/ui/view-bar/contexts/ViewBarContext';
import { useUpdateOneCompanyMutation } from '~/generated/graphql';

import { CompanyTableMockDataEffect } from './CompanyTableMockDataEffect';

export function CompanyTableMockMode() {
  return (
    <>
      <CompanyTableMockDataEffect />
      <ViewBarContext.Provider value={{ defaultViewName: 'All Companies' }}>
        <EntityTable updateEntityMutation={[useUpdateOneCompanyMutation()]} />
      </ViewBarContext.Provider>
    </>
  );
}

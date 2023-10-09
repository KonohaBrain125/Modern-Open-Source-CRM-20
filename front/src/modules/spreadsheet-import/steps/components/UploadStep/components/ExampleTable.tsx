import { useMemo } from 'react';

import { Table } from '@/spreadsheet-import/components/Table';
import { Fields } from '@/spreadsheet-import/types';
import { generateExampleRow } from '@/spreadsheet-import/utils/generateExampleRow';

import { generateColumns } from './columns';

interface ExampleTableProps<T extends string> {
  fields: Fields<T>;
}

export const ExampleTable = <T extends string>({
  fields,
}: ExampleTableProps<T>) => {
  const data = useMemo(() => generateExampleRow(fields), [fields]);
  const columns = useMemo(() => generateColumns(fields), [fields]);

  return <Table rows={data} columns={columns} className={'rdg-example'} />;
};

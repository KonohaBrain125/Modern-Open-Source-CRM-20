import { useMemo } from 'react';
import { createColumnHelper } from '@tanstack/react-table';

import { EditablePeopleFullName } from '@/people/components/EditablePeopleFullName';
import { PeopleCompanyCell } from '@/people/components/PeopleCompanyCell';
import { EditableCellDate } from '@/ui/components/editable-cell/types/EditableCellDate';
import { EditableCellPhone } from '@/ui/components/editable-cell/types/EditableCellPhone';
import { EditableCellText } from '@/ui/components/editable-cell/types/EditableCellText';
import { ColumnHead } from '@/ui/components/table/ColumnHead';
import {
  IconBuildingSkyscraper,
  IconCalendarEvent,
  IconMail,
  IconMap,
  IconPhone,
  IconUser,
} from '@/ui/icons/index';
import { getCheckBoxColumn } from '@/ui/tables/utils/getCheckBoxColumn';
import { GetPeopleQuery, useUpdatePeopleMutation } from '~/generated/graphql';

const columnHelper = createColumnHelper<GetPeopleQuery['people'][0]>();

export const usePeopleColumns = () => {
  const [updatePerson] = useUpdatePeopleMutation();

  return useMemo(() => {
    return [
      getCheckBoxColumn(),
      columnHelper.accessor('firstName', {
        header: () => (
          <ColumnHead viewName="People" viewIcon={<IconUser size={16} />} />
        ),
        cell: (props) => (
          <>
            <EditablePeopleFullName
              person={props.row.original}
              onChange={async (firstName: string, lastName: string) => {
                const person = { ...props.row.original };
                await updatePerson({
                  variables: {
                    ...person,
                    firstName,
                    lastName,
                    companyId: person.company?.id,
                  },
                });
              }}
            />
          </>
        ),
        size: 210,
      }),
      columnHelper.accessor('email', {
        header: () => (
          <ColumnHead viewName="Email" viewIcon={<IconMail size={16} />} />
        ),
        cell: (props) => (
          <EditableCellText
            placeholder="Email"
            value={props.row.original.email || ''}
            onChange={async (value: string) => {
              const person = props.row.original;
              await updatePerson({
                variables: {
                  ...person,
                  email: value,
                  companyId: person.company?.id,
                },
              });
            }}
          />
        ),
        size: 200,
      }),
      columnHelper.accessor('company', {
        header: () => (
          <ColumnHead
            viewName="Company"
            viewIcon={<IconBuildingSkyscraper size={16} />}
          />
        ),
        cell: (props) => <PeopleCompanyCell people={props.row.original} />,
        size: 150,
      }),
      columnHelper.accessor('phone', {
        header: () => (
          <ColumnHead viewName="Phone" viewIcon={<IconPhone size={16} />} />
        ),
        cell: (props) => (
          <EditableCellPhone
            placeholder="Phone"
            value={props.row.original.phone || ''}
            changeHandler={async (value: string) => {
              const person = { ...props.row.original };
              await updatePerson({
                variables: {
                  ...person,
                  phone: value,
                  companyId: person.company?.id,
                },
              });
            }}
          />
        ),
        size: 130,
      }),
      columnHelper.accessor('createdAt', {
        header: () => (
          <ColumnHead
            viewName="Creation"
            viewIcon={<IconCalendarEvent size={16} />}
          />
        ),
        cell: (props) => (
          <EditableCellDate
            value={
              props.row.original.createdAt
                ? new Date(props.row.original.createdAt)
                : new Date()
            }
            onChange={async (value: Date) => {
              const person = { ...props.row.original };
              await updatePerson({
                variables: {
                  ...person,
                  createdAt: value.toISOString(),
                  companyId: person.company?.id,
                },
              });
            }}
          />
        ),
        size: 100,
      }),
      columnHelper.accessor('city', {
        header: () => (
          <ColumnHead viewName="City" viewIcon={<IconMap size={16} />} />
        ),
        cell: (props) => (
          <EditableCellText
            editModeHorizontalAlign="right"
            placeholder="City"
            value={props.row.original.city || ''}
            onChange={async (value: string) => {
              const person = { ...props.row.original };
              await updatePerson({
                variables: {
                  ...person,
                  city: value,
                  companyId: person.company?.id,
                },
              });
            }}
          />
        ),
      }),
    ];
  }, [updatePerson]);
};

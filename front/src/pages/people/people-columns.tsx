import { useMemo } from 'react';
import {
  TbBuilding,
  TbCalendar,
  TbMail,
  TbMapPin,
  TbPhone,
  TbUser,
} from 'react-icons/tb';
import { createColumnHelper } from '@tanstack/react-table';

import { EditablePeopleFullName } from '@/people/components/EditablePeopleFullName';
import { PeopleCompanyCell } from '@/people/components/PeopleCompanyCell';
import { Person } from '@/people/interfaces/person.interface';
import { updatePerson } from '@/people/services';
import { EditableDate } from '@/ui/components/editable-cell/types/EditableDate';
import { EditablePhone } from '@/ui/components/editable-cell/types/EditablePhone';
import { EditableText } from '@/ui/components/editable-cell/types/EditableText';
import { ColumnHead } from '@/ui/components/table/ColumnHead';
import { getCheckBoxColumn } from '@/ui/tables/utils/getCheckBoxColumn';

const columnHelper = createColumnHelper<Person>();

export const usePeopleColumns = () => {
  return useMemo(() => {
    return [
      getCheckBoxColumn(),
      columnHelper.accessor('firstname', {
        header: () => (
          <ColumnHead viewName="People" viewIcon={<TbUser size={16} />} />
        ),
        cell: (props) => (
          <>
            <EditablePeopleFullName
              firstname={props.row.original.firstname || ''}
              lastname={props.row.original.lastname || ''}
              onChange={async (firstName: string, lastName: string) => {
                const person = props.row.original;
                person.firstname = firstName;
                person.lastname = lastName;
                await updatePerson(person);
              }}
              personId={props.row.original.id}
            />
          </>
        ),
        size: 210,
      }),
      columnHelper.accessor('email', {
        header: () => (
          <ColumnHead viewName="Email" viewIcon={<TbMail size={16} />} />
        ),
        cell: (props) => (
          <EditableText
            placeholder="Email"
            content={props.row.original.email || ''}
            changeHandler={(value: string) => {
              const person = props.row.original;
              person.email = value;
              updatePerson(person);
            }}
          />
        ),
        size: 200,
      }),
      columnHelper.accessor('company', {
        header: () => (
          <ColumnHead viewName="Company" viewIcon={<TbBuilding size={16} />} />
        ),
        cell: (props) => <PeopleCompanyCell people={props.row.original} />,
        size: 150,
      }),
      columnHelper.accessor('phone', {
        header: () => (
          <ColumnHead viewName="Phone" viewIcon={<TbPhone size={16} />} />
        ),
        cell: (props) => (
          <EditablePhone
            placeholder="Phone"
            value={props.row.original.phone || ''}
            changeHandler={(value: string) => {
              const person = props.row.original;
              person.phone = value;
              updatePerson(person);
            }}
          />
        ),
        size: 130,
      }),
      columnHelper.accessor('createdAt', {
        header: () => (
          <ColumnHead viewName="Creation" viewIcon={<TbCalendar size={16} />} />
        ),
        cell: (props) => (
          <EditableDate
            value={props.row.original.createdAt || new Date()}
            changeHandler={(value: Date) => {
              const person = props.row.original;
              person.createdAt = value;
              updatePerson(person);
            }}
          />
        ),
        size: 100,
      }),
      columnHelper.accessor('city', {
        header: () => (
          <ColumnHead viewName="City" viewIcon={<TbMapPin size={16} />} />
        ),
        cell: (props) => (
          <EditableText
            editModeHorizontalAlign="right"
            placeholder="City"
            content={props.row.original.city || ''}
            changeHandler={(value: string) => {
              const person = props.row.original;
              person.city = value;
              updatePerson(person);
            }}
          />
        ),
      }),
    ];
  }, []);
};

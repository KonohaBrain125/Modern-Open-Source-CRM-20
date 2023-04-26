import {
  faBuildings,
  faCalendar,
  faEnvelope,
  faUser,
  faMapPin,
  faPhone,
  faRectangleHistory,
} from '@fortawesome/pro-regular-svg-icons';
import { createColumnHelper } from '@tanstack/react-table';
import ClickableCell from '../../components/table/ClickableCell';
import ColumnHead from '../../components/table/ColumnHead';
import { parsePhoneNumber, CountryCode } from 'libphonenumber-js';
import Checkbox from '../../components/form/Checkbox';
import HorizontalyAlignedContainer from '../../layout/containers/HorizontalyAlignedContainer';
import CompanyChip from '../../components/chips/CompanyChip';
import PersonChip from '../../components/chips/PersonChip';
import { Person } from '../../interfaces/person.interface';
import PipeChip from '../../components/chips/PipeChip';
import EditableCell from '../../components/table/EditableCell';
import { OrderByFields, updatePerson } from '../../services/people';
import {
  FilterType,
  SortType,
} from '../../components/table/table-header/interface';

export const availableSorts = [
  {
    key: 'fullname',
    label: 'People',
    icon: faUser,
  },
  {
    key: 'company_name',
    label: 'Company',
    icon: faBuildings,
  },
  {
    key: 'email',
    label: 'Email',
    icon: faEnvelope,
  },
  { key: 'phone', label: 'Phone', icon: faPhone },
  {
    key: 'created_at',
    label: 'Created at',
    icon: faCalendar,
  },
  { key: 'city', label: 'City', icon: faMapPin },
] satisfies Array<SortType<OrderByFields>>;

export const availableFilters = [
  {
    key: 'fullname',
    label: 'People',
    icon: faUser,
  },
  {
    key: 'company_name',
    label: 'Company',
    icon: faBuildings,
  },
  {
    key: 'email',
    label: 'Email',
    icon: faEnvelope,
  },
  { key: 'phone', label: 'Phone', icon: faPhone },
  {
    key: 'created_at',
    label: 'Created at',
    icon: faCalendar,
  },
  { key: 'city', label: 'City', icon: faMapPin },
] satisfies FilterType[];

const columnHelper = createColumnHelper<Person>();
export const peopleColumns = [
  columnHelper.accessor('fullName', {
    header: () => <ColumnHead viewName="People" viewIcon={faUser} />,
    cell: (props) => (
      <>
        <HorizontalyAlignedContainer>
          <Checkbox
            id={`person-selected-${props.row.original.email}`}
            name={`person-selected-${props.row.original.email}`}
          />
          <PersonChip
            name={props.row.original.fullName}
            picture={props.row.original.picture}
          />
        </HorizontalyAlignedContainer>
      </>
    ),
  }),
  columnHelper.accessor('email', {
    header: () => <ColumnHead viewName="Email" viewIcon={faEnvelope} />,
    cell: (props) => (
      <EditableCell
        content={props.row.original.email}
        changeHandler={(value) => {
          const person = props.row.original;
          person.email = value;
          updatePerson(person).catch((error) => console.error(error)); // TODO: handle error
        }}
      />
    ),
  }),
  columnHelper.accessor('company', {
    header: () => <ColumnHead viewName="Company" viewIcon={faBuildings} />,
    cell: (props) => (
      <ClickableCell href="#">
        <CompanyChip
          name={props.row.original.company.name}
          picture={`https://www.google.com/s2/favicons?domain=${props.row.original.company.domain_name}&sz=256`}
        />
      </ClickableCell>
    ),
  }),
  columnHelper.accessor('phone', {
    header: () => <ColumnHead viewName="Phone" viewIcon={faPhone} />,
    cell: (props) => (
      <ClickableCell
        href={parsePhoneNumber(
          props.row.original.phone,
          props.row.original.countryCode as CountryCode,
        )?.getURI()}
      >
        {parsePhoneNumber(
          props.row.original.phone,
          props.row.original.countryCode as CountryCode,
        )?.formatInternational() || props.row.original.phone}
      </ClickableCell>
    ),
  }),
  columnHelper.accessor('creationDate', {
    header: () => <ColumnHead viewName="Creation" viewIcon={faCalendar} />,
    cell: (props) => (
      <ClickableCell href="#">
        {new Intl.DateTimeFormat(undefined, {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }).format(props.row.original.creationDate)}
      </ClickableCell>
    ),
  }),
  columnHelper.accessor('pipe', {
    header: () => <ColumnHead viewName="Pipe" viewIcon={faRectangleHistory} />,
    cell: (props) => (
      <ClickableCell href="#">
        <PipeChip
          name={props.row.original.pipe.name}
          picture={props.row.original.pipe.icon}
        />
      </ClickableCell>
    ),
  }),
  columnHelper.accessor('city', {
    header: () => <ColumnHead viewName="City" viewIcon={faMapPin} />,
    cell: (props) => (
      <ClickableCell href="#">{props.row.original.city}</ClickableCell>
    ),
  }),
];

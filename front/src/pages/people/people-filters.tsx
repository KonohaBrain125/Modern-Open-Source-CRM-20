import {
  TbBuilding,
  TbCalendar,
  TbMail,
  TbMapPin,
  TbPhone,
  TbUser,
} from 'react-icons/tb';

import {
  Company,
  mapToCompany,
} from '@/companies/interfaces/company.interface';
import { FilterConfigType } from '@/filters-and-sorts/interfaces/filters/interface';
import { Person } from '@/people/interfaces/person.interface';
import { SEARCH_COMPANY_QUERY } from '@/search/services/search';
import { QueryMode } from '~/generated/graphql';

export const fullnameFilter = {
  key: 'fullname',
  label: 'People',
  icon: <TbUser size={16} />,
  type: 'text',
  operands: [
    {
      label: 'Contains',
      id: 'like',
      whereTemplate: (searchString) => ({
        OR: [
          {
            firstname: {
              contains: `%${searchString}%`,
              mode: QueryMode.Insensitive,
            },
          },
          {
            lastname: {
              contains: `%${searchString}%`,
              mode: QueryMode.Insensitive,
            },
          },
        ],
      }),
    },
    {
      label: 'Does not contain',
      id: 'not_like',
      whereTemplate: (searchString) => ({
        NOT: [
          {
            AND: [
              {
                firstname: {
                  contains: `%${searchString}%`,
                  mode: QueryMode.Insensitive,
                },
              },
              {
                lastname: {
                  contains: `%${searchString}%`,
                  mode: QueryMode.Insensitive,
                },
              },
            ],
          },
        ],
      }),
    },
  ],
} satisfies FilterConfigType<Person, string>;

export const emailFilter = {
  key: 'email',
  label: 'Email',
  icon: <TbMail size={16} />,
  type: 'text',
  operands: [
    {
      label: 'Contains',
      id: 'like',
      whereTemplate: (searchString) => ({
        email: { contains: `%${searchString}%`, mode: QueryMode.Insensitive },
      }),
    },
    {
      label: 'Does not contain',
      id: 'not_like',
      whereTemplate: (searchString) => ({
        NOT: [
          {
            email: {
              contains: `%${searchString}%`,
              mode: QueryMode.Insensitive,
            },
          },
        ],
      }),
    },
  ],
} satisfies FilterConfigType<Person, string>;

export const companyFilter = {
  key: 'company_name',
  label: 'Company',
  icon: <TbBuilding size={16} />,
  type: 'relation',
  searchConfig: {
    query: SEARCH_COMPANY_QUERY,
    template: (searchString: string) => ({
      name: { contains: `%${searchString}%`, mode: QueryMode.Insensitive },
    }),
    resultMapper: (data) => ({
      value: mapToCompany(data),
      render: (company) => company.name,
    }),
  },
  selectedValueRender: (company) => company.name || '',
  operands: [
    {
      label: 'Is',
      id: 'is',
      whereTemplate: (company) => ({
        company: { is: { name: { equals: company.name } } },
      }),
    },
    {
      label: 'Is not',
      id: 'is_not',
      whereTemplate: (company) => ({
        NOT: [{ company: { is: { name: { equals: company.name } } } }],
      }),
    },
  ],
} satisfies FilterConfigType<Person, Company>;

export const phoneFilter = {
  key: 'phone',
  label: 'Phone',
  icon: <TbPhone size={16} />,
  type: 'text',
  operands: [
    {
      label: 'Contains',
      id: 'like',
      whereTemplate: (searchString) => ({
        phone: { contains: `%${searchString}%`, mode: QueryMode.Insensitive },
      }),
    },
    {
      label: 'Does not contain',
      id: 'not_like',
      whereTemplate: (searchString) => ({
        NOT: [
          {
            phone: {
              contains: `%${searchString}%`,
              mode: QueryMode.Insensitive,
            },
          },
        ],
      }),
    },
  ],
} satisfies FilterConfigType<Person, string>;

export const createdAtFilter = {
  key: 'createdAt',
  label: 'Created At',
  icon: <TbCalendar size={16} />,
  type: 'date',
  operands: [
    {
      label: 'Greater than',
      id: 'greater_than',
      whereTemplate: (searchString) => ({
        createdAt: {
          gte: searchString,
        },
      }),
    },
    {
      label: 'Less than',
      id: 'less_than',
      whereTemplate: (searchString) => ({
        createdAt: {
          lte: searchString,
        },
      }),
    },
  ],
} satisfies FilterConfigType<Company, string>;

export const cityFilter = {
  key: 'city',
  label: 'City',
  icon: <TbMapPin size={16} />,
  type: 'text',
  operands: [
    {
      label: 'Contains',
      id: 'like',
      whereTemplate: (searchString) => ({
        city: { contains: `%${searchString}%`, mode: QueryMode.Insensitive },
      }),
    },
    {
      label: 'Does not contain',
      id: 'not_like',
      whereTemplate: (searchString) => ({
        NOT: [
          {
            city: {
              contains: `%${searchString}%`,
              mode: QueryMode.Insensitive,
            },
          },
        ],
      }),
    },
  ],
} satisfies FilterConfigType<Person, string>;

export const availableFilters = [
  fullnameFilter,
  emailFilter,
  companyFilter,
  phoneFilter,
  createdAtFilter,
  cityFilter,
] satisfies FilterConfigType<Person>[];

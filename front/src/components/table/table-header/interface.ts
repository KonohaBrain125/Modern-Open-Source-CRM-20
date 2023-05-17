import { DocumentNode } from 'graphql';
import { ReactNode } from 'react';
import {
  Companies_Bool_Exp,
  Order_By,
  People_Bool_Exp,
  Users_Bool_Exp,
} from '../../../generated/graphql';
import {
  Company,
  GraphqlQueryCompany,
} from '../../../interfaces/company.interface';
import {
  GraphqlQueryPerson,
  Person,
} from '../../../interfaces/person.interface';
import { GraphqlQueryUser, User } from '../../../interfaces/user.interface';

export type SortType<OrderByTemplate> =
  | {
      _type: 'default_sort';
      label: string;
      key: keyof OrderByTemplate & string;
      icon?: ReactNode;
    }
  | {
      _type: 'custom_sort';
      label: string;
      key: string;
      icon?: ReactNode;
      orderByTemplate: (order: Order_By) => OrderByTemplate;
    };

export type SelectedSortType<OrderByTemplate> = SortType<OrderByTemplate> & {
  order: 'asc' | 'desc';
};

export type FilterableFieldsType = Person | Company;
export type FilterWhereType = Person | Company | User;

type FilterConfigGqlType<WhereType> = WhereType extends Company
  ? GraphqlQueryCompany
  : WhereType extends Person
  ? GraphqlQueryPerson
  : WhereType extends User
  ? GraphqlQueryUser
  : never;

export type BoolExpType<T> = T extends Company
  ? Companies_Bool_Exp
  : T extends Person
  ? People_Bool_Exp
  : never;

export type FilterConfigType<FilteredType = any, WhereType = any> = {
  key: string;
  label: string;
  icon: ReactNode;
  operands: FilterOperandType<FilteredType, WhereType>[];
  searchConfig: WhereType extends SearchableType
    ? SearchConfigType<WhereType>
    : null;
  selectedValueRender: (selected: WhereType) => string;
};

export type SearchableType = Person | Company | User;

export type SearchConfigType<SearchType extends SearchableType> = {
  query: DocumentNode;
  template: (
    searchInput: string,
  ) => People_Bool_Exp | Companies_Bool_Exp | Users_Bool_Exp;
  resultMapper: (data: FilterConfigGqlType<SearchType>) => {
    value: SearchType;
    render: (value: SearchType) => ReactNode;
  };
};

export type FilterOperandType<
  FilteredType = FilterableFieldsType,
  WhereType = any,
> = {
  label: string;
  id: string;
  whereTemplate: (value: WhereType) => BoolExpType<FilteredType>;
};

export type SelectedFilterType<
  FilteredType = FilterableFieldsType,
  WhereType = any,
> = {
  key: string;
  value: WhereType;
  displayValue: string;
  label: string;
  icon: ReactNode;
  operand: FilterOperandType<FilteredType, WhereType>;
};

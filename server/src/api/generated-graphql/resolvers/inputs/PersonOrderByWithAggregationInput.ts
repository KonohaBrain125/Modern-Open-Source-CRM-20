import * as TypeGraphQL from '@nestjs/graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PersonCountOrderByAggregateInput } from './PersonCountOrderByAggregateInput';
import { PersonMaxOrderByAggregateInput } from './PersonMaxOrderByAggregateInput';
import { PersonMinOrderByAggregateInput } from './PersonMinOrderByAggregateInput';
import { SortOrder } from '../../enums/SortOrder';

@TypeGraphQL.InputType('PersonOrderByWithAggregationInput', {
  isAbstract: true,
})
export class PersonOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  createdAt?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  updatedAt?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  deletedAt?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  firstname?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  lastname?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  email?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  phone?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  city?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  companyId?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  workspaceId?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => PersonCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: PersonCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => PersonMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: PersonMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => PersonMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: PersonMinOrderByAggregateInput | undefined;
}

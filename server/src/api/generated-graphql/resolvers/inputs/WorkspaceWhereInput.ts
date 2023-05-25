import * as TypeGraphQL from '@nestjs/graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { CompanyListRelationFilter } from './CompanyListRelationFilter';
import { DateTimeFilter } from './DateTimeFilter';
import { DateTimeNullableFilter } from './DateTimeNullableFilter';
import { PersonListRelationFilter } from './PersonListRelationFilter';
import { StringFilter } from './StringFilter';
import { WorkspaceMemberListRelationFilter } from './WorkspaceMemberListRelationFilter';

@TypeGraphQL.InputType('WorkspaceWhereInput', {
  isAbstract: true,
})
export class WorkspaceWhereInput {
  @TypeGraphQL.Field((_type) => [WorkspaceWhereInput], {
    nullable: true,
  })
  AND?: WorkspaceWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [WorkspaceWhereInput], {
    nullable: true,
  })
  OR?: WorkspaceWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [WorkspaceWhereInput], {
    nullable: true,
  })
  NOT?: WorkspaceWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, {
    nullable: true,
  })
  deletedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  domainName?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  displayName?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => WorkspaceMemberListRelationFilter, {
    nullable: true,
  })
  WorkspaceMember?: WorkspaceMemberListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => CompanyListRelationFilter, {
    nullable: true,
  })
  companies?: CompanyListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => PersonListRelationFilter, {
    nullable: true,
  })
  people?: PersonListRelationFilter | undefined;
}

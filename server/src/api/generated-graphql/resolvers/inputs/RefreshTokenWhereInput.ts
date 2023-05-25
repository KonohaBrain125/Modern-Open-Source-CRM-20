import * as TypeGraphQL from '@nestjs/graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFilter } from './DateTimeFilter';
import { DateTimeNullableFilter } from './DateTimeNullableFilter';
import { StringFilter } from './StringFilter';
import { UserRelationFilter } from './UserRelationFilter';

@TypeGraphQL.InputType('RefreshTokenWhereInput', {
  isAbstract: true,
})
export class RefreshTokenWhereInput {
  @TypeGraphQL.Field((_type) => [RefreshTokenWhereInput], {
    nullable: true,
  })
  AND?: RefreshTokenWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RefreshTokenWhereInput], {
    nullable: true,
  })
  OR?: RefreshTokenWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RefreshTokenWhereInput], {
    nullable: true,
  })
  NOT?: RefreshTokenWhereInput[] | undefined;

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
  refreshToken?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => UserRelationFilter, {
    nullable: true,
  })
  user?: UserRelationFilter | undefined;
}

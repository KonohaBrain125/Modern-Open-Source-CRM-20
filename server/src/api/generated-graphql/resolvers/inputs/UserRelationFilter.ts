import * as TypeGraphQL from '@nestjs/graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserWhereInput } from './UserWhereInput';

@TypeGraphQL.InputType('UserRelationFilter', {
  isAbstract: true,
})
export class UserRelationFilter {
  @TypeGraphQL.Field((_type) => UserWhereInput, {
    nullable: true,
  })
  is?: UserWhereInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereInput, {
    nullable: true,
  })
  isNot?: UserWhereInput | undefined;
}

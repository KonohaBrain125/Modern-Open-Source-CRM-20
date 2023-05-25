import * as TypeGraphQL from '@nestjs/graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { CompanyCreateWithoutAccountOwnerInput } from './CompanyCreateWithoutAccountOwnerInput';
import { CompanyUpdateWithoutAccountOwnerInput } from './CompanyUpdateWithoutAccountOwnerInput';
import { CompanyWhereUniqueInput } from './CompanyWhereUniqueInput';

@TypeGraphQL.InputType('CompanyUpsertWithWhereUniqueWithoutAccountOwnerInput', {
  isAbstract: true,
})
export class CompanyUpsertWithWhereUniqueWithoutAccountOwnerInput {
  @TypeGraphQL.Field((_type) => CompanyWhereUniqueInput, {
    nullable: false,
  })
  where!: CompanyWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CompanyUpdateWithoutAccountOwnerInput, {
    nullable: false,
  })
  update!: CompanyUpdateWithoutAccountOwnerInput;

  @TypeGraphQL.Field((_type) => CompanyCreateWithoutAccountOwnerInput, {
    nullable: false,
  })
  create!: CompanyCreateWithoutAccountOwnerInput;
}

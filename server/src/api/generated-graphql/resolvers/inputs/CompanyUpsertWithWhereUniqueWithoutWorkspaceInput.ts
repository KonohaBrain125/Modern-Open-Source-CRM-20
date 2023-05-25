import * as TypeGraphQL from '@nestjs/graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { CompanyCreateWithoutWorkspaceInput } from './CompanyCreateWithoutWorkspaceInput';
import { CompanyUpdateWithoutWorkspaceInput } from './CompanyUpdateWithoutWorkspaceInput';
import { CompanyWhereUniqueInput } from './CompanyWhereUniqueInput';

@TypeGraphQL.InputType('CompanyUpsertWithWhereUniqueWithoutWorkspaceInput', {
  isAbstract: true,
})
export class CompanyUpsertWithWhereUniqueWithoutWorkspaceInput {
  @TypeGraphQL.Field((_type) => CompanyWhereUniqueInput, {
    nullable: false,
  })
  where!: CompanyWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CompanyUpdateWithoutWorkspaceInput, {
    nullable: false,
  })
  update!: CompanyUpdateWithoutWorkspaceInput;

  @TypeGraphQL.Field((_type) => CompanyCreateWithoutWorkspaceInput, {
    nullable: false,
  })
  create!: CompanyCreateWithoutWorkspaceInput;
}

import * as TypeGraphQL from '@nestjs/graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PersonCreateManyWorkspaceInputEnvelope } from './PersonCreateManyWorkspaceInputEnvelope';
import { PersonCreateOrConnectWithoutWorkspaceInput } from './PersonCreateOrConnectWithoutWorkspaceInput';
import { PersonCreateWithoutWorkspaceInput } from './PersonCreateWithoutWorkspaceInput';
import { PersonWhereUniqueInput } from './PersonWhereUniqueInput';

@TypeGraphQL.InputType('PersonCreateNestedManyWithoutWorkspaceInput', {
  isAbstract: true,
})
export class PersonCreateNestedManyWithoutWorkspaceInput {
  @TypeGraphQL.Field((_type) => [PersonCreateWithoutWorkspaceInput], {
    nullable: true,
  })
  create?: PersonCreateWithoutWorkspaceInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PersonCreateOrConnectWithoutWorkspaceInput], {
    nullable: true,
  })
  connectOrCreate?: PersonCreateOrConnectWithoutWorkspaceInput[] | undefined;

  @TypeGraphQL.Field((_type) => PersonCreateManyWorkspaceInputEnvelope, {
    nullable: true,
  })
  createMany?: PersonCreateManyWorkspaceInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [PersonWhereUniqueInput], {
    nullable: true,
  })
  connect?: PersonWhereUniqueInput[] | undefined;
}

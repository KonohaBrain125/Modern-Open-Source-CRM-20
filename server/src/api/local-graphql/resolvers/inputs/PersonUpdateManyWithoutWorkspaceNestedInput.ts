import * as TypeGraphQL from '@nestjs/graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PersonCreateManyWorkspaceInputEnvelope } from './PersonCreateManyWorkspaceInputEnvelope';
import { PersonCreateOrConnectWithoutWorkspaceInput } from './PersonCreateOrConnectWithoutWorkspaceInput';
import { PersonCreateWithoutWorkspaceInput } from './PersonCreateWithoutWorkspaceInput';
import { PersonScalarWhereInput } from './PersonScalarWhereInput';
import { PersonUpdateManyWithWhereWithoutWorkspaceInput } from './PersonUpdateManyWithWhereWithoutWorkspaceInput';
import { PersonUpdateWithWhereUniqueWithoutWorkspaceInput } from './PersonUpdateWithWhereUniqueWithoutWorkspaceInput';
import { PersonUpsertWithWhereUniqueWithoutWorkspaceInput } from './PersonUpsertWithWhereUniqueWithoutWorkspaceInput';
import { PersonWhereUniqueInput } from './PersonWhereUniqueInput';

@TypeGraphQL.InputType('PersonUpdateManyWithoutWorkspaceNestedInput', {
  isAbstract: true,
})
export class PersonUpdateManyWithoutWorkspaceNestedInput {
  @TypeGraphQL.Field((_type) => [PersonCreateWithoutWorkspaceInput], {
    nullable: true,
  })
  create?: PersonCreateWithoutWorkspaceInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PersonCreateOrConnectWithoutWorkspaceInput], {
    nullable: true,
  })
  connectOrCreate?: PersonCreateOrConnectWithoutWorkspaceInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [PersonUpsertWithWhereUniqueWithoutWorkspaceInput],
    {
      nullable: true,
    },
  )
  upsert?: PersonUpsertWithWhereUniqueWithoutWorkspaceInput[] | undefined;

  @TypeGraphQL.Field((_type) => PersonCreateManyWorkspaceInputEnvelope, {
    nullable: true,
  })
  createMany?: PersonCreateManyWorkspaceInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [PersonWhereUniqueInput], {
    nullable: true,
  })
  set?: PersonWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PersonWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: PersonWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PersonWhereUniqueInput], {
    nullable: true,
  })
  delete?: PersonWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PersonWhereUniqueInput], {
    nullable: true,
  })
  connect?: PersonWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [PersonUpdateWithWhereUniqueWithoutWorkspaceInput],
    {
      nullable: true,
    },
  )
  update?: PersonUpdateWithWhereUniqueWithoutWorkspaceInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [PersonUpdateManyWithWhereWithoutWorkspaceInput],
    {
      nullable: true,
    },
  )
  updateMany?: PersonUpdateManyWithWhereWithoutWorkspaceInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PersonScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: PersonScalarWhereInput[] | undefined;
}

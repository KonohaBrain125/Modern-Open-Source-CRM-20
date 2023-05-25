import * as TypeGraphQL from '@nestjs/graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { CompanyUpdateOneWithoutPeopleNestedInput } from './CompanyUpdateOneWithoutPeopleNestedInput';
import { DateTimeFieldUpdateOperationsInput } from './DateTimeFieldUpdateOperationsInput';
import { NullableDateTimeFieldUpdateOperationsInput } from './NullableDateTimeFieldUpdateOperationsInput';
import { StringFieldUpdateOperationsInput } from './StringFieldUpdateOperationsInput';
import { WorkspaceUpdateOneRequiredWithoutPeopleNestedInput } from './WorkspaceUpdateOneRequiredWithoutPeopleNestedInput';

@TypeGraphQL.InputType('PersonUpdateInput', {
  isAbstract: true,
})
export class PersonUpdateInput {
  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  deletedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  firstname?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  lastname?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  phone?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  city?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => CompanyUpdateOneWithoutPeopleNestedInput, {
    nullable: true,
  })
  company?: CompanyUpdateOneWithoutPeopleNestedInput | undefined;

  @TypeGraphQL.Field(
    (_type) => WorkspaceUpdateOneRequiredWithoutPeopleNestedInput,
    {
      nullable: true,
    },
  )
  workspace?: WorkspaceUpdateOneRequiredWithoutPeopleNestedInput | undefined;
}

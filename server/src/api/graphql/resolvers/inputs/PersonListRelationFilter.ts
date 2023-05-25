import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonWhereInput } from "../inputs/PersonWhereInput";

@TypeGraphQL.InputType("PersonListRelationFilter", {
  isAbstract: true
})
export class PersonListRelationFilter {
  @TypeGraphQL.Field(_type => PersonWhereInput, {
    nullable: true
  })
  every?: PersonWhereInput | undefined;

  @TypeGraphQL.Field(_type => PersonWhereInput, {
    nullable: true
  })
  some?: PersonWhereInput | undefined;

  @TypeGraphQL.Field(_type => PersonWhereInput, {
    nullable: true
  })
  none?: PersonWhereInput | undefined;
}

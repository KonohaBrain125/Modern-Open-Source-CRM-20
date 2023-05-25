import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyWhereInput } from "../inputs/CompanyWhereInput";

@TypeGraphQL.InputType("CompanyRelationFilter", {
  isAbstract: true
})
export class CompanyRelationFilter {
  @TypeGraphQL.Field(_type => CompanyWhereInput, {
    nullable: true
  })
  is?: CompanyWhereInput | undefined;

  @TypeGraphQL.Field(_type => CompanyWhereInput, {
    nullable: true
  })
  isNot?: CompanyWhereInput | undefined;
}

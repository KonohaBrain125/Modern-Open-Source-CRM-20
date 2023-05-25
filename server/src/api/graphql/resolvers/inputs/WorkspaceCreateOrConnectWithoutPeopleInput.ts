import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspaceCreateWithoutPeopleInput } from "../inputs/WorkspaceCreateWithoutPeopleInput";
import { WorkspaceWhereUniqueInput } from "../inputs/WorkspaceWhereUniqueInput";

@TypeGraphQL.InputType("WorkspaceCreateOrConnectWithoutPeopleInput", {
  isAbstract: true
})
export class WorkspaceCreateOrConnectWithoutPeopleInput {
  @TypeGraphQL.Field(_type => WorkspaceWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspaceWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkspaceCreateWithoutPeopleInput, {
    nullable: false
  })
  create!: WorkspaceCreateWithoutPeopleInput;
}

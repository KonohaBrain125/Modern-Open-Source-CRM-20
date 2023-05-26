import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceCreateNestedOneWithoutWorkspaceMemberInput } from '../workspace/workspace-create-nested-one-without-workspace-member.input';

@InputType()
export class WorkspaceMemberCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => WorkspaceCreateNestedOneWithoutWorkspaceMemberInput, {nullable:false})
    workspace!: WorkspaceCreateNestedOneWithoutWorkspaceMemberInput;
}

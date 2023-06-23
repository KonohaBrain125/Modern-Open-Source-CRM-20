import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutWorkspaceMemberInput } from '../user/user-create-nested-one-without-workspace-member.input';
import { WorkspaceCreateNestedOneWithoutWorkspaceMemberInput } from '../workspace/workspace-create-nested-one-without-workspace-member.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class WorkspaceMemberCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutWorkspaceMemberInput, {nullable:false})
    user!: UserCreateNestedOneWithoutWorkspaceMemberInput;

    @HideField()
    workspace!: WorkspaceCreateNestedOneWithoutWorkspaceMemberInput;
}

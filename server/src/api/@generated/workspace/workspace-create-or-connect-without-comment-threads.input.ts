import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceWhereUniqueInput } from './workspace-where-unique.input';
import { Type } from 'class-transformer';
import { WorkspaceCreateWithoutCommentThreadsInput } from './workspace-create-without-comment-threads.input';

@InputType()
export class WorkspaceCreateOrConnectWithoutCommentThreadsInput {
  @Field(() => WorkspaceWhereUniqueInput, { nullable: false })
  @Type(() => WorkspaceWhereUniqueInput)
  where!: WorkspaceWhereUniqueInput;

  @Field(() => WorkspaceCreateWithoutCommentThreadsInput, { nullable: false })
  @Type(() => WorkspaceCreateWithoutCommentThreadsInput)
  create!: WorkspaceCreateWithoutCommentThreadsInput;
}

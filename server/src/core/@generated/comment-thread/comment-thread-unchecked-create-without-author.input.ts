import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { ActivityType } from '../prisma/activity-type.enum';
import { CommentThreadTargetUncheckedCreateNestedManyWithoutCommentThreadInput } from '../comment-thread-target/comment-thread-target-unchecked-create-nested-many-without-comment-thread.input';
import { CommentUncheckedCreateNestedManyWithoutCommentThreadInput } from '../comment/comment-unchecked-create-nested-many-without-comment-thread.input';

@InputType()
export class CommentThreadUncheckedCreateWithoutAuthorInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsOptional()
    id?: string;

    @HideField()
    workspaceId!: string;

    @Field(() => String, {nullable:true})
    body?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => ActivityType, {nullable:true})
    type?: keyof typeof ActivityType;

    @Field(() => Date, {nullable:true})
    reminderAt?: Date | string;

    @Field(() => Date, {nullable:true})
    dueAt?: Date | string;

    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;

    @Field(() => String, {nullable:true})
    assigneeId?: string;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CommentThreadTargetUncheckedCreateNestedManyWithoutCommentThreadInput, {nullable:true})
    commentThreadTargets?: CommentThreadTargetUncheckedCreateNestedManyWithoutCommentThreadInput;

    @Field(() => CommentUncheckedCreateNestedManyWithoutCommentThreadInput, {nullable:true})
    comments?: CommentUncheckedCreateNestedManyWithoutCommentThreadInput;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { WorkspaceMember } from '../workspace-member/workspace-member.model';
import { Company } from '../company/company.model';
import { Person } from '../person/person.model';
import { CommentThread } from '../comment-thread/comment-thread.model';
import { Comment } from '../comment/comment.model';
import { WorkspaceCount } from './workspace-count.output';

@ObjectType({})
export class Workspace {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => Date, { nullable: true })
  deletedAt!: Date | null;

  @Field(() => String, { nullable: false })
  domainName!: string;

  @Field(() => String, { nullable: false })
  displayName!: string;

  @Field(() => String, { nullable: true })
  logo!: string | null;

  @Field(() => [WorkspaceMember], { nullable: true })
  workspaceMember?: Array<WorkspaceMember>;

  @Field(() => [Company], { nullable: true })
  companies?: Array<Company>;

  @Field(() => [Person], { nullable: true })
  people?: Array<Person>;

  @Field(() => [CommentThread], { nullable: true })
  commentThreads?: Array<CommentThread>;

  @Field(() => [Comment], { nullable: true })
  comments?: Array<Comment>;

  @Field(() => WorkspaceCount, { nullable: false })
  _count?: WorkspaceCount;
}

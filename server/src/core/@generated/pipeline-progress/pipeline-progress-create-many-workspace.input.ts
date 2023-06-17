import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PipelineProgressableType } from '../prisma/pipeline-progressable-type.enum';

@InputType()
export class PipelineProgressCreateManyWorkspaceInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date | string;

  @Field(() => String, { nullable: false })
  pipelineId!: string;

  @Field(() => String, { nullable: false })
  pipelineStageId!: string;

  @Field(() => PipelineProgressableType, { nullable: false })
  progressableType!: keyof typeof PipelineProgressableType;

  @Field(() => String, { nullable: false })
  progressableId!: string;
}

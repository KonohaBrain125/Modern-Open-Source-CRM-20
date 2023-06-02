import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PipelineStageCreateWithoutPipelineProgressesInput } from './pipeline-stage-create-without-pipeline-progresses.input';
import { Type } from 'class-transformer';
import { PipelineStageCreateOrConnectWithoutPipelineProgressesInput } from './pipeline-stage-create-or-connect-without-pipeline-progresses.input';
import { PipelineStageWhereUniqueInput } from './pipeline-stage-where-unique.input';

@InputType()
export class PipelineStageCreateNestedOneWithoutPipelineProgressesInput {
  @Field(() => PipelineStageCreateWithoutPipelineProgressesInput, {
    nullable: true,
  })
  @Type(() => PipelineStageCreateWithoutPipelineProgressesInput)
  create?: PipelineStageCreateWithoutPipelineProgressesInput;

  @Field(() => PipelineStageCreateOrConnectWithoutPipelineProgressesInput, {
    nullable: true,
  })
  @Type(() => PipelineStageCreateOrConnectWithoutPipelineProgressesInput)
  connectOrCreate?: PipelineStageCreateOrConnectWithoutPipelineProgressesInput;

  @Field(() => PipelineStageWhereUniqueInput, { nullable: true })
  @Type(() => PipelineStageWhereUniqueInput)
  connect?: PipelineStageWhereUniqueInput;
}

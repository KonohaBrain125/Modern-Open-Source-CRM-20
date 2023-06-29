import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { PipelineProgressableType } from '../prisma/pipeline-progressable-type.enum';
import { HideField } from '@nestjs/graphql';
import { PipelineCreateNestedOneWithoutPipelineProgressesInput } from '../pipeline/pipeline-create-nested-one-without-pipeline-progresses.input';
import { WorkspaceCreateNestedOneWithoutPipelineProgressesInput } from '../workspace/workspace-create-nested-one-without-pipeline-progresses.input';

@InputType()
export class PipelineProgressCreateWithoutPipelineStageInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsOptional()
    id?: string;

    @Field(() => PipelineProgressableType, {nullable:false})
    progressableType!: keyof typeof PipelineProgressableType;

    @Field(() => String, {nullable:false})
    progressableId!: string;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PipelineCreateNestedOneWithoutPipelineProgressesInput, {nullable:false})
    pipeline!: PipelineCreateNestedOneWithoutPipelineProgressesInput;

    @HideField()
    workspace!: WorkspaceCreateNestedOneWithoutPipelineProgressesInput;
}

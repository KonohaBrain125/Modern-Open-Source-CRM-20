import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PersonWhereUniqueInput } from './person-where-unique.input';
import { Type } from 'class-transformer';
import { PersonCreateInput } from './person-create.input';
import { PersonUpdateInput } from './person-update.input';

@ArgsType()
export class UpsertOnePersonArgs {

    @Field(() => PersonWhereUniqueInput, {nullable:false})
    @Type(() => PersonWhereUniqueInput)
    where!: PersonWhereUniqueInput;

    @Field(() => PersonCreateInput, {nullable:false})
    @Type(() => PersonCreateInput)
    create!: PersonCreateInput;

    @Field(() => PersonUpdateInput, {nullable:false})
    @Type(() => PersonUpdateInput)
    update!: PersonUpdateInput;
}

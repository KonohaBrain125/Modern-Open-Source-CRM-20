import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRefreshTokensInput } from './user-create-without-refresh-tokens.input';

@InputType()
export class UserCreateOrConnectWithoutRefreshTokensInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @Field(() => UserCreateWithoutRefreshTokensInput, { nullable: false })
  @Type(() => UserCreateWithoutRefreshTokensInput)
  create!: UserCreateWithoutRefreshTokensInput;
}

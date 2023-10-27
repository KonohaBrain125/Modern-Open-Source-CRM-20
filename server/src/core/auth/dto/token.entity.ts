import { Field, ObjectType } from '@nestjs/graphql';

import { ApiKey } from 'src/core/@generated/api-key/api-key.model';

@ObjectType()
export class AuthToken {
  @Field(() => String)
  token: string;

  @Field(() => Date)
  expiresAt: Date;
}

@ObjectType()
export class ApiKeyToken extends ApiKey {
  @Field(() => String)
  token: string;
}

@ObjectType()
export class AuthTokenPair {
  @Field(() => AuthToken)
  accessToken: AuthToken;

  @Field(() => AuthToken)
  refreshToken: AuthToken;
}

@ObjectType()
export class AuthTokens {
  @Field(() => AuthTokenPair)
  tokens: AuthTokenPair;
}

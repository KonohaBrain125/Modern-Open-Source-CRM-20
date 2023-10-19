import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
class AuthProviders {
  @Field(() => Boolean)
  google: boolean;

  @Field(() => Boolean)
  magicLink: boolean;

  @Field(() => Boolean)
  password: boolean;
}

@ObjectType()
class Telemetry {
  @Field(() => Boolean)
  enabled: boolean;

  @Field(() => Boolean)
  anonymizationEnabled: boolean;
}

@ObjectType()
class Support {
  @Field(() => String)
  supportDriver: string;

  @Field(() => String, { nullable: true })
  supportFrontChatId: string | undefined;
}

@ObjectType()
export class ClientConfig {
  @Field(() => AuthProviders, { nullable: false })
  authProviders: AuthProviders;

  @Field(() => Telemetry, { nullable: false })
  telemetry: Telemetry;

  @Field(() => Boolean)
  signInPrefilled: boolean;

  @Field(() => Boolean)
  dataModelSettingsEnabled: boolean;

  @Field(() => Boolean)
  developersSettingsEnabled: boolean;

  @Field(() => Boolean)
  debugMode: boolean;

  @Field(() => Boolean)
  flexibleBackendEnabled: boolean;

  @Field(() => Support)
  support: Support;
}

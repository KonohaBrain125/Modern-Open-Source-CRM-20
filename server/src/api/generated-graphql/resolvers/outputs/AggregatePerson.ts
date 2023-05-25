import * as TypeGraphQL from '@nestjs/graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PersonCountAggregate } from './PersonCountAggregate';
import { PersonMaxAggregate } from './PersonMaxAggregate';
import { PersonMinAggregate } from './PersonMinAggregate';

@TypeGraphQL.ObjectType('AggregatePerson', {
  isAbstract: true,
})
export class AggregatePerson {
  @TypeGraphQL.Field((_type) => PersonCountAggregate, {
    nullable: true,
  })
  _count!: PersonCountAggregate | null;

  @TypeGraphQL.Field((_type) => PersonMinAggregate, {
    nullable: true,
  })
  _min!: PersonMinAggregate | null;

  @TypeGraphQL.Field((_type) => PersonMaxAggregate, {
    nullable: true,
  })
  _max!: PersonMaxAggregate | null;
}

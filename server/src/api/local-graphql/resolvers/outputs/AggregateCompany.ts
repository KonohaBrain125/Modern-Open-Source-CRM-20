import * as TypeGraphQL from '@nestjs/graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { CompanyAvgAggregate } from './CompanyAvgAggregate';
import { CompanyCountAggregate } from './CompanyCountAggregate';
import { CompanyMaxAggregate } from './CompanyMaxAggregate';
import { CompanyMinAggregate } from './CompanyMinAggregate';
import { CompanySumAggregate } from './CompanySumAggregate';

@TypeGraphQL.ObjectType('AggregateCompany', {
  isAbstract: true,
})
export class AggregateCompany {
  @TypeGraphQL.Field((_type) => CompanyCountAggregate, {
    nullable: true,
  })
  _count!: CompanyCountAggregate | null;

  @TypeGraphQL.Field((_type) => CompanyAvgAggregate, {
    nullable: true,
  })
  _avg!: CompanyAvgAggregate | null;

  @TypeGraphQL.Field((_type) => CompanySumAggregate, {
    nullable: true,
  })
  _sum!: CompanySumAggregate | null;

  @TypeGraphQL.Field((_type) => CompanyMinAggregate, {
    nullable: true,
  })
  _min!: CompanyMinAggregate | null;

  @TypeGraphQL.Field((_type) => CompanyMaxAggregate, {
    nullable: true,
  })
  _max!: CompanyMaxAggregate | null;
}

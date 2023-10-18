import { Module } from '@nestjs/common';

import { CommentModule } from 'src/core/comment/comment.module';
import { ActivityModule } from 'src/core/activity/activity.module';
import { AbilityModule } from 'src/ability/ability.module';
import { PrismaModule } from 'src/database/prisma.module';

import { CompanyService } from './company.service';
import { CompanyResolver } from './company.resolver';
import { CompanyRelationsResolver } from './company-relations.resolver';

@Module({
  imports: [CommentModule, ActivityModule, AbilityModule, PrismaModule],
  providers: [CompanyService, CompanyResolver, CompanyRelationsResolver],
  exports: [CompanyService],
})
export class CompanyModule {}

import { Module } from '@nestjs/common';

import { WebHookModule } from 'src/core/web-hook/web-hook.module';

import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { CompanyModule } from './company/company.module';
import { PersonModule } from './person/person.module';
import { PipelineModule } from './pipeline/pipeline.module';
import { AuthModule } from './auth/auth.module';
import { WorkspaceModule } from './workspace/workspace.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { FileModule } from './file/file.module';
import { ClientConfigModule } from './client-config/client-config.module';
import { AttachmentModule } from './attachment/attachment.module';
import { ActivityModule } from './activity/activity.module';
import { ViewModule } from './view/view.module';
import { FavoriteModule } from './favorite/favorite.module';
import { ApiKeyModule } from './api-key/api-key.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    CommentModule,
    CompanyModule,
    PersonModule,
    PipelineModule,
    WorkspaceModule,
    AnalyticsModule,
    FileModule,
    ClientConfigModule,
    AttachmentModule,
    ActivityModule,
    ViewModule,
    FavoriteModule,
    ApiKeyModule,
    WebHookModule,
  ],
  exports: [
    AuthModule,
    UserModule,
    CommentModule,
    CompanyModule,
    PersonModule,
    PipelineModule,
    WorkspaceModule,
    AnalyticsModule,
    AttachmentModule,
    FavoriteModule,
    ApiKeyModule,
    WebHookModule,
  ],
})
export class CoreModule {}

import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { User, Workspace } from '@prisma/client';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { v4 as uuidV4 } from 'uuid';

import { FileFolder } from 'src/core/file/interfaces/file-folder.interface';

import { AuthUser } from 'src/decorators/auth-user.decorator';
import { AuthWorkspace } from 'src/decorators/auth-workspace.decorator';
import { streamToBuffer } from 'src/utils/stream-to-buffer';
import { AttachmentService } from 'src/core/attachment/services/attachment.service';
import { FileUploadService } from 'src/core/file/services/file-upload.service';
import { JwtAuthGuard } from 'src/guards/jwt.auth.guard';
import { Attachment } from 'src/core/@generated/attachment/attachment.model';
import { AbilityGuard } from 'src/guards/ability.guard';
import { CreateAttachmentAbilityHandler } from 'src/ability/handlers/attachment.ability-handler';
import { CheckAbilities } from 'src/decorators/check-abilities.decorator';

@UseGuards(JwtAuthGuard)
@Resolver(() => Attachment)
@Resolver()
export class AttachmentResolver {
  constructor(
    private readonly fileUploadService: FileUploadService,
    private readonly attachmentService: AttachmentService,
  ) {}

  @UseGuards(AbilityGuard)
  @CheckAbilities(CreateAttachmentAbilityHandler)
  @Mutation(() => String)
  async uploadAttachment(
    @AuthUser() user: User,
    @AuthWorkspace() workspace: Workspace,
    @Args({ name: 'file', type: () => GraphQLUpload })
    { createReadStream, filename, mimetype }: FileUpload,
    @Args('activityId') activityId?: string,
    @Args('companyId') companyId?: string,
    @Args('personId') personId?: string,
  ): Promise<string> {
    const stream = createReadStream();
    const buffer = await streamToBuffer(stream);

    const { path } = await this.fileUploadService.uploadFile({
      file: buffer,
      filename,
      mimeType: mimetype,
      fileFolder: FileFolder.Attachment,
    });

    await this.attachmentService.create({
      data: {
        id: uuidV4(),
        fullPath: path,
        type: this.attachmentService.getFileTypeFromFileName(filename),
        name: filename,
        activityId,
        companyId,
        personId,
        authorId: user.id,
        workspaceId: workspace.id,
      },
      select: {
        id: true,
        fullPath: true,
      },
    });

    return path;
  }
}

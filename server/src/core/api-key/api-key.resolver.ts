import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NotFoundException, UseGuards } from '@nestjs/common';

import { accessibleBy } from '@casl/prisma';

import { AbilityGuard } from 'src/guards/ability.guard';
import { AuthWorkspace } from 'src/decorators/auth-workspace.decorator';
import { Workspace } from 'src/core/@generated/workspace/workspace.model';
import { CreateOneApiKeyArgs } from 'src/core/@generated/api-key/create-one-api-key.args';
import { ApiKey } from 'src/core/@generated/api-key/api-key.model';
import { FindManyApiKeyArgs } from 'src/core/@generated/api-key/find-many-api-key.args';
import { DeleteOneApiKeyArgs } from 'src/core/@generated/api-key/delete-one-api-key.args';
import { CheckAbilities } from 'src/decorators/check-abilities.decorator';
import {
  CreateApiKeyAbilityHandler,
  UpdateApiKeyAbilityHandler,
  ReadApiKeyAbilityHandler,
} from 'src/ability/handlers/api-key.ability-handler';
import { JwtAuthGuard } from 'src/guards/jwt.auth.guard';
import { UserAbility } from 'src/decorators/user-ability.decorator';
import { AppAbility } from 'src/ability/ability.factory';
import { AuthToken } from 'src/core/auth/dto/token.entity';

import { ApiKeyService } from './api-key.service';

@UseGuards(JwtAuthGuard)
@Resolver(() => ApiKey)
export class ApiKeyResolver {
  constructor(private readonly apiKeyService: ApiKeyService) {}

  @Mutation(() => AuthToken)
  @UseGuards(AbilityGuard)
  @CheckAbilities(CreateApiKeyAbilityHandler)
  async createOneApiKey(
    @Args() args: CreateOneApiKeyArgs,
    @AuthWorkspace() { id: workspaceId }: Workspace,
  ): Promise<AuthToken> {
    return await this.apiKeyService.generateApiKeyToken(
      workspaceId,
      args.data.name,
      args.data.expiresAt,
    );
  }

  @Mutation(() => ApiKey)
  @UseGuards(AbilityGuard)
  @CheckAbilities(UpdateApiKeyAbilityHandler)
  async revokeOneApiKey(
    @Args() args: DeleteOneApiKeyArgs,
  ): Promise<Partial<ApiKey>> {
    const apiKeyToDelete = await this.apiKeyService.findFirst({
      where: { ...args.where },
    });
    if (!apiKeyToDelete) {
      throw new NotFoundException();
    }
    return this.apiKeyService.update({
      where: args.where,
      data: {
        revokedAt: new Date(),
      },
    });
  }

  @Query(() => [ApiKey])
  @UseGuards(AbilityGuard)
  @CheckAbilities(ReadApiKeyAbilityHandler)
  async findManyApiKey(
    @Args() args: FindManyApiKeyArgs,
    @UserAbility() ability: AppAbility,
  ) {
    const filterOptions = [
      accessibleBy(ability).WorkspaceMember,
      { revokedAt: null },
    ];
    if (args.where) filterOptions.push(args.where);
    return this.apiKeyService.findMany({
      ...args,
      where: { AND: filterOptions },
    });
  }
}

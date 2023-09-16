import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { accessibleBy } from '@casl/prisma';
import { Prisma } from '@prisma/client';

import { WorkspaceMember } from 'src/core/@generated/workspace-member/workspace-member.model';
import { AbilityGuard } from 'src/guards/ability.guard';
import { CheckAbilities } from 'src/decorators/check-abilities.decorator';
import {
  DeleteWorkspaceMemberAbilityHandler,
  ReadWorkspaceMemberAbilityHandler,
  UpdateWorkspaceMemberAbilityHandler,
} from 'src/ability/handlers/workspace-member.ability-handler';
import { FindManyWorkspaceMemberArgs } from 'src/core/@generated/workspace-member/find-many-workspace-member.args';
import { UserAbility } from 'src/decorators/user-ability.decorator';
import { AppAbility } from 'src/ability/ability.factory';
import {
  PrismaSelect,
  PrismaSelector,
} from 'src/decorators/prisma-select.decorator';
import { WorkspaceMemberService } from 'src/core/workspace/services/workspace-member.service';
import { DeleteOneWorkspaceMemberArgs } from 'src/core/@generated/workspace-member/delete-one-workspace-member.args';
import { JwtAuthGuard } from 'src/guards/jwt.auth.guard';
import { AuthUser } from 'src/decorators/auth-user.decorator';
import { User } from 'src/core/@generated/user/user.model';
import { UpdateOneWorkspaceMemberArgs } from 'src/core/@generated/workspace-member/update-one-workspace-member.args';

@UseGuards(JwtAuthGuard)
@Resolver(() => WorkspaceMember)
export class WorkspaceMemberResolver {
  constructor(
    private readonly workspaceMemberService: WorkspaceMemberService,
  ) {}

  @Query(() => [WorkspaceMember])
  @UseGuards(AbilityGuard)
  @CheckAbilities(ReadWorkspaceMemberAbilityHandler)
  async findManyWorkspaceMember(
    @Args() args: FindManyWorkspaceMemberArgs,
    @UserAbility() ability: AppAbility,
    @PrismaSelector({ modelName: 'WorkspaceMember' })
    prismaSelect: PrismaSelect<'WorkspaceMember'>,
  ): Promise<Partial<WorkspaceMember>[]> {
    return this.workspaceMemberService.findMany({
      ...args,
      where: args.where
        ? {
            AND: [args.where, accessibleBy(ability).WorkspaceMember],
          }
        : accessibleBy(ability).WorkspaceMember,
      select: prismaSelect.value,
    });
  }

  @Mutation(() => WorkspaceMember)
  async allowImpersonation(
    @Args('allowImpersonation') allowImpersonation: boolean,
    @AuthUser() user: User,
    @PrismaSelector({ modelName: 'WorkspaceMember' })
    prismaSelect: PrismaSelect<'WorkspaceMember'>,
  ): Promise<Partial<WorkspaceMember>> {
    return this.workspaceMemberService.update({
      where: {
        userId: user.id,
      },
      data: {
        allowImpersonation,
      },
      select: prismaSelect.value,
    });
  }

  @Mutation(() => WorkspaceMember)
  @UseGuards(AbilityGuard)
  @CheckAbilities(DeleteWorkspaceMemberAbilityHandler)
  async deleteWorkspaceMember(
    @Args() args: DeleteOneWorkspaceMemberArgs,
    @PrismaSelector({ modelName: 'WorkspaceMember' })
    prismaSelect: PrismaSelect<'WorkspaceMember'>,
  ): Promise<Partial<WorkspaceMember>> {
    return this.workspaceMemberService.delete({
      where: args.where,
      select: prismaSelect.value,
    });
  }

  @Mutation(() => WorkspaceMember)
  @UseGuards(AbilityGuard)
  @CheckAbilities(UpdateWorkspaceMemberAbilityHandler)
  async UpdateOneWorkspaceMember(
    @Args() args: UpdateOneWorkspaceMemberArgs,
    @PrismaSelector({ modelName: 'WorkspaceMember' })
    prismaSelect: PrismaSelect<'WorkspaceMember'>,
  ): Promise<Partial<WorkspaceMember>> {
    return this.workspaceMemberService.update({
      data: args.data,
      where: args.where,
      select: prismaSelect.value,
    } as Prisma.WorkspaceMemberUpdateArgs);
  }
}

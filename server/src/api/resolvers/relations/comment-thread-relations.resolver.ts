import * as TypeGraphQL from '@nestjs/graphql';
import { CommentThread } from 'src/api/@generated/comment-thread/comment-thread.model';
import { Comment } from 'src/api/@generated/comment/comment.model';
import { PrismaService } from 'src/database/prisma.service';

@TypeGraphQL.Resolver(() => CommentThread)
export class CommentThreadRelationsResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @TypeGraphQL.ResolveField(() => [Comment], {
    nullable: false,
  })
  async comments(
    @TypeGraphQL.Root() commentThread: CommentThread,
  ): Promise<Comment[]> {
    return this.prismaService.comment.findMany({
      where: {
        commentThreadId: commentThread.id,
      },
      orderBy: {
        // TODO: find a way to pass it in the query
        createdAt: 'desc',
      },
    });
  }
}

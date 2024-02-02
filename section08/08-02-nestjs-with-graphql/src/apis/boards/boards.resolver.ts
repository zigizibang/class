import { Query, Resolver } from '@nestjs/graphql';
import { BoardsService } from './boards.service';

@Resolver()
export class BoardsResolver {
  constructor(
    private readonly boardService: BoardsService, //
  ) {}

  @Query(() => String)
  getHello(): string {
    return this.boardService.qqq();
  }
}

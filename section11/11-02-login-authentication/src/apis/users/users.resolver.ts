import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly userService: UsersService, //)
  ) {}

  @Mutation(() => User)
  createUser(
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('name') name: string,
    @Args({ name: 'age', type: () => Int }) age: number,
  ): Promise<User> {
    return this.userService.create({ email, password, name, age });
  }
}

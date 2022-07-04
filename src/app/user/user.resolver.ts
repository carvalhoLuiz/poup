import { Query, Resolver } from '@nestjs/graphql';
import { UserModel } from './model/user.model';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
    constructor(private userService: UserService) {}
    @Query(() => [UserModel])
    users() {
        return this.userService.findUsers();
    }
}

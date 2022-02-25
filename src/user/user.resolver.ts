import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { UserService } from './user.service'
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUser } from './dto/update-user';
import { UserType, UserArrayType } from './dto/user.type';
import { UserResult, UserArrayResult } from './dto/output/user.result';

@Resolver('User') 
export class UserResolver {
    constructor(
        private userService: UserService
    ) {}

    @Query(() => [UserArrayResult])
    async users(): Promise<typeof UserArrayResult> {
        const users = await this.userService.findAll();
        return UserArrayType.build(users);
    }
    
    @Mutation(() => UserResult)
    async createUser(@Args('data') data: CreateUserInput
    ): Promise<typeof UserResult> {
        const user = await this.userService.create(data);
        return UserType.build(user);
    }
    
    @Mutation(() => UserResult)
    async updateUser(
        @Args('data') data: CreateUserInput,
        @Args('id') id: string
        ): Promise<typeof UserResult> {
            const user = await this.userService.update(id, data);
            return UserType.build(user); 
    }
    
    @Mutation(() => UserResult)
    async deleteUser(
        @Args('id') id: string
    ): Promise<typeof UserResult> {
        const user = await this.userService.remove(id);
        return UserType.build(user);
    }
}
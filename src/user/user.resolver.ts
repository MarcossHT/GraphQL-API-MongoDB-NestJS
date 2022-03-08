import { Args, Mutation, Resolver, Query } from '@nestjs/graphql'
import { UserService } from './user.service'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUser } from './dto/update-user'
import {
    UserType,
    UserArrayType,
    UserFind,
    SuccessMessageType,
} from './dto/user.type'
import {
    UserResult,
    UserArrayResult,
    UserFindResult,
    UserSuccessResult,
} from './dto/output/user.result'

@Resolver('User')
export class UserResolver {
    constructor(private userService: UserService) {}

    @Query(() => UserArrayResult)
    async users(): Promise<typeof UserArrayResult> {
        try {
            const users = await this.userService.findAll()
            return UserArrayType.build(users)
        } catch (error) {
            console.log(error)
        }
    }

    @Query(() => UserFindResult)
    async user(@Args('id') id: string): Promise<typeof UserFindResult> {
        try {
            const user = await this.userService.findOne(id)
            return UserFind.build(user)
        } catch (error) {
            console.log(error)
        }
    }

    @Mutation(() => UserResult)
    async createUser(
        @Args('data') data: CreateUserInput
    ): Promise<typeof UserResult> {
        try {
            const user = await this.userService.create(data)
            return UserType.build(user)
        } catch (error) {
            console.log(error)
        }
    }

    @Mutation(() => UserSuccessResult)
    async deleteUser(
        @Args('id') id: string
    ): Promise<typeof UserSuccessResult> {
        try {
            await this.userService.remove(id)
            return SuccessMessageType.build()
        } catch (error) {
            console.log(error)
        }
    }
    @Mutation(() => UserSuccessResult)
    async updateUser(
        @Args('data') data: CreateUserInput,
        @Args('id') id: string
    ): Promise<typeof UserSuccessResult> {
        try {
            await this.userService.update(id, data)
            return SuccessMessageType.build()
        } catch (error) {
            console.log(error)
        }
    }
}

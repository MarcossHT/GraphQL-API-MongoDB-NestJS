import { InputType, ObjectType, Field } from '@nestjs/graphql'
import { plainToClass, plainToInstance } from 'class-transformer'
import { User } from '../user.entity'
import { CreateUserInput } from './create-user.input'

@InputType()
@ObjectType('User')
export class UserType {
    @Field({ nullable: true })
    id?: string

    @Field({ nullable: true })
    name?: string

    @Field({ nullable: true })
    email?: string

    @Field({ nullable: true })
    password?: string

    static build(object: CreateUserInput): UserType {
        const result = plainToClass(UserType, object)
        return result
    }
}

@InputType()
@ObjectType('Find')
export class UserFind {
    @Field({ nullable: true })
    id?: string

    @Field({ nullable: true })
    name?: string

    @Field({ nullable: true })
    email?: string

    @Field({ nullable: true })
    password?: string

    static build(object: User): UserFind {
        return Object.assign(new UserFind(), {
            id: object.id,
            name: object.name,
            email: object.email,
        })
    }
}

@InputType()
@ObjectType('UserArrayType')
export class UserArrayType {
    @Field(() => [UserInputType])
    UserData: UserInputType[]

    static build(object: User[]): UserArrayType {
        const map = object.map((user) =>
            Object.assign(new UserInputType(), {
                id: user.id,
                name: user.name,
                email: user.email,
            })
        )
        return Object.assign(new UserArrayType(), {
            UserData: map,
        })
    }
}

@InputType()
@ObjectType('UserInput')
class UserInputType {
    @Field({ nullable: true })
    id?: string

    @Field({ nullable: true })
    name?: string

    @Field({ nullable: true })
    email?: string
}

@InputType()
@ObjectType('SuccessMessage')
export class SuccessMessageType {
    @Field()
    message: string

    static build(): SuccessMessageType {
        const result = new SuccessMessageType()
        result.message = 'Success!'
        return result
    }
}

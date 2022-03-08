import { InputType, ObjectType, Field } from '@nestjs/graphql'

@InputType()
@ObjectType('CreateUser')
export class CreateUserInput {
    id?: string

    @Field()
    name: string

    @Field()
    email: string

    @Field()
    password: string
}

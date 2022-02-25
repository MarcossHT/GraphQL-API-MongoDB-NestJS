import { InputType, ObjectType, Field } from "@nestjs/graphql";

@InputType()
@ObjectType('CreateUser')
export class CreateUserInput {
    @Field()
    name: string;

    @Field()
    email: string;
    
    @Field()
    password: string;
}
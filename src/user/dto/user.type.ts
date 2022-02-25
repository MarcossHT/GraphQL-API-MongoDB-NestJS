import { InputType, ObjectType, Field } from "@nestjs/graphql";
import { plainToClass, plainToInstance } from "class-transformer";
import { User } from "../user.entity";

@InputType()
@ObjectType('User')
export class UserType {
    @Field(() => String)
    name: string;

    @Field(() => String)
    email: string;
    
    @Field(() => String)
    password: string;

    static build(object: User) : UserType {
        const result = plainToClass(UserType, object);
        return result;
    }
}

@InputType()
@ObjectType('UserArray') 
export class UserArrayType {
    @Field(() => [UserInputType])
    UserData: UserInputType[]

    static build(object: any) : UserArrayType {
        const result = plainToClass(UserArrayType, object);
        return result;
    }
}

@InputType()
@ObjectType('UserInput') 
class UserInputType {
    @Field(() => String)
    name: string;

    @Field(() => String)
    email: string;
    
    @Field(() => String)
    password: string;

}


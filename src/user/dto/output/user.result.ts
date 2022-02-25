import { createUnionType } from "@nestjs/graphql";
import  { UserType, UserArrayType }  from "../user.type"


export const UserResult = createUnionType({
    name: "UserResult",
    types: () => [UserType]
})

export const UserArrayResult = createUnionType({
    name: "UserArrayResult",
    types: () => [UserArrayType]
})

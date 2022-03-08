import { createUnionType } from '@nestjs/graphql'
import {
    UserType,
    UserArrayType,
    UserFind,
    SuccessMessageType,
} from '../user.type'

export const UserResult = createUnionType({
    name: 'UserResult',
    types: () => [UserType],
})

export const UserArrayResult = createUnionType({
    name: 'UserArrayResult',
    types: () => [UserArrayType],
})

export const UserFindResult = createUnionType({
    name: 'UserFind',
    types: () => [UserFind],
})

export const UserSuccessResult = createUnionType({
    name: 'UserSuccessResult',
    types: () => [SuccessMessageType],
})

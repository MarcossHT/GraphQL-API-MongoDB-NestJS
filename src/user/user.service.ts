import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User, UserDocument } from './user.entity'
import { Model } from 'mongoose'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUser } from './dto/update-user'
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private UserModel: Model<UserDocument>
    ) {}

    create(createUserInput: CreateUserInput) {
        createUserInput.id = uuidv4()
        const user = new this.UserModel(createUserInput)
        user.save()
        return createUserInput
    }

    async findAll(): Promise<User[]> {
        const result = await this.UserModel.find().exec()
        return result
    }

    async findOne(id: string): Promise<User> {
        return await this.UserModel.findOne({
            id: id,
        })
    }

    update(id: string, updateUser: UpdateUser) {
        this.UserModel.findByIdAndUpdate(
            {
                _id: id,
            },
                updateUser,
            {
                new: true,
            }
        )
        return updateUser
    }

    remove(id: string) {
        return this.UserModel.findOneAndDelete({
            id: id,
        }).exec()
    }
}

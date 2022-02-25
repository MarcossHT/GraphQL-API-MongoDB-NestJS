import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.entity';
import { Model } from 'mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUser } from './dto/update-user'; 

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

    create(createUserInput: CreateUserInput) {
        const user = new this.UserModel(createUserInput);
        return user.save();
    }

    findAll() {
        return this.UserModel.find();
    }

    findOne(id: string) {
        return this.UserModel.findById(id);
    }

    update(id: string, updateUser: UpdateUser) {
        return this.UserModel.findByIdAndUpdate(
            {
                _id: id,
            },
            {
                updateUser,
            },
            {
                new: true,
            }
        );
    }

    remove(id: string) {
        return this.UserModel.findOneAndDelete(
            {
                _id: id,
            }
        ).exec();
    }
}

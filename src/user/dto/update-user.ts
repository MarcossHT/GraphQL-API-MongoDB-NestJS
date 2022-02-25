import { PartialType } from '@nestjs/mapped-types';
import { CreateUserInput } from './create-user.input';

export class UpdateUser extends PartialType(CreateUserInput) {}

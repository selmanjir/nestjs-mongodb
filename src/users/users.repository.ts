import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import {Model} from "mongoose";
import { User, UserDocument } from './schema/users.schema';

@Injectable()
export class UsersRepository {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

     
}
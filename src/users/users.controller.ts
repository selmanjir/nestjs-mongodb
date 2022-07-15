import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./schema/users.schema";
import { UsersService } from './users.services';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    
    constructor(private readonly usersService: UsersService) {}

    @Get(':userId')
    async getUser(@Param('userId') userId: string): Promise< User> {
        return this.usersService.getUserById(userId)
    }

    @Get()
    async getUsers(): Promise<User []> {
        return this.usersService.getUsers();
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.createUser(createUserDto.email, createUserDto.age)
    }

    @Patch()
    async updateUser(@Param('userId') userId: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
        return this.usersService.updateUser(userId, updateUserDto);
    }
}
import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "@prisma/client";


@Controller('users')
export class UserController{

    constructor(private userService: UserService){}

    @Get()
    async getAllUser(){
        return await this.userService.getAllUser()
    }

    @Get(':id')
    async getUserById(@Param('id') id: string){
        const userFound = await this.userService.getUserById(id);

        if (!userFound) throw new BadRequestException('No existe el usuario');

        return userFound;
    }

    @Post()
    async createUser(@Body('data') data: User){
        return await this.userService.createUser(data);
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() data: User){
        try {
            return await this.userService.updateUser(id, data)
        } catch (error) {
            throw new NotFoundException('El usuario no existe');
        }
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string, @Body() data: User){
        try {
            return await this.userService.updateUser(id, data)
        } catch (error) {
            throw new NotFoundException('El usuario no existe');
        }
    }
}
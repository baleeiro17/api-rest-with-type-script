import { UserModel } from './../models/User';
import {UserDto} from "../models/dto/UserDto";
import UserRepository from "../repository/UserRepository";

class UserService {

    public async getUser(id: string): Promise<UserDto | null> {

        // call repository functions
        const user = await UserRepository.getUser(id);
        if (user != null) {
            // transform to UserModel to UserDto
            return new UserDto(user);
        }
        // transform to UserModel to UserDto
        return null;
    }

    public async getUsers(): Promise<UserDto[]> {

        // call repository functions
        const users = await UserRepository.getUsers();
        
        // transform to UserModel to UserDto
        var usersDto: UserDto[] = new Array(users.length);

        for( let i = 0; i < users.length ; i++ ){
            usersDto[i] = new UserDto(users[i])
        }
           
        // transform to UserModel to UserDto
        return usersDto;
    }

    public async createUser(data: UserDto): Promise<UserDto> {
        // create User DTO
        
        // call repository functions
        const user = await UserRepository.create(UserDto.convert(data) as UserModel);
        
        return new UserDto(user);
    }
}

export default new UserService();
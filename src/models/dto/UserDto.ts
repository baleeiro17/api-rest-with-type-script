import { UserModel } from './../User';
import { UserInterface } from './../../interfaces/User';

export class UserDto {

    public id: string;
    public email: string;
    public firstName: string;
    public lastName: string;
    public password: string;

    // mappers

    //  mapper for creation of DTO
    public constructor(data: UserModel) {
        this.id = data._id;
        this.email = data.email;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
    }

    // mapper for creation of user
    public static convert(data: UserDto): UserInterface {

        const User: UserInterface = {
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            password: data.password,
        };
        return User;
    }

}
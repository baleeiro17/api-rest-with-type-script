import { UserInterface } from './../../interfaces/User';

export class UserDto {

    private email: string;
    private firstName: string;
    private lastName: string;
    private password: string;

    // create a DTO
    public constructor(data: UserInterface) {
        this.email = data.email;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        // this.password = data.password;
    }


    // convert Dto to UserInterface.
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
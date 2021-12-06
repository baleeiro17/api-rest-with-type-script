import { UserDto } from './../models/dto/UserDto';
import UserRepository from "../repository/UserRepository";
import crypto from "crypto";

class AuthService {

    public async authenticate(data: UserDto): Promise<UserDto | null> {

        const email = data.email;
        const pass = crypto.createHmac("sha256", data.password).digest("hex");

        // check if the user exists, and then if the password is correct
        const user = await UserRepository.getUserByEmailAndPass(email, pass);
        if (user != null) {
            // matches with password
            return new UserDto(user);
        }

        // user not exists or the password not match
        return null;
    }
    
}

export default new AuthService(); 
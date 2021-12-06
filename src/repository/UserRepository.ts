import { DocumentDefinition } from 'mongoose';
import User, { UserModel } from '../models/user';

class UserRespository {

    public async getUserById(id: string): Promise<UserModel | null> {
        return User.findById(id)
            .then((data: UserModel | null) => {
                return data;
            })
            .catch((error: Error) => {
                throw error;
            });
    }

    public async getUserByEmail(email: string): Promise<UserModel | null> {
        return User.findOne({email: email})
            .then((data: UserModel | null) => {
                return data;
            })
            .catch((error: Error) => {
                throw error;
            });
    }

    public async getUserByEmailAndPass(email: string, pass: string): Promise<UserModel | null> {
        return User.findOne({
            email: email,
            password: pass,
            })
            .then((data: UserModel | null) => {
                return data;
            })
            .catch((error: Error) => {
                throw error;
            });
    }

    public async getUsers(): Promise<UserModel[]> {
        return User.find({})
            .then((data: UserModel[] ) => {
                return data;
            })
            .catch((error: Error) => {
                throw error;
            });
    }

    public async create(input: UserModel): Promise<UserModel> {
        
        return User.create(input)
            .then((data: UserModel ) => {
                return data;
            })
            .catch((error: Error) => {
                throw error;
            });
    }
}

export default new UserRespository();
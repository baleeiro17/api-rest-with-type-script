import {Request, Response} from 'express';
import UserRepository from '../repository/UserRepository';

class UserController {

    public async getById(req: Request, res: Response): Promise<Response> {

        try {
            const user = await UserRepository.getUser(req.params.id);
            return res.status(200).json(user);
        } catch(e) {
            return res.status(400).send( {
                message: "Falha ao realizar a requisição",
                data: e
            });
        }
    }

    public async getAllUsers(req: Request, res: Response): Promise<Response> {

        try {
            const users = await UserRepository.getUsers();
            return res.status(200).json(users);
        } catch(e) {
            return res.status(400).send( {
                message: "Falha ao realizar a requisição",
                data: e
            });
        }
    }

    public async post(req: Request, res: Response): Promise<Response> {

        try {
            const user = await UserRepository.create(req.body);
            return res.status(200).json(user);
        } catch(e) {
            return res.status(400).send( {
                message: "Falha ao realizar a requisição",
                data: e
            });
        }
    }
}

export default new UserController();
import {Request, Response} from 'express';
import UserService from '../service/UserService';

class UserController {

    public async getById(req: Request, res: Response): Promise<Response> {

        try {

            const user = await UserService.getUser(req.params.id);
            if( user == null ) {
                return res.status(404).send({
                    message: "Not found",
                });
            }

            return res.status(200).json(user);

        } catch(e) {

            return res.status(500).send({
                message: "Falha ao realizar a requisição",
                data: e
            });

        }
    }

    public async getAllUsers(req: Request, res: Response): Promise<Response> {

        try {

            const users = await UserService.getUsers();
            return res.status(200).json(users);

        } catch(e) {

            return res.status(400).send({
                message: "Falha ao realizar a requisição",
                data: e
            });

        }
    }

    public async post(req: Request, res: Response): Promise<Response> {

        try {

            // TODO: implement some validations.
            const user = await UserService.createUser(req.body);
            return res.status(200).json(user);

        } catch(e) {

            return res.status(400).send({
                message: "Falha ao realizar a requisição",
                data: e
            });

        }
    }
}

export default new UserController();
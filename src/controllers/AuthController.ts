import {Request, Response} from 'express';
import AuthService from '../service/AuthService';
import jwt from "jsonwebtoken";
import configEnv from '../config/config';

class AuthController {

    public async login(req: Request, res: Response): Promise<Response> {

        try {

            // check the password
            const user = await AuthService.authenticate(req.body);
            if( user == null ) {
                return res.status(401).send({
                    message: "Not authorized",
                });
            }

            // and Sign JWT, get the token valid for 1 hour
            const token = jwt.sign({
                userId: user.id, 
                username: user.email 
                },
                configEnv.jwtSecret,
                { expiresIn: configEnv.jwtExpiration }
            );

            return res.status(200).json({
                token: token,
                user: user
            });

        } catch(e) {

            return res.status(500).send( {
                message: "Falha ao realizar a requisição",
                data: e
            });

        }
    }
}

export default new AuthController();
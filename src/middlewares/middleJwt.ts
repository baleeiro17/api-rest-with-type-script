import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { jwtSecret } from '../config/config';

export class JwtMiddleware {

    public static checkJwt(req: Request, res: Response, next: NextFunction): void {

        // get the token in header
        const token = req.headers["authorization"] as string;

        try {

             // validate the token
            const jwtPayload = jwt.verify(token, jwtSecret);

            // persist the data (jwt) for the next middleware
            res.locals.jwtPayload = jwtPayload;

        } catch (error) {

            res.status(401).send({
                message: "not authorized"
            });

            return ;
        }

        // call the next middleware and persist the data (jwt) for the next middleware
        next();
    }
}
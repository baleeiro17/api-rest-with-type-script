import express  from "express";
import UserController from "../controllers/UserController";
import {JwtMiddleware} from "../middlewares/middleJwt";

const router = express.Router();

router.get('/:id', JwtMiddleware.checkJwt, UserController.getById);
router.get('/', JwtMiddleware.checkJwt, UserController.getAllUsers);
router.post('/', UserController.post);

export default router;

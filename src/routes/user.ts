import express, {Request, Response}  from "express";
import UserController from "../controllers/UserController";

const router = express.Router();

router.get('/:id', UserController.getById);
router.get('/', UserController.getAllUsers);
router.post('/', UserController.post);

export default router;

import express, {Request, Response}  from "express";

const router = express.Router();

router.get('/:id', (req: Request, res: Response) => {
    return res.send('Todo product route [GET]');
});

router.post('/', (req: Request, res: Response) => {
    return res.send('Todo product route [POST]');
});

export default router;

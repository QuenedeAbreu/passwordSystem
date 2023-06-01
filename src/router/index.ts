import { Router, Request, Response, ErrorRequestHandler } from 'express'
import userRouter from './router.user';
const router = Router();

router.use('/user', userRouter);








export default router;
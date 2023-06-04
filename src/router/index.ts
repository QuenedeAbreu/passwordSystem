import { Router, Request, Response, ErrorRequestHandler } from 'express'
import userRouter from './router.user';
import permission from './router.permission';
const router = Router();

router.use('/user', userRouter);

router.use('/permission', permission);



export default router;
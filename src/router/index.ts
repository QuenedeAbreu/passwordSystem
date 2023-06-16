import { Router, Request, Response, ErrorRequestHandler } from 'express'
import userRouter from './router.user';
import permission from './router.permission';
import perfil from './router.perfil';
const router = Router();
// Routers users
router.use('/user', userRouter);
// Routers permissions
router.use('/permission', permission);
// Routers perfils
router.use('/perfil', perfil);



export default router;
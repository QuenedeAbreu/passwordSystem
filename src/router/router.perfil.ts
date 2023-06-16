import { Router } from 'express';
import * as controllerPerfis from '../controllers/perfis/controller.perfis';

const userRouter = Router();

userRouter.get('/',controllerPerfis.getAllPerfis);



export default userRouter;
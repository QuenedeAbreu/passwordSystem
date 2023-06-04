import { Router } from 'express';
import * as controllerPermissions from '../controllers/permissions/controller.permissions';

const userRouter = Router();

userRouter.get('/',controllerPermissions.getAllPermissions);
userRouter.get('/:id',controllerPermissions.getOnePermission);
userRouter.post('/',controllerPermissions.createPermission);
userRouter.put('/:id',controllerPermissions.updatePermission);


export default userRouter;
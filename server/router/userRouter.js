import express from 'express';
import routes from '../router/routes';
import { getUserDetail } from '../controller/userController';
import { onlyPrivate } from '../middleware/auth';

const userRouter = express.Router();

userRouter.get(routes.userDetail(), onlyPrivate,getUserDetail);

export default userRouter;


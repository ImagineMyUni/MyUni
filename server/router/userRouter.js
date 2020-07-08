import express from 'express';
import routes from '../router/routes';
import { getUserDetail } from '../controller/userController';

const userRouter = express.Router();

userRouter.get(routes.userDetail(), getUserDetail);

export default userRouter;


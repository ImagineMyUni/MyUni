import express from 'express';
import routes from '../router/routes';
import { onlyPublic } from '../middleware/auth';

const userRouter = express.Router();
 

export default userRouter;


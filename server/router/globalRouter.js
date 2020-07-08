import express from 'express';
import routes from './routes';
import { getLogin, postLogin, getJoin, postJoin } from '../controller/userController';
import { home } from '../controller/contentsController';

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

export default globalRouter;

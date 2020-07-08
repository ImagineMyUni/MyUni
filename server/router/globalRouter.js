import express from 'express';
import router from './router';
import { getLogin, postLogin } from '../controller/userController';

const globalRouter = express();

globalRouter.get(router.home, (req, res) => res.send("1"));

globalRouter.get(router.login, getLogin);
globalRouter.post(router.login, postLogin);

export default globalRouter;

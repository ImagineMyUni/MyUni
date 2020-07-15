import express from 'express';
import routes from './routes';
import {
    getLogin, postLogin, getJoin, postJoin,
    getGoogleLogin, getLogout, postGoogleLogin, googleLogin, home
} from '../controller/userController';
import {  } from '../controller/contentsController';
import passport from 'passport';

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.logout, getLogout);

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.google, googleLogin);

globalRouter.get(routes.googleCallback,
    passport.authenticate('google', { failureRedirect: '/login' }),
    postGoogleLogin
);

export default globalRouter;

import express from 'express';
import routes from './routes';
import { getLogin, postLogin, getJoin, postJoin, getGoogleLogin } from '../controller/userController';
import { home } from '../controller/contentsController';
import passport from 'passport';

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.google, { scope: ['profile', 'email'] });

globalRouter.get(routes.googleCallback,
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/');
    });

export default globalRouter;

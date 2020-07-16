import express from 'express';
import routes from './routes';
import {
    getLogin, postLogin, getJoin, postJoin,
    getGoogleLogin, getLogout, postGoogleLogin, googleLogin, home, kakaoLogin, postKakaoLogin, naverLogin, postNaverLogin, facebookLogin, postFacebookLogin
} from '../controller/userController';
import {  } from '../controller/contentsController';
import passport from 'passport';
import { onlyPublic, onlyPrivate, isAuthenticated } from '../middleware/auth';

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.login, onlyPublic,getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.logout, onlyPrivate, getLogout);

globalRouter.get(routes.join, isAuthenticated, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.google, googleLogin);

globalRouter.get(routes.googleCallback,
    passport.authenticate('google', { failureRedirect: '/login' }),
    postGoogleLogin
);

globalRouter.get(routes.kakao, kakaoLogin);
globalRouter.get(routes.kakaoCallback,
    passport.authenticate('kakao', { failureRedirect: '/login' }),
    postKakaoLogin
);

globalRouter.get(routes.naver, naverLogin);
globalRouter.get(routes.naverCallback,
    passport.authenticate('naver', { failureRedirect: '/login' }),
    postNaverLogin
);

globalRouter.get(routes.facebook, facebookLogin);
globalRouter.get(routes.facebookCallback,
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    postFacebookLogin
);

export default globalRouter;

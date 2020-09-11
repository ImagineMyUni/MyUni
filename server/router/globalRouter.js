import express from 'express';
import routes from './routes';
import {
    getLogout, postGoogleLogin, googleLogin, kakaoLogin, postKakaoLogin, naverLogin, postNaverLogin, facebookLogin, postFacebookLogin
} from '../controller/userController';
import passport from 'passport';
import { onlyPublic, onlyPrivate} from '../middleware/auth';

const globalRouter = express.Router();

globalRouter.get(routes.logout, onlyPrivate, getLogout);

globalRouter.get(routes.google, onlyPublic, googleLogin);
globalRouter.get(routes.googleCallback, onlyPublic,
    passport.authenticate('google', { failureRedirect: '/login' }),
    postGoogleLogin
);

globalRouter.get(routes.kakao, onlyPublic, kakaoLogin);
globalRouter.get(routes.kakaoCallback, onlyPublic,
    passport.authenticate('kakao', { failureRedirect: '/login' }),
    postKakaoLogin
);

globalRouter.get(routes.naver, onlyPublic,naverLogin);
globalRouter.get(routes.naverCallback, onlyPublic,
    passport.authenticate('naver', { failureRedirect: '/login' }),
    postNaverLogin
);

globalRouter.get(routes.facebook, onlyPublic, facebookLogin);
globalRouter.get(routes.facebookCallback, onlyPublic,
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    postFacebookLogin
);

export default globalRouter;

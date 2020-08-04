import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as KakaoStrategy } from 'passport-kakao';
import { Strategy as NaverStrategy } from 'passport-naver';
import { Strategy as FacebookStrategy } from 'passport-facebook';

import path from 'path';
import dotenv from 'dotenv';
import { googleLoginCallback, kakaoLoginCallback, naverLoginCallback, facebookLoginCallback } from '../controller/userController';
import routes from '../router/routes';

dotenv.config({path:'config/'});

// get --> authenticate --> anyway callback function call
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: routes.googleCallback,

            authType: 'rerequest',
            scope: ["email", "profile"]
        },
    googleLoginCallback
        // Use the profile information (mainly profile id) to check 
        // whether the user is registered in db
));

passport.use(
    new KakaoStrategy(
        {
            clientID: process.env.KAKAO_CLIENT_ID,
            clientSecret: process.env.KAKAO_CLIENT_SECRET,
            callbackURL: routes.kakaoCallback,
            authType: 'rerequest'
        },
        kakaoLoginCallback
    )
);

passport.use(
    new NaverStrategy(
        {
            clientID: process.env.NAVER_CLIENT_ID,
            clientSecret: process.env.NAVER_CLIENT_SECRET,
            callbackURL: routes.naverCallback,
            authType: 'rerequest'
        },
        naverLoginCallback
    )
);

passport.use(
    new FacebookStrategy({
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: routes.facebookCallback,
        authType: 'rerequest',
        scope: ['public_profile', 'email']
    },
        facebookLoginCallback
    )
);
// Normally, just take user's id for minimalizing Cookie.
// Ex) passport.serializeuser((user,done)=> (done, user.id))
passport.serializeUser((user, done) => done(null, user));

// We get User's info in 'req.user'
passport.deserializeUser((user, done) => done(null, user));





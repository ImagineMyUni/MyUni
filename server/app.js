import express from 'express';
import routes from './router/routes';
import body_parser from 'body-parser';
import cookie_parser from 'cookie-parser';
import passport from 'passport';
import logger from 'morgan';
import helmet from 'helmet';
// import cookieSession from 'cookie-session';
import mongoose from 'mongoose';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import globalRouter from './router/globalRouter';
import userRouter from './router/userRouter';

import { localsMiddleware } from './middleware/auth';

import './passport-setup';

const app = express();
const CookieStore = MongoStore(session);

app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());
app.use(cookie_parser());
app.use(logger('dev'));
app.use(helmet());
// Cookie Session은 브라우저에 저장
// Express Session은 Session 내용은 DB에, Identifier는 브라우저
// 장단점 따져서 결정
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({
        mongooseConnection: mongoose.connection
    }),
    cookie: {
        maxAge: 1000 * 60 * 60, // 유효시간 1시간
    }
}));
// app.use(cookieSession({
//     name: 'MyUni-Session',
//     keys: process.env.JWT_TOKEN,
//     cookie: {
//         secureProxy: true,
//         maxAge: 1000 * 60 * 60 // 유효시간 1시간
//     }
// }));
app.use(passport.initialize());

// Take the cookie this will call deserialize, Taking the Id From the cookie
app.use(passport.session()); 
app.use(localsMiddleware);
app.use(routes.home, globalRouter);
app.use(routes.user, userRouter);

app.set('view engine', 'pug');

export default app;

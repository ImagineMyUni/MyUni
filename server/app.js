import express from 'express';
import routes from './router/routes';
import body_parser from 'body-parser';
import cookie_parser from 'cookie-parser';
import passport from 'passport';
import morgan from 'morgan';
import helmet from 'helmet';
import mongoose from 'mongoose';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import globalRouter from './router/globalRouter';
import userRouter from './router/userRouter';

import { localsMiddleware } from './middleware/auth';

import './config/passport-setup';
import apiRouter from './router/apiRouter';
import contentsRouter from './router/contentsRouter';
import dotenv from 'dotenv';
import cors from 'cors';
import { stream } from './config/winston';

dotenv.config();

const app = express();
app.use(cors());
const CookieStore = MongoStore(session);

app.use(express.static('resource'));
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());
app.use(cookie_parser());
app.use(morgan('HTTP/:http-version :method :remote-addr :url :remote-user :status :res[content-length] :referrer :user-agent :response-time ms', { stream }));
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

app.use(passport.initialize());

// Take the cookie this will call deserialize, Taking the Id From the cookie
app.use(passport.session()); 
app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.user, userRouter);
app.use(routes.api, apiRouter);

app.set('view engine', 'pug');

export default app;

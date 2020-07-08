import express from 'express';
import router from './router/router';
import globalRouter from './router/globalRouter';
import body_parser from 'body-parser';
import cookie_parser from 'cookie-parser';
import passport from 'passport';
import passporgConfig from './middleware/config'
import logger from 'logger';
import dotenv from 'dotenv';
import flash from 'connect-flash';

const app = express();

app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());
app.use(cookie_parser);
app.use(logger('dev'));
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
    secret: process.env.JWT_TOKEN,
    resave: true,
    saveUninitialized: true
}))
app.use(flash());
app.use(router.home, globalRouter);
app.use(router.user, userRouter);

passporgConfig();

export default app;

import express from 'express';
import routes from './router/routes';
import body_parser from 'body-parser';
import cookie_parser from 'cookie-parser';
import passport from 'passport';
import logger from 'morgan';
import helmet from 'helmet';
import cookieSession from 'cookie-session';

import globalRouter from './router/globalRouter';
import userRouter from './router/userRouter';

import './passport-setup';

const app = express();

app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());
app.use(cookie_parser());
app.use(logger('dev'));
app.use(helmet());
app.use(cookieSession({
    name: 'MyUni-Session',
    keys: ['key1', 'key2'],
    expires: '1d'
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(routes.home, globalRouter);
app.use(routes.user, userRouter);

app.set('view engine', 'pug');

export default app;

import express from 'express';
import routes from './router/routes';
import body_parser from 'body-parser';
import cookie_parser from 'cookie-parser';
// import passport from 'passport';
import logger from 'morgan';
// import path from 'path';
// import session from 'express-session';
import helmet from 'helmet';

import globalRouter from './router/globalRouter';
import userRouter from './router/userRouter';

const app = express();

app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());
app.use(cookie_parser());
app.use(logger('dev'));
app.use(helmet());
// app.use(session({
//     secret: process.env.JWT_TOKEN,
//     resave: true,
//     saveUninitialized: true
// }))
// app.use(passport.initialize());
// app.use(passport.session());
app.use(routes.home, globalRouter);
app.use(routes.user, userRouter);

app.set('view engine', 'pug');

export default app;

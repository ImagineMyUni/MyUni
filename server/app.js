import express from 'express';
import router from './router/router';
import globalRouter from './router/globalRouter';
import body_parser from 'body-parser';
import cookie_parser from 'cookie-parser';


const app = express();

app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());
app.use(router.home, globalRouter);

export default app;

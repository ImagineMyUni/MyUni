import express from 'express';
import router from './router';

const globalRouter = express();

globalRouter.get(router.home, (req, res) => res.send("1"));
export default globalRouter;

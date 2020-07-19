import express from 'express';
import routes from './routes';
import { postScoreConverter } from '../controller/apiController';

const apiRouter = express.Router();

apiRouter.post(routes.converter, postScoreConverter);

export default apiRouter;
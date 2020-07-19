import express from 'express';
import routes from './routes';
import { postScoreConverter, getScoreConverter } from '../controller/apiController';

const apiRouter = express.Router();

apiRouter.post(routes.converter, postScoreConverter);
apiRouter.get(routes.converter, getScoreConverter);

export default apiRouter;
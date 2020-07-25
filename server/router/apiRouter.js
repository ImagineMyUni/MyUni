import express from 'express';
import routes from './routes';
import { postScoreConverter, getScoreConverter } from '../controller/apiController';
import { onlyPrivate } from '../middleware/auth';

const apiRouter = express.Router();

export default apiRouter;
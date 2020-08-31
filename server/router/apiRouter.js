import express from 'express';
import routes from './routes';
import { onlyPrivate } from '../middleware/auth';
import { getEachConverter, getApplyStrategyVideo, getInterviewVideo, getIntroduceVideo, getEduVideo, getConversion } from '../controller/apiController';
import mongoose from 'mongoose';
import 'mongoose-function';
import University from '../database/models/University';

const apiRouter = express.Router();

apiRouter.get('/test', getConversion);
apiRouter.get(routes.each_converter, getEachConverter);

apiRouter.get(routes.edu_video, getEduVideo);

export default apiRouter;
import express from 'express';
import routes from './routes';
import { onlyPrivate } from '../middleware/auth';
import { getEachConverter, getApplyStrategyVideo, getInterviewVideo, getIntroduceVideo, getEduVideo, getConversion, getReviewBoard } from '../controller/apiController';
import mongoose from 'mongoose';
import 'mongoose-function';
import University from '../database/models/University';

const apiRouter = express.Router();

apiRouter.get(routes.each_converter, getConversion);
// apiRouter.get(routes.each_converter, getEachConverter);

apiRouter.get(routes.edu_video, getEduVideo);
apiRouter.get(routes.review_board, getReviewBoard);
apiRouter.get(routes.review_post, getReviewPost);
export default apiRouter;
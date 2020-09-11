import express from 'express';
import routes from './routes';
// import { onlyPrivate } from '../middleware/auth';
import {getEduVideo, getConversion, getReviewBoard, postReviewPost , getReviewPost} from '../controller/apiController';
import 'mongoose-function';

const apiRouter = express.Router();

apiRouter.get(routes.each_converter, getConversion);

apiRouter.get(routes.edu_video, getEduVideo);
apiRouter.get(routes.review_board, getReviewBoard);

apiRouter.post(routes.review_post, postReviewPost);

apiRouter.get(routes.review_read, getReviewPost);
export default apiRouter;

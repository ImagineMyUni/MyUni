import express from 'express';
import routes from './routes';
import { onlyPrivate } from '../middleware/auth';
import { getReviewPost } from '../controller/contentsController';

const contentsRouter = express.Router();

contentsRouter.get(routes.review_read, getReviewPost);
// contentsRouter.get(routes.contents_video_list, getVideoList);

// contentsRouter.get(routes.video_post, onlyPrivate, getVideoPost);
// contentsRouter.post(routes.video_post, onlyPrivate, postVideoPost);

// contentsRouter.get(routes.contents_video(), getVideo);

// contentsRouter.get(routes.converter, getScoreConverter);
// contentsRouter.post(routes.converter,  postScoreConverter);

// contentsRouter.get(routes.university, onlyPrivate, getUniversityRegister);
// contentsRouter.post(routes.university, onlyPrivate, postUniversityRegister);


export default contentsRouter;

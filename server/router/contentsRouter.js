import express from 'express';
import routes from './routes';
import { getVideoList, getVideo, getVideoPost, postVideoPost, postScoreConverter, getScoreConverter, getUniversityRegister, postUniversityRegister } from '../controller/contentsController';
import { onlyPrivate } from '../middleware/auth';

const contentsRouter = express.Router();

contentsRouter.get(routes.contents_video_list, getVideoList);

contentsRouter.get(routes.video_post, getVideoPost);
contentsRouter.post(routes.video_post, postVideoPost);

contentsRouter.get(routes.contents_video(), getVideo);

contentsRouter.post(routes.converter,  postScoreConverter);
contentsRouter.get(routes.converter, getScoreConverter);

contentsRouter.get(routes.university, getUniversityRegister);
contentsRouter.post(routes.university, postUniversityRegister);

export default contentsRouter;

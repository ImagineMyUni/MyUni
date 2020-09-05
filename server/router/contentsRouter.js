import express from 'express';
import routes from './routes';
import { getVideoList, getVideo, getVideoPost, postVideoPost, postScoreConverter, getScoreConverter, getUniversityRegister, postUniversityRegister } from '../controller/contentsController';
import { onlyPrivate } from '../middleware/auth';

const contentsRouter = express.Router();

// contentsRouter.get(routes.contents_video_list, getVideoList);

// contentsRouter.get(routes.video_post, onlyPrivate, getVideoPost);
// contentsRouter.post(routes.video_post, onlyPrivate, postVideoPost);

// contentsRouter.get(routes.contents_video(), getVideo);

// contentsRouter.get(routes.converter, getScoreConverter);
// contentsRouter.post(routes.converter,  postScoreConverter);

// contentsRouter.get(routes.university, onlyPrivate, getUniversityRegister);
// contentsRouter.post(routes.university, onlyPrivate, postUniversityRegister);


export default contentsRouter;
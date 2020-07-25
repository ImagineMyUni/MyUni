import express from 'express';
import routes from './routes';
import { getVideoList, getVideo, getVideoPost, postVideoPost } from '../controller/contentsController';

const contentsRouter = express.Router();

contentsRouter.get(routes.contents_video_list, getVideoList);

contentsRouter.get(routes.videoPost, getVideoPost);
contentsRouter.post(routes.videoPost, postVideoPost);

contentsRouter.get(routes.contents_video(), getVideo);


export default contentsRouter;

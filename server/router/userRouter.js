import express from 'express';
import router from '../router/router';
import {
    postLogin
} from '../contorller/userController';


const userRouter = express().router();

export default userRouter;


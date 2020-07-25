import mongoose from "mongoose";
import routes from "../router/routes";
import Video from "../database/models/Video";

const youtubeBaseUrl = "https://www.youtube.com/embed/";

export const getVideoList = async (req, res) => {
    const videos = await Video.find({}); 

    return res.render('videoList', { pageTitle: 'videoList', videos });
} 

export const getVideo = async (req, res) => {
    const {
        id
    } = req.params;

    try {
        const video = await Video.findById(id);
        return res.render('video', { pageTitle: "video", video });
    } catch (error) {
        console.log(error);
        return res.redirect(routes.home);
    }
};

export const getVideoPost = (req, res) => {
    return res.render('videoPost', { pageTitle: 'videoPost' });
};

export const postVideoPost = async (req, res) => {
    let {
        title, url
    } = req.body;
    url = youtubeBaseUrl + url.split('/')[3];
    try {
        const newVideo = await Video.create({
            title, url,
            vote: 0
        });
        newVideo.save();
        // return res.json({
        //     statusCode: 200,
        //     message: "Video Post Success"
        // });
        return res.redirect("/contents/videos");
    } catch (error) {
        console.log(error);
        return res.redirect(routes.home);
    }
}
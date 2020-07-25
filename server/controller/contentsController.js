import mongoose from "mongoose";
import routes from "../router/routes";
import Video from "../database/models/Video";
import University from '../database/models/University';

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

export const postScoreConverter = async (req, res) => {
    let resultScore = 0, convertedScore = 0;
    const {
        universityName, score
    } = req.body;
    console.log(req.body);

    try {
        console.log(await University.find({}));
        const converter = await University.find({
            universityName
        }).exec((err, result) => {
            console.log(result);
            convertedScore = score.map(x => {
                for (var i = 0; i < result[0].gradeBenchmark.length; i++) {
                    if (x >= result[0].gradeBenchmark[i].score) {
                        return result[0].gradeBenchmark[i].grade;
                    }
                }
                return 9;
            }).reduce((total, num) => {
                return total + num;
            });
            console.log(convertedScore / 7);
            return res.status(200).json({
                statusCode: 200,
                message: convertedScore / 7
            });
        });
    } catch (error) {
        console.log(error);
        return res.json({
            statusCode: 400,
            message: "Cant find That Univ"
        });

    };
}

export const getScoreConverter = (req, res) => {
    return res.render('converter', { pageTitle: 'converter' });
}

export const getUniversityRegister = (req, res) => {
    return res.render('university', { pageTitle: 'univeristy' });
}

export const postUniversityRegister = async (req, res) => {
    const {
        universityName,
        score, grade
    } = req.body;
console.log(req.body);
   
    let gradeBenchmark = [];
    for (let i = 0; i < score.length; i++) {
        var benchmark = new Object();
        benchmark.score = score[i];
        benchmark.grade = grade[i];
        gradeBenchmark.push(benchmark);
    }
    console.log(gradeBenchmark);
    try{
       const university =  await University.create({
            universityName, gradeBenchmark
        });
        university.save();
        return res.redirect(routes.home);
    } catch (error) {
        console.log(error);
        return res.redirect(routes.home);
    }
}
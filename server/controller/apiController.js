import University from '../database/models/University';
import { kaya, kacheon, catholickwan, gangneung_wonju, kwangwon, daegu_catholic, dongeu, mockpo_haeyang, baeksuk, kyungki } from './converter/globalConverter';
import Board from '../database/models/Board'
import Video from '../database/models/Video';
import Review from '../database/models/Review';

var result = {};
// 국 영 수 사회 과학 역사 선택
function str_to_int(req) {
     const {
        status, korean, english, math, society, science, history, choice
    } = req.query;

    let st = parseInt(status, 10);
    let k = parseInt(korean, 10);
    let e = parseInt(english, 10);
    let m = parseInt(math, 10);
    let s = parseInt(society, 10);
    let sc = parseInt(science, 10);
    let h = parseInt(history, 10);
    let c = parseInt(choice, 10);

    return {
        st, k,e,m,s,sc,h,c
    };
}

export function getEachConverter (req, res) {
    // result = str_to_int(req);
    // let convertedScoreList = [];
    
    // // Converted Score // 
    // convertedScoreList.push(kaya(result.st, result.k, result.e, result.m, result.s, result.sc, result.h, result.c));
    // convertedScoreList.push(kacheon(result.st, result.k, result.e, result.m, result.s, result.sc, result.h, result.c));
    // convertedScoreList.push(catholickwan(result.st, result.k, result.e, result.m, result.s, result.sc, result.h, result.c));
    // convertedScoreList.push(gangneung_wonju(result.st, result.k, result.e, result.m, result.s, result.sc, result.h, result.c));
    // convertedScoreList.push(kwangwon(result.st, result.k, result.e, result.m, result.s, result.sc, result.h, result.c));
    // convertedScoreList.push(daegu_catholic(result.st, result.k, result.e, result.m, result.s, result.sc, result.h, result.c));
    // convertedScoreList.push(dongeu(result.st, result.k, result.e, result.m, result.s, result.sc, result.h, result.c));
    // convertedScoreList.push(mockpo_haeyang(result.st, result.k, result.e, result.m, result.s, result.sc, result.h, result.c));
    // convertedScoreList.push(baeksuk(result.st, result.k, result.e, result.m, result.s, result.sc, result.h, result.c));
    // convertedScoreList.push(kyungki(result.st, result.k, result.e, result.m, result.s, result.sc, result.h, result.c));
    // convertedScoreList.push(kwangwon(result.st, result.k, result.e, result.m, result.s, result.sc, result.h, result.c));
    // convertedScoreList.push(kwangwon(result.st, result.k, result.e, result.m, result.s, result.sc, result.h, result.c));
    // convertedScoreList.push(kwangwon(result.st, result.k, result.e, result.m, result.s, result.sc, result.h, result.c));
    // convertedScoreList.push(kwangwon(result.st, result.k, result.e, result.m, result.s, result.sc, result.h, result.c));
    // convertedScoreList.push(kwangwon(result.st, result.k, result.e, result.m, result.s, result.sc, result.h, result.c));
    // return res.json({
    //     convertedScoreList
    // });
}

export async function getEduVideo (req, res) {
    // const {
    //     type
    // } = req.query;

    // const result = await Board.findAll(type);
    // const message = (
    //     type == 1 ? "Successfully Get Apply Strategy Video" : (
    //         type == 2 ? "Successfully Get Introduce Video" :
    //             "Successfully Get Interview Video"
    //     )
    // );

    const result = await Video.find({});
    
    return res.json({
        result,
        // message
    });
};

export async function getConversion(req, res) {
    const score = str_to_int(req);
    let result = [];
    const contentOrigin = req.get('Origin');
    if (contentOrigin != null)
        res.set("Access-Control-Allow-Origin", contentOrigin);
    else
        res.set("Access-Control-Allow-Origin", "true");    
    res.set("Access-Control-Allow-Credentials", "true");
    res.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
    res.set("Access-Control-Max-Age", "3600");
    res.set("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With, remember-me");
    res.set("Content-Type", "application/json");
    res.set("Accept", "application/json");

    result.push(await University.typeZero(score.k, score.e, score.h, score.m, score.s, score.sc, score.c));
    result.push(await University.typeOne(score.k, score.e, score.h, score.m, score.s, score.sc, score.c));
    result.push(await University.typeTwo(score.k, score.e, score.h, score.m, score.s, score.sc, score.c));
    result.push(await University.typeThree(score.k, score.e, score.h, score.m, score.s, score.sc, score.c));
    result.push(await University.typeFour(score.k, score.e, score.h, score.m, score.s, score.sc, score.c));
    result.push(await University.typeFive(score.k, score.e, score.h, score.m, score.s, score.sc, score.c));

    return res.json({
        result
    });
};

export async function getReviewBoard(req, res) {
    try {
        const result = await Review.find({});
        const message = "Get ReviewBoard Success";
        return res.json({
            result,
            message
        });
    } catch (error){
        console.log(error);
        return res.json({
            message: "Get ReviewBoard Fail"
        });
    };
}

export async function postReviewPost(req, res) {
    const {
        title, body, author, password
    } = req.body;

    const newPost = new Review({ title, body, author, password });
    newPost.save((err) => {
        if (err) {
            console.log(err);
            re
        }
        
    });

    return res.sendStatus(200);
}

export async function getReviewPost(req, res) {
    
}

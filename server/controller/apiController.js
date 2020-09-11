import University from '../database/models/University';
import Video from '../database/models/Video';
import Review from '../database/models/Review';

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

export async function getEduVideo (req, res) {
    const result = await Video.find({});
    return res.json({
        result,
        // message
    });
};

export async function getConversion(req, res) {
    const score = str_to_int(req);
    let result = [];

	res.set("Access-Control-Allow-Origin", "*");
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
        title, body, author, password, time
    } = req.body;

    const newPost = new Review({ title, body, author, password, time });
    newPost.save((err) => {
        if (err) {
            console.log(err);
        }
    });

    return res.json({
	    message: "Review save Successfully"
    });
}


export async function getReviewPost(req, res) {
    const {
        id
    } = req.query;
    const text = await Review.findById({_id:id}, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        return data;
    });

    return res.json(text);
}

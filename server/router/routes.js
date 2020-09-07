
// Global
const HOME = "/";
const LOGIN = "/login";
const JOIN = "/join";
const LOGOUT = "/logout";

// Users
const USER = "/user";
const USER_DETAIL = "/:id"
const EDIT_PROFILE = "/:id/edit"

// Contents
const CONTENTS = "/contents";
// const CONTENTS_VIDEO_LIST = "/videos";
// const CONTENTS_VIDEO = "/video/:id";
// const VIDEO_POST = "/video/post";
const REVIEW_READ = "/review_read";

const CONVERTER = "/converter";
const UNIVERSITY = "/university";

// API
const API = "/api";
const EACH_CONVERTER = "/converter/each_converter";
const EDU_VIDEO = "/edu/contents/video";
const TEST = "/tested";
const REVIEW_BOARD = "/review_board";
const REVIEW_POST = "/review_post";

// const APPLY_STRATEGY_VIDEO = "/edu/contents/apply"
// const INTRODUCE_ME_VIDEO = "/edu/contents/introduce"
// const INTERVIEW_VIDEO = "/edu/contents/interview"

//Google
const GOOGLE = "/oauth/google";
const GOOGLE_CALLBACK = "/oauth/google/callback";

//Facebook
const FACEBOOK = "/oauth/facebook";
const FACEBOOK_CALLBACK = "/oauth/facebook/callback";

//Naver
const NAVER = "/oauth/naver";
const NAVER_CALLBACK = "/oauth/naver/callback";

//Kakao
const KAKAO = "/oauth/kakao";
const KAKAO_CALLBACK = "/oauth/kakao/callback";

const routes = {
    home: HOME,
    login: LOGIN,
    join: JOIN,
    logout: LOGOUT,

    user: USER,
    userDetail: (id) => {
        if (id) {
            return `/user/${id}`;
        } else {
            return USER_DETAIL;
        }
    },
    editProfile: EDIT_PROFILE,

    api: API,
    converter: CONVERTER,
    each_converter: EACH_CONVERTER,
    edu_video: EDU_VIDEO,
    review_board: REVIEW_BOARD,
    review_post: REVIEW_POST,
    review_read: (id) => {
        if (id) {
            return `/contents/review_read/${id}`;
        } else {
            return REVIEW_READ;
        }
    },
    // apply_strategy_video: APPLY_STRATEGY_VIDEO,
    // introduce_me_video: INTRODUCE_ME_VIDEO,
    // interview_video: INTERVIEW_VIDEO,
    
    // // contents: CONTENTS,
    // contents_video_list : CONTENTS_VIDEO_LIST,
    // contents_video: (id) => {
    //     if (id) {
    //         return `/video/${id}`;
    //     } else {
    //         return CONTENTS_VIDEO;
    //     }
    // },

    // video_post: VIDEO_POST,
    university: UNIVERSITY,
    
    google: GOOGLE,
    googleCallback: GOOGLE_CALLBACK,
    facebook: FACEBOOK,
    facebookCallback: FACEBOOK_CALLBACK,
    naver: NAVER,
    naverCallback: NAVER_CALLBACK,
    kakao: KAKAO,
    kakaoCallback: KAKAO_CALLBACK,
};

export default routes; 


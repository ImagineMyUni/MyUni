
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
const CONTENTS_VIDEO_LIST = "/videos";
const CONTENTS_VIDEO = "/video/:id";
const VIDEO_POST = "/video/post";

// API
const API = "/api";
const CONVERTER = "/converter";

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
    
    contents: CONTENTS,
    contents_video_list : CONTENTS_VIDEO_LIST,
    contents_video: (id) => {
        if (id) {
            return `/video/${id}`;
        } else {
            return CONTENTS_VIDEO;
        }
    },
    videoPost: VIDEO_POST,
    
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


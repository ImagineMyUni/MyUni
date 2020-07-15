
// Global
const HOME = "/";
const LOGIN = "/login";
const JOIN = "/join";
const LOGOUT = "/logout";

// Users
const USER = "/user";
const USER_DETAIL = "/:id"
const EDIT_PROFILE = "/:id/edit"

// API
const API = "/api";

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

    google: GOOGLE,
    googleCallback: GOOGLE_CALLBACK,
    naver: NAVER,
    naverCallback: NAVER_CALLBACK,
    kakao: KAKAO,
    kakaoCallback: KAKAO_CALLBACK,
};

export default routes; 


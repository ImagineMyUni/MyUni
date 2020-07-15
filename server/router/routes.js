
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
const GOOGLE = "/auth/google";
const GOOGLE_CALLBACK = "/auth/google/callback";

//Facebook
const FACEBOOK = "/auth/facebook";
const FACEBOOK_CALLBACK = "/auth/facebook/callback";

//Naver
const NAVER = "/auth/naver";
const NAVER_CALLBACK = "/auth/naver/callback";

//Kakao
const KAKAO = "/auth/kakao";
const KAKAO_CALLBACK = "/auth/kakao/callback";

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


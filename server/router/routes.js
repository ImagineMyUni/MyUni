
// Global
const HOME = "/";
const LOGIN = "/login";
const JOIN = "/join";

// Users
const USER = "/user";
const USER_DETAIL = "/:id"
const EDIT_PROFILE = "/:id/edit"

// API
const API = "/api";


const routes = {
    home: HOME,
    login: LOGIN,
    join: JOIN,

    user: USER,
    userDetail: (id) => {
        if (id) {
            return `/user/${id}`;
        } else {
            return USER_DETAIL;
        }
    },
    editProfile: EDIT_PROFILE,


    api: API
};

export default routes; 


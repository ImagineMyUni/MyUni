import types from '../_actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        case types.LOGIN_USER:
            return { ...state, loginSuccess: action.payload };
        case types.LOGOUT_USER:
            return { ...state, logoutSuccess: action.payload };
        case types.TOKEN_USER:
            return { ...state, tokenSuccess: action.payload };
        default:
            return state ;
    }
}
import types from '../_actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        case types.LOAD_DATA:
            return { ...state, loginSuccess: action.payload };
        case types.VALID_DATA:
            return { ...state, validSuccess: action.payload };
        case types.FINISH_DATA:
            return { ...state, finishSuccess: action.payload };
        case types.SEARCH_DATA:
            return { ...state, searchSuccess: action.payload };
        case types.RESULT_DATA:
            return { ...state, resultSuccess: action.payload };
        case types.SUMMARIZE_DATA:
            return { ...state, summarizeSuccess: action.payload };
        case types.REVERSE_DATA:
            return { ...state, reverseSuccess: action.payload };
        case types.CUSTOMIZED_DATA:
            return { ...state, customizedSuccess: action.payload };
        default:
            return state ;
    }
}
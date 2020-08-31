import { combineReducers } from 'redux'
import user from './user_reducer';
import db from './db_reducer';

const rootReducer = combineReducers({
    user,
    db
})

export default rootReducer;
import {combineReducers} from "redux";
import userReduce from "./user-reduce";
import {reducer as formReducer} from 'redux-form'

const reduce = combineReducers({
    user: userReduce,
    form: formReducer
})

export default reduce;
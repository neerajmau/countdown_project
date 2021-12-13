import countDownReduces from "./Timer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ countDownReduces })

export default rootReducer
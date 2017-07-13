import { combineReducers } from 'redux';
import studentReducer from './studentReducer';
import campusReducer from './campusReducer';


const rootReducer = combineReducers({
  studentReducer,
  campusReducer
});

export default rootReducer;

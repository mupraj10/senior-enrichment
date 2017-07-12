import { combineReducers } from 'redux';
import studentReducer from './studentReducer';
import campusReducer from './campusReducer';


// const initialState = {}

const rootReducer = combineReducers({
  studentReducer,
  campusReducer
});

export default rootReducer;

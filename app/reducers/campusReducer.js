//import actions 
import {GET_CAMPUSES, GET_CAMPUS_BY_ID, CREATE_CAMPUS} from '../actions/campusActions'

const initialState = {
  campuses:[],
  campus: [],
  addedCampus:''
};

export default function campusReducer (state = initialState, action) {
  
  switch (action.type) {
    
    case GET_CAMPUSES:
    // return the new state of campuses array with all 
    return  Object.assign({}, state, {campuses:action.campuses});
    
    case GET_CAMPUS_BY_ID:
    return Object.assign({}, state, {campus:action.campus});
    
    case CREATE_CAMPUS:
    return Object.assign({}, state, {addedCampus: action.addedCampus} );;
    
    default:
    return state;
  };
}

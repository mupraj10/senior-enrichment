//import actions 
import {GET_CAMPUSES, GET_CAMPUS_NAME,GET_CAMPUS_BY_ID, CREATE_CAMPUS, DELETE_CAMPUS} from '../actions/campusActions'

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

    case GET_CAMPUS_NAME:
    return Object.assign({}, state, {campuses: state.campuses.concat( action.content ) });
    
    case CREATE_CAMPUS:
    return Object.assign({}, state, {addedCampus: action.addedCampus} );

    case DELETE_CAMPUS:
    //remove object from array then return a new one. 
      const deletedCampusId = action.campusId;
      const newCampuses = state.campuses.filter(campus => campus.id !== deletedCampusId );

    return Object.assign({}, state, {campuses:newCampuses});
    
    default:
    return state;
  };
}

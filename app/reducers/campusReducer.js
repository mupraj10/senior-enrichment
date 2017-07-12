//import actions 
import * as campusActions from '../actions/campusActions';

const initialState = {
  campuses:[],
  campus: {name: ''}
};

export default function campusReducer (state = initialState, action) {
  
  switch (action.type) {
    
    case FETCH_CAMPUSES:
    // return the new state of campuses array with all 
    return  Object.assign({}, state, state.campuses = action.campuses);
    
    case FETCH_CAMPUS_BY_ID:
      return Object.assign({}, state, state.campus = action.campus);
      
      case CREATE_CAMPUS:
        return Object.assign({}, state, state.campuses.concat(action.campus) );;
        
        default:
        return state;
      } 
    }
    
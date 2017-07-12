import axios from 'axios';

// ACTION TYPES

//label for action
const GET_CAMPUSES = 'GET_CAMPUSES';


// ACTION CREATORS

//action to dispatch
export function getCampuses (campuses) {
  const action = { type: GET_CAMPUSES, campuses};
  return action;
}

// THUNK CREATORS

//axios request to get all the campuses 
export function fetchCampuses () {

  return function thunk (dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses);
        dispatch(action);
      });
  }
}


// REDUCER
export default function reducer (state = [], action) {

  switch (action.type) {

    case GET_CAMPUSES:
      return action.campuses;

    default:
      return state;
  }
    
}

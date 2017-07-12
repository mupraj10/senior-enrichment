import axios from 'axios';

// ACTION TYPES

//label for action
const GET_STUDENTS = 'GET_STUDENTS';


// ACTION CREATORS

//action to dispatch
export function getStudents (students) {
  const action = { type: GET_STUDENTS, students};
  return action;
}

// THUNK CREATORS

//axios request to get all the students 
export function fetchStudents () {

  return function thunk (dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students);
        dispatch(action);
      });
  };
}


// REDUCER
export default function reducer (state = [], action) {

  switch (action.type) {

    case GET_STUDENTS:
      return action.students;

    default:
      return state;
  }
    
}

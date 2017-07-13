//import actions

import {FETCH_STUDENTS, FETCH_STUDENT_BY_ID, CREATE_STUDENT} from '../actions/studentActions'


const initialState = {
    students:[],
    student: {campus: {} }
};

export default function studentReducer (state = initialState, action) {
    
    switch (action.type) {  
        case FETCH_STUDENTS:
        // return the new state of students array with all 
        return Object.assign({}, state, {students: action.students} );
        
        case FETCH_STUDENT_BY_ID:
        return Object.assign({}, state, {student: action.student});
        
        case CREATE_STUDENT: 
        return Object.assign({}, state, {students: students.concat(action.student)} );
        
        default:
        return state;
    }
    
};

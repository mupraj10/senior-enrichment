//import actions

import {GET_STUDENTS, GET_STUDENT_BY_ID, CREATE_STUDENT} from '../actions/studentActions'


const initialState = {
    students:[],
    student: {},
    addedStudent:""
};

export default function studentReducer (state = initialState, action) {
    
    switch (action.type) {  
        case GET_STUDENTS:
        // returns the new state of students array with all 
        return Object.assign({}, state, {students: action.students} );
        
        case GET_STUDENT_BY_ID:
        return Object.assign({}, state, {student: action.student});
        
        case CREATE_STUDENT: 
        return Object.assign({}, state, {addedStudent: action.addedStudent} );
        
        default:
        return state;
    }
    
};

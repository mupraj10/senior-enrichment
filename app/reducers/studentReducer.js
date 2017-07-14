//import actions

import {GET_STUDENTS,GET_STUDENT_NAME, GET_STUDENT_BY_ID, CREATE_STUDENT,DELETE_STUDENT} from '../actions/studentActions'


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
        
        case GET_STUDENT_NAME:
        return Object.assign({}, state, {students: state.students.concat( action.content ) });
        
        
        case CREATE_STUDENT: 
        return Object.assign({}, state, {addedStudent: action.addedStudent} );
        
        
        case DELETE_STUDENT:
        //remove student from array then return a new one. 
        const deletedStudentId = action.studentId;
        const newStudents = state.students.filter(student => student.id !== deletedSelectedId );
        
        return Object.assign({}, state, {students:newStudents});
        
        default:
        return state;
    }
    
};

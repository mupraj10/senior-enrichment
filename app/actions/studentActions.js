import axios from 'axios';

//ACTION TYPES 

export const GET_STUDENTS = 'GET_STUDENTS';
export const GET_STUDENT_BY_ID =  'GET_STUDENT_BY_ID';
export const GET_STUDENT_NAME = "GET_STUDENT_NAME";
export const CREATE_STUDENT = 'CREATE_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';


// ACTION CREATORS

export function getStudents (students) {
    const action = { type: GET_STUDENTS, students}
    return action;
}

export function getStudentsById (student) {
    const action = { type: GET_STUDENTS_BY_ID, student}
    return action;
}

export function getStudentName (content){
    const action = {type: GET_STUDENT_NAME, content};
    return action;
}

export function createStudent (addedStudent) {
    const action = { type: CREATE_STUDENT, addedStudent};
    return action;
}

export function deleteStudent(campusId){
    const action = { type: DELETE_STUDENT, campusId}
}

//THUNK CREATORS: 


export function fetchStudents () {
    return function thunk (dispatch){
        //sends axios request to get all students
        return axios.get('/api/students')
        .then(res => res.data)
        .then(students => {
            const action = getStudents(students)
            dispatch(action);
        })
        .catch(error => { console.log ("this",error) });
    };
};

export function fetchStudentsById () {
    return function thunk (dispatch){
        return axios.get(`/api/students/${studentId}`)
        .then(res => res.data)
        .then(student => {
            const action = getStudentsById(student);
            dispatch(action);
        })
        .catch(error => { console.log (error) });
    };
};

export function newStudent (name, email, imageE_STUDENTSId) {
    return function thunk (dispatch){
        return axios.post('/api/students', {name, email, imageE_STUDENTSId})
        .then(res => res.data)
        .then(newStudent => {
            const action = getStudents(newStudent);
            dispatch(action);
        })
        .catch(error => { console.log ("thunk", error) });
    }
};

export function removeStudent(studentId){
    return function thunk(dispatch){
        return axios.delete(`/api/students/${studentId}`)
        .then(res => res.data)
        .then(deletedStudent => {
            const action = getStudents();
            alert("You have deleted a student!");
            dispatch(action);
        })
        .catch(error => { console.log("thunk", error) });
    }
}

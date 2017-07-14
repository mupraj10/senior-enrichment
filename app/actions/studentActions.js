import axios from 'axios';

//ACTION TYPES 

export const GET_STUDENTS = 'GET_STUDENTS';
export const GET_STUDENT_BY_ID =  'GET_STUDENT_BY_ID';
export const CREATE_STUDENT = 'CREATE_STUDENT';

// ACTION CREATORS

export function getStudents (students) {
    const action = { type: GET_STUDENTS, students}
    return action;
}

export function getStudentsById (student) {
    const action = { type: GET_STUDENTS_BY_ID, student}
    return action;
}

export function createStudent (addedStudent) {
    const action = { type: CREATE_STUDENT, addedStudent};
    return action;
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

export function newStudent (student, email, image, campusId) {
    return function thunk (dispatch){
        return axios.post('/api/students', {student, email, image, campusId})
        .then(res => res.data)
        .then(newStudent => {
            const action = getStudents();
            console.log(newStudent);
            dispatch(action);
        })
        .catch(error => { console.log (error) });
    }
};
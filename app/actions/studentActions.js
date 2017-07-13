import axios from 'axios';

//ACTION TYPES 

export const FETCH_STUDENTS = 'FETCH_STUDENTS';
export const FETCH_STUDENT_BY_ID =  'FETCH_STUDENT_BY_ID';
export const CREATE_STUDENT = 'CREATE_STUDENT';

// ACTION CREATORS

export function fetchStudents (students) {
    return { type: FETCH_STUDENTS, students};
}

export function fetchStudentsById (student) {
    return { type: FETCH_STUDENTS_BY_ID, student};
}

export function createStudent (student) {
    return { type: CREATE_STUDENT, student};
}


export function getStudents () {
    //returns a dispatch action 
    return(dispatch) => {
        //sends axios request to get all students
        return axios.post('/api/students')
        .then(res => res.data)
        .then(students => {
            //dispatches another action for data that is found
            // function in here is the one that related to action creator
            dispatch(fetchStudents(students));
        })
        .catch(error => {
            throw (error);
        });
    };
};

export function getStudentsById () {
    //returns a dispatch action 
    return(dispatch) => {
        //sends axios request to get a student data
        return axios.get(`/api/students/${studentid}`)
        .then(res => res.data)
        .then(student => {
            //dispatches another action for data that is found
            // function in here is the one that related to action creator
            dispatch(fetchStudentsById(student));
        })
        .catch(error => {
            throw (error);
        });
    };
};

export function newStudent (student) {
    //returns a dispatch action 
    return(dispatch) => {
        //sends axios request to post a student data
        return axios.get('/api/students/', student)
        .then(res => res.data)
        .then(student => {
            //dispatches another action for data that is found
            // function in here is the one that related to action creator
            dispatch(createStudent(student));
        })
        .catch(error => {
            throw (error);
        });
    }
};
import axios from 'axios';

//ACTION TYPES 

export const GET_CAMPUSES = 'GET_CAMPUSES';
export const GET_CAMPUS_BY_ID =  'GET_CAMPUS_BY_ID';
export const CREATE_CAMPUS = 'CREATE_CAMPUS';

// ACTION CREATORS

export function getCampuses (campuses) {
    const action = { type: GET_CAMPUSES, campuses};
    return action;
}

export function getCampusById (campus) {
    const action = { type: GET_CAMPUS_BY_ID, campus};
    return action;
}

export function createCampus (addedCampus) {
    const action = { type: CREATE_CAMPUS, addedCampus};
    return action;
}

// THUNK CREATORS 

export function fetchCampuses () {
    // thunks returns a dispatch action 
    return function thunk (dispatch) {
        //sends axios request to get all campuses
        return axios.get('/api/campuses')
        .then(res => res.data)
        .then(campuses => {
            const action = getCampuses(campuses)
            //dispatches another action for data that is found
            //function in here is the action creator with the information found by axios request. 
            dispatch(action);
        })
        .catch(error => { console.log(error) });
    };
};

export function fetchCampusById () {
    return function thunk (dispatch){
        return axios.get(`/api/campuses/${campusId}`)
        .then(res => res.data)
        .then(campus => {
            const action = getCampusById(campus);
            dispatch(action);
        })
        .catch(error => { console.log(error) });
    };
};

export function newCampus (campus, image) {
    return function thunk (dispatch){
        return axios.post('/api/campuses/', {campus,image})
        .then(res => res.data)
        .then(newCampus => {
            const action = getCampuses();
            dispatch(action);
        })
        .catch(error => { console.log(error) });
    }
};

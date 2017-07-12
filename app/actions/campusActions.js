import axios from 'axios';

//ACTION TYPES 

const FETCH_CAMPUSES = 'FETCH_CAMPUSES';
const FETCH_CAMPUS_BY_ID =  'FETCH_CAMPUS_BY_ID';
const CREATE_CAMPUS = 'CREATE_CAMPUS';

// ACTION CREATORS

export function fetchCampuses (campuses) {
    return { type: FETCH_CAMPUSES, campuses};
}

export function fetchCampusById (campus) {
    return { type: FETCH_CAMPUS_BY_ID, campus};
}

export function createCampus (campus) {
    return { type: CREATE_CAMPUS, campus};
}


export function getCampuses () {
    //returns a dispatch action 
    return(dispatch) => {
        //sends axios request to get all campuses
        return axios.get('/api/campuses')
        .then(res => res.data)
        .then(campuses => {
            //dispatches another action for data that is found
            // function in here is the one that related to action creator
            dispatch(fetchCampuses(campuses));
        })
        .catch(error => {
            throw (error);
        });
    };
};

export function getCampusesById () {
    //returns a dispatch action 
    return(dispatch) => {
        //sends axios request to get a campus data
        return axios.get(`/api/campuses/${campusid}`)
        .then(res => res.data)
        .then(campus => {
            //dispatches another action for data that is found
            // function in here is the one that related to action creator
            dispatch(fetchCampusesById(campus));
        })
        .catch(error => {
            throw (error);
        });
    };
};

export function newCampus (campus) {
    //returns a dispatch action 
    return(dispatch) => {
        //sends axios request to post a campus data
        return axios.post('/api/campuses/', campus)
        .then(res => res.data)
        .then(campus => {
            //dispatches another action for data that is found
            // function in here is the one that related to action creator
            dispatch(createCampus(campus));
        })
        .catch(error => {
            throw (error);
        });
    }
};

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import store from '../store';
import {removeCampus} from '../actions/campusActions'


export default class DeleteCampus extends Component {
    constructor(){
        super();
        this.state = store.getState();
        this.handleClick.bind(this);
    }
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    handleClick(event,campusId){
        const id = campusId;
        const action = removeCampus(id);
        store.dispatch(action);
    }

    render() {
        const campuses = this.state.campusReducer.campuses;
        const urlId = this.props.match.params.campusId;
        //need to change from string to number
        const campusId = parseInt(urlId);
        //find the campus selected 
        const selectedCampus = campuses.filter(campus => campus.id === campusId);
        // console.log(selectedCampus);
        const campus = selectedCampus[0]; 
        
        return (
            <div>
                    <button 
                    type="delete" 
                    className="btn btn-default"
                    onClick={event => this.handleClick(event, campusId)}
                    > Delete Campus
                    </button>
            </div>
        )
    }
}   
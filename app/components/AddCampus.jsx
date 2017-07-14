import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import store from '../store';
import {newCampus, getCampusName} from '../actions/campusActions'


export default class AddCampus extends Component {
    constructor(){
        super();
        this.state = store.getState();
        this.handleChange.bind(this);
        this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    handleChange(event){
        const content = event.target.name.value
        // console.log("event target", event.target.value);
        store.dispatch(getCampusName(content));
    }

    handleSubmit(event){
        event.preventDefault();
        const name = event.target.CampusName.value;
        // console.log('campus:',name)
        const location = event.target.CampusLocation.value;
        const image = event.target.CampusImage.value;
        store.dispatch(newCampus(name,location,image));
    };
  
    render(){
    return (
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
            <label htmlFor="name">Enter your information here:</label>
            <input
            onChange={this.handleChange}
            className="form-control"
            type="text"
            name="CampusName"
            placeholder="Enter your Campus Name"
            />
            <input
              onChange={this.handleChange}
            className="form-control"
            type="text"
            name="CampusLocation"
            placeholder="Enter your Campus Location"
            />
            <input
              onChange={this.handleChange}
            className="form-control"
            type="text"
            name="CampusImage"
            placeholder="Insert a Campus Image: Please include a link with .jpg or .png!"
            />
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-default">Submit</button>
        </div>
        </form>
    );
    }
}   
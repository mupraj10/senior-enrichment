
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import store from '../store';
import {newStudent, getStudentName} from '../actions/studentActions'


export default class AddStudent extends Component {
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
        store.dispatch(getStudentName(content));
    }
    
    handleSubmit(event){
        event.preventDefault();
        const name = event.target.StudentName.value;
        const email = event.target.StudentEmail.value
        const image = event.target.StudentImage.value;
        const campusId = parseInt(event.target.SelectedCampus.value);
        console.log("campusId",  name, email, image, campusId );
        store.dispatch(newStudent(name,email,image,campusId));
    };
    
    
    render(){
        const campuses = this.state.campusReducer.campuses;
        return (
            <div className='formthings' >
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Enter your information here:</label>
                        <input
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="StudentName"
                            placeholder="Enter your name!"
                        />
                        <input
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="StudentEmail"
                            placeholder="Enter your email!"
                        />
                        <input
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="StudentImage"
                            placeholder="Enter your image: Please include a link with .jpg or .png!"
                        />
                        <select className="new-instance-box" name="SelectedCampus">
                            {
                                campuses.map(campus => (
                                    <option name="SelectedCampus" key={campus.id} value={campus.id}>{campus.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-default">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}   
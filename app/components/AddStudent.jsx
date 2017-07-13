
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


export default class AddStudent extends Component {
    constructor(){
        super();
    }
    render(){
    return (
        <form onSubmit>
        <div className="form-group">
            <label htmlFor="name">Enter your information here:</label>
            <input
            //   value={newChannelEntry}
            //   onChange={handleChange}
            className="form-control"
            type="text"
            name="StudentName"
            placeholder="Enter your name!"
            />
            <input
            //   value={newChannelEntry}
            //   onChange={handleChange}
            className="form-control"
            type="text"
            name="StudentEmail"
            placeholder="Enter your email!"
            />
            <input
            //   value={newChannelEntry}
            //   onChange={handleChange}
            className="form-control"
            type="text"
            name="StudentImage"
            placeholder="Enter your image: Please include a link with .jpg or .png!"
            />
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-default">Submit</button>
        </div>
        </form>
    );
    }
}   
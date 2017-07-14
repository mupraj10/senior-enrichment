import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component{
    render(){
        return(

        <nav className="navbar navbar-toggleable-md navbar-dark bg-primary">
            <div className="container">
                
                    <Link to="/" className="navbar-brand" >
                        <strong>Home</strong>  </Link>

                    <Link to="/students" className="navbar-brand" >
                        <strong>Students</strong>  </Link>

                    <Link to="/campuses" className="navbar-brand" >
                        <strong>Campuses</strong>  </Link>

                    <Link to="/addstudent"><button type="button" className="btn btn-info">Add Student</button></Link>
                    <Link to="/addcampus"><button type="button" className="btn btn-info">Add Campus</button></Link>


            </div>
        </nav>
    )};
}

  

import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
    render() {
        return (
            <div>
             <div className="container">
                     <Link to="/" className="navbar-brand" >  Home   </Link>
                     <Link to="/students" className="navbar-brand">  Students    </Link>
                     <Link to="/campuses" className="navbar-brand">  Campuses    </Link>
                     <Link to="/addstudent"><button type="button" className="adding" className="btn btn-info">Add Student</button></Link>
                     <Link to="/addcampus"><button type="button" className="adding" className="btn btn-info">Add Campus</button></Link>
             </div>
            </div>
        )
    }
}





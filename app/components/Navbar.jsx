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
             </div>
            </div>
        )
    }
}





import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component{
    render(){
        return(

        <nav className="navbar navbar-toggleable-md navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href="#">
                     <Link to="/" className="navbar-brand" >  
                      <strong>Home</strong>  </Link>
                </a>
                <a className="navbar-brand" href="#">
                     <Link to="/students" className="navbar-brand" >  
                      <strong>Students</strong>  </Link>
                </a>
                <a className="navbar-brand" href="#">
                     <Link to="/campuses" className="navbar-brand" >  
                      <strong>Campuses</strong>  </Link>
                </a>
                <a> <Link to="/addstudent"><button type="button" className="btn btn-info">Add Student</button></Link> </a>
                 <a><Link to="/addcampus"><button type="button"  className="btn btn-info">Add Campus</button></Link>  </a>
                  <a>
                <form className="nav navbar-nav navbar-left" className="form-inline waves-effect waves-light">
                    <input className="form-control" type="text" placeholder="Search"/>
                </form>
                 </a>
            </div>
        </nav>
    )};
}

  

// <div>
//              <div classNameNameName="container">
//                    
//                      
//                      <Link to="/campuses" classNameNameName="navbar-brand">  Campuses    </Link>
//              </div>
//              
//             </div>
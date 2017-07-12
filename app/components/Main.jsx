'use strict'
import React, {Component} from 'react';
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


import store from '../store';
import Navbar from './Navbar';
import Campus from './Campus';
import Campuses from './Campuses';
import Student from './Student';
import Students from './Students';

export default class Main extends Component {
  constructor(){
    super();
    this.state = { }
  }

  render () {
    return (
      <Router >
        <div>
            <Navbar />
       
            <Route exact path="/campuses" component={Campuses} />
            <Route exact path="/campuses/:campusId" component={Campus} />
            <Route exact path="/students" component={Students} />
            <Route exact path="/students/:studentId" component={Student} />
          
        </div>
    </Router>
    );
  }
}
'use strict'
import React, {Component} from 'react';
import {render} from 'react-dom'
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


import store from '../store';
import Home from './Home';
import Navbar from './Navbar';
import Campuses from './Campuses';
import Students from './Students';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import AddStudent from './AddStudent';
import AddCampus from './AddCampus';


export default class Main extends Component {
  constructor(){
    super();
  }

  render () {
    return (
      <Router >
        <div>
            <Navbar />
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/campuses" component={Campuses} />
            <Route exact path="/campuses/:campusId" component={SingleCampus} />
            <Route path="/addcampus" component={AddCampus} />
            <Route exact path="/students" component={Students} />
            <Route exact path="/students/:studentId" component={SingleStudent} />
            <Route path="/addstudent" component={AddStudent} />
            </Switch>
        </div>
    </Router>
    );
  }
}
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';


export default class SingleStudent extends Component {

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.getStudentById(this.props.match.params.id);
  }
  


  render () {

    const student = this.prop.student;

    return (
      <div>
      <div className="container">
      <h3> Student: </h3>
      <img src={student.image}></img>
      <p className= 'student'>{student.name}</p>
      <p className= 'student'>{student.email}</p>
      <p className= 'student'>{student.campus.name}</p>
      </div>
    </div>
    );
  }
}

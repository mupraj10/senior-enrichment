import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


export default class SingleStudent extends Component {

  constructor () {
    super();
    this.state = {
      student: {}
    }; 
  }

  componentDidMount () {
    axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        this.setState({ students })
      });
      console.log(this.state.students);
  }
    

  render () {

    const students = this.state.students;

    return (
      <div>
      <h3> Students </h3>
         {
        students.map(students => (
            <li key= {students.id}>
            <ul>{students.name}</ul>
            </li>))
      }
    </div>

    );
  }
}


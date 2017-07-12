import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


export default class SingleCampus extends Component {

  constructor () {
    super();
    this.state = {
      campus: {}
    }; 
  }

  componentDidMount () {
    axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        this.setState({ campus })
      });

  }
    

  render () {

    const campus = this.state.students;

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


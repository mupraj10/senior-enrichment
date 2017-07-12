import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


export default class Students extends Component {

  constructor () {
    super();
    this.state = {
      students: []
    }; 
  }

  componentDidMount () {
    axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        this.setState({ students })
      });
  }
    

  render () {

    const students = this.state.students;

    return (
      <div>
      <h3> Students </h3>
          {
        students.map(students => (
          <div className="col-xs-4" key={students.id}>
            <Link className="thumbnail" to={`/students/${students.id}`}>
              <img src= {students.image} />
              <div className="caption">
                <h5>
                  <span >{students.name}</span>
                </h5>
              </div>
            </Link>
          </div>
          ))}
    </div>

    );
  }
}


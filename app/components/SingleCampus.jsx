import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';


export default class SingleCampus extends Component {

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.getCampusById(this.props.match.params.id);
  }
  
  renderStudentsInCampus(){

  }

  render () {

    const campus = this.prop.campus;

    return (
      <div>
      <div className="container">
      <h3> Campus </h3>
      <img src={campus.image}></img>
      <p className= 'student'>{campus.location}</p>
      </div>
    </div>
    );
  }
}

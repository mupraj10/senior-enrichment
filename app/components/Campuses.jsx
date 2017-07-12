import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Campuses extends Component {

  constructor() {
    super();
    this.state = {
      campuses: []
    };
  }

  componentDidMount() {
    axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        this.setState({ campuses })
      });
  }


  render() {

    const campuses = this.state.campuses;

    return (
      <div>
        <h3 className="titles" > Campuses </h3>
        {
        campuses.map(campuses => (
          <div className="col-xs-4" key={campuses.id}>
            <Link className="thumbnail" to={`/campuses/${campuses.id}`}>
              <img src= {campuses.image} />
              <div className="caption">
                <h5>
                  <span >{campuses.name}</span>
                </h5>
              </div>
            </Link>
          </div>
          ))}
    </div>

    );
  }
}


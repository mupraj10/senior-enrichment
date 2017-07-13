import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {fetchCampuses, getCampuses}  from '../actions/campusActions'
import { connect } from 'react-redux';


 class Campuses extends Component {
  
  constructor(props) {
    super(props);
  }
  

  
  // renderCampuses(campuses)
  render() {

    
    return (
      <div>
        <h3 className="titles" > Campuses </h3>
        <div className="container">
          {this.props.campuses.map(campuses => (
      <div className="col-xs-4" key={campuses.id}>
        <Link className="thumbnail" to={`/campuses/${campuses.id}`}>
          <img src={campuses.image} />
          <div className="caption">
            <h5>
              <span >{campuses.name}</span>
            </h5>
          </div>
        </Link>
      </div>
        ))
  }
        </div>
      </div>
    );
  }
}

  
const mapStateToProps = (state) => {
  return {
    campuses: state.campuses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCampuses: () => {
      dispatch(fetchCampuses())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);
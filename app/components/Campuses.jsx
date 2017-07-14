import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {fetchCampuses}  from '../actions/campusActions'
import { connect } from 'react-redux';

//import store 
import store from '../store';

 export default class Campuses extends Component {
  
  constructor() {
    super();
    this.state = store.getState();
    // console.log("getState in campuses",this.state);
  }
  
 componentDidMount(){
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });
        // console.log("in campus mount")
    }

    componentWillUnmount(){
        this.unsubscribe();
        // console.log("in campus unmount")

    }
      render(){
        const campuses = this.state.campusReducer.campuses;
        // console.log(this.state , "this.state in render")
        // console.log(campuses, "campuses in render")
        return(
          <div>
            <h3 className="titles" > Campuses </h3>
            <div className="container">
              {campuses.map(campuses => (
                <div className="col-xs-4" key={campuses.id}>
                  <Link className="thumbnail" to={`/campuses/${campuses.id}`}>
                    <img src={campuses.image} />
                        <h5>{campuses.name}</h5>
                  </Link>
                </div>
              ))
              }
            </div>
          </div>
        )
      }
}

  
// const mapStateToProps = (state) => {
//   return {
//     campuses: state.campuses
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getCampuses: () => {
//       dispatch(fetchCampuses())
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Campuses);
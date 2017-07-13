import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import store from '../store'
import {getStudents, fetchStudents} from '../actions/studentActions'
import { connect } from 'react-redux';


//presentation component - displays things and delegates all the actions to the container component 
//container component - 
 
export default class Students extends Component {

  constructor (props) {
    super(props);
    this.state = store.getState();
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount () {
    this.unsubscribe();
  }



  render () {
    console.log("STATE",store);
    const students = this.state.students;

    return (
      <div>
        <h3> Students </h3>
        <div className="container">
          { students.map(students => {
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
        })
  };
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   console.log("STATESTUDENTS",state.students);
//   return {
//     students: state.students
//   }
  
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getStudents: () => dispatch(action.getStudents())
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Students);
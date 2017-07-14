import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import store from '../store'


export default class SingleStudent extends Component {

    constructor(props){
        super(props);
        this.state = store.getState();
    }

    componentDidMount(){
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState())
        });
    };

    componentWillUnmount(){
        this.unsubscribe();
    }

  render () {
    const campuses = this.state.campusReducer.campuses;
    const students = this.state.studentReducer.students;
    const studentId = parseInt(this.props.match.params.studentId);

    //fimd student in array 
     const selectedStudentArray = students.filter(student => student.id === studentId);
     console.log(selectedStudentArray);
     const selectedStudent = selectedStudentArray[0];

     console.log(selectedStudent);

    return (
    <div>
      <div className="col-xs-4" key={selectedStudent}>
        <img src={selectedStudent.image} />
        <div className="caption">
          <h5>
            <h2 >{selectedStudent.name}</h2>
            <h2 >{selectedStudent.email}</h2>
          </h5>
        </div>
      </div>
      <h1>Campus </h1>
          <div className="col-xs-4">
            <Link className="thumbnail" to={`/campuses/${selectedStudent.campusId}`}> </Link>
          </div>
        ))}
    </div>
  );
  }
}

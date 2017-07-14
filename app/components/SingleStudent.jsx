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
    //  console.log(selectedStudentArray);
     const selectedStudent = selectedStudentArray[0];
    //  console.log(selectedStudent);
    const studentCampusId = parseInt(selectedStudent.campusId)
    //find campus name: 
    const campusesFound = campuses.filter(campus => campus.id === studentCampusId);
    const studentCampus = campusesFound[0];
    // console.log(campusesFound,studentCampus.name);



    return (
      <div>
        <div className="col-xs-4" key={selectedStudent}>
          <img src={selectedStudent.image} />
          <div className="caption">
            <h5>
              <h2 >{selectedStudent.name}</h2>
              <h2 >{selectedStudent.email}</h2>
              <Link to={`/editstudent/${selectedStudent.id}`} className="btn btn-primary btn-xs">Edit Student</Link>
              <Link to={`/deletestudent/${selectedStudent.id}`} className="btn btn-primary btn-xs">Delete Student</Link>
              <p></p>
            </h5>
          </div>
        </div>
        <div className="col-xs-4">
          <h2>Campus </h2>
          <Link className="btn" to={`/campuses/${selectedStudent.campusId}`}>
             {campusesFound === null ? <h3>No campus assigned</h3> : <h3>{studentCampus.name}</h3> } 
          </Link>
        </div>
      </div>
    )
    }
}

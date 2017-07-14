import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import store from '../store'


export default class SingleCampus extends Component {

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
    // console.log('campuses', campuses)
    const campuses = this.state.campusReducer.campuses;
    const students = this.state.studentReducer.students;
    const urlId = this.props.match.params.campusId;

    //need to chnage from string to number
    const campusId = parseInt(urlId);
   
    //find students in that campus
    const campusStudents = students.filter(student => student.campusId === campusId);

  //find the campus selected 
  const selectedCampus = campuses.filter(campus => campus.id === campusId);
  // console.log(selectedCampus);
  const campus = selectedCampus[0]; 

    return (
    <div>
      <div className="col-xs-4" key={campus}>
        <img src={campus.image} />
        <div className="caption">
          <h5>
            <span >{campus.name}</span>
            <span >{campus.location}</span>
          </h5>
        </div>
      </div>
      <h1>Campus Students</h1>
      {campusStudents.map((students, idx) => (
          <div className="col-xs-4" key={idx}>
            <Link className="thumbnail" to={`/students/${students.id}`}>
              <img src={students.image} />
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

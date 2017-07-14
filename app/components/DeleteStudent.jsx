import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import store from '../store';
import {removeStudent} from '../actions/studentActions'


export default class DeleteStudent extends Component {
    constructor(){
        super();
        this.state = store.getState();
        this.handleClick.bind(this);
    }
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
    }
    
    componentWillUnmount() {
        this.unsubscribe();
    }
    
    handleClick(event,studentId){
        const id = studentId;
        const action = removeStudent(id);
        store.dispatch(action);
    }
    
    render() {
        const students = this.state.studentReducer.students;
        const studentId = parseInt(this.props.match.params.studentId);
        
        //find student in array 
        const selectedStudentArray = students.filter(student => student.id === studentId);
        //  console.log(selectedStudentArray);
        const selectedStudent = selectedStudentArray[0];
        //  console.log(selectedStudent);
        
        return (
            <div>
            <button 
            type="delete" 
            className="btn btn-default"
            onClick={event => this.handleClick(event, studentId)}
            > Delete Student
            </button>
            </div>
        )
    }
}   
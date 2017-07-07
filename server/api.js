'use strict'
const api = require('express').Router()
const db = require('../db')
const models = require('../db/models')
const User = models.User
const Campus = models.Campus
var Promise = require('bluebird');

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

//routes 

//all campuses 
api.get('/campuses',function(req,res,next){
	Campus.findAll({})
	.then(allCampuses => res.send(allCampuses));
});
//one campus
api.get('/campuses/:campusId',function(req,res,next){
	 var id = req.params.campusId;
	Campus.findById(id)
	.then(singleCampuses => res.send(singleCampuses));
});

//all students
api.get('/students',function(req,res,next){
	User.findAll({})
	.then(allUsers => res.send(allUsers));
});
//one student
api.get('/students/:studentId',function(req,res,next){
	 var id = req.params.studentId;
	Campus.findById(id)
	.then(singleStudent => res.send(singleStudent));
});


module.exports = api
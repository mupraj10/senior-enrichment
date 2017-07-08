const express = require('express');
const router = require('express').Router()
const models = require('../../db/models');
const User = models.User;
var Promise = require('bluebird');

//current route /api/students

//all students
router.get('/',function(req,res,next){
	User.findAll({})
	.then(allUsers => res.send(allUsers));
});
//one student
router.get('/:studentId',function(req,res,next){
	 var id = req.params.studentId;
     User.findById(id)
	.then(singleStudent => res.send(singleStudent));
});

//new student 
router.post('/',function(req,res,next){
	User.create({
		name: req.body.name,
		email: req.body.email,
		CampusId: req.body.campus_id
	})
	.then(newStudent => res.json(newStudent));
});


//update student info 
router.put('/:studentId', function(req,res,next){
	User.find({
		where: {
			id: req.params.studentId
		}
	}).then(function(updateStudent){
		if(updateStudent){
			updateStudent.updateAttributes({
				name: req.body.name,
				email:req.body.email,
				image:req.body.image,
				campusId:req.body.campus_id
			}).then(updatedStudent => res.send(updatedStudent))
		}
	})
})

//delete a student 
router.delete('/students/:studentId', function(req,res,next){
	User.destroy({ where: {
		id: req.params.studentId
	}}).then(deleteStudent => res.json(deleteStudent));
})

module.exports = router;
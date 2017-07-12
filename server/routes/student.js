const express = require('express');
const router = require('express').Router()
const models = require('../../db/models');
const User = models.User;
var Promise = require('bluebird');
const id = req.params.studentId;
//current route /api/students

//GET all students
router.get('/',function(req,res,next){
	User.findAll({})
	.then(allUsers => res.send(allUsers))
	.catch(next);
});

// GET one student
router.get('/:studentId',function(req,res,next){
     User.findById(id)
	.then(singleStudent => res.send(singleStudent))
	.catch(next);
});

//POST new student 
router.post('/',function(req,res,next){
	User.create({
		name: req.body.name,
		email: req.body.email,
		CampusId: req.body.campus_id
	})
	.then(newStudent => res.json(newStudent))
	.catch(next);
});


// PUT update student info 
router.put('/:studentId', function(req,res,next){
	 User.findById(id)
	 .then((student) => student.update(req.body))
	  .then((updatedStudent) => res.json(updatedStudent))
		.catch(next);
})

//delete a student 
router.delete('/students/:studentId', function(req,res,next){
	User.destroy({ where: { id } })
		.then(deleteStudent => res.json(deleteStudent));
})

module.exports = router;


// router.put('/:studentId', function(req,res,next){
//      User.findById(id)
// 	}).then(function(updateStudent){
// 		if(updateStudent){
// 			updateStudent.updateAttributes({
// 				name: req.body.name,
// 				email:req.body.email,
// 				image:req.body.image,
// 				campusId:req.body.campus_id
// 			}).then(updatedStudent => res.send(updatedStudent))
// 		}
// 	})
// })
const express = require('express');
const router = require('express').Router()
const models = require('../../db/models');
const Campus = models.Campus;



// current route /api/campuses

//GET all campuses 
router.get('/', function (req, res, next) {
	Campus.findAll({})
	.then(allCampuses => res.send(allCampuses))
	.catch(next)
});

// GET one campus
router.get('/:campusId', function (req, res, next) {
	const id = req.params.campusId;
	Campus.findById(id)
	.then(singleCampuses => res.send(singleCampuses))
	.catch(next);
});

// GET students at campus
router.get('/:campusId/students', function (req, res, next) {
	const id = req.params.campusId;
	Campus.findById(id)
	.then(singleCampus => res.send(singleCampus.getStudents())) //figure out how getStudents works
	.then((students) => res.json(students))
	.catch(next);
});


//POST new campus
router.post('/', function (req, res, next) {
	Campus.create({
		name: req.body.name,
		location: req.body.location,
		imageUrl: req.body.imageUrl
	})
	.then(newCampus => res.status(201).json(newCampus));
});

//update campus info 
router.put('/:campusId', function (req, res, next) {
	const id = req.params.campusId;
	Campus.findById(id)
	.then((campus) => campus.update(req.body))
	.then((updatedCampus) => campus)
	.catch(next);
});

//delete a campus 
router.delete('/:campusId', function (req, res, next) {
	const id = req.params.campusId;
	Campus.destroy({
		where: { id }
	}).then(deleteCampus => res.json(deleteCampus))
	.catch(next);
});


module.exports = router;



//old put 
// router.put('/', function(req,res,next){
	// 	var id = req.params.campusId;
	// 	Campus.findById(id)
	// 	.then(function(updateCampus){
		// 		if(updateCampus){
			// 			updateCampus.updateAttributes({
				// 				name: req.body.name,
				// 				location:req.body.location,
				// 				imageUrl:req.body.image,
				// 			}).then(updatedCampus => res.send(updatedCampus))
				// 		}
				// 	})
				// })
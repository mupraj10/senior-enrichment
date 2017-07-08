const express = require('express');
const router = require('express').Router()
const models = require('../../db/models');
const Campus = models.Campus;
var Promise = require('bluebird');


// current route /api/campuses

//all campuses 
router.get('/',function(req,res,next){
	Campus.findAll({})
	.then(allCampuses => res.send(allCampuses));
});

//one campus
router.get('/:campusId',function(req,res,next){
	 var id = req.params.campusId;
	Campus.findById(id)
	.then(singleCampuses => res.send(singleCampuses));
});

//new campus
router.post('/',function(req,res,next){
	Campus.create({
		name: req.body.name,
		location: req.body.location,
		imageUrl: req.body.imageUrl
	})
	.then(newStudent => res.status(201).json(newStudent));
});

//update campus info 
router.put('/:campusId', function(req,res,next){
	Campus.find({
		where: {
			id: req.params.campusId
		}
	}).then(function(updateCampus){
		if(updateCampus){
			updateCampus.updateAttributes({
				name: req.body.name,
				location:req.body.location,
				imageUrl:req.body.image,
			}).then(updatedCampus => res.send(updatedCampus))
		}
	})
})

//delete a campus 
router.delete('/:campusId', function(req,res,next){
	Campus.destroy({ where: {
		id: req.params.campusId
	}}).then(deleteCampus => res.json(deleteCampus));
})


module.exports = router;
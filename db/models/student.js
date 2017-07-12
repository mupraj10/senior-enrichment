'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('student', {
  name: {
    type:Sequelize.TEXT,
    allowNull: false
  },
  //add validate of email?
  email:{
    type:Sequelize.STRING,
    isEmail: true,
    allowNull:true,
  },
  image:{
      type: Sequelize.STRING,
      allowNull:true
  }
})

'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('campus', {
  name: {
    type:Sequelize.TEXT,
    allowNull: false
  },
  location:{
    type:Sequelize.TEXT,
    allowNull:false
  },
  image:{
      type: Sequelize.STRING,
      allowNull:true
  }
})
const express = require('express');
var app = express();
 
var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("App listening at http://%s:%s", host, port);
})
 
const Sequelize = require('sequelize');
 
const connection = new Sequelize('musicalbum','root','root',{
    host:'localhost',
    dialect:'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});
 
var User = connection.define('user', {
    firstName: {
      type: Sequelize.STRING,
      default:null
    },
    lastName: {
      type: Sequelize.STRING,
      default:''
    },
    password: {
      type: Sequelize.STRING,
      default:null
    },
    email: {
        type: Sequelize.STRING,
        default:null
    },
    mobileNumber: {
        type: Sequelize.STRING,
        default:null
    },
    gender: {
        type:Sequelize.STRING,
        default:null
    },
    dateOfBirth: {
        type:Sequelize.STRING,
        default:null
    },
    authToken: {
      type: Sequelize.STRING,
      default:null
    },
    provider: {
        type: Sequelize.STRING,
        default:null
    },
    deletedAt: {
      type: Sequelize.DATE,
      default:null
    }
  });
 
  connection.sync({
});
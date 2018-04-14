var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var router = express.router()
var wiki = require('./wiki.js')
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });


var User = sequelize.define('User', {
  username: Sequelize.STRING
});

/*  Create a '/users' route that responds to 
    a GET request with all users in the database */

//
app.use('wiki',wiki);

app.router.get('/users', function(req,res) {
	console.log('users')
	res.send(users);
});


module.exports = { 
  app: app,
  User: User,
  router: router
};

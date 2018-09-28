var express = require('express');
var userRoutes = express.Router();
var config = require('../config/DBConfig');
const client = config.DbConnction();

// Require Item model in our routes module
// var RegistrationDto = require('../Models/registrationDto');

//login 
userRoutes.route('/login').post(function (request, response) {
  // var objRegistrationDto = new RegistrationDto(request.body);
  client.query(
    "select *  from TUPREGISTRATION where username='" + request.body.UserName + "' and password='" + request.body.Password + "' and logintype='" + request.body.loginType + "'",
    function (err, result) {
      return response.json(result.rows);
    });
}, err => {
  console.log('Can not connect to the database' + err)
});


//registartion
userRoutes.route('/registration').post(function (request, response) {
  console.log("Registration Connected");
  client.query(
    "SELECT * FROM spupregistrtion('"
    + (request.body.FirstName != undefined ? request.body.FirstName : '') + "','"
    + (request.body.LastName != undefined ? request.body.LastName : '') + "','"
    + (request.body.UserName != undefined ? request.body.UserName : '') + "','"
    + (request.body.loginType != undefined ? request.body.loginType : '0') + "','"
    + (request.body.Password != undefined ? request.body.Password : '') + "','"
    + (request.body.Email != undefined ? request.body.Email : '') + "','"
    + (request.body.Id != undefined ? request.body.Id : '') + "','"
    + (request.body.IdToken != undefined ? request.body.IdToken : '') + "','"
    + (request.body.Name != undefined ? request.body.Name : '') + "','"
    + (request.body.Provider != undefined ? request.body.Provider : '') + "','"
    + (request.body.Token != undefined ? request.body.Token : '') + "')",
    function (err, result) {
      return response.json(result.rows);
    });
}, err => {
  console.log('Can not connect to the database' + err)
});

userRoutes.route('/userExist').post(function (request, response) {
  client.query(
    "select *  from TUPREGISTRATION where username='" + request.body.UserName + "' and logintype='" + request.body.loginType + "'",
    function (err, result) {
      return response.json(result.rows);
    });
}, err => {
  console.log('Can not connect to the database' + err)
});

userRoutes.route('/userList').get(function (request, response) {
  client.query("SELECT * FROM TUPREGISTRATION ORDER BY ID DESC", function (err, result) {
    return response.json(result.rows);
  });
}, err => {
  console.log("Does isn't get any data..");
})

module.exports = userRoutes;
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
    "INSERT INTO tupregistration( FirstName, LastName, UserName, LoginType, Password, Email, Id, IdToken, Name, Provider, Token) VALUES ('"+request.body.FirstName+"','"+request.body.LastName+"','"+request.body.UserName+"','"+request.body.LoginType+"','"+request.body.Password+"','"+request.body.Email+"','"+request.body.Id+"','"+request.body.IdToken+"','"+request.body.Name+"','"+request.body.Provider+"','"+request.body.Token+"')" ,function(err,result){
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
});

//registartion
userRoutes.route('/updateUser').put(function (request, response) {
  console.log("Update record");
  client.query(
    "UPDATE tupregistration SET FirstName='"+request.body.FirstName+"',LastName='"+request.body.LastName+"',UserName='"+request.body.UserName+"',LoginType='"+request.body.LoginType+"',Password='"+request.body.Password+"',Email='"+request.body.Email+"',Id='"+request.body.Id+"',IdToken='"+request.body.IdToken+"',Name='"+request.body.Name+"',Provider='"+request.body.Provider+"',Token='"+request.body.Token+"' where regId='"+request.body.Id+"')" ,function(err,result){
      return response.json(result.rows);
    });
}, err => {
  console.log('Can not connect to the database' + err)
});

userRoutes.route('/editUserById').get(function (request, response) {
  client.query(
    "SELECT * FROM tupregistration where regid='" + request.query.id + "'",
    function (err, result) {
      return response.json(result.rows);
    });
}, err => {
  console.log('Can not connect to the database' + err)
});

module.exports = userRoutes;
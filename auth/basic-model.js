'use strict';

const base64 = require('base-64');
const users = require('./userModel.js');

module.exports = (req, res, next) => {

  if(!req.headers.authorization) { next('invalid login'); return; }

//   solit the username and passowred from the header
  let basic = req.headers.authorization.split(' ').pop();
//   let basic = req.headers.authorization.split(' : ')[1]

// split username and password from each other 
  let [user, password] = base64.decode(basic).split(':');


  users.authenticateBasic(user, password)
    .then(validUser => {
      req.token = users.generateToken(validUser);
      console.log('token:', req.token);
      next();
    }).catch( err => next('invalid login'));
}
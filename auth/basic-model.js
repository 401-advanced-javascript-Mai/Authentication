'use strict';
/* eslint-disable no-unused-vars */
'use strict';

const base64 = require('base-64');
const users = require('./userModel.js');
const jwt = require('jsonwebtoken');
let SECRET='cool mai';

function generateToken(user) {
  let token = jwt.sign({ id: user._id  }, SECRET);
  // let token = jwt.sign({ username: user.username}, SECRET);
  //
  return token;
}


module.exports = (req, res, next) => {

  if(!req.headers.authorization) { next('invalid login'); return; }

  //   split the username and passowred from the header
  let basic = req.headers.authorization.split(' ').pop();
  //   let basic = req.headers.authorization.split(' : ')[1]
  // console.log('basic', basic)



  // split username and password from each other 
  let [user, password] = base64.decode(basic).split(':');
  // console.log('[user, pass] ', [user,password])


  users.authenticateBasic(user, password)
  // console.log('[user, pass] after use', [user,password])
    .then(validUser => {
      console.log('validUser', validUser);
      req.token = generateToken(validUser);
      console.log('token:', req.token);
      next();
    })
    .catch( err => next('invalid login2'));
};
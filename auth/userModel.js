'use strict';

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Model = require('../model.js');


let SECRET = "cool mai" ;


//  our schema 
const users = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  
  });


//   Hash the plain text password given before you save a user to the database
users.pre('save', async function (user) {
    this.password = await bcrypt.hash(this.password, 5);
    // .catch((err) => console.error(err));
    
  });


  //   Method to authenticate a user using the hashed password
  users.statics.authenticateBasic = async function(user , password){
    // console.log ('user', user)
    // console.log('passward', password)
     let foundUser = await this.find({username: user});
    // foundUser = await this.find(user);
    // console.log('foundUser', foundUser)

    if (foundUser) {
    let valid = bcrypt.compare(password, foundUser[0].password);
    // console.log('gggggggggg',foundUser[0].username)
    return valid ? foundUser[0].username : Promise.reject();
  }
    else {
        Promise.reject();
    }
  } 

//   Method to generate a Token following a valid login
users.methods.generateToken = function(user) {
  let token = jwt.sign({ id: this._id  }, SECRET);
  // let token = jwt.sign({ username: user.username}, SECRET);
//
  return token;
}

  module.exports = mongoose.model('users', users);

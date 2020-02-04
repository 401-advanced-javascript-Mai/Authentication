/* eslint-disable no-unused-vars */
'use strict';

const express = require('express');
const basicAuth = require('./auth/basic-model.js');
const model=require('./model');
const users = require('./auth/userModel.js');
// const mongoose = require('mongoose');


const app = express();

app.use(express.json());
app.post('/signup', (req, res) => {

  new users(req.body).save()
  //   console.log('req.body' , req.body)
  //   // console.log('user = req.body')

  //   console.log('********', user);
  //  user.save(req.body)

  //  console.log('req.body 2' , req.body)

    .then((user) => {
      console.log('user',user);
      let token = user.generateToken();
      res.status(200).send(token);
    }).catch(err => console.error(err));
});

app.post('/signin',basicAuth, (req, res) => {
  res.status(200).send(req.token);
  // console.log("kkkkkkkk", req.token)
});

// app.get('/users', (req, res) => {
//   // let mai  = new users();
//   // let result=users.find({id:"5e381e3fc9ea6515e875bd81"})
//   console.log('user',users)
//   res.status(200).send(users.schema.find({}) );
// });

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log('i am alive :', PORT));
  }
};
'use strict';

const express = require('express');
const basicAuth = require('./auth/basic-middleware.js');
const users = require('./auth/userModel.js');
const mongoose = require('mongoose');


const app = express();

app.use(express.json());


let user= new users ;

app.post('/signup', (req, res) => {
  user.save(req.body)
    .then(user => {
      let token = users.generateToken(user);
      res.status(200).send(token);
    })
});

app.post('/signin', basicAuth, (req, res) => {
  res.status(200).send(req.token);
});

app.get('/users', basicAuth, (req, res) => {
  res.status(200).json(users.list());
});

module.exports = {
    server: app,
    start: port => {
      let PORT = port || process.env.PORT || 3000;
      app.listen(PORT, () => console.log('i am alive :', PORT));
    }
  }
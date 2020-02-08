/* eslint-disable no-unused-vars */
'use strict';

const express = require('express');
const morgan =require('morgan');
const cors = require('cors');

const authinticationRoute = require('./routes/routes.js');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(authinticationRoute);



module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log('i am alive :', PORT));
  },
};
'use strict';
const server = require ('./server.js');  
const mongoose = require ('mongoose');


 let MONGOOSE_URI='mongodb://localhost:27017/authdb';

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(MONGOOSE_URI, mongooseOptions);

server.start(3000);
// 'use strict' ;

// const {server} = require('../server.js') ;

// const jwt = require('jsonwebtoken');
// // const supergoose =  require('./supergoose.js');
// const supergoose = require('supergoose')

// const mockRequest = supergoose.sever();
// let secret = "cool mai " ;
// // const supergoose = require()
// let users ={
//     username: ' mai ',
//     password: ' 12345 '
// }
// beforeAll(supergoose.startDB);
// afterAll( supergoose.stopDB);

// describe ( ' /signin and /signup test for my server ', ()=>{

//     Object.keys(users).forEach(userType =>{
//         describe(`${userType} users`, ()=>{
//             let id ; 
//             it ('can sign  with basic' , ()=>{
//                 return mockRequest.post('/signup')
//                 .send (users[userType])
//                 // .auth(user[userType].username , Users[userType].password)
//                 .then (results =>{
//                     var token = jwt.verify(results.text , secret);
//                     id = token.id ; 
//                     expect(token.id).toBeDefined();
//                     expect(token).toBeDefined();
//                 })

                
//             })
//             it('can signin with basic',()=>{
//                 return mockRequest.post('/signin')
//                 .auth(users[userType].username,users[userType].password)
//                 .then(results=>{
//                     var token = jwt.verify(result.text, secret);
//                     expect(token.id).toBeDefined();
//                     expect(token).toBeDefined();
//                 })
//             })

//         })

//     })
// })
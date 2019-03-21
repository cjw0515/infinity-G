const { functions } = require('./config/config.js')
const express = require('express');
const app = express();
const cors = require('cors')({origin: true});
const todolist = require('./routes/todolist/');
const cavan = require('./routes/cavan/');
app.use(cors);
app.use('/todolist', todolist)
app.use('/canvan', cavan)

// vvvvvvvvvvvvvvvvvvvv  이하 정리부탁드립니다.  vvvvvvvvvvvvvvvvvvvvvvvv
/* kkitodo 
C R U D

*/
 



exports.v1 = functions.https.onRequest(app);

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

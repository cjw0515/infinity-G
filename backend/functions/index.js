const functions = require('firebase-functions');
const admin = require('firebase-admin');    //firebase 어드민 sdk. 실시간 데이터베이스 처리 및 인증 수행
admin.initializeApp(functions.config().firebase);   //admin인스턴스 초기화

const express = require('express');
const app = express();
const cors = require('cors')({origin: true});
app.use(cors);

app.get('/', (req, res) => {
    res.send('hello world111');
})

exports.v1 = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

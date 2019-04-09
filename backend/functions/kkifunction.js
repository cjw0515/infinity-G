const functions = require('firebase-functions');
const admin = require('firebase-admin');    //firebase 어드민 sdk. 실시간 데이터베이스 처리 및 인증 수행
admin.initializeApp(functions.config().firebase);   //admin인스턴스 초기화

const express = require('express');
const app = express();
const cors = require('cors')({origin: true});
app.use(cors);

app.get('/kki/', (req, res) => {
    res.send('hello world111');
})

app.get('/kki/todolist', (req, res) => {
    let todoRef = admin.database().ref('todolist');
    todoRef.once('value', (snapshot) => {
        let items = new Array();
        snapshot.forEach((childSnapshot) => {
            let todo = childSnapshot;
            items.push(todo);
        })
        res.header('Content-Type', 'application/json; charset=utf-8')
        res.send({todoList: items});
    })
});

app.post('/kki/todolist', (req, res) => {    
    // res.send(req.body)
    // let cname = req.params.cname;
    let message = {
        date: new Date().toJSON(),
        todo: '밥하기',
        user: '최종원'
        // body: req.body.body,
        // user: req.user        
    };
    let messagesRef = admin.database().ref(`todolist/`);
    messagesRef.push(message);
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.status(201).send({result: "ok"});
});

exports.v1 = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
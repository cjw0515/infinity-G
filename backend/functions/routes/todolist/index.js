const express = require('express');
const router = express.Router();
const { defaultApp } = require('../../config/config.js');

router.get('/', (req, res) => {
    let todoRef = defaultApp.database().ref('todolist');
    todoRef.once('value', (snapshot) => {
        let items = new Array();
        snapshot.forEach((childSnapshot) => {
            let todo = childSnapshot;
            items.push(todo);
        })
        res.header('Content-Type', 'application/json; charset=utf-8')
        res.send({todoList: items});
    })
})

router.post('/', (req, res) => {    
    // res.send(req.body)
    // let cname = req.params.cname;
    let message = {
        date: new Date().toJSON(),
        todo: '밥하기',
        user: '222'
        // body: req.body.body,
        // user: req.user        
    };
    let messagesRef = defaultApp.database().ref(`todolist`);
    messagesRef.push(message);
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.status(201).send({result: "ok"});
});

router.get('/haha', (req, res) => {
    res.send('haha')
})

module.exports = router;
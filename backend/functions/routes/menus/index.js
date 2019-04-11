const express = require('express');
const router = express.Router();
const { defaultApp, firestore } = require('../../config/config.js');

router.get('/', (req, res) => {
    let menuRef = defaultApp.database().ref('menus');
    menuRef.once('value', (snapshot) => {
        let items = new Array();
        snapshot.forEach((childSnapshot) => {
            let menu = childSnapshot;
            items.push(menu);
        })
        res.header('Content-Type', 'application/json; charset=utf-8')
        res.send({menus: items});
    })
})

router.get('/test', (req, res) => {
    firestore.collection('menus').get()
    .then((snapshot) => {
        var rows = [];
        snapshot.forEach((doc) => {
            var childData = doc.data();
            rows.push(childData);
        });
        res.header('Content-Type', 'application/json; charset=utf-8')
        res.send({menus: rows});
    })
})

router.post('/test1', (req, res) => {
    firestore.collection('menus').get()
    .then((snapshot) => {
        var rows = [];
        snapshot.forEach((doc) => {
            var childData = doc.id;
            rows.push(childData);
        });
        res.header('Content-Type', 'application/json; charset=utf-8')
        res.send({menus: rows});
    })
})

router.post('/', (req, res) => {    
    let message = {
        menuTitle: "board",
        menuIcon: "ti-settings",
        menuLink: "/board",
        isActive: false,
        isCollapseMenu: false
    };
    let messagesRef = defaultApp.database().ref(`menus`);
    messagesRef.push(message);
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.status(201).send({result: "ok"});
});

router.get('/haha', (req, res) => {
    res.send('haha')
})

module.exports = router;
const express = require('express');
const router = express.Router();
const { defaultApp } = require('../../config/config.js');

router.get('/', (req, res) => {
    let todoRef = defaultApp.database().ref('menus');
    todoRef.once('value', (snapshot) => {
        let items = new Array();
        snapshot.forEach((childSnapshot) => {
            let menu = childSnapshot;
            items.push(menu);
        })
        res.header('Content-Type', 'application/json; charset=utf-8')
        res.send({menus: items});
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
const express = require('express');
const router = express.Router();
const {
    defaultApp
} = require('../../config/config.js');

const dbname = '/todo';


router.post('/', (req, res) => {
    /*
    if(!req.body["password"] || !req.body["name"]){
               result["success"] = 0;
               result["error"] = "invalid request";
               res.json(result);
               return;
           }
    */
    let message = {
        date: new Date().toJSON(),
        title: req.body["title"],
        user: req.body["user"],
        id: req.body["id"],
        desc: req.body["desc"]
    };
    return defaultApp.database().ref(dbname).push(message).then((snapshot) => {
        //return res.redirect(303,snapshot.ref.toString()); 

        return res.send(snapshot);
    });
})

router.put('/', (req, res) => {

    let message = {
        //date: new Date().toJSON(),
        title: req.body["title"],
        user: req.body["user"],
        id: req.body["id"],
        desc: req.body["desc"]
    };
    let key = req.body["uid"];
    return defaultApp.database().ref(dbname + '/' + key).update(message).then((snapshot) => {
        return res.send(snapshot);
    });
})

router.delete('/', (req, res) => {
    let key = req.query.uid;
    return defaultApp.database().ref(dbname + '/' + key).remove().then((snapshot) => {

        return res.send('ok');
    });

})

router.get('/list', (req, res) => {
    return defaultApp.database().ref(dbname).once('value').then((snapshot) => {
        let items = new Array();
        snapshot.forEach((childSnapshot) => {

            let todo = {
                date: childSnapshot.val().date,
                desc: childSnapshot.val().desc,
                id: childSnapshot.val().id,
                title: childSnapshot.val().title,
                user: childSnapshot.val().user,
                uid: childSnapshot.key
            };

            items.push(todo);
        })
        res.header('Content-Type', 'application/json; charset=utf-8')
        return res.send({
            todoList: items
        });
    });
})


router.get('/get', (req, res) => {
    const uidkey = req.query.uid;
    return defaultApp.database().ref(dbname + '/' + uidkey).once('value').then((snapshot) => {
        let todo = {
            date: snapshot.val().date,
            desc: snapshot.val().desc,
            id: snapshot.val().id,
            title: snapshot.val().title,
            user: snapshot.val().user,
            uid: snapshot.key
        };
        return res.send(todo);
    });
})


module.exports = router;
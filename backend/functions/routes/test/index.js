const express = require('express');
const router = express.Router();
const { defaultApp, firestore } = require('../../config/config.js');

// 리스트
router.get('/', (req, res) => {
    firestore.collection('testuser').get()
    .then((snapshot) => {
        var rows = [];
        snapshot.forEach((doc) => {
            var childData = doc.data();
            rows.push(childData);
        });
        res.header('Content-Type', 'application/json; charset=utf-8')
        res.status(200).send({user: rows});
    })
})

// 삽입 / 업데이트
router.post('/', (req, res) => {    
    let userData = req.body
    if(!userData.id){    //삽입
        let doc = firestore.collection("testuser").doc();
        userData.id = doc.id;
        doc.set(userData)
    }else{  //업데이트
        let doc = firestore.collection("testuser").doc(userData.id);
        doc.update(userData)
    }

    res.header('Content-Type', 'application/json; charset=utf-8');
    res.status(201).send({result: "ok"});
});

//삭제
router.delete('/:id', (req, res) => {    
    firestore.collection("testuser").doc(req.params.id).delete();
    res.status(201).send({result: "delete complete"});
})

//read
router.get('/:id',(req, res) => {
    firestore.collection("testuser").doc(req.params.id).get()
    .then((doc)=>{
        let user = doc.data();

        res.header('Content-Type', 'application/json; charset=utf-8');
        res.status(200).send({user:user})
    })
})

module.exports = router;
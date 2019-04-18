const express = require('express');
const router = express.Router();
const { defaultApp, firestore } = require('../../config/config.js');
const utils = require('../../utils/utils') ;

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

// 삽입
router.post('/', (req, res) => {    
    let userData = req.body

    if(!utils.isEmptyObject(userData)){
        let doc = firestore.collection("testuser").doc();
        userData.id = doc.id;
        doc.set(userData)
        res.header('Content-Type', 'application/json; charset=utf-8');
        res.status(201).send({result: "ok"});        
    }else{
        res.status(400).send({result: "bad request"});        
    }
});

//업데이트
router.put('/', (req, res) => {        
    let userData = req.body
    res.header('Content-Type', 'application/json; charset=utf-8');
    console.log("userId" + req.params.id)
    if(userData.id){
        let doc = firestore.collection("testuser").doc(userData.id);
        doc.update(userData)
        res.status(201).send({result: "ok"});
    }else{
        res.status(400).send({result: "bad request"});        
    }
});

//삭제
router.delete('/:id?*', (req, res) => {
    if(!req.params.id){
        res.status(400).send({result: "bad request"});
    }else{
        firestore.collection("testuser").doc(req.params.id).delete();
        res.status(201).send({result: "delete complete"});                
    }
})

//read
router.get('/:id',(req, res) => {      
    firestore.collection("testuser").doc(req.params.id).get()
    .then((doc)=>{
        let user = doc.data();
        if(true){
            res.header('Content-Type', 'application/json; charset=utf-8');
            res.status(200).send({user: user})
        }else{
            res.status(400).send({result: "bad request"});
        }
    })
})

module.exports = router;
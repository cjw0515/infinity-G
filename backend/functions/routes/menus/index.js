const express = require('express');
const router = express.Router();
const { defaultApp, firestore } = require('../../config/config.js');
const utils = require('../../utils/utils') ;

router.get('/', (req, res) => {
    firestore.collection('menus')
    .orderBy("menuOrder", "asc")
    .get()
    .then((snapshot) => {
        var rows = [];
        snapshot.forEach((doc) => {
            var childData = doc.data();
            rows.push(childData);
        });
        res.header('Content-Type', 'application/json; charset=utf-8')
        res.status(200).send({menus: rows});
    })
})

// 삽입
router.post('/', (req, res) => {    
    let menuData = req.body

    if(!utils.isEmptyObject(menuData)){
        let doc = firestore.collection("menus").doc();
        menuData.id = doc.id;
        doc.set(menuData)
        res.header('Content-Type', 'application/json; charset=utf-8');
        res.status(201).send({result: "ok"});        
    }else{
        res.status(400).send({result: "bad request"});        
    }    
});

//업데이트
router.put('/', (req, res) => {        
    let menuData = req.body
    res.header('Content-Type', 'application/json; charset=utf-8');
    console.log("menuId" + req.params.id)
    if(menuData.id){
        let doc = firestore.collection("menus").doc(menuData.id);
        doc.update(menuData)
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
        firestore.collection("menus").doc(req.params.id).delete();
        res.status(201).send({result: "delete complete"});                
    }
})

//read
router.get('/:id',(req, res) => {      
    firestore.collection("menus").doc(req.params.id).get()
    .then((doc)=>{
        let menu = doc.data();
        if(true){
            res.header('Content-Type', 'application/json; charset=utf-8');
            res.status(200).send({menu: menu})
        }else{
            res.status(400).send({result: "bad request"});
        }
    })
})

module.exports = router;
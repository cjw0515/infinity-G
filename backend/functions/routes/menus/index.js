const express = require('express');
const router = express.Router();
const { defaultApp, firestore } = require('../../config/config.js');
const utils = require('../../utils/utils') ;

//리스트
router.get('/', (req, res) => {
    firestore.collection('menus')
    .orderBy("menuOrder", "asc")
    .get()
    .then((snapshot) => {
        var resultRows = [];
        snapshot.forEach((doc) => {
            var childData = doc.data();
            resultRows.push(childData);
        });
        res.header('Content-Type', 'application/json; charset=utf-8')
        res.status(200).send({menus: resultRows});
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
    const menuRef = firestore.doc(`menus/${req.params.id}`)
    menuRef
    .get()    
    .then((doc) => {
        let menu = doc.data();

        if(true){
            res.header('Content-Type', 'application/json; charset=utf-8');
            res.status(200).send({menu: menu})
        }else{
            res.status(400).send({result: "bad request"});
        }        
    })
})

//===============================서브메뉴======================================

// 리스트
router.get('/:id/submenus/', (req, res) => {
    const menuId = req.params.id;
    const subMenuRef = firestore.collection(`menus/${menuId}/subMenus`)

    subMenuRef
    .orderBy("subMenuOrder", "asc")
    .get()    
    .then((snapshot) => {
        let resultRows = [];
        snapshot.forEach(doc => {
            let childData = doc.data();
            resultRows.push(childData);
        });
        res.header('Content-Type', 'application/json; charset=utf-8')
        res.status(200).send({subMenus: resultRows});        
    })
})

// 삽입
router.post('/:id/submenus/', (req, res) => {
    const menuId = req.params.id;
    let subMenuData = req.body;
    const subMenuRef = firestore.collection(`menus/${menuId}/subMenus`).doc();

    if(!utils.isEmptyObject(subMenuData)){        
        subMenuData.id = subMenuRef.id;
        subMenuRef.set(subMenuData)
        res.header('Content-Type', 'application/json; charset=utf-8');
        res.status(201).send({result: "ok"});        
    }else{
        res.status(400).send({result: "bad request"});        
    }
})

module.exports = router;
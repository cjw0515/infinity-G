const express = require('express');
const router = express.Router();
const { defaultApp } = require('../../config/config.js');

const dbCavanname='/cavan';
 


router.post('/',(req,res)=>{
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
           kind : req.body["kind"],
           titledata:  req.body["titledata"],
           todoval:  req.body["todoval"],
           pri:  req.body["pri"],
           id: req.body["id"]  
       }; 
       return  defaultApp.database().ref(dbCavanname).push(message).then((snapshot)=>
       { 
              //return res.redirect(303,snapshot.ref.toString()); 
           
           return res.send(snapshot);
       }
       );  
   })


   router.get('/list',(req,res)=>{
    return  defaultApp.database().ref(dbCavanname).once('value').then( (snapshot)=>
    {
        let items =new Array();
        snapshot.forEach((childSnapshot) => {

            let todo={
                date :childSnapshot.val().date,
                kind :childSnapshot.val().kind,
                titledata :childSnapshot.val().titledata,
                todoval:childSnapshot.val().todoval,
                pri:childSnapshot.val().pri,
                id:childSnapshot.val().id,
                uid:childSnapshot.key
              }; 
            
            items.push(todo);
        })
        res.header('Content-Type', 'application/json; charset=utf-8')
        return res.send({cavanlist: items});        
        }); 
   })

   router.put('/', (req, res) => {     
    let key = req.query.uid;
    let message = {
        date: new Date().toJSON(),
        kind : req.body["kind"],
        titledata:  req.body["titledata"],
        todoval:  req.body["todoval"],
        pri:  req.body["pri"],
        id: req.body["id"]  
    }; 
    
        return defaultApp.database().ref(dbCavanname+'/'+key).update(message).then((snapshot)=>{       
            return res.send('ok');
        }); 
    })

    router.delete('/cavan', (req, res) => {     
        
        let key = req.query.uid; 
        return defaultApp.database().ref(dbCavanname+'/'+key).remove().then((snapshot)=>{
           
            return res.send('ok');
          }); 
    })

    module.exports = router;

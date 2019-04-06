const { functions } = require('./config/config.js')
const express = require('express');
const app = express();
const cors = require('cors')({origin: true});
const todolist = require('./routes/todolist/')
const menus = require('./routes/menus/')

app.use(cors);
app.use('/todolist', todolist)
app.use('/menus', menus)

// vvvvvvvvvvvvvvvvvvvv  이하 정리부탁드립니다.  vvvvvvvvvvvvvvvvvvvvvvvv
/* kkitodo 
C R U D

*/

const dbname='/todo';

app.post('/kki',(req,res)=>{
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
           title:  req.body["title"],
           user:  req.body["user"],
           id:  req.body["id"],
           desc: req.body["desc"]  
       }; 
       return  admin.database().ref(dbname).push(message).then((snapshot)=>
       { 
              //return res.redirect(303,snapshot.ref.toString()); 
           
           return res.send(snapshot);
       }
       );  
   })

   app.put('/kki', (req, res) => {     
    
    let message = {
        //date: new Date().toJSON(),
        title:  req.body["title"],
        user:  req.body["user"],
        id:  req.body["id"],
        desc: req.body["desc"]  
    }; 
    let  key = req.body["uid"];
        return admin.database().ref(dbname+'/'+key).update(message).then((snapshot)=>{       
          return res.send(snapshot);
        }); 
    })

    app.delete('/kki', (req, res) => { 
        let key = req.query.uid; 
        return admin.database().ref(dbname+'/'+key).remove().then((snapshot)=>{
           
            return res.send('ok');
      }); 
    
    })

   app.get('/kki/list', (req, res) => { 
    return  admin.database().ref(dbname).once('value').then( (snapshot)=>
    {
        let items =new Array();
        snapshot.forEach((childSnapshot) => {

            let todo={
                date :childSnapshot.val().date,
                desc :childSnapshot.val().desc,
                id :childSnapshot.val().id,
                title:childSnapshot.val().title,
                user:childSnapshot.val().user,
                uid:childSnapshot.key
              }; 
            
            items.push(todo);
        })
        res.header('Content-Type', 'application/json; charset=utf-8')
        return res.send({todoList: items});        
        }); 
    })

    
    app.get('/kki/get', (req, res) => {     
        const uidkey = req.query.uid;     
        return  admin.database().ref(dbname+'/'+uidkey).once('value').then( (snapshot)=>
        {   
            let todo={
            date :snapshot.val().date,
            desc :snapshot.val().desc,
            id :snapshot.val().id,
            title:snapshot.val().title,
            user:snapshot.val().user,
            uid:snapshot.key
            }; 
            return res.send(todo);
        }); 
    })

    /*
       CAVANA BOARD/* kkitodo 
            C R U D

*/
const dbCavanname='/cavan';


app.post('/cavan',(req,res)=>{
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
       return  admin.database().ref(dbCavanname).push(message).then((snapshot)=>
       { 
              //return res.redirect(303,snapshot.ref.toString()); 
           
           return res.send(snapshot);
       }
       );  
   })


   app.get('/cavan/list',(req,res)=>{
    return  admin.database().ref(dbCavanname).once('value').then( (snapshot)=>
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

   app.put('/cavan', (req, res) => {     
    let key = req.query.uid;
    let message = {
        date: new Date().toJSON(),
        kind : req.body["kind"],
        titledata:  req.body["titledata"],
        todoval:  req.body["todoval"],
        pri:  req.body["pri"],
        id: req.body["id"]  
    }; 
    
        return admin.database().ref(dbCavanname+'/'+key).update(message).then((snapshot)=>{       
            return res.send('ok');
        }); 
    })

    app.delete('/cavan', (req, res) => {     
        
        let key = req.query.uid; 
        return admin.database().ref(dbCavanname+'/'+key).remove().then((snapshot)=>{
           
            return res.send('ok');
          }); 
    })



exports.v1 = functions.https.onRequest(app);

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

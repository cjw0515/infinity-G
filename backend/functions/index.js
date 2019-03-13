const functions = require('firebase-functions');
const admin = require('firebase-admin');    //firebase 어드민 sdk. 실시간 데이터베이스 처리 및 인증 수행
admin.initializeApp(functions.config().firebase);   //admin인스턴스 초기화

const express = require('express');
const app = express();
const cors = require('cors')({origin: true});
app.use(cors);

app.get('/', (req, res) => {
    res.send('hello world111');
})

app.get('/todolist', (req, res) => {
    let todoRef = admin.database().ref('todolist');
    todoRef.once('value', (snapshot) => {
        let items = new Array();
        snapshot.forEach((childSnapshot) => {
            let todo = childSnapshot;
            items.push(todo);
        })
        res.header('Content-Type', 'application/json; charset=utf-8')
        res.send({todoList: items});
    })
});

app.post('/todolist', (req, res) => {    
    // res.send(req.body)
    // let cname = req.params.cname;
    let message = {
        date: new Date().toJSON(),
        todo: '밥하기',
        user: '222'
        // body: req.body.body,
        // user: req.user        
    };
    let messagesRef = admin.database().ref(`todolist`);
    messagesRef.push(message);
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.status(201).send({result: "ok"});
});

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


exports.v1 = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

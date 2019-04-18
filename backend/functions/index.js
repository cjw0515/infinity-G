const {
    functions
} = require('./config/config.js')
const express = require('express');
const app = express();
const cors = require('cors')({origin: true});
const todolist = require('./routes/todolist/')
const menus = require('./routes/menus/')
const test = require('./routes/test/')

/* 
express 라우트 문서 : https://expressjs.com/ko/guide/routing.html
 */
app.use(cors);
app.use('/todolist', todolist)
app.use('/menus', menus)
app.use('/test', test)

exports.v1 = functions.https.onRequest(app);
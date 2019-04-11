const {
    functions
} = require('./config/config.js')
const express = require('express');
const app = express();
const cors = require('cors')({origin: true});
const todolist = require('./routes/todolist/')
const menus = require('./routes/menus/')

app.use(cors);
app.use('/todolist', todolist)
app.use('/menus', menus)

exports.v1 = functions.https.onRequest(app);
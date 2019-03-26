const {
    functions
} = require('./config/config.js')
const express = require('express');
const app = express();
const cors = require('cors')({
    origin: true
});
const todolist = require('./routes/todolist/');
const canvan = require('./routes/canvan/');
const kkilist = require('./routes/kkitodo/');

app.use(cors);
app.use('/todolist', todolist);
app.use('/canvan', canvan);
app.use('/kkitodo', kkilist);

exports.v1 = functions.https.onRequest(app);
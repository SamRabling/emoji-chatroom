const express = require("express");
// var emojis = require('emojis-unicode');
// console.log(emojis[0]);
const app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/static"));

const server = app.listen(5000, function () {
    console.log('listening on 5000');
});

const io = require('socket.io')(server);

var chat = [];

io.on('connection', function (socket) {
    console.log('a user connected');
    io.emit('chat message', chat);
<<<<<<< HEAD
    socket.on('disconnect', function(){
=======
    socket.on('disconnect', function () {
>>>>>>> 4e57774dcba207e9aac350b0f2312d259eb473c4
        console.log('user disconnected');
    });
    socket.on('login', function (users) {
        console.log('username: ' + users);
        io.emit('login', users)
    });
<<<<<<< HEAD
    socket.on('chat message', function(data){
        console.log('message: ' +data.msg);
=======
    socket.on('chat message', function (data) {
        console.log('message: ' + data.msg);
>>>>>>> 4e57774dcba207e9aac350b0f2312d259eb473c4
        chat.push(data);
        io.emit('chat message', chat);
    });
});
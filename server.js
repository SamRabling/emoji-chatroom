const express = require("express");
var emojis = require('emojis-unicode');
console.log(emojis[0]);
const app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/static"));

const server = app.listen(5000, function(){
    console.log('listening on 5000');
});

const io = require('socket.io')(server);

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.on('chat message', function(msg){
        console.log('message: ' +msg);
        io.emit('chat message', msg)
    });
  });


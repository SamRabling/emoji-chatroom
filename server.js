const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public"));
const server = app.listen(5000);
const io = require('socket.io')(server);
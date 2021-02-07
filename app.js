const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: '*',
  },
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes/mainRoute'));

let users = [];
let messages = [];
io.on('connection', socket => {
  socket.emit('message', messages);
  socket.on('chat message', msg => {
    messages.push(msg);
    socket.emit('message', messages);
  });

  socket.broadcast.emit('message', 'User has connected');

  socket.on('disconnect', () => {
    socket.broadcast.emit('message', 'User has left the chat');
  });
});
mongoose
  .connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    server.listen(process.env.PORT || 5000, () => {
      console.log('Conntected to DB and hosted');
    });
  });

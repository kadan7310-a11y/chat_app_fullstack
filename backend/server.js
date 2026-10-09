const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, { 
  cors: { 
    origin: "*" 
  } 
});

io.on('connection', (socket) => {
  console.log('New user connected:', socket.id);

  // Group join karna
  socket.on('joinGroup', (groupName) => {
    socket.join(groupName);
    console.log(`${socket.id} joined ${groupName}`);
  });

  // Message send karna
  socket.on('sendMessage', (data) => {
    io.to(data.group).emit('receiveMessage', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(5000, () => {
  console.log('Backend running on http://localhost:5000');
});
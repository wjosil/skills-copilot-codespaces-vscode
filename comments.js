// Create web server
const express = require('express');
const app = express();

// Create a server
const server = app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Path: .github/comments.js
// Create a WebSocket server
const io = require('socket.io')(server);

// Path: .github/comments.js
// Listen for new connections
io.on('connection', (socket) => {
  console.log('A new user connected');
});

// Path: .github/comments.js
// Listen for new comments
io.on('connection', (socket) => {
  socket.on('comment', (data) => {
    console.log(data);
  });
});

// Path: .github/comments.js
// Emit new comments
io.on('connection', (socket) => {
  socket.on('comment', (data) => {
    io.emit('comment', data);
  });
});

// Path: .github/comments.js
// Listen for new comments
io.on('connection', (socket) => {
  socket.on('comment', (data) => {
    io.emit('comment', data);
    console.log(data);
  });
});

// Path: .github/comments.js
// Serve the client-side code
app.use(express.static('public'));

// Path: .github/comments.js
// Serve the client-side code
app.use(express.static('public'));

// Path: .github/comments.js
// Serve the client-side code
app.use(express.static('public'));

// Path: .github/comments.js
// Serve the client-side code
app.use(express.static('public'));

// Path: .github/comments.js
// Serve the client-side code
app.use(express.static('public'));

// Path: .github/comments.js
// Serve the client-side code
app.use(express.static('public'));

// Path: .github/comments.js
// Serve the client-side code
app.use(express.static('public'));

// Path: .github/comments.js
// Serve the client-side code
app.use(express.static('public'));

// Path: .github/comments.js
// Serve the client-side code
app.use(express.static('public'));

// Path: .github/public/index.html
<!DOCTYPE html>
<html>
  <head>
    <title>Comments</title>
  </head>
  <body>
    <h1>Comments</h1>
    <ul id="comments"></ul>
    <form id="comment-form
const http = require('http');
const io = require('socket.io');

const server = http.createServer();
const socketServer = io(server, {
  cors: {
    origin: '*',
  }
});

socketServer.on('connection', (socket) => {
  console.log(`New connection: ${socket.id}`);

  // Log disconnect events
  socket.on('disconnect', () => {
    console.log(`Disconnected: ${socket.id}`);
  });

  // Log any errors
  socket.on('error', (error) => {
    console.error(`Socket error: ${error}`);
  });
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Socket.IO server is listening on port ${PORT}`);
});
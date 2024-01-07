const io = require('socket.io')(3000, {
  cors: {
    origin: '*',
  }
});

io.on('connection', (socket) => {
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
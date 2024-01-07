const io = require('socket.io')(3000, {
  path: '/socket',
  cors: {
    origin: '*',
  },
  credentials: true
})

io.on('connection', (socket) => {
  console.log(socket.id);
});
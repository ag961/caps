'use strict';

const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  console.log(`Client app connected to core with socket ID: ${socket.id}`)
})

const caps = io.of('/caps');

caps.on('connection', (socket) => {
  console.log(`Client connected to caps with socket ID: ${socket.id}`)
  // join room
  socket.on('join', (room) => {
    console.log(`created as room ${room}`);
    socket.join(room);
  })
  //pickup event
  socket.on('pickup', (payload) => {
    logEvent('pickup', payload);
    caps.emit('pickup', payload);
  })
  // in-transit
  socket.on('in-transit', (payload) => {
    logEvent('in-transit', payload);
  })

  // delivered
  socket.on('delivered', (payload) => {
    logEvent('delivered', payload);
    caps.emit('delivered', payload);
  })
})

function logEvent(event, payload) {
  console.log({
    event: event,
    time: new Date(),
    payload: payload
  })
};

module.exports = { logEvent };
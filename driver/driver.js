'use strict';

const io = require('socket.io-client');

const server = io.connect('http://localhost:3000/caps');

// server.emit('getAll', 'driver');

server.on('pickup', handlePickup);

function handlePickup(payload) {
  server.emit('join', payload.store);
  console.log('driver picked up ', payload.orderID);

  setTimeout(() => {
    server.emit('in-transit', payload);
  }, 2000)

  setTimeout(() =>{
    console.log('driver delivered up ', payload.orderID);
    server.emit('delivered', payload);
  }, 3000)
}



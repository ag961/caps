'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000/caps');

socket.on('pickup', handlePickup);

function handlePickup(payload) {
  console.log('driver picked up ', payload.orderID);
  socket.emit('in-transit', payload);
  console.log('driver delivered up ', payload.orderID);
  socket.emit('delivered', payload);
}

module.exports = { handlePickup }

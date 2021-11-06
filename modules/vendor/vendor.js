'use strict';

// const events = require('../util/event-pool.js');

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000/caps');
socket.on('delivered', handleDelivery);

function handleDelivery(payload) {
  console.log('Thank you, for delivering ', payload.orderID)
}

module.exports = {handleDelivery};
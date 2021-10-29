'use strict';

const events = require('../util/event-pool.js');

events.on('pickup', handlePickup);

function handlePickup(payload) {
  console.log('DRIVER: picked up ', payload.orderID);
  events.emit('in-transit', payload);
  console.log('DRIVER: delivered up ', payload.orderID);
  events.emit('delivered', payload);
};

module.exports = { handlePickup }
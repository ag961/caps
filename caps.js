'use strict';

const events = require('./util/event-pool.js');
require('./modules/vendor.js');

events.on('pickup', (payload) =>logEvent('pickup', payload));

require('./modules/driver');

events.on('in-transit', (payload) => logEvent('in-transit', payload));
events.on('delivered', (payload) => logEvent('delivered', payload));

function logEvent(event, payload) {
  console.log({
    event: event,
    time: new Date(),
    payload: payload
  })   
};

module.exports = { logEvent };

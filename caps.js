'use strict';

// require our events and modules
const events = require('./util/event-pool.js');
require('./modules/vendor.js');

// Event listeners => callback
// events on: pickup, in-transit, delivered
events.on('pickup', (payload) =>logEvent('pickup', payload));

require('./modules/driver');

events.on('in-transit', (payload) => logEvent('in-transit', payload));
events.on('delivered', (payload) => logEvent('delivered', payload));


// callback function
function logEvent(event, payload) {
  console.log({
    event: event,
    time: new Date(),
    payload: payload
  })

    // console log event, time, payload
};
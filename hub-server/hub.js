'use strict';

const io = require('socket.io')(3000);

class Queue {
  constructor(delivery) {
    this.delivery = delivery;
  }
}

io.on('connection', (socket) => {
  console.log(`Client app connected to core with socket ID: ${socket.id}`)
})

const caps = io.of('/caps');
let vendorPackagesQueue = {};

caps.on('connection', (socket) => {
  console.log(`Client connected to caps with socket ID: ${socket.id}`)

  socket.on('join', (room) => {
    socket.join(room);
    console.log(socket.id, 'joined', room, 'room');
  })
 
  socket.on('pickup', (payload) => {
    logEvent('pickup', payload);
    vendorPackagesQueue[payload.orderID] = payload;
    console.log('vendorPackages queue after emitting pickup', vendorPackagesQueue);
    caps.emit('pickup', payload);
  })

  socket.on('in-transit', (payload) => {
    logEvent('in-transit', payload);
    caps.emit('in-transit', payload)
  })

  socket.on('delivered', (payload) => {
    logEvent('delivered', payload);
    caps.to(payload.store).emit('delivered', payload);
    delete vendorPackagesQueue[payload.orderID];
    console.log('vendorPAckagesQueue after delivery', vendorPackagesQueue)
  })

  // socket.on('getAll', (role)=>{
  //   if(role === 'driver'){
  //     if(!JSON.stringify(vendorPackagesQueue) === '{}'){


  //     }
  //   }
  // })
})

function logEvent(event, payload) {
  console.log({
    event: event,
    time: new Date(),
    payload: payload
  })
};

module.exports = { logEvent };
'use strict';

// const events = require('../util/event-pool.js');

const faker = require('faker');

const io = require('socket.io-client');
const server = io.connect('http://localhost:3000/caps');

const storeName = '1-800-flowers';

server.emit('join', storeName)

let counter = 3;


setInterval(() => {

  let delivery = {
    store: storeName,
    orderID: faker.datatype.uuid(),
    customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
    address: `${faker.address.city()}, ${faker.address.stateAbbr()}`
  }   

  server.emit('pickup', delivery);
}, 15000)

server.on('delivered', handleDelivery);

function handleDelivery(payload) {
  console.log('Thank you, for delivering ', payload.orderID)
}

module.exports = { handleDelivery };
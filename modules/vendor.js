'use strict';

const events = require('../util/event-pool.js');
const faker = require('faker');

// delivery variable <- store, orderID, customer, address

if (process.env.NODE_ENV === 'test') {
  let delivery = {
    store: `${faker.company.bsAdjective()} ${faker.company.bsNoun()}`,
    orderID: faker.datatype.uuid(),
    customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
    address: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
  };
  events.emit('pickup', delivery)
} else {
  setInterval(() => {
    let delivery = {
      store: `${faker.company.bsAdjective()} ${faker.company.bsNoun()}`,
      orderID: faker.datatype.uuid(),
      customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
      address: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
    };

    events.emit('pickup', delivery);
  }, 5000);
}

// listen for delivered event => handleDelivery

events.on('delivered', handleDelivery)

function handleDelivery(payload) {
  console.log('VENDOR: Thank you, for delivering ', payload.orderID)
}

module.exports = { handleDelivery }
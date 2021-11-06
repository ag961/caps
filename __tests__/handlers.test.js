'use strict';

// const hub = require('../util/hub.js');
const { logEvent } = require('../util/hub');
const { handlePickup } = require('../modules/driver/driver');
const { handleDelivery } = require('../modules/vendor/vendor');
const faker = require('faker');


let spyConsole;
let delivery;

beforeEach((done) => {
  spyConsole = jest.spyOn(console, 'log').mockImplementation();
  delivery = {
    store: `${faker.company.bsAdjective()} ${faker.company.bsNoun()}`,
    orderID: faker.datatype.uuid(),
    customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
    address: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
  };
  done();
})

afterEach((done) => {
  spyConsole.mockRestore();
  done();
})

describe('handlers', () => {

  test('handlePickup should console.log when picked up', () => {
    handlePickup(delivery)
    expect(spyConsole).toHaveBeenCalledWith('driver picked up ', delivery.orderID);
  })

  test('handlePickup should console.log when delivered', () => {
    handlePickup(delivery);
    expect(spyConsole).toHaveBeenCalledWith('driver delivered up ', delivery.orderID);
  })

  test('handleDelivery should console.log THANK YOU when driver delivered', () => {
    handleDelivery(delivery);
    expect(spyConsole).toHaveBeenCalledWith('Thank you, for delivering ', delivery.orderID);
  })

  test('logEvent should console log three times', () => {
    logEvent('event', delivery);
    expect(spyConsole).toHaveBeenCalled();
  })
})

'use strict';

const events = require('../util/event-pool.js');
const { logEvent } = require('../caps');
const { handlePickup } = require('../modules/driver');
const { handleDelivery } = require('../modules/vendor');
const faker = require('faker');


let spyConsole;
let delivery;

beforeEach(() => {
  spyConsole = jest.spyOn(console, 'log').mockImplementation();
  delivery = {
    store: `${faker.company.bsAdjective()} ${faker.company.bsNoun()}`,
    orderID: faker.datatype.uuid(),
    customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
    address: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
  };
})

afterEach(() => {
  spyConsole.mockRestore();
})

describe('handlers', () => {

  test('handlePickup should console.log when picked up', () => {
    handlePickup(delivery)
    expect(spyConsole).toHaveBeenCalledWith('DRIVER: picked up ', delivery.orderID);
  })

  test('handlePickup should console.log when delivered', () => {
    handlePickup(delivery);
    expect(spyConsole).toHaveBeenCalledWith('DRIVER: delivered up ', delivery.orderID);
  })

  test('handleDelivery should console.log THANK YOU when driver delivered', () => {
    handleDelivery(delivery);
    expect(spyConsole).toHaveBeenCalledWith('VENDOR: Thank you, for delivering ', delivery.orderID);
  })

  test('logEvent should console log three times', () => {
    logEvent('event', delivery);
    expect(spyConsole).toHaveBeenCalled();
  })
})

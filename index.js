'use strict';

const express = require('express');
const cors = require('cors');
const faker = require('faker');
const io = require('socket.io-client');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001;

const socket = io.connect('http://localhost:3000/caps');

let seedDelivery = {
  store: '1-206-flowers',
  orderID: faker.datatype.uuid(),
  customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
  address: `${faker.address.city()}, ${faker.address.stateAbbr()}`
}

app.post('/pickup', (req, res) => {
  if(JSON.stringify(req.body) === '{}'){
    req.body = seedDelivery;
  }
  socket.emit('join', req.body.store);
  socket.emit('pickup', req.body);
  res.status(200).send('order initiated');
})

app.listen(PORT, ()=>{
  console.log(`Server listening on ${PORT}`)
})


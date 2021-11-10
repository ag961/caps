# LAB 11: CAPS

## Description

(Source: Code Fellows 401 JS Lab 13 instructions)

**CAPS Phase 3:** Complete work on a multi-day build of our delivery tracking system, adding queued delivery.

In this phase, we’ll be adding a layer of complexity to our application. Rather than just “fire” events and hope that our vendors and drivers respond to them, we’re going to implement a “queue” system so that nothing gets lost. Every event sent will be logged and held onto by the server until the intended recipient acknowledges that they received the message. At any time, a subscriber can get all of the messages they might have missed.

In this final phase, we’ll be building out the queue itself, getting our vendors subscribed to it, and focusing on just one event - delivered to set the pattern for subscribing to, and working with queues.

- User/developer stories:

  - As a vendor, I want to “subscribe” to “delivered” notifications so that I know when my packages are delivered.
  - As a vendor, I want to “catch up” on any “delivered” notifications that I might have missed so that I can see a complete log.
  - As a driver, I want to “subscribe” to “pickup” notifications so that I know what packages to deliver.
  - As a driver, I want to “catch up” on any “pickup” notifications I may have missed so that I can deliver everything.
  - As a driver, I want a way to “scan” a delivery so that the vendors know when a package has been delivered.

- Developer stories

  - As a developer, I want to create a system of tracking who is subscribing to each event.
  - As a developer, I want to place all inbound messages into a “queue” so that my application knows what events are to be delivered.
  - As a developer, I want to create a system for communicating when events have been delivered and received by subscribers.
  - As a developer, I want to delete messages from the queue after they’ve been received by a subscriber, so that I don’t re-send them.
  - As a developer, I want to create a system for allowing subscribers to retrieve all undelivered messages in their queue.

## Author

Ayrat Gimranov

## Collaborators


## Version

1.1.0

There are two separate vendor files: vendor.js and vendor2.js that represent "acme-widgets" and "1-206-flowers".

The order of running the apps are:

1. hub.js
2. driver.js
3. vendor.js and vendor2.js

Vendors will fire off events every 15 seconds each and place them in the queue, the driver

## Resources

<!-- [Code Fellows 401: JS Lab 12 starter code](https://github.com/codefellows/seattle-javascript-401n19/tree/main/class-12/starter_code) -->

<!-- ## Deployed Sites -->

<!-- Prod branch -- https://ayrat-auth-api-prod.herokuapp.com/
Dev branch -- https://ayrat-auth-api-dev.herokuapp.com/ -->

## UML

<!-- ![lab11](./img/lab12.png) -->

// *****************************************************************************
// api-routes.js
// This module provides a set of RESTful API route definitions for
// displaying data from and saving data to the database.
// *****************************************************************************

// Dependencies
// =============================================================

const express = require('express')
const router = express.Router()

const {Customer, Order, Invoice} = require('../models/');

// Routes
// =============================================================

// Get all customers
router.get('/customers', async function(req, res) {
    Customer.findAll().then(function(dbCustomers) {
        res.json(dbCustomers)
    })
})

// Get all Sales Orders
router.get('/orders', async function(req, res) {
    Order.findAll().then(function(dbOrders) {
        res.json(dbOrders)
    })
})

// Get all invoices
router.get('/invoices', async function(req, res) {
    Invoice.findAll().then(function(dbInvoices) {
        res.json(dbInvoices)
    })
})

// Get a customer
router.get('/customers/:id', function(req, res) {
    console.log({ id: req.params.id })
    Customer.findAll({ where: { id: req.params.id } })
    .then(function(dbCustomers) {
      console.log(dbCustomers)
      res.json(dbCustomers)
    })
})

// Get an order
router.get('/orders/:id', function(req, res) {
    console.log({ id: req.params.id })
    Order.findAll({ where: { id: req.params.id } })
    .then(function(dbOrders) {
      console.log(dbOrders)
      res.json(dbOrders)
    })
})

// Get a customer
router.get('/invoices/:id', function(req, res) {
    console.log({ id: req.params.id })
    Invoice.findAll({ where: { id: req.params.id } })
    .then(function(dbInvoices) {
      console.log(dbInvoices)
      res.json(dbInvoices)
    })
})

router.post('/customers', async function(req, res) {
    const dbCustomer = await Customer.create(req.body)
    res.json(dbCustomer)
})

router.post('/orders', async function(req, res) {
    const dbOrders = await Order.create(req.body)
    res.json(dbOrders)
})

router.post('/invoice', async function(req, res) {
    const dbInvoice = await Invoice.create(req.body)
    res.json(dbInvoice)
})

router.delete('/customers/:id', function(req, res) {
    Customer.destroy({ where: { id: req.params.id } })
    .then(function(dbCustomer) {
      res.json(dbCustomer)
    })
})

router.delete('/orders/:id', function(req, res) {
    Order.destroy({ where: { id: req.params.id } })
    .then(function(dbOrder) {
      res.json(dbOrder)
    })
})

router.delete('/invoices/:id', function(req, res) {
    Invoice.destroy({ where: { id: req.params.id } })
    .then(function(dbInvoice) {
      res.json(dbInvoice)
    })
})

module.exports = router

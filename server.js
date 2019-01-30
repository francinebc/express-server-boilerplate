const express = require('express')
const homeRoute = require('./routes/homeRoute')
const path = require('path')

const server = express()

// Middleware
server.use(express.static(path.join(__dirname, 'public')))
server.use(express.urlencoded({extended: false}))

server.use('/', homeRoute)

module.exports = server
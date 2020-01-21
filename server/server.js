const path = require('path')
const express = require('express')

const routes = require('./db/routes')
const server = express()

server.use(express.json())
server.use('/api/v1/posts', routes)
server.use(express.static(path.join(__dirname, './public')))


module.exports = server

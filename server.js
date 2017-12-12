/**
 * server.js
 *
 * @description :: Loads server configuration
 */
const Koa = require('koa')
const json = require('koa-json')

const routes = require('./routes')

const app = new Koa()
// json
app.use(json())
// routes
app.use(routes.routes(), routes.allowedMethods())

module.exports = app

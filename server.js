/**
 * server.js
 *
 * @description :: Loads server configuration
 */
const Koa = require('koa')
const json = require('koa-json')

const app = new Koa()
// json
app.use(json())

module.exports = app

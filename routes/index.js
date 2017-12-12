/**
 * routes/index.js
 *
 * @description :: defines the app routes
 */
const router = require('koa-router')({ sensitive: true })

// pedido
const pedidoRouter = require('./pedido')
router.use('', pedidoRouter.routes(), pedidoRouter.allowedMethods())

module.exports = router

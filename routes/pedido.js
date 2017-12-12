/**
 * router/api.js
 *
 * @description :: Describe the 'pedidos' api routes
 * @docs        :: TODO
 */
const router = require('koa-router')({ sensitive: true })
const pedidosController = require('../controllers/pedido')

router.prefix('/pedidos')

router.get('/', pedidosController.get)
router.get('/:id', pedidosController.find)

module.exports = router

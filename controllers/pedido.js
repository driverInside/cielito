/**
 * controllers/pedido.js
 *
 * @description :: Describe the 'pedidos' logic
 * @docs        :: TODO
 */
const Pedido = require('../models/pedidos')

module.exports = {
  get: async ctx => {
    const pedidos = await Pedido.getAll()

    if (!pedidos.length) {
      ctx.status = 404
      ctx.body = {
        success: false,
        pedidos: [],
        message: 'Pedidos not found'
      }
      return
    }

    ctx.body = {
      success: true,
      pedidos: pedidos
    }
  },

  find: async ctx => {
    const id = ctx.params.id

    if (!id || id === '') {
      ctx.status = 400
      ctx.body = {
        toxq: false,
        message: 'Bad request. No id'
      }
      return
    }

    const pedido = await Pedido.findById(id)
    if (!pedido) {
      ctx.status = 404
      ctx.body = {
        toxq: false,
        message: 'pedido not found'
      }
      return false
    }
    ctx.body = pedido
  }
}

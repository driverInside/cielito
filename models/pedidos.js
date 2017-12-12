/**
 * models/pedidos.js
 *
 * @description :: defines the pedidos model
 */

const pedidos = [
  { id: 1, descripcion: 'Este es el pedido 1', cantidad: 4},
  { id: 2, descripcion: 'Foo', cantidad: 5},
  { id: 3, descripcion: 'Bar', cantidad: 0},
  { id: 4, descripcion: 'Algo', cantidad: 10}
]

const Pedido = {
  getAll: async () => {
    return pedidos
  },

  findById: async id => {
    for (var i = 0; i < pedidos.length; i++) {
      if (pedidos[i].id == id) {
        return pedidos[i]
      }
    }
    return false
  }
}

module.exports = Pedido

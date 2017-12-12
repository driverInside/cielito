/**
 * test/pedidos.js
 *
 * @description :: Runs pedidos tests
 * @docs        ::
 */
// Dev dependencies
const chai = require('chai')
const faker = require('faker')
const _ = require('underscore')
const chaiHttp = require('chai-http')
const expect = require('chai').expect

chai.use(chaiHttp)

const Pedido = require('../models/pedidos')

const host = 'http://localhost:8000'

// Red, green, refactor

describe('The Pedido\'s model logic', () => {
  it('should Pedido.getAll be a function', done => {
    expect(Pedido.getAll).to.be.a('function')
    done()
  })

  it('should Pedido.getAll return an array', done => {
    Promise.resolve(Pedido.getAll())
    .then(result => {
      expect(result).to.be.a('array')
      done()
    })
  })
})

// 1xx informativos
// 2xx OK
// 3xx Redirects
// 4xx Client error
// 5xx Server error

describe('GET / pedidos', () => {
  it('should return a 404 ', done => {
    let rutaMala = '/'
// para todas las rutas no definadas en los end points
// debe de regresar 404
    chai.request(host)
      .get('/fooBar')
      .end((err, res) => {
        // console.log(res.body)
        expect(res.status).to.equal(404)
        done()
      })
  })

  it('should get a 200', done => {
    chai.request(host)
      .get('/pedidos/')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        done()
      })
  })

  it('should return an array and success = true', done => {
    chai.request(host)
      .get('/pedidos/')
      .end((err, res) => {
        expect(res.status).to.equal(200)

        expect(res.body).have.property('success')
        expect(res.body).have.property('pedidos')
        expect(res.body.success).to.be.a('boolean')
        expect(res.body.success).to.equal(true)
        expect(res.body.pedidos).to.be.a('array')
        done()
      })
  })

  it('should return an array with an element with id', done => {
    chai.request(host)
      .get('/pedidos/')
      .end((err, res) => {
        const sample = res.body.pedidos[getRandomInt(0, res.body.pedidos.length)]

        // console.log(sample)

        expect(res.status).to.equal(200)

        expect(res.body.pedidos).to.be.a('array')

        expect(res.body.pedidos.length).to.be.at.least(1)

        for (var i = 0; i < res.body.pedidos.length; i++) {
          expect(res.body.pedidos[i]).have.property('id')
          expect(res.body.pedidos[i]).have.property('descripcion')
          expect(stringValidator(res.body.pedidos[i].descripcion)).to.equal(true)
        }

        done()
      })
  })
})

describe('GET /:id pedidos', () => {
  it('should Pedidos.findById be a function', done => {
    expect(Pedido.findById).to.be.a('function')
    done()
  })

  it('should return 404. Bad request', done => {
    let id = 5
    chai.request(host)
      .get('/pedidos/' + id)
      .end((err, res) => {
        expect(res.status).to.equal(404)
        expect(res.body).have.property('toxq')
        expect(res.body).have.property('message')
        done()
      })
  })

  it('should return a pedido', done => {
    let id = 4
    chai.request(host)
      .get('/pedidos/' + id)
      .end((err, res) => {
        expect(res.status).to.equal(200)
        expect(res.body).have.property('id')
        expect(res.body).have.property('descripcion')
        expect(res.body).have.property('cantidad')
        expect(res.body.cantidad).to.equal(10)

        done()
      })
  })
})

function stringValidator (string) {
  if (string.length === 0 || string === ' ') {
    return false
  } else if (string[0] === '') {
    return falseres.body.pedidos[i]
  }
  return true
}

function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min // The maximum is exclusive and the minimum is inclusive
}

/**
 * index.js
 *
 * @description :: inits the app
 */
const server = require('./server')
const { port } = require('./config')
// init the app
server.listen(port, () => {
  console.log(`App running in port ${port} ...`)
  console.log(`Cielito app`)
})

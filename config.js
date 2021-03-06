/**
 * config.js
 *
 * @description :: defines the app configuration
 */
const { NODE_ENV, PORT } = process.env
const env = NODE_ENV || 'development'
const port = PORT || 8000

const databaseURI = 'mongodb://localhost/cielito'

module.exports = {
  env,
  port,
  databaseURI
}

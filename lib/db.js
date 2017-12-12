/**
 * lib/db.js
 *
 * @description :: Defines db connection
 */
const mongoose = require('mongoose')
const { databaseURI } = require('../config')

mongoose.Promise = Promise

const db = mongoose.connect(databaseURI)

module.exports = db

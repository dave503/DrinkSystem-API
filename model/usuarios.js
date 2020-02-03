'use strict'

const mongoose = require('mongoose')
const schema = mongoose.Schema

const users = schema({
    nombre: String,
    apellido: String,
    edad: Number
})

module.exports = mongoose.model('users', users)
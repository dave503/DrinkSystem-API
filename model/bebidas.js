'use strict'

const mongoose = require('mongoose')
const schema = mongoose.Schema

const bebidas = schema({
    tipo: String
})

module.exports = mongoose.model('bebidas', bebidas)

'use strict'
const mongoose = require('mongoose')
const schema = mongoose.Schema

const control = schema({
    usuario: String,
    bebida: String,
    fecha: { type: Date, default: Date.now() },
})

module.exports = mongoose.model('control', control)

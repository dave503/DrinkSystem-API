
'use strict'
const mongoose = require('mongoose')
const schema = mongoose.Schema

const control = schema({
    usuario: String,
    bebida: String,
    fecha: { 
        dia: String,
        fecha: Number,
        mes: String,
        year: Number,
        hora: String
     },
})

module.exports = mongoose.model('control', control)

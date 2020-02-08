"use strict";
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const control = schema({
  usuario: JSON,
  bebida: JSON,
  fecha: {
    dia: String,
    fecha: String,
    mes: String,
    year: String,
    hora: String
  }
});

module.exports = mongoose.model("control", control);

'use strict'
var express = require('express');
var api = express.Router();

const controlCtl = require('../controllers/control')

/* GET home page. */
api.get('/', function(req, res, next) {
  res.status(200).send({message: "Todo bien, estamos trabajando!"});
});

api.post('/savebebidas', controlCtl.Guardar)
api.get('/reporte', controlCtl.Mostrar)
api.get('/usuarios', controlCtl.GetUser)
api.get('/bebidas', controlCtl.GetBebidas)
//api.get('/fecha', controlCtl.SetFecha)
module.exports = api;

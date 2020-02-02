var express = require('express');
var api = express.Router();

const controlCtl = require('../controllers/control')

/* GET home page. */
api.get('/', function(req, res, next) {
  res.render('index', { title: 'DrinkSystem' });
});

api.post('/bebidas', controlCtl.Guardar)
api.get('/control', controlCtl.Mostrar)

module.exports = api;

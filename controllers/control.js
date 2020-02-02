'use strict'
const Control = require('../model/Control_bebida')

function Guardar (req, res) {
    console.log('POST /api/bebidas')
    console.log(req.body)
  
    let control = new Control()
    control.usuario = req.body.usuario
    control.bebida = req.body.bebida
  
    control.save((err, ok) => {
      if (err) res.status(500).send({message: `Error al guardar en la base de datos: ${err} `})
  
      res.status(200).send({ control: ok })
    })
  }

  function Mostrar (req, res) {
    
    Control.find({}, (err, ok) => {
      if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
      if (!ok) return res.status(404).send({message: 'No existen registros'})
  
      res.send(200, { ok })
    })
  }

  module.exports={
      Guardar,
      Mostrar
  }
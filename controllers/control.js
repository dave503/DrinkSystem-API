'use strict'
const Control = require('../model/Control_bebida')
const User = require('../model/usuarios')
const Bebida = require('../model/bebidas')

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
  
      res.status(200).send({ ok })
    })
  }

  function GetUser(req, res){
    User.find({},(err, ok)=>{
      if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
      if (!ok) return res.status(404).send({message: 'No existen registros'})
  
      res.status(200).send({ ok })
    })
  }

  function GetBebidas(req, res){
    Bebida.find({},(err, ok)=>{
      if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
      if (!ok) return res.status(404).send({message: 'No existen registros'})
  
      res.status(200).send({ ok })
    })
  }

  module.exports={
      Guardar,
      Mostrar,
      GetBebidas,
      GetUser
  }
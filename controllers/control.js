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
    control.fecha = {
      dia : req.body.dia,
      fecha : req.body.fecha,
      mes : req.body.mes,
      year : req.body.year,
      hora : req.body.hora
    }
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

  function GetUsuarios (req, res) {
    let usuarioId = req.params.usuarioId
  
    User.findById(usuarioId, (err, usuario) => {
      if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
      if (!usuario) return res.status(404).send({message: `El producto no existe`})
  
      res.status(200).send({ usuario })
    })
  }

  function GetBebidas(req, res){
    Bebida.find({},(err, ok)=>{
      if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
      if (!ok) return res.status(404).send({message: 'No existen registros'})
  
      res.status(200).send({ ok })
    })
  }

  /*function SetFecha(req, res){
    var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
    var fecha = new Date()
    res.status(200).send({Dia: diasSemana[fecha.getDay()], Fecha: fecha.getDate(), Mes: meses[fecha.getMonth()], 
      Año: fecha.getFullYear(), Hora: fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds()})
  }*/

  module.exports={
      Guardar,
      Mostrar,
      GetUsuarios,
      //SetFecha,
      GetBebidas,
      GetUser
  }
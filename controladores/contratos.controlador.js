"use strict";
import ClienteModelo from "../modelos/cliente.modelo";
import  conexion  from "../config/conexion";
const  ObjectId = require('mongodb').ObjectId;

class Contrato {
  constructor(contrato) {
   
  }

  async Mostrar(req, res) {
    try {
      const db = await conexion();
      let ress = await db.collection('contratos').find().toArray()
      res.status(200).json({ ress, ok:true });
      
    } catch (e) {
      console.log(e);
      res.status(500).json({
        ok: false,
        mensaje: "Ocurrió un error inesperado al procesar la petición.",
      });
    }
  }

  async Actualizar(req, res) {
    
    try {
      const db = await conexion();
      let ress = ''
     
      if (req.body._id) {
        ress = await db.collection('contratos').findOneAndUpdate({ _id: req.body._id} , {
          $set: req.body
        },
        function(error, info) {
            if (error) {
                res.json({
                    resultado: false,
                    msg: 'No se pudo modificar el cliente',
                    //err
                });
            } else {
                res.json({
                    resultado: true,
                    info: info,
                    msg: 'Actualizado correctamente'
                })
            }
        })
      }else{
        req.body._id = (new ObjectId).toString()
        ress = await db.collection('contratos').insertOne( req.body )
        res.status(200).json({ ress, observacion: 'Contrato Actualizado' });
      }
      
    } catch (e) {
      console.log(e);
      res.status(500).json({
        ok: false,
        mensaje: "Ocurrió un error inesperado al procesar la petición.",
      });
    }
  }
  
 
  async Eliminar(req,res){
    try {
      const db = await conexion();
      let ress = await db.collection('contratos').deleteOne({_id: req.query._id})
      res.status(200).json({ ress, observacion: 'Contrato Eliminado' });
    } catch (error) {
      res.status(500).json({
        ok: false,
        mensaje: "Ocurrió un error inesperado al procesar la petición.",
      });
    }
  }
  
  
}
module.exports = new Contrato(new ClienteModelo());

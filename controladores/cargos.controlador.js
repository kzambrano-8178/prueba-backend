"use strict";
import ClienteModelo from "../modelos/cliente.modelo";
import  conexion  from "../config/conexion";
const  ObjectId = require('mongodb').ObjectId;

class Cargo {
  constructor(cargo) {
    
  }

  async Mostrar(req, res) {
    try {
      const db = await conexion();
      let ress = await db.collection('cargos').find().toArray()
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
        ress = await db.collection('cargos').findOneAndUpdate({ _id: req.body._id} , {
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
        ress = await db.collection('cargos').insertOne( req.body )
        res.status(200).json({ ress, observacion: 'Cargo Actualizado' });
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
      let ress = await db.collection('cargos').deleteOne({_id: req.query._id})
      res.status(200).json({ ress, observacion: 'Cargo Eliminado' });
    } catch (error) {
      res.status(500).json({
        ok: false,
        mensaje: "Ocurrió un error inesperado al procesar la petición.",
      });
    }
  }
  
  
}
module.exports = new Cargo(new ClienteModelo());

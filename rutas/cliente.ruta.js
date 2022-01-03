import express, { Router } from 'express';
const router = Router();
import Seguridad from '../controladores/seguridad.controlador';
import Cliente from '../controladores/cliente.controlador';



//INICIO, CAMBIO DE CONTRASEÑA Y CIERRE DE SESIÓN
router.get('/mostrar',[
    //Seguridad.VerificarToken.bind(Seguridad)
],Cliente.Mostrar.bind(Cliente));

router.post('/actualizar',[
    //Seguridad.VerificarToken.bind(Seguridad)
],Cliente.Actualizar.bind(Cliente));

router.delete('/actualizar',[
    //Seguridad.VerificarToken.bind(Seguridad)
],Cliente.Eliminar.bind(Cliente));



module.exports = router;

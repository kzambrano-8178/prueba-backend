import express, { Router } from 'express';
const router = Router();
import Seguridad from '../controladores/seguridad.controlador';
import Contrato from '../controladores/contratos.controlador';



//INICIO, CAMBIO DE CONTRASEÑA Y CIERRE DE SESIÓN
router.get('/mostrar',[
    //Seguridad.VerificarToken.bind(Seguridad)
],Contrato.Mostrar.bind(Contrato));

router.post('/actualizar',[
    //Seguridad.VerificarToken.bind(Seguridad)
],Contrato.Actualizar.bind(Contrato));

router.delete('/actualizar',[
    //Seguridad.VerificarToken.bind(Seguridad)
],Contrato.Eliminar.bind(Contrato));



module.exports = router;

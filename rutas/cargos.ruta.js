import express, { Router } from 'express';
const router = Router();
import Seguridad from '../controladores/seguridad.controlador';
import Cargos from '../controladores/cargos.controlador';



//INICIO, CAMBIO DE CONTRASEÑA Y CIERRE DE SESIÓN
router.get('/mostrar',[
    //Seguridad.VerificarToken.bind(Seguridad)
],Cargos.Mostrar.bind(Cargos));

router.post('/actualizar',[
    //Seguridad.VerificarToken.bind(Seguridad)
],Cargos.Actualizar.bind(Cargos));

router.delete('/actualizar',[
    //Seguridad.VerificarToken.bind(Seguridad)
],Cargos.Eliminar.bind(Cargos));



module.exports = router;

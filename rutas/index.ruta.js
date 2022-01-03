'use strict';

import { Router } from 'express';


import cliente from './cliente.ruta';
import cargos from './cargos.ruta';
import contratos from './contratos.ruta';
import app from '../server';

const router = Router();



router.use( '/cliente', cliente);
router.use( '/cargos', cargos);
router.use( '/contratos', contratos);


module.exports = router;
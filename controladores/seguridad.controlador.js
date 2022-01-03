import SeguridadModelo from '../modelos/seguridad.modelo';
let jwt = require('jsonwebtoken');

class Seguridad {
    constructor(seguridad) {
        this.seguridad = seguridad
    }
    async VerificarToken(req,res,next) {
        try {
            let token = req.headers['x-access-token'];
            jwt.verify(token, global.llave, async (err, decoded) => {
                if (err) {
                    return res.status(200).json({ok: false,observacion: 'Sin acceso para realizar la petición. Por favor inicie sesión.'});
                }
                // let resultado = await this.seguridad.VerificarAccesoRepresentante({idpersona : decoded.idpersona})
                // if(!resultado.rows.length){
                //     // let token = req.headers['x-access-token'];
                //     // this.MatarToken(token)
                //     return res.status(200).json({ok: false,observacion: 'Acceso denegado. Por favor vuelva a iniciar sesión.'});
                // }
                next();
            });
        } catch (error) {
            console.log(error)
            res.status(500).json({ok: false,observacion: 'Su solicitud no se pudo realizar, verifique su acceso.'});
        }
    }
   
}
module.exports =  new Seguridad(new SeguridadModelo())
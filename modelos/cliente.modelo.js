import { conexion } from "../config/conexion";

class ClienteModelo {
  constructor(datos = {}) {
    ({} = datos);
  }

  Mostrar(datos = {}) {
    //console.log(datos.ruc)
    return conexion.query("SELECT * FROM MostrarClientes($1) AS resultado;", [
      datos.id_empresa,
    ]);
  }

  Actualizar(datos = {}) {
    return conexion.query("SELECT * FROM actualizarCliente($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15) AS resultado;", [
      datos.id_cliente,
      datos.nombre_cliente,
      datos.ced_ruc,
      datos.razon_social,
      datos.provincia,
      datos.ciudad,
      datos.telefono,
      datos.direccion,
      datos.nombre_comercial,
      datos.correo,
      datos.observacion,
      datos.estado,
      datos.tipo_ident,
      datos.accion,
      datos.id_empresa
    ]);
  }
  
}
module.exports = ClienteModelo;

'use strict'

const env = require('./env');
const Pool = require('pg').Pool
const { MongoClient } = require('mongodb');
const dbName = 'prueba';
const url = 'mongodb://localhost:27017';

// export const conexion = new Pool({
//     user: env.username,
//     host: env.host,
//     database: env.database,
//     password: env.password,
//     port: env.port,
//     poll: env.pool,
//     logging: env.logging
// });

const client = new MongoClient(url, {
    useNewUrlParser: true, useUnifiedTopology: true
});
  
module.exports = async () => {
    // Conectamos al servidor
    await client.connect();
  
    return client.db(dbName); // retornamos la conexión con el nombre de la bd a usar
};
const env = {
    database: 'prueba',
    username: 'postgres',
    password: 'psql',
    host: '34.68.235.113',
    port: '5432',
    pool: {
        max: 5,
        min: 0,
        acrequire: 30000,
        idle: 10000
    },
    logging: false
};

const bdmongo = {
    database: 'prueba',
    username: '',
    password: '',
    host: 'localhost',
    port: '',
}

const prod = {
    database: 'prueba',
    username: 'postgres',
    password: 'psql',
    host: '34.68.235.113',
    //host: '34.67.236.116',
    port: '5432',
    pool: {
        max: 5,
        min: 0,
        acrequire: 30000,
        idle: 10000
    },
    logging: false
};

module.exports = env;
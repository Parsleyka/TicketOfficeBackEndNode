const pg = require('pg');

const config = require('./dotenv');

module.exports = new pg.Pool({
    user: config.databaseUser,
    password: config.databasePassword,
    host: config.databaseUrl,
    port: config.databasePort,
    database: config.databaseName
});
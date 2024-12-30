const dotenv = require('dotenv');
const path = require('path');

dotenv.config({path: path.resolve(__dirname, '../.env')});

module.exports = {
    databaseUser: process.env.DATABASE_USER,
    databaseName: process.env.DATABASE_NAME,
    databasePassword: process.env.DATABASE_PASSWORD,
    databasePort: process.env.DATABASE_PORT,
    databaseUrl: process.env.DATABASE_URL,
    serverPort: process.env.SERVER_PORT,
    serverUrl: process.env.SERVER_URL
};
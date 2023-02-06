// const keys = require('../config/keys');
const { Pool } = require('pg');
const pool = new Pool({
    user: process.env.POOL_USER,
    host: process.env.POOL_HOST,
    database: process.env.POOL_DATABASE,
    password: process.env.POOL_PASSWORD,
    port: 5432,
    ssl: true
});

pool.connect()
    .then(() => console.log("Connected successfully"))
    .catch((e) => console.log())


module.exports = pool;
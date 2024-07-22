const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Shop Ease',
    password: 'JaneMwangi',
    port: 5432,
});

module.exports = pool;

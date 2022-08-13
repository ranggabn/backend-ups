var mysql = require('mysql');

const pool = mysql.createPool({
    host: 'remotemysql.com',
    port: '3306',
    user: 'mwoK6cXco9',
    password: 'mPRdaz4fBF',
    database: 'mwoK6cXco9'
});

// ... later
pool.query('select 1 + 1', (err, rows) => { /* */ });
